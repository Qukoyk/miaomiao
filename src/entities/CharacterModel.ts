import * as THREE from 'three'
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js'
import type { SharedAssets } from '../core/Disposal'
import { COLORS, GHOST_PALETTE, HIDER_PALETTES } from '../config/theme'
import { damp } from '../utils/math'

export type HiderPalette = (typeof HIDER_PALETTES)[number]

export type AnimState =
  | 'idle'
  | 'walk'
  | 'run'
  | 'crouch'
  | 'jail'
  | 'rescue'
  | 'lunge'
  | 'hit'
  | 'eliminated'

/**
 * 程序化角色模型。
 * 结构：group（世界位置）→ model（下蹲/缩小）→ hips（躯干、头、手臂）+ 腿。
 */
export class CharacterModel {
  readonly group = new THREE.Group()
  readonly model = new THREE.Group()
  readonly hips = new THREE.Group()
  readonly headPivot = new THREE.Group()
  readonly armLeft = new THREE.Group()
  readonly armRight = new THREE.Group()
  readonly legLeft = new THREE.Group()
  readonly legRight = new THREE.Group()
  readonly statusAnchor = new THREE.Object3D()

  private readonly assets: SharedAssets
  private readonly isGhost: boolean
  private shadowMaterial!: THREE.MeshBasicMaterial
  private shadow!: THREE.Mesh
  private crouching = false
  private eliminatedProgress = 0
  private baseHipsY = 0.78
  private readonly mergedGeometries: THREE.BufferGeometry[] = []

  constructor(assets: SharedAssets, palette: HiderPalette, isGhost: boolean) {
    this.assets = assets
    this.isGhost = isGhost

    this.group.add(this.model)
    this.model.add(this.hips)
    this.hips.position.y = this.baseHipsY
    this.buildShadow()

    const shirt = isGhost ? GHOST_PALETTE.dress : palette.shirt
    const accent = isGhost ? GHOST_PALETTE.dressLight : palette.accent
    const skin = isGhost ? GHOST_PALETTE.skin : 0xffe4c4
    const hair = isGhost ? GHOST_PALETTE.hair : palette.hair

    this.buildLegs(skin, isGhost)
    this.buildTorso(shirt, accent)
    this.buildHead(skin, hair, accent)
    this.buildArms(skin, shirt)
    this.buildAccessory(palette.accessory, accent, isGhost)


    this.statusAnchor.position.set(0, 2.38, 0)
    this.group.add(this.statusAnchor)
    this.mergeAnimatedGroups()
  }

  setCrouch(active: boolean): void {
    this.crouching = active
  }

  setEliminated(progress: number): void {
    this.eliminatedProgress = Math.min(1, Math.max(0, progress))
    const scale = Math.max(0.001, 1 - this.eliminatedProgress)
    this.model.scale.setScalar(scale)
    this.shadow.visible = this.eliminatedProgress < 0.6
    if (this.eliminatedProgress >= 1) this.group.visible = false
  }

  get isEliminated(): boolean {
    return this.eliminatedProgress >= 1
  }

