import * as THREE from 'three'
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js'
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js'
import type { MaterialOptions, SharedAssets } from '../core/Disposal'
import { COLORS, GHOST_PALETTE, HIDER_PALETTES } from '../config/theme'
import { clamp, damp } from '../utils/math'

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

export interface CharacterMotion {
  speed: number
  moving: boolean
  turnRate: number
}

/**
 * 程序化角色模型。
 * 关节：pelvis → spine → chest → neck → head；肩/肘/腕；髋/膝/踝。
 * 直接挂在关节上的静态网格会按材质合并；头发、裙摆、配饰保留独立组做二次运动。
 */
export class CharacterModel {
  readonly group = new THREE.Group()
  readonly model = new THREE.Group()

  readonly hips = new THREE.Group()
  readonly spine = new THREE.Group()
  readonly chest = new THREE.Group()
  readonly neck = new THREE.Group()
  readonly headPivot = new THREE.Group()

  readonly armLeft = new THREE.Group()
  readonly armRight = new THREE.Group()
  readonly elbowLeft = new THREE.Group()
  readonly elbowRight = new THREE.Group()
  readonly wristLeft = new THREE.Group()
  readonly wristRight = new THREE.Group()

  readonly thighLeft = new THREE.Group()
  readonly thighRight = new THREE.Group()
  readonly kneeLeft = new THREE.Group()
  readonly kneeRight = new THREE.Group()
  readonly ankleLeft = new THREE.Group()
  readonly ankleRight = new THREE.Group()

  readonly skirt = new THREE.Group()
  readonly ponytail = new THREE.Group()
  readonly eyeGroup = new THREE.Group()
  readonly accessory = new THREE.Group()
  readonly scarfTail = new THREE.Group()
  readonly backpack = new THREE.Group()
  readonly statusAnchor = new THREE.Object3D()

  private readonly assets: SharedAssets
  private readonly isGhost: boolean
  private readonly skin: number
  private readonly hair: number
  private readonly hairLight: number
  private readonly shirt: number
  private readonly accent: number
  private readonly shoes: number
  private readonly socks: number
  private readonly iris: number

  private shadowMaterial!: THREE.MeshBasicMaterial
  private shadow!: THREE.Mesh
  private crouching = false
  private eliminatedProgress = 0
  private readonly baseHipsY = 0.78
  private readonly mergedGeometries: THREE.BufferGeometry[] = []

  private blinkTimer = 2.4
  private blinkRemaining = 0
  private readonly pose = {
    hipX: 0,
    hipY: 0.78,
    hipZ: 0,
    spineX: 0,
    spineY: 0,
    spineZ: 0,
    chestX: 0,
    chestY: 0,
    chestZ: 0,
    neckX: 0,
    neckY: 0,
    headX: 0,
    headY: 0,
    headZ: 0,
    armLX: 0,
    armLY: 0,
    armLZ: 0.08,
    armRX: 0,
    armRY: 0,
    armRZ: -0.08,
    elbowLX: 0.16,
    elbowRX: 0.16,
    wristLX: 0,
    wristRX: 0,
    thighLX: 0,
    thighRX: 0,
    thighLZ: 0.03,
    thighRZ: -0.03,
    kneeLX: 0.05,
    kneeRX: 0.05,
    ankleLX: 0,
    ankleRX: 0,
    skirtX: 0,
    skirtZ: 0,
    skirtFlare: 1,
    ponytailX: 0,
    ponytailZ: 0,
    accessoryX: 0,
    accessoryZ: 0,
    scarfX: 0,
    scarfZ: 0,
    backpackX: 0,
    backpackZ: 0
  }

  constructor(assets: SharedAssets, palette: HiderPalette, isGhost: boolean) {
    this.assets = assets
    this.isGhost = isGhost
    this.skin = isGhost ? GHOST_PALETTE.skin : 0xffe2c8
    this.hair = isGhost ? GHOST_PALETTE.hair : palette.hair
    this.hairLight = isGhost ? 0x7a5a4a : this.lighten(palette.hair, 0.22)
    this.shirt = isGhost ? GHOST_PALETTE.dress : palette.shirt
    this.accent = isGhost ? GHOST_PALETTE.dressLight : palette.accent
    this.shoes = isGhost ? 0x9a5f70 : COLORS.woodDark
    this.socks = isGhost ? 0xffe7ee : COLORS.paper
    this.iris = isGhost ? 0x6e4c8e : this.lighten(palette.hair, 0.2)

    this.group.add(this.model)
    this.buildHierarchy()
    this.buildShadow()
    this.buildBody()
    this.buildHead()
    this.buildArms()
    this.buildLegs()
    this.buildSkirt()
    this.buildPonytail()
    if (!isGhost) this.buildAccessory(palette.accessory)
    this.mergeAll()
    this.statusAnchor.position.set(0, 2.42, 0)
    this.group.add(this.statusAnchor)
  }

  get isEliminated(): boolean {
    return this.eliminatedProgress >= 1
  }

  setCrouch(active: boolean): void {
    this.crouching = active
  }

  setEliminated(progress: number): void {
    this.eliminatedProgress = clamp(progress, 0, 1)
    const scale = Math.max(0.001, 1 - this.eliminatedProgress)
    this.model.scale.setScalar(scale)
    this.shadow.visible = this.eliminatedProgress < 0.6
    if (this.eliminatedProgress >= 1) this.group.visible = false
  }

