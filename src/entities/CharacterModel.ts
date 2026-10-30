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

    // 头发：先铺一层包住头顶/两侧/后脑的发壳，再叠刘海、侧发、顶发和绑发。
    const hairMaterial = this.assets.getMaterial(hair, { roughness: 0.9 })
    const hairLightMaterial = this.assets.getMaterial(
      new THREE.Color(hair).lerp(new THREE.Color(0xffffff), 0.16).getHex(),
      { roughness: 0.85 }
    )
    const hairLock = this.assets.getGeometry(
      'char-hair-lock-v5',
      () => new THREE.SphereGeometry(1, 18, 14)
    )
    const addHair = (
      x: number,
      y: number,
      z: number,
      sx: number,
      sy: number,
      sz: number,
      rx = 0,
      ry = 0,
      rz = 0,
      material: THREE.Material = hairMaterial
    ): THREE.Mesh => {
      const mesh = new THREE.Mesh(hairLock, material)
      mesh.position.set(x, y, z)
      mesh.scale.set(sx, sy, sz)
      mesh.rotation.set(rx, ry, rz)
      mesh.castShadow = true
      this.headPivot.add(mesh)
      return mesh
    }

    // 发壳：从额头两侧包到后颈，正面留出脸部开口，侧面不再露头皮。
    const shell = new THREE.Mesh(
      this.assets.getGeometry(
        'char-hair-shell-v5',
        () =>
          new THREE.SphereGeometry(
            0.352,
            32,
            22,
            Math.PI / 2 + 0.94,
            Math.PI * 2 - 1.88,
            0,
            Math.PI * 0.78
          )
      ),
      hairMaterial
    )
    shell.position.set(0, 0.012, -0.012)
    shell.scale.set(1.02, 1.03, 0.98)
    shell.castShadow = true
    this.headPivot.add(shell)

    // 顶发：盖住发壳开口上缘，并压出蓬松的头顶。
    addHair(0, 0.27, -0.03, 0.315, 0.16, 0.3)
    addHair(-0.15, 0.25, 0, 0.16, 0.12, 0.22)
    addHair(0.15, 0.25, 0, 0.16, 0.12, 0.22)
    addHair(0, 0.28, 0.13, 0.24, 0.1, 0.16, -0.18, 0, 0, hairLightMaterial)

    // 刘海：七束扁平发片贴着额头，中间短、两侧长。
    for (let i = -3; i <= 3; i++) {
      const t = Math.abs(i) / 3
      addHair(
        i * 0.075,
        0.22 - t * 0.02,
        0.292 - t * 0.012,
        0.065,
        0.09 + t * 0.01,
        0.028,
        -0.12,
        0,
        -i * 0.05
      )
    }

    // 鬓角：把刘海和侧发连起来。
    for (const side of [-1, 1]) {
      addHair(side * 0.255, 0.16, 0.245, 0.05, 0.12, 0.035, -0.1, 0, side * 0.25)
    }

    // 侧发：从太阳穴垂到下颌，盖住发壳前面边缘。
    for (const side of [-1, 1]) {
      addHair(side * 0.285, 0.09, 0.17, 0.045, 0.14, 0.055, -0.05, 0, side * 0.2)
      addHair(side * 0.305, -0.06, 0.105, 0.055, 0.18, 0.075, 0, 0, side * 0.06)
    }

    // 后脑分层和后颈碎发。
    addHair(-0.14, -0.05, -0.32, 0.06, 0.13, 0.035, 0, 0.25, -0.1)
    addHair(0.14, -0.05, -0.32, 0.06, 0.13, 0.035, 0, -0.25, 0.1)
    addHair(0, -0.27, -0.15, 0.14, 0.08, 0.07)

    // 高马尾：扎在头顶后方，整段垂在发壳外侧。
    addHair(0, 0.24, -0.3, 0.11, 0.08, 0.09)
    addHair(0, 0.1, -0.36, 0.065, 0.13, 0.07)
    addHair(-0.01, -0.03, -0.39, 0.06, 0.12, 0.065)
    addHair(-0.02, -0.15, -0.4, 0.052, 0.11, 0.058)
    addHair(-0.03, -0.25, -0.395, 0.04, 0.09, 0.045)
    addHair(-0.035, -0.33, -0.38, 0.028, 0.06, 0.03)

    // 发绳 + 蝴蝶结，放在马尾根部。
    for (const s of [-1, 1]) {
      const lobe = new THREE.Mesh(
        this.assets.getGeometry('char-hair-tie-lobe-v5', () => new THREE.SphereGeometry(0.05, 10, 8)),
        this.assets.getMaterial(accent, { roughness: 0.65 })
      )
      lobe.position.set(s * 0.06, 0.25, -0.39)
      lobe.scale.set(1.1, 0.8, 0.4)
      lobe.rotation.z = s * 0.2
      this.headPivot.add(lobe)
    }
    const tieKnot = new THREE.Mesh(
      this.assets.getGeometry('char-hair-tie-knot-v5', () => new THREE.SphereGeometry(0.024, 8, 6)),
      this.assets.getMaterial(COLORS.gold)
    )
    tieKnot.position.set(0, 0.25, -0.415)
    this.headPivot.add(tieKnot)

    // 眼睛：压扁并嵌进脸里，避免从侧面看像贴上去的假眼。
    const irisColor = 0x6e4433
    for (const side of [-1, 1]) {
      const white = new THREE.Mesh(
        this.assets.getGeometry('char-eye-white-v3', () => new THREE.SphereGeometry(0.078, 16, 12)),
        this.assets.getMaterial(COLORS.paper, { roughness: 0.35 })
      )
      white.position.set(side * 0.115, 0.005, 0.293)
      white.scale.set(1.0, 1.12, 0.2)
      this.headPivot.add(white)

      const iris = new THREE.Mesh(
        this.assets.getGeometry('char-iris-v3', () => new THREE.SphereGeometry(0.047, 14, 10)),
        this.assets.getMaterial(irisColor, { roughness: 0.2 })
      )
      iris.position.set(side * 0.115, 0.002, 0.304)
      iris.scale.set(1.0, 1.1, 0.18)
      this.headPivot.add(iris)

      const pupil = new THREE.Mesh(
        this.assets.getGeometry('char-pupil-v3', () => new THREE.SphereGeometry(0.026, 12, 10)),
        this.assets.getMaterial(COLORS.ink, { roughness: 0.15 })
      )
      pupil.position.set(side * 0.115, 0.002, 0.31)
      pupil.scale.set(1.0, 1.05, 0.15)
      this.headPivot.add(pupil)

      const shine = new THREE.Mesh(
        this.assets.getGeometry('char-shine-v3', () => new THREE.SphereGeometry(0.014, 8, 6)),
        this.assets.getMaterial(COLORS.paper)
      )
      shine.position.set(side * 0.102, 0.038, 0.314)
      shine.scale.set(1.0, 1.0, 0.35)
      this.headPivot.add(shine)
      const shine2 = new THREE.Mesh(
        this.assets.getGeometry('char-shine-small-v3', () => new THREE.SphereGeometry(0.007, 6, 5)),
        this.assets.getMaterial(COLORS.paper)
      )
      shine2.position.set(side * 0.13, -0.02, 0.315)
      shine2.scale.set(1.0, 1.0, 0.35)
      this.headPivot.add(shine2)

      const blush = new THREE.Mesh(
        this.assets.getGeometry('char-blush-v3', () => new THREE.CircleGeometry(0.04, 14)),
        this.assets.getMaterial(COLORS.pink, { transparent: true, opacity: 0.45, roughness: 0.9 })
      )
      blush.position.set(side * 0.175, -0.06, 0.258)
      blush.rotation.y = side * 0.55
      this.headPivot.add(blush)
    }

    const noseColor = new THREE.Color(skin).multiplyScalar(0.9).getHex()
    const nose = new THREE.Mesh(
      this.assets.getGeometry('char-nose-v2', () => new THREE.SphereGeometry(0.018, 8, 6)),
      this.assets.getMaterial(noseColor, { roughness: 0.85 })
    )
    nose.position.set(0, -0.04, 0.302)
    nose.scale.set(1.0, 0.8, 0.6)
    this.headPivot.add(nose)

    const mouth = new THREE.Mesh(
      this.assets.getGeometry('char-mouth-v2', () => new THREE.TorusGeometry(0.055, 0.011, 6, 14, Math.PI)),
      this.assets.getMaterial(COLORS.pinkDeep)
    )
    mouth.position.set(0, -0.115, 0.298)
    mouth.rotation.z = Math.PI
    this.headPivot.add(mouth)
    const lip = new THREE.Mesh(
      this.assets.getGeometry('char-lip-v2', () => new THREE.SphereGeometry(0.018, 8, 6)),
      this.assets.getMaterial(COLORS.pink)
    )
    lip.position.set(0, -0.138, 0.302)
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
      bow.position.set(-0.21, 0.38, 0.1)
      bow.rotation.set(0.15, -0.35, 0.25)
      this.headPivot.add(bow)
      for (const side of [-1, 1]) {
        const lobe = new THREE.Mesh(
          this.assets.getGeometry('char-bow', () => new THREE.SphereGeometry(0.055, 8, 6)),
          this.assets.getMaterial(accent, { roughness: 0.6 })
        )
        lobe.position.set(side * 0.085, 0, 0)
        lobe.scale.set(1.0, 0.8, 0.45)
        lobe.rotation.z = side * 0.22
        bow.add(lobe)
      }
      const knot = new THREE.Mesh(
        this.assets.getGeometry('char-bow-knot', () => new THREE.SphereGeometry(0.026, 8, 6)),
        this.assets.getMaterial(COLORS.gold)
      )
      bow.add(knot)
    } else if (accessory === 'beret') {
      const hat = new THREE.Group()
      hat.position.set(0.03, 0.37, -0.02)
      hat.rotation.set(0, 0, -0.12)
      this.headPivot.add(hat)
      const beret = new THREE.Mesh(
        this.assets.getGeometry('char-beret', () => new THREE.SphereGeometry(0.28, 18, 12, 0, Math.PI * 2, 0, Math.PI * 0.5)),
        this.assets.getMaterial(accent, { roughness: 0.7 })
      )
      beret.scale.set(1, 0.68, 1)
      hat.add(beret)
      const brim = new THREE.Mesh(
        this.assets.getGeometry('char-beret-brim', () => new THREE.TorusGeometry(0.282, 0.02, 8, 24)),
        this.assets.getMaterial(
          new THREE.Color(accent).multiplyScalar(0.85).getHex(),
          { roughness: 0.75 }
        )
      )
      brim.rotation.x = Math.PI / 2
      hat.add(brim)
      const stem = new THREE.Mesh(
        this.assets.getGeometry('char-beret-stem', () => new THREE.CylinderGeometry(0.018, 0.018, 0.07, 6)),
        this.assets.getMaterial(COLORS.gold)
      )
      stem.position.y = 0.28 * 0.68 + 0.035
      hat.add(stem)
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
        this.assets.getGeometry('char-headband', () => new THREE.TorusGeometry(0.335, 0.025, 6, 20)),
        this.assets.getMaterial(accent, { roughness: 0.7 })
      )
      band.position.y = 0.21
      band.rotation.x = Math.PI / 2
      this.headPivot.add(band)
      const star = new THREE.Mesh(
        this.assets.getGeometry('char-star', () => new THREE.OctahedronGeometry(0.06, 0)),
        this.assets.getMaterial(accent, { emissive: accent, emissiveIntensity: 0.35 })
      )
      star.position.set(0.16, 0.24, 0.33)
      this.headPivot.add(star)
    }
  }


}