  animate(state: AnimState, elapsed: number, dt: number): void {
    if (this.isEliminated) return

    const target = {
      hipsX: 0,
      hipsY: this.baseHipsY,
      headX: 0,
      headY: 0,
      armLX: 0,
      armRX: 0,
      armLZ: this.isGhost ? 0.25 : 0.08,
      armRZ: this.isGhost ? -0.25 : -0.08,
      legLX: 0,
      legRX: 0,
      modelY: 0
    }

    if (state === 'idle') {
      const breath = Math.sin(elapsed * 2.1)
      target.hipsY = this.baseHipsY + breath * 0.012
      target.headY = Math.sin(elapsed * 1.3) * 0.04
      target.armLX = Math.sin(elapsed * 1.7) * 0.05
      target.armRX = Math.cos(elapsed * 1.6) * 0.05
    } else if (state === 'walk' || state === 'run') {
      const speed = state === 'run' ? 12 : 8
      const amplitude = state === 'run' ? 0.75 : 0.48
      const cycle = Math.sin(elapsed * speed)
      target.hipsX = state === 'run' ? 0.1 : 0.04
      target.hipsY = this.baseHipsY + Math.abs(cycle) * (state === 'run' ? 0.045 : 0.025)
      target.armLX = cycle * amplitude
      target.armRX = -cycle * amplitude
      target.legLX = -cycle * (state === 'run' ? 0.85 : 0.55)
      target.legRX = cycle * (state === 'run' ? 0.85 : 0.55)
      target.headY = Math.sin(elapsed * speed * 0.5) * 0.03
    } else if (state === 'crouch') {
      target.modelY = -0.24
      target.hipsX = 0.18
      target.legLX = 0.55
      target.legRX = -0.35
      target.armLX = -0.4
      target.armRX = -0.4
      target.headX = -0.08
    } else if (state === 'jail') {
      target.modelY = -0.18
      target.hipsX = -0.12
      target.legLX = -1.1
      target.legRX = -1.1
      target.armLX = -0.2
      target.armRX = -0.2
      target.headX = 0.14
      target.headY = Math.sin(elapsed * 1.1) * 0.06
    } else if (state === 'rescue') {
      target.modelY = -0.14
      target.hipsX = 0.26
      target.armLX = -1.25
      target.armRX = -1.25
      target.legLX = 0.3
      target.legRX = -0.2
      target.headX = -0.1
    } else if (state === 'lunge') {
      target.modelY = -0.08
      target.hipsX = 0.34
      target.armLX = 0.9
      target.armRX = 0.9
      target.legLX = -0.35
      target.legRX = 0.35
      target.headX = -0.12
    } else if (state === 'hit') {
      target.hipsX = -0.3
      target.headX = 0.25
      target.armLX = -0.4
      target.armRX = -0.4
      target.legLX = 0.2
      target.legRX = -0.2
    }

    if (this.crouching && (state === 'idle' || state === 'walk')) {
      target.modelY = Math.min(target.modelY, -0.22)
      target.hipsX = 0.18
      target.legLX = 0.55
      target.legRX = -0.35
      target.headX = -0.06
    }

    const lambda = 12
    this.hips.rotation.x = damp(this.hips.rotation.x, target.hipsX, lambda, dt)
    this.hips.position.y = damp(this.hips.position.y, target.hipsY, lambda, dt)
    this.headPivot.rotation.x = damp(this.headPivot.rotation.x, target.headX, lambda, dt)
    this.headPivot.rotation.y = damp(this.headPivot.rotation.y, target.headY, lambda, dt)
    this.armLeft.rotation.x = damp(this.armLeft.rotation.x, target.armLX, lambda, dt)
    this.armRight.rotation.x = damp(this.armRight.rotation.x, target.armRX, lambda, dt)
    this.armLeft.rotation.z = damp(this.armLeft.rotation.z, target.armLZ, lambda, dt)
    this.armRight.rotation.z = damp(this.armRight.rotation.z, target.armRZ, lambda, dt)
    this.legLeft.rotation.x = damp(this.legLeft.rotation.x, target.legLX, lambda, dt)
    this.legRight.rotation.x = damp(this.legRight.rotation.x, target.legRX, lambda, dt)
    this.model.position.y = damp(this.model.position.y, target.modelY, lambda, dt)

  }

  dispose(): void {
    this.group.removeFromParent()
    this.shadowMaterial.dispose()
    for (const geometry of this.mergedGeometries) geometry.dispose()
    this.mergedGeometries.length = 0
  }

  /** 把每个动画关节内部的静态网格按材质合并，显著减少角色 draw call。 */
  private mergeAnimatedGroups(): void {
    for (const group of [
      this.hips,
      this.headPivot,
      this.armLeft,
      this.armRight,
      this.legLeft,
      this.legRight
    ]) {
      this.mergeDirectMeshes(group)
    }
  }