  animate(
    state: AnimState,
    elapsed: number,
    dt: number,
    motion: CharacterMotion = { speed: 0, moving: false, turnRate: 0 }
  ): void {
    if (this.isEliminated) return
    const p = this.pose
    const base = this.baseHipsY
    const speed = Math.max(0, motion.speed)
    const turn = clamp(motion.turnRate, -4, 4)
    const run = state === 'run'

    p.hipX = 0
    p.hipY = base
    p.hipZ = 0
    p.spineX = 0
    p.spineY = 0
    p.spineZ = 0
    p.chestX = 0
    p.chestY = 0
    p.chestZ = 0
    p.neckX = 0
    p.neckY = 0
    p.headX = 0
    p.headY = 0
    p.headZ = 0
    p.armLX = 0
    p.armLY = 0
    p.armLZ = 0.08
    p.armRX = 0
    p.armRY = 0
    p.armRZ = -0.08
    p.elbowLX = 0.24
    p.elbowRX = 0.24
    p.wristLX = 0
    p.wristRX = 0
    p.thighLX = 0
    p.thighRX = 0
    p.thighLZ = 0.03
    p.thighRZ = -0.03
    p.kneeLX = 0.05
    p.kneeRX = 0.05
    p.ankleLX = 0
    p.ankleRX = 0
    p.skirtX = 0
    p.skirtZ = 0
    p.skirtFlare = 1
    p.ponytailX = 0
    p.ponytailZ = 0
    p.accessoryX = 0
    p.accessoryZ = 0
    p.scarfX = 0
    p.scarfZ = 0
    p.backpackX = 0
    p.backpackZ = 0

    if (state === 'walk' || state === 'run') {
      const phase = elapsed * (run ? 11.5 : 7.2)
      const s = Math.sin(phase)
      const stride = (run ? 0.8 : 0.52) * (0.55 + clamp(speed / (run ? 6.8 : 4.2), 0, 1) * 0.45)
      const armSwing = run ? 0.72 : 0.42

      p.hipY = base + Math.abs(Math.sin(phase * 2)) * (run ? 0.045 : 0.022)
      p.hipZ = s * (run ? 0.06 : 0.03) + turn * 0.012
      p.spineX = (run ? 0.15 : 0.05) + speed * 0.004
      p.spineY = -s * (run ? 0.1 : 0.06)
      p.chestX = run ? 0.04 : 0.015
      p.chestY = s * (run ? 0.14 : 0.08)
      p.chestZ = -turn * 0.012
      p.headX = -p.spineX * 0.45
      p.headY = s * 0.035 + clamp(turn * 0.08, -0.28, 0.28)
      p.thighLX = -s * stride
      p.thighRX = s * stride
      p.kneeLX = 0.06 + Math.max(0, -s) * (run ? 1.0 : 0.65)
      p.kneeRX = 0.06 + Math.max(0, s) * (run ? 1.0 : 0.65)
      p.ankleLX = s * 0.16
      p.ankleRX = -s * 0.16
      p.armLX = s * armSwing
      p.armRX = -s * armSwing
      p.armLZ = 0.1 + Math.abs(s) * 0.03
      p.armRZ = -0.1 - Math.abs(s) * 0.03
      p.elbowLX = 0.14 + Math.max(0, -s) * (run ? 0.6 : 0.28)
      p.elbowRX = 0.14 + Math.max(0, s) * (run ? 0.6 : 0.28)
      p.skirtX = -p.spineX * 0.25 + Math.sin(phase * 2) * 0.02
      p.skirtZ = -s * (run ? 0.05 : 0.025)
      p.skirtFlare = 1 + (run ? 0.12 : 0.05)
      p.ponytailX = -0.04 - speed * 0.012 + Math.sin(phase - 0.6) * 0.035
      p.ponytailZ = -turn * 0.035 + Math.cos(phase * 0.5) * 0.02
      p.accessoryX = Math.sin(phase - 0.5) * 0.035
      p.accessoryZ = -turn * 0.03
      p.scarfX = speed * 0.02 + Math.sin(phase - 0.8) * 0.04
      p.scarfZ = -turn * 0.04
      p.backpackX = Math.sin(phase * 2 + 0.4) * 0.025
      p.backpackZ = -turn * 0.02
    } else if (state === 'idle') {
      const breath = Math.sin(elapsed * 2.1)
      const sway = Math.sin(elapsed * 0.7)
      p.hipY = base + breath * 0.008
      p.hipX = sway * 0.012
      p.hipZ = sway * 0.012
      p.spineX = 0.018 + breath * 0.006
      p.spineZ = -sway * 0.012
      p.chestX = -breath * 0.008
      p.chestZ = sway * 0.01
      p.neckY = Math.sin(elapsed * 0.45) * 0.04
      p.headX = Math.sin(elapsed * 1.1) * 0.018
      p.headY = Math.sin(elapsed * 0.42) * 0.1 + clamp(turn * 0.09, -0.3, 0.3)
      p.headZ = sway * 0.012
      p.armLX = -0.04 + breath * 0.035 + sway * 0.02
      p.armRX = -0.04 + breath * 0.035 - sway * 0.02
      p.armLZ = 0.09 + Math.abs(sway) * 0.02
      p.armRZ = -0.09 - Math.abs(sway) * 0.02
      p.elbowLX = 0.24 + breath * 0.02
      p.elbowRX = 0.24 - breath * 0.02
      p.thighLZ = 0.03 + sway * 0.01
      p.thighRZ = -0.03 + sway * 0.01
      p.skirtX = breath * 0.012
      p.skirtZ = sway * 0.015
      p.ponytailX = Math.sin(elapsed * 1.3) * 0.03
      p.ponytailZ = sway * 0.03
      p.accessoryX = Math.sin(elapsed * 1.4) * 0.025
      p.accessoryZ = sway * 0.02
      p.scarfX = Math.sin(elapsed * 1.1) * 0.025
      p.backpackX = breath * 0.01
    } else if (state === 'crouch') {
      p.hipY = base - 0.2 + Math.sin(elapsed * 2) * 0.006
      p.hipX = 0.12
      p.spineX = 0.26
      p.chestX = 0.08
      p.neckX = -0.08
      p.headX = -0.02
      p.headY = Math.sin(elapsed * 0.8) * 0.05
      p.thighLX = -0.95
      p.thighRX = -0.95
      p.kneeLX = 1.25
      p.kneeRX = 1.25
      p.ankleLX = -0.35
      p.ankleRX = -0.35
      p.armLX = -0.25
      p.armRX = -0.25
      p.elbowLX = 0.75
      p.elbowRX = 0.75
      p.skirtX = 0.2
      p.ponytailX = 0.06
      p.ponytailZ = Math.sin(elapsed * 1.4) * 0.025
      p.accessoryX = 0.05
    } else if (state === 'jail') {
      p.hipY = base - 0.34 + Math.sin(elapsed * 1.2) * 0.005
      p.hipX = -0.12
      p.spineX = -0.06
      p.chestX = -0.1
      p.headX = 0.16
      p.headY = Math.sin(elapsed * 0.9) * 0.08
      p.thighLX = -1.4
      p.thighRX = -1.4
      p.kneeLX = 0.65
      p.kneeRX = 0.65
      p.ankleLX = 0.2
      p.ankleRX = 0.2
      p.armLX = 0.15
      p.armRX = 0.15
      p.elbowLX = 0.6
      p.elbowRX = 0.6
      p.skirtX = -0.1
      p.ponytailX = 0.04
      p.ponytailZ = Math.sin(elapsed * 1.1) * 0.03
      p.accessoryX = 0.02
    } else if (state === 'rescue') {
      p.hipY = base - 0.24 + Math.sin(elapsed * 2.2) * 0.005
      p.hipX = 0.18
      p.spineX = 0.34
      p.chestX = 0.08
      p.headX = 0.06
      p.thighLX = -0.82
      p.thighRX = -0.82
      p.kneeLX = 1.45
      p.kneeRX = 1.45
      p.ankleLX = -0.35
      p.ankleRX = -0.35
      p.armLX = -1.08
      p.armRX = -1.08
      p.elbowLX = 0.45
      p.elbowRX = 0.45
      p.armLZ = 0.2
      p.armRZ = -0.2
      p.skirtX = 0.22
      p.ponytailX = 0.08
      p.ponytailZ = Math.sin(elapsed * 2.4) * 0.03
      p.accessoryX = 0.06
    } else if (state === 'lunge') {
      p.hipY = base - 0.06
      p.hipX = 0.3
      p.spineX = 0.32
      p.chestX = 0.12
      p.headX = -0.12
      p.thighLX = -0.3
      p.thighRX = 0.35
      p.kneeLX = 0.45
      p.kneeRX = 0.35
      p.armLX = 0.85
      p.armRX = 0.85
      p.elbowLX = 0.2
      p.elbowRX = 0.2
      p.armLZ = 0.2
      p.armRZ = -0.2
      p.skirtX = 0.18
      p.skirtFlare = 1.12
      p.ponytailX = 0.12
      p.accessoryX = 0.1
    } else if (state === 'hit') {
      p.hipX = -0.16
      p.spineX = -0.28
      p.chestX = -0.18
      p.headX = 0.28
      p.headY = clamp(turn * 0.1, -0.2, 0.2)
      p.armLX = -0.45
      p.armRX = -0.45
      p.elbowLX = 0.55
      p.elbowRX = 0.55
      p.thighLX = 0.18
      p.thighRX = -0.18
      p.kneeLX = 0.25
      p.kneeRX = 0.25
      p.skirtX = -0.12
      p.ponytailX = -0.08
      p.accessoryX = -0.08
    }

    if (this.crouching && (state === 'idle' || state === 'walk' || state === 'run')) {
      p.hipY -= 0.18
      p.spineX += 0.2
      p.thighLX -= 0.75
      p.thighRX -= 0.75
      p.kneeLX += 1.0
      p.kneeRX += 1.0
      p.ankleLX -= 0.3
      p.ankleRX -= 0.3
      p.headX -= 0.04
    }

    const lambda = state === 'walk' || state === 'run' ? 17 : 11
    this.dampEuler(this.hips, p.hipX, 0, p.hipZ, lambda, dt)
    this.hips.position.y = damp(this.hips.position.y, p.hipY, lambda, dt)
    this.dampEuler(this.spine, p.spineX, p.spineY, p.spineZ, lambda, dt)
    this.dampEuler(this.chest, p.chestX, p.chestY, p.chestZ, lambda, dt)
    this.dampEuler(this.neck, p.neckX, p.neckY, 0, lambda, dt)
    this.dampEuler(this.headPivot, p.headX, p.headY, p.headZ, lambda, dt)
    this.dampEuler(this.armLeft, p.armLX, p.armLY, p.armLZ, lambda, dt)
    this.dampEuler(this.armRight, p.armRX, p.armRY, p.armRZ, lambda, dt)
    this.dampEuler(this.elbowLeft, p.elbowLX, 0, 0, lambda, dt)
    this.dampEuler(this.elbowRight, p.elbowRX, 0, 0, lambda, dt)
    this.dampEuler(this.wristLeft, p.wristLX, 0, 0, lambda, dt)
    this.dampEuler(this.wristRight, p.wristRX, 0, 0, lambda, dt)
    this.dampEuler(this.thighLeft, p.thighLX, 0, p.thighLZ, lambda, dt)
    this.dampEuler(this.thighRight, p.thighRX, 0, p.thighRZ, lambda, dt)
    this.dampEuler(this.kneeLeft, p.kneeLX, 0, 0, lambda, dt)
    this.dampEuler(this.kneeRight, p.kneeRX, 0, 0, lambda, dt)
    this.dampEuler(this.ankleLeft, p.ankleLX, 0, 0, lambda, dt)
    this.dampEuler(this.ankleRight, p.ankleRX, 0, 0, lambda, dt)

    this.dampEuler(this.skirt, p.skirtX, 0, p.skirtZ, 7, dt)
    this.skirt.scale.x = damp(this.skirt.scale.x, p.skirtFlare, 6, dt)
    this.skirt.scale.z = damp(this.skirt.scale.z, p.skirtFlare * 0.92, 6, dt)
    this.dampEuler(this.ponytail, p.ponytailX, 0, p.ponytailZ, 6, dt)
    this.dampEuler(this.accessory, p.accessoryX, 0, p.accessoryZ, 6, dt)
    this.dampEuler(this.scarfTail, p.scarfX, 0, p.scarfZ, 6, dt)
    this.dampEuler(this.backpack, p.backpackX, 0, p.backpackZ, 7, dt)

    this.updateBlink(dt)
  }

