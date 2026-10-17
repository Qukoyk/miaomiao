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
      this.assets.getGeometry('char-head', () => new THREE.SphereGeometry(0.33, 20, 16)),
      this.assets.getMaterial(skin, { roughness: 0.85 })
    )
    head.castShadow = true
    this.headPivot.add(head)

    const hairCap = new THREE.Mesh(
      this.assets.getGeometry(
        'char-hair',
        () => new THREE.SphereGeometry(0.355, 20, 14, 0, Math.PI * 2, 0, Math.PI * 0.58)
      ),
      this.assets.getMaterial(hair, { roughness: 0.9 })
    )
    hairCap.position.y = 0.03
    hairCap.castShadow = true
    this.headPivot.add(hairCap)

    // 刘海
    for (let i = -2; i <= 2; i++) {
      const bang = new THREE.Mesh(
        this.assets.getGeometry('char-bang', () => new THREE.SphereGeometry(0.09, 8, 6)),
        this.assets.getMaterial(hair, { roughness: 0.9 })
      )
      bang.position.set(i * 0.1, 0.16, 0.25)
      bang.scale.set(0.85, 0.7, 0.55)
      this.headPivot.add(bang)
    }

    // 眼睛
    for (const side of [-1, 1]) {
      const white = new THREE.Mesh(
        this.assets.getGeometry('char-eye-white', () => new THREE.SphereGeometry(0.085, 12, 10)),
        this.assets.getMaterial(COLORS.paper, { roughness: 0.4 })
      )
      white.position.set(side * 0.12, 0.02, 0.29)
      white.scale.set(0.9, 1.1, 0.55)
      this.headPivot.add(white)

      const pupil = new THREE.Mesh(
        this.assets.getGeometry('char-pupil', () => new THREE.SphereGeometry(0.047, 10, 8)),
        this.assets.getMaterial(COLORS.ink, { roughness: 0.25 })
      )
      pupil.position.set(side * 0.12, 0.02, 0.35)
      this.headPivot.add(pupil)

      const shine = new THREE.Mesh(
        this.assets.getGeometry('char-shine', () => new THREE.SphereGeometry(0.017, 6, 5)),
        this.assets.getMaterial(COLORS.paper)
      )
      shine.position.set(side * 0.105, 0.05, 0.385)
      this.headPivot.add(shine)

      const blush = new THREE.Mesh(
        this.assets.getGeometry('char-blush', () => new THREE.CircleGeometry(0.055, 12)),
        this.assets.getMaterial(COLORS.pink, { transparent: true, opacity: 0.55, roughness: 0.9 })
      )
      blush.position.set(side * 0.21, -0.08, 0.3)
      this.headPivot.add(blush)
    }

    // 微笑
    const smile = new THREE.Mesh(
      this.assets.getGeometry(
        'char-smile',
        () => new THREE.TorusGeometry(0.065, 0.014, 6, 12, Math.PI)
      ),
      this.assets.getMaterial(COLORS.pinkDeep)
    )
    smile.position.set(0, -0.11, 0.33)
    smile.rotation.z = Math.PI
    this.headPivot.add(smile)

    // 后发/小马尾
    const ponytail = new THREE.Mesh(
      this.assets.getGeometry('char-ponytail', () => new THREE.SphereGeometry(0.17, 12, 10)),
      this.assets.getMaterial(hair, { roughness: 0.9 })
    )
    ponytail.position.set(0, 0.02, -0.33)
    ponytail.scale.set(0.85, 1.25, 0.7)
    this.headPivot.add(ponytail)

    const ribbon = new THREE.Mesh(
      this.assets.getGeometry('char-hair-ribbon', () => new THREE.SphereGeometry(0.09, 8, 6)),
      this.assets.getMaterial(accent, { roughness: 0.65 })
    )
    ribbon.position.set(0, 0.06, -0.42)
    ribbon.scale.set(1.5, 0.85, 0.5)
    this.headPivot.add(ribbon)

    const ribbonKnot = new THREE.Mesh(
      this.assets.getGeometry('char-hair-ribbon-knot', () => new THREE.SphereGeometry(0.035, 6, 5)),
      this.assets.getMaterial(COLORS.gold)
    )
    ribbonKnot.position.set(0, 0.06, -0.46)
    this.headPivot.add(ribbonKnot)
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
      bow.position.set(0.24, 0.18, 0.06)
      bow.rotation.z = -0.25
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
      beret.position.set(0.04, 0.3, -0.02)
      beret.rotation.z = -0.16
      beret.scale.set(1, 0.5, 1)
      this.headPivot.add(beret)
      const stem = new THREE.Mesh(
        this.assets.getGeometry('char-beret-stem', () => new THREE.CylinderGeometry(0.018, 0.018, 0.07, 6)),
        this.assets.getMaterial(COLORS.gold)
      )
      stem.position.set(0.04, 0.44, -0.02)
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
      band.position.y = 0.13
      band.rotation.x = Math.PI / 2
      this.headPivot.add(band)
      const star = new THREE.Mesh(
        this.assets.getGeometry('char-star', () => new THREE.OctahedronGeometry(0.09, 0)),
        this.assets.getMaterial(accent, { emissive: accent, emissiveIntensity: 0.35 })
      )
      star.position.set(0.28, 0.22, 0.05)
      this.headPivot.add(star)
    }
  }


}