  private mergeDirectMeshes(group: THREE.Group): void {
    const buckets = new Map<
      string,
      {
        material: THREE.Material
        cast: boolean
        receive: boolean
        geometries: THREE.BufferGeometry[]
        meshes: THREE.Mesh[]
      }
    >()

    for (const child of group.children) {
      if (!(child instanceof THREE.Mesh)) continue
      if (child instanceof THREE.InstancedMesh) continue
      if (Array.isArray(child.material)) continue
      if (child.children.length > 0) continue
      child.updateMatrix()
      const signature = `${child.geometry.index ? 'i' : 'n'}:${Object.keys(child.geometry.attributes).sort().join(',')}`
      const key = `${child.material.uuid}:${child.castShadow ? 1 : 0}:${child.receiveShadow ? 1 : 0}:${signature}`
      const clone = child.geometry.clone()
      clone.applyMatrix4(child.matrix)
      const bucket = buckets.get(key)
      if (bucket) {
        bucket.geometries.push(clone)
        bucket.meshes.push(child)
      } else {
        buckets.set(key, {
          material: child.material,
          cast: child.castShadow,
          receive: child.receiveShadow,
          geometries: [clone],
          meshes: [child]
        })
      }
    }

    for (const bucket of buckets.values()) {
      if (bucket.geometries.length < 2) {
        bucket.geometries[0]?.dispose()
        continue
      }
      const merged = mergeGeometries(bucket.geometries, false) as THREE.BufferGeometry | null
      if (!merged) {
        for (const geometry of bucket.geometries) geometry.dispose()
        continue
      }
      merged.computeBoundingSphere()
      const mesh = new THREE.Mesh(merged, bucket.material)
      mesh.castShadow = bucket.cast
      mesh.receiveShadow = bucket.receive
      group.add(mesh)
      this.mergedGeometries.push(merged)
      for (const original of bucket.meshes) original.removeFromParent()
      for (const geometry of bucket.geometries) geometry.dispose()
    }
  }

  private buildShadow(): void {
    const geometry = this.assets.getGeometry('character-shadow', () => new THREE.CircleGeometry(0.42, 20))
    this.shadowMaterial = new THREE.MeshBasicMaterial({
      color: 0x1a1028,
      transparent: true,
      opacity: 0.28,
      depthWrite: false
    })
    this.shadow = new THREE.Mesh(geometry, this.shadowMaterial)
    this.shadow.rotation.x = -Math.PI / 2
    this.shadow.position.y = 0.02
    this.shadow.scale.set(1.25, 0.85, 1)
    this.group.add(this.shadow)
  }

  private buildLegs(skin: number, isGhost: boolean): void {
    const legColor = isGhost ? skin : 0xfff3e4
    const shoeColor = COLORS.woodDark
    for (const [group, side] of [
      [this.legLeft, -1],
      [this.legRight, 1]
    ] as const) {
      group.position.set(side * 0.13, 0.66, 0)
      this.model.add(group)

      const leg = new THREE.Mesh(
        this.assets.getGeometry(
          'char-leg',
          () => new THREE.CapsuleGeometry(0.07, 0.32, 4, 8)
        ),
        this.assets.getMaterial(legColor)
      )
      leg.position.y = -0.27
      leg.castShadow = true
      group.add(leg)

      const shoe = new THREE.Mesh(
        this.assets.getGeometry('char-shoe', () => new THREE.BoxGeometry(0.15, 0.09, 0.23)),
        this.assets.getMaterial(shoeColor, { roughness: 0.5 })
      )
      shoe.position.set(0, -0.51, 0.04)
      shoe.castShadow = true
      group.add(shoe)
    }
  }