  dispose(): void {
    this.group.removeFromParent()
    this.shadowMaterial.dispose()
    for (const geometry of this.mergedGeometries) geometry.dispose()
    this.mergedGeometries.length = 0
  }

  // ── 层级与基础材质 ────────────────────────────────────────
  private buildHierarchy(): void {
    this.model.add(this.hips)
    this.hips.position.y = this.baseHipsY
    this.hips.add(this.spine)
    this.spine.position.y = 0.12
    this.spine.add(this.chest)
    this.chest.position.y = 0.15
    this.chest.add(this.neck)
    this.neck.position.y = 0.2
    this.neck.add(this.headPivot)
    this.headPivot.position.y = 0.1

    this.chest.add(this.armLeft, this.armRight)
    this.armLeft.position.set(-0.28, 0.17, 0)
    this.armRight.position.set(0.28, 0.17, 0)
    this.armLeft.add(this.elbowLeft)
    this.armRight.add(this.elbowRight)
    this.elbowLeft.position.y = -0.26
    this.elbowRight.position.y = -0.26
    this.elbowLeft.add(this.wristLeft)
    this.elbowRight.add(this.wristRight)
    this.wristLeft.position.y = -0.24
    this.wristRight.position.y = -0.24

    this.model.add(this.thighLeft, this.thighRight)
    this.thighLeft.position.set(-0.13, 0.66, 0)
    this.thighRight.position.set(0.13, 0.66, 0)
    this.thighLeft.add(this.kneeLeft)
    this.thighRight.add(this.kneeRight)
    this.kneeLeft.position.y = -0.3
    this.kneeRight.position.y = -0.3
    this.kneeLeft.add(this.ankleLeft)
    this.kneeRight.add(this.ankleRight)
    this.ankleLeft.position.y = -0.27
    this.ankleRight.position.y = -0.27

    this.hips.add(this.skirt)
    this.skirt.position.y = -0.06
    this.headPivot.add(this.eyeGroup, this.ponytail, this.accessory)
    this.chest.add(this.scarfTail, this.backpack)
    this.backpack.position.set(0, 0.08, -0.24)
  }