  private buildTorso(shirt: number, accent: number): void {
    const torso = new THREE.Mesh(
      this.assets.getGeometry(
        'char-torso',
        () => new THREE.CapsuleGeometry(0.21, 0.28, 5, 10)
      ),
      this.assets.getMaterial(shirt, { roughness: 0.78 })
    )
    torso.position.y = 0.18
    torso.castShadow = true
    this.hips.add(torso)

    const skirt = new THREE.Mesh(
      this.assets.getGeometry(
        'char-skirt',
        () => new THREE.CylinderGeometry(0.2, 0.34, 0.34, 14)
      ),
      this.assets.getMaterial(accent, { roughness: 0.8 })
    )
    skirt.position.y = -0.18
    skirt.castShadow = true
    this.hips.add(skirt)

    const collar = new THREE.Mesh(
      this.assets.getGeometry('char-collar', () => new THREE.TorusGeometry(0.18, 0.035, 6, 16)),
      this.assets.getMaterial(COLORS.cream, { roughness: 0.7 })
    )
    collar.position.y = 0.39
    collar.rotation.x = Math.PI / 2
    this.hips.add(collar)

    for (let i = 0; i < 3; i++) {
      const button = new THREE.Mesh(
        this.assets.getGeometry('char-button', () => new THREE.SphereGeometry(0.025, 6, 5)),
        this.assets.getMaterial(COLORS.gold)
      )
      button.position.set(0, 0.22 - i * 0.13, 0.21)
      this.hips.add(button)
    }
  }

  private buildHead(skin: number, hair: number, accent: number): void {
    this.headPivot.position.y = 0.66
    this.hips.add(this.headPivot)

    const head = new THREE.Mesh(
      this.assets.getGeometry('char-head-v2', () => new THREE.SphereGeometry(0.33, 24, 18)),
      this.assets.getMaterial(skin, { roughness: 0.85 })
    )
    head.scale.set(1.0, 1.02, 0.95)
    head.castShadow = true
    this.headPivot.add(head)

    for (const side of [-1, 1]) {
      const ear = new THREE.Mesh(
        this.assets.getGeometry('char-ear-v2', () => new THREE.SphereGeometry(0.06, 10, 8)),
        this.assets.getMaterial(skin, { roughness: 0.85 })
      )
      ear.position.set(side * 0.305, 0.0, 0.01)
      ear.scale.set(0.65, 1.0, 0.55)
      this.headPivot.add(ear)
    }

    // 分层头发：后脑勺、头顶、侧发、刘海、高马尾/绑发、发饰分开构建。
    const hairMaterial = this.assets.getMaterial(hair, { roughness: 0.9 })
    const addHair = (
      key: string,
      radius: number,
      x: number,
      y: number,
      z: number,
      sx: number,
      sy: number,
      sz: number,
      rx = 0,
      ry = 0,
      rz = 0
    ): THREE.Mesh => {
      const mesh = new THREE.Mesh(
        this.assets.getGeometry(`char-${key}-v4`, () => new THREE.SphereGeometry(radius, 16, 12)),
        hairMaterial
      )
      mesh.position.set(x, y, z)
      mesh.scale.set(sx, sy, sz)
      mesh.rotation.set(rx, ry, rz)
      this.headPivot.add(mesh)
      return mesh
    }

    // 后脑勺 + 后颈发量
    addHair('hair-back', 0.29, 0, -0.03, -0.15, 0.95, 1.15, 0.6)
    addHair('hair-nape', 0.18, 0, -0.2, -0.11, 1.0, 0.75, 0.55)

    // 头顶体积：三块交叠，做出侧分和蓬松感
    addHair('hair-crown-main', 0.27, 0.0, 0.25, -0.03, 1.12, 0.5, 1.0)
    addHair('hair-crown-left', 0.18, -0.15, 0.23, 0.02, 1.0, 0.6, 0.9)
    addHair('hair-crown-right', 0.17, 0.15, 0.22, 0.015, 1.0, 0.6, 0.9)

    // 刘海：六缕侧分 + 两侧长刘海
    for (let i = -3; i <= 3; i++) {
      if (i === 0) continue
      addHair(
        `hair-bang-${i}`,
        0.09,
        i * 0.07 + 0.015,
        0.18 + Math.abs(i) * 0.005,
        0.265 - Math.abs(i) * 0.005,
        0.8,
        0.62 + Math.abs(i) * 0.04,
        0.4,
        0,
        0,
        -i * 0.08
      )
    }
    addHair('hair-fringe-left', 0.1, -0.19, 0.18, 0.27, 1.35, 0.55, 0.4, 0, 0, 0.3)
    addHair('hair-fringe-right', 0.07, 0.2, 0.17, 0.265, 0.9, 0.5, 0.38, 0, 0, -0.2)

    // 侧发：从太阳穴垂到下颌
    for (const side of [-1, 1]) {
      addHair(`hair-side-${side}`, 0.08, side * 0.3, -0.02, 0.0, 0.45, 1.6, 0.5, 0, 0, side * 0.1)
      addHair(`hair-side-layer-${side}`, 0.06, side * 0.25, 0.1, 0.12, 0.5, 0.9, 0.45, 0, 0, side * 0.2)
    }

    // 高马尾：从头顶后方垂下
    addHair('hair-pony-1', 0.09, 0, 0.24, -0.24, 0.7, 1.2, 0.7)
    addHair('hair-pony-2', 0.1, 0, 0.16, -0.3, 0.7, 1.2, 0.7)
    addHair('hair-pony-3', 0.085, 0, 0.06, -0.34, 0.7, 1.2, 0.7)
    addHair('hair-pony-4', 0.06, 0, -0.02, -0.36, 0.7, 1.2, 0.7)

    // 绑发：发绳 + 小蝴蝶结
    const tie = new THREE.Mesh(
      this.assets.getGeometry('char-hair-tie-v4', () => new THREE.TorusGeometry(0.075, 0.02, 8, 18)),
      this.assets.getMaterial(accent, { roughness: 0.7 })
    )
    tie.position.set(0, 0.26, -0.24)
    tie.rotation.x = Math.PI / 2
    this.headPivot.add(tie)
    for (const s of [-1, 1]) {
      const lobe = new THREE.Mesh(
        this.assets.getGeometry('char-hair-tie-lobe-v4', () => new THREE.SphereGeometry(0.07, 10, 8)),
        this.assets.getMaterial(accent, { roughness: 0.65 })
      )
      lobe.position.set(s * 0.06, 0.27, -0.27)
      lobe.scale.set(1.2, 0.8, 0.45)
      this.headPivot.add(lobe)
    }
    const tieKnot = new THREE.Mesh(
      this.assets.getGeometry('char-hair-tie-knot-v4', () => new THREE.SphereGeometry(0.03, 8, 6)),
      this.assets.getMaterial(COLORS.gold)
    )
    tieKnot.position.set(0, 0.27, -0.3)
    this.headPivot.add(tieKnot)

    // 发丝高光
    const hairLight = new THREE.Color(hair).lerp(new THREE.Color(0xffffff), 0.2).getHex()
    const highlightMaterial = this.assets.getMaterial(hairLight, { roughness: 0.85 })
    const highlights: Array<[number, number, number, number, number, number]> = [
      [-0.16, 0.29, 0.08, 0.05, 0.14, -0.4],
      [0.02, 0.32, 0.02, 0.04, 0.16, -0.1],
      [0.17, 0.285, 0.05, 0.045, 0.12, 0.35]
    ]
    for (const [x, y, z, sx, sy, rz] of highlights) {
      const streak = new THREE.Mesh(
        this.assets.getGeometry('char-hair-streak-v4', () => new THREE.SphereGeometry(1, 8, 6)),
        highlightMaterial
      )
      streak.position.set(x, y, z)
      streak.scale.set(sx, sy, 0.025)
      streak.rotation.z = rz
      this.headPivot.add(streak)
    }

    // 眼睛：更完整的眼白、虹膜、瞳孔与高光
    const irisColor = new THREE.Color(hair).lerp(new THREE.Color(0xffffff), 0.26).getHex()
    for (const side of [-1, 1]) {
      const white = new THREE.Mesh(
        this.assets.getGeometry('char-eye-white-v2', () => new THREE.SphereGeometry(0.085, 16, 12)),
        this.assets.getMaterial(COLORS.paper, { roughness: 0.35 })
      )
      white.position.set(side * 0.115, 0.015, 0.292)
      white.scale.set(1.0, 1.15, 0.45)
      this.headPivot.add(white)

      const iris = new THREE.Mesh(
        this.assets.getGeometry('char-iris-v2', () => new THREE.SphereGeometry(0.046, 14, 10)),
        this.assets.getMaterial(irisColor, { roughness: 0.2 })
      )
      iris.position.set(side * 0.115, 0.012, 0.326)
      iris.scale.set(1.0, 1.12, 0.35)
      this.headPivot.add(iris)

      const pupil = new THREE.Mesh(
        this.assets.getGeometry('char-pupil-v2', () => new THREE.SphereGeometry(0.023, 12, 10)),
        this.assets.getMaterial(COLORS.ink, { roughness: 0.15 })
      )
      pupil.position.set(side * 0.115, 0.012, 0.345)
      pupil.scale.set(1.0, 1.1, 0.3)
      this.headPivot.add(pupil)

      const shine = new THREE.Mesh(
        this.assets.getGeometry('char-shine-v2', () => new THREE.SphereGeometry(0.016, 8, 6)),
        this.assets.getMaterial(COLORS.paper)
      )
      shine.position.set(side * 0.1, 0.05, 0.36)
      this.headPivot.add(shine)
      const shine2 = new THREE.Mesh(
        this.assets.getGeometry('char-shine-small-v2', () => new THREE.SphereGeometry(0.008, 6, 5)),
        this.assets.getMaterial(COLORS.paper)
      )
      shine2.position.set(side * 0.135, -0.012, 0.36)
      this.headPivot.add(shine2)

      const blush = new THREE.Mesh(
        this.assets.getGeometry('char-blush-v2', () => new THREE.CircleGeometry(0.05, 14)),
        this.assets.getMaterial(COLORS.pink, { transparent: true, opacity: 0.52, roughness: 0.9 })
      )
      blush.position.set(side * 0.2, -0.075, 0.29)
      this.headPivot.add(blush)
    }

    const noseColor = new THREE.Color(skin).multiplyScalar(0.9).getHex()
    const nose = new THREE.Mesh(
      this.assets.getGeometry('char-nose-v2', () => new THREE.SphereGeometry(0.018, 8, 6)),
      this.assets.getMaterial(noseColor, { roughness: 0.85 })
    )
    nose.position.set(0, -0.04, 0.33)
    nose.scale.set(1.0, 0.8, 0.6)
    this.headPivot.add(nose)

    const mouth = new THREE.Mesh(
      this.assets.getGeometry('char-mouth-v2', () => new THREE.TorusGeometry(0.06, 0.012, 6, 14, Math.PI)),
      this.assets.getMaterial(COLORS.pinkDeep)
    )
    mouth.position.set(0, -0.115, 0.326)
    mouth.rotation.z = Math.PI
    this.headPivot.add(mouth)
    const lip = new THREE.Mesh(
      this.assets.getGeometry('char-lip-v2', () => new THREE.SphereGeometry(0.02, 8, 6)),
      this.assets.getMaterial(COLORS.pink)
    )
    lip.position.set(0, -0.14, 0.332)
    lip.scale.set(1.2, 0.35, 0.5)
    this.headPivot.add(lip)
  }