  private buildShadow(): void {
    const texture = this.assets.getCanvasTexture('character-shadow', 128, 128, (ctx, width, height) => {
      const gradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width / 2)
      gradient.addColorStop(0, 'rgba(20,12,40,0.55)')
      gradient.addColorStop(0.55, 'rgba(20,12,40,0.22)')
      gradient.addColorStop(1, 'rgba(20,12,40,0)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)
    })
    const geometry = this.assets.getGeometry('character-shadow-plane', () => new THREE.PlaneGeometry(1.1, 0.8))
    this.shadowMaterial = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      depthWrite: false
    })
    this.shadow = new THREE.Mesh(geometry, this.shadowMaterial)
    this.shadow.rotation.x = -Math.PI / 2
    this.shadow.position.y = 0.02
    this.group.add(this.shadow)
  }

  private mat(color: number, options: MaterialOptions = {}): THREE.MeshStandardMaterial {
    return this.assets.getMaterial(color, options)
  }

  private basic(color: number, opacity = 1): THREE.MeshBasicMaterial {
    return this.assets.getBasicMaterial(color, { transparent: opacity < 1, opacity })
  }

  private roundBox(
    w: number,
    h: number,
    d: number,
    color: number,
    options: { radius?: number; material?: MaterialOptions; cast?: boolean } = {}
  ): THREE.Mesh {
    const radius = options.radius ?? Math.min(0.06, Math.min(w, h, d) * 0.18)
    const key = `char-rbox:${w}:${h}:${d}:${radius}`
    const geometry = this.assets.getGeometry(key, () => new RoundedBoxGeometry(w, h, d, 3, radius))
    const mesh = new THREE.Mesh(geometry, this.mat(color, options.material))
    mesh.castShadow = options.cast ?? true
    return mesh
  }

  private flatBox(
    w: number,
    h: number,
    d: number,
    color: number,
    options: { material?: MaterialOptions; cast?: boolean } = {}
  ): THREE.Mesh {
    const key = `char-box:${w}:${h}:${d}`
    const geometry = this.assets.getGeometry(key, () => new THREE.BoxGeometry(w, h, d))
    const mesh = new THREE.Mesh(geometry, this.mat(color, options.material))
    mesh.castShadow = options.cast ?? false
    return mesh
  }

  private sphere(
    r: number,
    color: number,
    options: { segments?: number; material?: MaterialOptions; cast?: boolean; scale?: [number, number, number] } = {}
  ): THREE.Mesh {
    const segments = options.segments ?? 20
    const key = `char-sphere:${r}:${segments}`
    const geometry = this.assets.getGeometry(
      key,
      () => new THREE.SphereGeometry(r, segments, Math.max(12, Math.floor(segments * 0.75)))
    )
    const mesh = new THREE.Mesh(geometry, this.mat(color, options.material))
    mesh.castShadow = options.cast ?? false
    if (options.scale) mesh.scale.set(...options.scale)
    return mesh
  }

  private capsule(
    radius: number,
    length: number,
    color: number,
    options: { material?: MaterialOptions; cast?: boolean } = {}
  ): THREE.Mesh {
    const key = `char-capsule:${radius}:${length}`
    const geometry = this.assets.getGeometry(
      key,
      () => new THREE.CapsuleGeometry(radius, length, 6, 12)
    )
    const mesh = new THREE.Mesh(geometry, this.mat(color, options.material))
    mesh.castShadow = options.cast ?? true
    return mesh
  }

  private cylinder(
    radiusTop: number,
    radiusBottom: number,
    height: number,
    color: number,
    options: { segments?: number; material?: MaterialOptions; cast?: boolean } = {}
  ): THREE.Mesh {
    const segments = options.segments ?? 16
    const key = `char-cyl:${radiusTop}:${radiusBottom}:${height}:${segments}`
    const geometry = this.assets.getGeometry(
      key,
      () => new THREE.CylinderGeometry(radiusTop, radiusBottom, height, segments)
    )
    const mesh = new THREE.Mesh(geometry, this.mat(color, options.material))
    mesh.castShadow = options.cast ?? true
    return mesh
  }

  private torus(
    radius: number,
    tube: number,
    color: number,
    options: { radialSegments?: number; tubularSegments?: number; arc?: number; material?: MaterialOptions } = {}
  ): THREE.Mesh {
    const key = `char-torus:${radius}:${tube}:${options.radialSegments ?? 8}:${options.tubularSegments ?? 28}:${options.arc ?? Math.PI * 2}`
    const geometry = this.assets.getGeometry(
      key,
      () => new THREE.TorusGeometry(
        radius,
        tube,
        options.radialSegments ?? 8,
        options.tubularSegments ?? 28,
        options.arc ?? Math.PI * 2
      )
    )
    const mesh = new THREE.Mesh(geometry, this.mat(color, options.material))
    mesh.castShadow = true
    return mesh
  }

  private lathe(
    points: Array<[number, number]>,
    color: number,
    segments = 28,
    material?: MaterialOptions
  ): THREE.Mesh {
    const key = `char-lathe:${points.map(([x, y]) => `${x},${y}`).join('|')}:${segments}`
    const geometry = this.assets.getGeometry(key, () => {
      const vectors = points.map(([x, y]) => new THREE.Vector2(x, y))
      return new THREE.LatheGeometry(vectors, segments)
    })
    const mesh = new THREE.Mesh(geometry, this.mat(color, material))
    mesh.castShadow = true
    return mesh
  }

  private place(
    parent: THREE.Object3D,
    mesh: THREE.Object3D,
    x = 0,
    y = 0,
    z = 0,
    rx = 0,
    ry = 0,
    rz = 0
  ): THREE.Object3D {
    mesh.position.set(x, y, z)
    mesh.rotation.set(rx, ry, rz)
    parent.add(mesh)
    return mesh
  }

  // ── 身体 ────────────────────────────────────────────────
  private buildBody(): void {
    this.place(this.hips, this.roundBox(0.42, 0.28, 0.3, this.shirt, { radius: 0.07 }), 0, 0.02, 0)
    this.place(this.hips, this.torus(0.2, 0.035, COLORS.gold, { tubularSegments: 24, material: { metalness: 0.25, roughness: 0.45 } }), 0, 0.14, 0, Math.PI / 2)
    this.place(this.hips, this.torus(0.15, 0.02, this.accent, { tubularSegments: 22 }), 0, -0.02, 0.16, Math.PI / 2)

    this.place(this.spine, this.roundBox(0.36, 0.24, 0.26, this.shirt, { radius: 0.06 }), 0, 0.08, 0)
    this.place(this.spine, this.flatBox(0.32, 0.05, 0.02, this.accent), 0, 0.16, 0.135)

    this.place(this.chest, this.roundBox(0.44, 0.32, 0.3, this.shirt, { radius: 0.07 }), 0, 0.08, 0)
    this.place(this.chest, this.roundBox(0.4, 0.1, 0.31, this.accent, { radius: 0.04 }), 0, 0.22, 0)
    this.place(this.chest, this.torus(0.14, 0.028, COLORS.cream, { tubularSegments: 24 }), 0, 0.24, 0, Math.PI / 2)
    for (let i = 0; i < 3; i++) {
      this.place(this.chest, this.sphere(0.025, COLORS.gold, { segments: 8 }), 0, 0.15 - i * 0.075, 0.16)
    }
    this.place(this.chest, this.flatBox(0.3, 0.06, 0.02, COLORS.gold), 0, -0.02, 0.15)
    for (const s of [-1, 1]) {
      this.place(
        this.chest,
        this.sphere(0.055, this.accent, { segments: 10, scale: [1.25, 0.8, 0.45] }),
        s * 0.055,
        0.18,
        0.165
      )
    }
    this.place(this.chest, this.sphere(0.028, COLORS.gold, { segments: 8 }), 0, 0.18, 0.175)
    this.place(this.neck, this.cylinder(0.075, 0.09, 0.14, this.skin, { segments: 12 }), 0, 0.04, 0)
  }

  private buildHead(): void {
    this.headPivot.position.y = 0.1
    const head = this.sphere(0.31, this.skin, {
      segments: 28,
      cast: true,
      scale: [1.0, 1.05, 0.94]
    })
    this.place(this.headPivot, head, 0, 0.02, 0)
    for (const side of [-1, 1]) {
      this.place(this.headPivot, this.sphere(0.075, this.skin, { segments: 12, scale: [0.7, 1, 0.55] }), side * 0.3, 0.02, 0)
    }

    const hairCap = new THREE.Mesh(
      this.assets.getGeometry(
        'char-hair-cap',
        () => new THREE.SphereGeometry(0.335, 28, 18, 0, Math.PI * 2, 0, Math.PI * 0.62)
      ),
      this.mat(this.hair, { roughness: 0.9 })
    )
    hairCap.position.y = 0.04
    hairCap.scale.set(1.02, 1.04, 0.98)
    hairCap.castShadow = true
    this.headPivot.add(hairCap)

    // 头发高光
    const highlight = new THREE.Mesh(
      this.assets.getGeometry('char-hair-highlight', () => new THREE.TorusGeometry(0.2, 0.011, 6, 20, Math.PI * 0.9)),
      this.mat(this.hairLight, { roughness: 0.85 })
    )
    highlight.position.set(0.02, 0.2, -0.04)
    highlight.rotation.set(-0.4, 0, -0.35)
    highlight.castShadow = false
    this.headPivot.add(highlight)

    // 刘海
    for (let i = -3; i <= 3; i++) {
      const bang = this.sphere(0.085 - Math.abs(i) * 0.006, this.hair, {
        segments: 12,
        cast: true,
        scale: [0.72, 0.95, 0.45]
      })
      bang.position.set(i * 0.085, 0.175 - Math.abs(i) * 0.012, 0.245 - Math.abs(i) * 0.008)
      bang.rotation.z = -i * 0.1
      this.headPivot.add(bang)
    }

    // 侧发
    for (const side of [-1, 1]) {
      const lock = this.sphere(0.075, this.hair, {
        segments: 12,
        cast: true,
        scale: [0.5, 1.35, 0.5]
      })
      lock.position.set(side * 0.29, 0.0, 0.02)
      lock.rotation.z = side * 0.15
      this.headPivot.add(lock)
      const tail = this.sphere(0.06, this.hairLight, {
        segments: 10,
        scale: [0.45, 1.2, 0.4]
      })
      tail.position.set(side * 0.3, -0.14, 0.01)
      this.headPivot.add(tail)
    }

    // 后脑发量
    const backHair = this.sphere(0.225, this.hair, {
      segments: 20,
      scale: [0.9, 0.95, 0.5]
    })
    backHair.position.set(0, -0.01, -0.09)
    this.headPivot.add(backHair)

    // 眉毛
    for (const side of [-1, 1]) {
      const brow = this.flatBox(0.09, 0.018, 0.018, this.hair)
      brow.position.set(side * 0.12, 0.15, 0.302)
      brow.rotation.z = side * -0.12
      this.headPivot.add(brow)
    }

    // 眼睛（独立组，可整体眨眼）
    for (const side of [-1, 1]) {
      const white = this.sphere(0.085, COLORS.paper, {
        segments: 16,
        scale: [1.0, 1.2, 0.45],
        material: { roughness: 0.35 }
      })
      white.position.set(side * 0.115, 0.015, 0.285)
      this.eyeGroup.add(white)
      const iris = this.sphere(0.049, this.iris, {
        segments: 14,
        scale: [1.0, 1.15, 0.4],
        material: { roughness: 0.2 }
      })
      iris.position.set(side * 0.115, 0.012, 0.323)
      this.eyeGroup.add(iris)
      const pupil = this.sphere(0.026, COLORS.ink, {
        segments: 12,
        scale: [1.0, 1.15, 0.35],
        material: { roughness: 0.15 }
      })
      pupil.position.set(side * 0.115, 0.012, 0.35)
      this.eyeGroup.add(pupil)
      const shine = this.sphere(0.015, COLORS.paper, { segments: 8 })
      shine.position.set(side * 0.1, 0.045, 0.372)
      this.eyeGroup.add(shine)
      const shine2 = this.sphere(0.008, COLORS.paper, { segments: 6 })
      shine2.position.set(side * 0.132, -0.012, 0.372)
      this.eyeGroup.add(shine2)
      const lash = this.torus(0.066, 0.012, COLORS.ink, {
        tubularSegments: 16,
        arc: Math.PI * 0.7,
        radialSegments: 6
      })
      lash.position.set(side * 0.115, 0.03, 0.31)
      lash.rotation.z = side * 0.08
      this.eyeGroup.add(lash)
    }

    // 腮红、鼻子、嘴
    for (const side of [-1, 1]) {
      const blush = new THREE.Mesh(
        this.assets.getGeometry('char-blush', () => new THREE.CircleGeometry(0.052, 14)),
        this.basic(COLORS.pink, 0.48)
      )
      blush.position.set(side * 0.2, -0.075, 0.292)
      this.headPivot.add(blush)
    }
    const nose = this.sphere(0.018, this.darken(this.skin, 0.12), { segments: 8 })
    nose.position.set(0, -0.035, 0.352)
    this.headPivot.add(nose)
    const mouth = this.torus(0.055, 0.01, COLORS.pinkDeep, {
      tubularSegments: 16,
      arc: Math.PI,
      radialSegments: 6
    })
    mouth.position.set(0, -0.13, 0.33)
    mouth.rotation.z = Math.PI
    this.headPivot.add(mouth)
    const lowerLip = this.sphere(0.02, COLORS.pink, { segments: 8, scale: [1.2, 0.35, 0.5] })
    lowerLip.position.set(0, -0.155, 0.338)
    this.headPivot.add(lowerLip)
  }

  private buildArms(): void {
    for (const [side, shoulder, elbow, wrist] of [
      [-1, this.armLeft, this.elbowLeft, this.wristLeft],
      [1, this.armRight, this.elbowRight, this.wristRight]
    ] as const) {
      const sleeve = this.sphere(0.11, this.shirt, {
        segments: 16,
        cast: true,
        scale: [1.0, 1.05, 0.95]
      })
      sleeve.position.set(side * 0.01, 0, 0)
      shoulder.add(sleeve)
      const upper = this.capsule(0.062, 0.18, this.skin)
      upper.position.y = -0.14
      shoulder.add(upper)

      const forearm = this.capsule(0.056, 0.16, this.skin)
      forearm.position.y = -0.1
      elbow.add(forearm)
      const jointCuff = this.torus(0.064, 0.014, this.accent, {
        tubularSegments: 16,
        material: { roughness: 0.75 }
      })
      jointCuff.rotation.x = Math.PI / 2
      jointCuff.position.y = 0
      elbow.add(jointCuff)
      const cuff = this.cylinder(0.064, 0.072, 0.05, this.accent, { segments: 12 })
      cuff.position.y = -0.19
      elbow.add(cuff)

      const hand = this.sphere(0.072, this.skin, {
        segments: 12,
        scale: [0.9, 1.0, 0.75],
        cast: true
      })
      hand.position.y = -0.04
      wrist.add(hand)
      const thumb = this.sphere(0.025, this.skin, { segments: 8, scale: [0.6, 1.1, 0.7] })
      thumb.position.set(side * 0.05, -0.005, 0.035)
      wrist.add(thumb)
    }
  }

  private buildLegs(): void {
    for (const [side, thigh, knee, ankle] of [
      [-1, this.thighLeft, this.kneeLeft, this.ankleLeft],
      [1, this.thighRight, this.kneeRight, this.ankleRight]
    ] as const) {
      const upper = this.capsule(0.066, 0.2, this.skin)
      upper.position.y = -0.14
      thigh.add(upper)
      const lower = this.capsule(0.058, 0.18, this.skin)
      lower.position.y = -0.12
      knee.add(lower)
      const sock = this.cylinder(0.064, 0.07, 0.14, this.socks, {
        segments: 14,
        material: { roughness: 0.9 }
      })
      sock.position.y = -0.19
      knee.add(sock)
      const shoe = this.roundBox(0.16, 0.1, 0.25, this.shoes, { radius: 0.035 })
      shoe.position.set(0, -0.045, 0.045)
      ankle.add(shoe)
      const sole = this.flatBox(0.17, 0.035, 0.26, this.darken(this.shoes, 0.25))
      sole.position.set(0, -0.095, 0.045)
      ankle.add(sole)
      const toe = this.sphere(0.06, this.shoes, {
        segments: 12,
        scale: [1.05, 0.7, 1.0]
      })
      toe.position.set(0, -0.035, 0.15)
      ankle.add(toe)
      const strap = this.flatBox(0.16, 0.025, 0.04, COLORS.gold)
      strap.position.set(0, -0.005, 0.09)
      ankle.add(strap)
      const knot = this.sphere(0.022, COLORS.gold, { segments: 8 })
      knot.position.set(side * 0.08, -0.005, 0.09)
      ankle.add(knot)
    }
  }

  private buildSkirt(): void {
    const long = this.isGhost
    const mainPoints: Array<[number, number]> = long
      ? [[0.19, 0.14], [0.22, 0.04], [0.3, -0.16], [0.38, -0.36], [0.42, -0.56], [0.44, -0.58]]
      : [[0.19, 0.14], [0.22, 0.04], [0.3, -0.09], [0.38, -0.19], [0.4, -0.21]]
    const underskirtPoints: Array<[number, number]> = long
      ? [[0.17, 0.12], [0.21, 0.0], [0.28, -0.2], [0.36, -0.4], [0.4, -0.54]]
      : [[0.17, 0.12], [0.21, 0.0], [0.3, -0.13], [0.37, -0.2]]
    const main = this.lathe(mainPoints, this.accent, 30, { roughness: 0.78, side: THREE.DoubleSide })
    const under = this.lathe(underskirtPoints, this.shirt, 30, { roughness: 0.8, side: THREE.DoubleSide })
    this.skirt.add(main, under)

    const hem = this.torus(0.39, 0.018, COLORS.cream, {
      tubularSegments: 30,
      material: { roughness: 0.7 }
    })
    hem.rotation.x = Math.PI / 2
    hem.position.y = long ? -0.55 : -0.2
    this.skirt.add(hem)
    const waistBand = this.cylinder(0.21, 0.22, 0.06, COLORS.cream, { segments: 24 })
    waistBand.position.y = 0.12
    this.skirt.add(waistBand)
    for (const s of [-1, 1]) {
      const lobe = this.sphere(0.07, this.shirt, {
        segments: 10,
        scale: [1.2, 0.8, 0.45]
      })
      lobe.position.set(s * 0.065, 0.08, -0.2)
      this.skirt.add(lobe)
    }
    const knot = this.sphere(0.035, COLORS.gold, { segments: 8 })
    knot.position.set(0, 0.08, -0.2)
    this.skirt.add(knot)
  }

  private buildPonytail(): void {
    this.ponytail.position.set(0, 0.18, -0.25)
    const hairTie = this.torus(0.07, 0.022, this.accent, {
      tubularSegments: 18,
      material: { roughness: 0.7 }
    })
    hairTie.rotation.x = Math.PI / 2
    this.ponytail.add(hairTie)
    const segments: Array<[number, number, number, number]> = [
      [0, 0.015, -0.025, 0.075],
      [0, -0.06, -0.07, 0.085],
      [0, -0.14, -0.105, 0.075],
      [0, -0.21, -0.12, 0.055]
    ]
    for (const [x, y, z, r] of segments) {
      const segment = this.sphere(r, this.hair, {
        segments: 14,
        cast: true,
        scale: [0.68, 1.18, 0.68]
      })
      segment.position.set(x, y, z)
      this.ponytail.add(segment)
    }
    const streak = this.sphere(0.04, this.hairLight, {
      segments: 8,
      scale: [0.35, 1.35, 0.32]
    })
    streak.position.set(0.015, -0.06, -0.12)
    this.ponytail.add(streak)
    const ribbon = this.sphere(0.09, this.accent, {
      segments: 10,
      scale: [1.5, 0.8, 0.45]
    })
    ribbon.position.set(0, 0.015, -0.08)
    this.ponytail.add(ribbon)
    const knot = this.sphere(0.03, COLORS.gold, { segments: 8 })
    knot.position.set(0, 0.015, -0.12)
    this.ponytail.add(knot)
  }

  private buildAccessory(accessory: HiderPalette['accessory']): void {
    if (accessory === 'bow') {
      this.accessory.position.set(0.23, 0.19, 0.09)
      this.accessory.rotation.z = -0.25
      for (const s of [-1, 1]) {
        const lobe = this.sphere(0.085, this.accent, {
          segments: 12,
          scale: [1.15, 0.8, 0.5]
        })
        lobe.position.set(s * 0.07, 0, 0)
        this.accessory.add(lobe)
        const tail = this.flatBox(0.08, 0.14, 0.02, this.accent)
        tail.position.set(s * 0.045, -0.09, 0)
        tail.rotation.z = s * 0.2
        this.accessory.add(tail)
      }
      const knot = this.sphere(0.04, COLORS.gold, { segments: 8 })
      this.accessory.add(knot)
    } else if (accessory === 'beret') {
      this.accessory.position.set(0.02, 0.31, -0.01)
      this.accessory.rotation.z = -0.16
      const cap = this.sphere(0.28, this.accent, {
        segments: 18,
        scale: [1.0, 0.42, 1.0],
        material: { roughness: 0.75 }
      })
      this.accessory.add(cap)
      const brim = this.torus(0.24, 0.025, this.shirt, {
        tubularSegments: 24,
        material: { roughness: 0.7 }
      })
      brim.rotation.x = Math.PI / 2
      brim.position.y = -0.025
      this.accessory.add(brim)
      const stem = this.cylinder(0.02, 0.02, 0.06, COLORS.gold, { segments: 6 })
      stem.position.set(0, 0.14, 0)
      this.accessory.add(stem)
    } else if (accessory === 'scarf') {
      const wrap = this.torus(0.17, 0.055, this.accent, {
        tubularSegments: 24,
        material: { roughness: 0.85 }
      })
      wrap.rotation.x = Math.PI / 2
      wrap.position.y = 0.27
      this.chest.add(wrap)
      this.scarfTail.position.set(0.16, 0.19, 0.16)
      const tail = this.flatBox(0.12, 0.3, 0.04, this.accent)
      tail.position.y = -0.12
      tail.rotation.z = -0.15
      this.scarfTail.add(tail)
      const tip = this.flatBox(0.11, 0.04, 0.045, this.shirt)
      tip.position.y = -0.28
      tip.rotation.z = -0.15
      this.scarfTail.add(tip)
    } else if (accessory === 'backpack') {
      this.backpack.position.set(0, 0.08, -0.24)
      const pack = this.roundBox(0.3, 0.34, 0.16, this.accent, { radius: 0.06 })
      this.backpack.add(pack)
      const pocket = this.roundBox(0.18, 0.14, 0.06, this.shirt, { radius: 0.04 })
      pocket.position.set(0, -0.06, -0.1)
      this.backpack.add(pocket)
      const flap = this.roundBox(0.26, 0.08, 0.05, COLORS.cream, { radius: 0.03 })
      flap.position.set(0, 0.12, -0.1)
      this.backpack.add(flap)
      for (const s of [-1, 1]) {
        const strap = this.flatBox(0.045, 0.3, 0.03, COLORS.cream)
        strap.position.set(s * 0.16, 0.08, 0.1)
        this.chest.add(strap)
      }
    } else if (accessory === 'headband') {
      this.accessory.position.set(0, 0.13, 0)
      const band = this.torus(0.29, 0.025, this.accent, {
        tubularSegments: 24,
        material: { roughness: 0.7 }
      })
      band.rotation.x = Math.PI / 2
      this.accessory.add(band)
      const star = new THREE.Mesh(
        this.assets.getGeometry('char-star-accessory', () => new THREE.OctahedronGeometry(0.085, 0)),
        this.mat(this.accent, { emissive: this.accent, emissiveIntensity: 0.3 })
      )
      star.position.set(0.22, 0.04, 0.08)
      this.accessory.add(star)
    }
  }

  // ── 合并与工具 ────────────────────────────────────────────
  private mergeAll(): void {
    for (const group of [
      this.hips,
      this.spine,
      this.chest,
      this.neck,
      this.headPivot,
      this.armLeft,
      this.armRight,
      this.elbowLeft,
      this.elbowRight,
      this.wristLeft,
      this.wristRight,
      this.thighLeft,
      this.thighRight,
      this.kneeLeft,
      this.kneeRight,
      this.ankleLeft,
      this.ankleRight,
      this.eyeGroup,
      this.skirt,
      this.ponytail,
      this.accessory,
      this.scarfTail,
      this.backpack
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

  private updateBlink(dt: number): void {
    this.blinkTimer -= dt
    if (this.blinkTimer <= 0) {
      this.blinkTimer = 2.2 + Math.random() * 3.4
      this.blinkRemaining = 0.12
    }
    if (this.blinkRemaining > 0) {
      this.blinkRemaining = Math.max(0, this.blinkRemaining - dt)
      this.eyeGroup.scale.y = damp(this.eyeGroup.scale.y, 0.12, 32, dt)
    } else {
      this.eyeGroup.scale.y = damp(this.eyeGroup.scale.y, 1, 20, dt)
    }
  }

  private dampEuler(
    object: THREE.Object3D,
    x: number,
    y: number,
    z: number,
    lambda: number,
    dt: number
  ): void {
    object.rotation.x = damp(object.rotation.x, x, lambda, dt)
    object.rotation.y = damp(object.rotation.y, y, lambda, dt)
    object.rotation.z = damp(object.rotation.z, z, lambda, dt)
  }

  private lighten(color: number, amount: number): number {
    const r = Math.min(255, ((color >> 16) & 0xff) + 255 * amount)
    const g = Math.min(255, ((color >> 8) & 0xff) + 255 * amount)
    const b = Math.min(255, (color & 0xff) + 255 * amount)
    return (Math.round(r) << 16) | (Math.round(g) << 8) | Math.round(b)
  }

  private darken(color: number, amount: number): number {
    const r = Math.max(0, ((color >> 16) & 0xff) * (1 - amount))
    const g = Math.max(0, ((color >> 8) & 0xff) * (1 - amount))
    const b = Math.max(0, (color & 0xff) * (1 - amount))
    return (Math.round(r) << 16) | (Math.round(g) << 8) | Math.round(b)
  }
}