  private buildArms(skin: number, shirt: number): void {
    for (const [group, side] of [
      [this.armLeft, -1],
      [this.armRight, 1]
    ] as const) {
      group.position.set(side * 0.31, 0.38, 0)
      this.hips.add(group)

      const sleeve = new THREE.Mesh(
        this.assets.getGeometry('char-sleeve', () => new THREE.CapsuleGeometry(0.085, 0.12, 4, 8)),
        this.assets.getMaterial(shirt, { roughness: 0.8 })
      )
      sleeve.position.y = -0.04
      sleeve.castShadow = true
      group.add(sleeve)

      const arm = new THREE.Mesh(
        this.assets.getGeometry('char-arm', () => new THREE.CapsuleGeometry(0.065, 0.2, 4, 8)),
        this.assets.getMaterial(skin, { roughness: 0.85 })
      )
      arm.position.y = -0.2
      arm.castShadow = true
      group.add(arm)

      const hand = new THREE.Mesh(
        this.assets.getGeometry('char-hand', () => new THREE.SphereGeometry(0.075, 10, 8)),
        this.assets.getMaterial(skin, { roughness: 0.85 })
      )
      hand.position.y = -0.35
      group.add(hand)
    }
  }

  private buildAccessory(
    accessory: HiderPalette['accessory'],
    accent: number,
    isGhost: boolean
  ): void {
    if (isGhost) return

    if (accessory === 'bow') {
      const bow = new THREE.Group()
      bow.position.set(0.27, 0.22, 0.04)
      bow.rotation.z = -0.2
      this.headPivot.add(bow)
      for (const side of [-1, 1]) {
        const lobe = new THREE.Mesh(
          this.assets.getGeometry('char-bow', () => new THREE.SphereGeometry(0.08, 8, 6)),
          this.assets.getMaterial(accent, { roughness: 0.6 })
        )
        lobe.position.set(side * 0.07, 0, 0)
        lobe.scale.set(1.2, 0.8, 0.5)
        bow.add(lobe)
      }
      const knot = new THREE.Mesh(
        this.assets.getGeometry('char-bow-knot', () => new THREE.SphereGeometry(0.04, 8, 6)),
        this.assets.getMaterial(COLORS.gold)
      )
      bow.add(knot)
    } else if (accessory === 'beret') {
      const beret = new THREE.Mesh(
        this.assets.getGeometry('char-beret', () => new THREE.SphereGeometry(0.3, 16, 10, 0, Math.PI * 2, 0, Math.PI * 0.42)),
        this.assets.getMaterial(accent, { roughness: 0.7 })
      )
      beret.position.set(0.04, 0.37, -0.02)
      beret.rotation.z = -0.16
      beret.scale.set(1, 0.5, 1)
      this.headPivot.add(beret)
      const stem = new THREE.Mesh(
        this.assets.getGeometry('char-beret-stem', () => new THREE.CylinderGeometry(0.018, 0.018, 0.07, 6)),
        this.assets.getMaterial(COLORS.gold)
      )
      stem.position.set(0.04, 0.53, -0.02)
      this.headPivot.add(stem)
    } else if (accessory === 'scarf') {
      const scarf = new THREE.Mesh(
        this.assets.getGeometry('char-scarf', () => new THREE.TorusGeometry(0.2, 0.055, 7, 18)),
        this.assets.getMaterial(accent, { roughness: 0.85 })
      )
      scarf.position.y = 0.39
      scarf.rotation.x = Math.PI / 2
      this.hips.add(scarf)
      const tail = new THREE.Mesh(
        this.assets.getGeometry('char-scarf-tail', () => new THREE.BoxGeometry(0.12, 0.38, 0.05)),
        this.assets.getMaterial(accent, { roughness: 0.85 })
      )
      tail.position.set(0.16, 0.2, 0.2)
      tail.rotation.z = -0.2
      this.hips.add(tail)
    } else if (accessory === 'backpack') {
      const pack = new THREE.Mesh(
        this.assets.getGeometry('char-backpack', () => new THREE.BoxGeometry(0.36, 0.42, 0.18)),
        this.assets.getMaterial(accent, { roughness: 0.8 })
      )
      pack.position.set(0, 0.16, -0.27)
      this.hips.add(pack)
      for (const side of [-1, 1]) {
        const strap = new THREE.Mesh(
          this.assets.getGeometry('char-strap', () => new THREE.BoxGeometry(0.045, 0.4, 0.03)),
          this.assets.getMaterial(COLORS.cream, { roughness: 0.8 })
        )
        strap.position.set(side * 0.14, 0.23, -0.18)
        this.hips.add(strap)
      }
    } else if (accessory === 'headband') {
      const band = new THREE.Mesh(
        this.assets.getGeometry('char-headband', () => new THREE.TorusGeometry(0.34, 0.03, 6, 20)),
        this.assets.getMaterial(accent, { roughness: 0.7 })
      )
      band.position.y = 0.17
      band.rotation.x = Math.PI / 2
      this.headPivot.add(band)
      const star = new THREE.Mesh(
        this.assets.getGeometry('char-star', () => new THREE.OctahedronGeometry(0.09, 0)),
        this.assets.getMaterial(accent, { emissive: accent, emissiveIntensity: 0.35 })
      )
      star.position.set(0.28, 0.26, 0.05)
      this.headPivot.add(star)
    }
  }


}
