import * as THREE from 'three'
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js'
import type { JailConfig, PropSpec } from '../config/maps/types'
import { COLORS, HIDER_PALETTES } from '../config/theme'
import type { MaterialOptions, SharedAssets } from '../core/Disposal'

export type PropUpdater = (dt: number, elapsed: number) => void

export interface BuiltProp {
  group: THREE.Group
  update?: PropUpdater
  /** false 表示子网格有独立动画，不能整体合并。 */
  mergeable?: boolean
}

const CANDY = [
  COLORS.pink,
  COLORS.mint,
  COLORS.gold,
  COLORS.lavender,
  COLORS.sky,
  COLORS.coral
]

/**
 * 三张地图共用的程序化道具工厂。
 * 所有尺寸以本地坐标构建，缩放由外层 group 统一处理。
 */
export class PropKit {
  constructor(private readonly assets: SharedAssets) {}

  /** 关押区视觉：三面围栏 + 朝 +x 的门，与 mapCollision 的布局一致。 */
  buildJail(config: JailConfig): BuiltProp {
    const group = new THREE.Group()
    group.position.set(config.center.x, 0, config.center.z)
    const radius = config.radius
    const gateHalf = 1.1

    const palette =
      config.theme === 'park'
        ? { fence: COLORS.pink, accent: COLORS.mint, floor: COLORS.pink }
        : config.theme === 'manor'
          ? { fence: COLORS.lavender, accent: COLORS.leaf, floor: COLORS.lavender }
          : { fence: COLORS.gold, accent: COLORS.cream, floor: COLORS.pink }

    const floor = new THREE.Mesh(
      this.assets.getGeometry('jail-floor', () => new THREE.PlaneGeometry(radius * 2, radius * 2)),
      this.mat(palette.floor, { transparent: true, opacity: 0.16, roughness: 0.9, depthWrite: false })
    )
    floor.rotation.x = -Math.PI / 2
    floor.position.y = 0.02
    group.add(floor)

    this.fenceLine(group, -radius, -radius, -radius, radius, palette.fence, palette.accent)
    this.fenceLine(group, -radius, -radius, radius, -radius, palette.fence, palette.accent)
    this.fenceLine(group, -radius, radius, radius, radius, palette.fence, palette.accent)
    this.fenceLine(group, radius, -radius, radius, -gateHalf, palette.fence, palette.accent)
    this.fenceLine(group, radius, gateHalf, radius, radius, palette.fence, palette.accent)

    for (let i = 0; i < config.slots.length; i++) {
      const slot = config.slots[i]
      const pad = this.cylinder(0.52, 0.58, 0.06, 20, palette.accent, {
        material: { emissive: palette.accent, emissiveIntensity: 0.35 },
        cast: false
      })
      pad.position.set(slot.x - config.center.x, 0.04, slot.z - config.center.z)
      group.add(pad)
      const ring = this.torus(0.58, 0.045, palette.fence, { tubularSegments: 24 })
      ring.rotation.x = Math.PI / 2
      ring.position.set(slot.x - config.center.x, 0.1, slot.z - config.center.z)
      group.add(ring)
      this.glow(group, palette.accent, slot.x - config.center.x, 0.35, slot.z - config.center.z, 1.2)
    }

    const signText = '关押区'
    this.addBoard(
      group,
      signText,
      `jail-sign-${config.theme}`,
      radius + 0.12,
      2.35,
      0,
      2.4,
      0.9,
      '#fff6e7',
      '#2b2140',
      Math.PI / 2
    )

    for (const [x, z] of [
      [-radius, -radius],
      [-radius, radius],
      [radius, -radius],
      [radius, radius]
    ]) {
      this.place(group, this.cylinder(0.06, 0.08, 2.6, 8, COLORS.inkSoft), x, 1.3, z)
      this.place(
        group,
        this.sphere(0.18, COLORS.warmLight, {
          segments: 8,
          material: { emissive: COLORS.warmLight, emissiveIntensity: 1.2 }
        }),
        x,
        2.7,
        z
      )
      this.glow(group, COLORS.warmLight, x, 2.7, z, 1.7)
    }

    return { group }
  }

  build(spec: PropSpec): BuiltProp {
    const group = new THREE.Group()
    group.position.set(spec.x, 0, spec.z)
    group.rotation.y = spec.rotY ?? 0
    group.scale.setScalar(spec.scale ?? 1)

    let update: PropUpdater | undefined
    let mergeable = true

    switch (spec.kind) {
      case 'lamp':
        this.buildLamp(group, spec)
        break
      case 'bench':
        this.buildBench(group, spec)
        break
      case 'planter':
        this.buildPlanter(group, spec)
        break
      case 'luggage':
        this.buildLuggage(group, spec)
        break
      case 'trainCar':
        this.buildTrainCar(group, spec)
        break
      case 'clockTower':
        this.buildClockTower(group)
        break
      case 'canopy':
        this.buildCanopy(group, spec)
        break
      case 'ticketBooth':
        this.buildTicketBooth(group)
        break
      case 'carousel':
        update = this.buildCarousel(group)
        break
      case 'ferrisWheel':
        update = this.buildFerrisWheel(group)
        mergeable = false
        break
      case 'stall':
        this.buildStall(group, spec)
        break
      case 'balloonCart':
        update = this.buildBalloonCart(group, spec)
        mergeable = false
        break
      case 'hedge':
        this.buildHedge(group, spec)
        break
      case 'fence':
        this.buildFence(group, spec)
        break
      case 'fountain':
        update = this.buildFountain(group)
        mergeable = false
        break
      case 'greenhouse':
        this.buildGreenhouse(group)
        break
      case 'gazebo':
        this.buildGazebo(group)
        break
      case 'flowerArch':
        this.buildFlowerArch(group, spec)
        break
      case 'mansion':
        this.buildMansion(group)
        break
      case 'tree':
        // 树保持静态，交给地图级合批；放弃极轻微的摇曳以换取 draw call。
        this.buildTree(group, spec)
        break
      case 'rock':
        this.buildRock(group)
        break
      case 'picnicTable':
        this.buildPicnicTable(group, spec)
        break
      case 'sign':
        this.buildSign(group, spec)
        break
      case 'teacup':
        update = this.buildTeacup(group, spec)
        break
      default:
        break
    }

    return { group, update, mergeable }
  }

  // ── 基础几何 ──────────────────────────────────────────────
  private mat(color: number, options: MaterialOptions = {}): THREE.MeshStandardMaterial {
    return this.assets.getMaterial(color, options)
  }

  private roundBox(
    width: number,
    height: number,
    depth: number,
    color: number,
    options: { radius?: number; material?: MaterialOptions; cast?: boolean; receive?: boolean } = {}
  ): THREE.Mesh {
    const radius = options.radius ?? Math.min(0.08, Math.min(width, height, depth) * 0.16)
    const key = `rbox:${width}:${height}:${depth}:${radius}`
    const geometry = this.assets.getGeometry(key, () => new RoundedBoxGeometry(width, height, depth, 2, radius))
    const mesh = new THREE.Mesh(geometry, this.mat(color, options.material))
    mesh.castShadow = options.cast ?? true
    mesh.receiveShadow = options.receive ?? false
    return mesh
  }

  private flatBox(
    width: number,
    height: number,
    depth: number,
    color: number,
    options: { material?: MaterialOptions; cast?: boolean; receive?: boolean } = {}
  ): THREE.Mesh {
    const key = `box:${width}:${height}:${depth}`
    const geometry = this.assets.getGeometry(key, () => new THREE.BoxGeometry(width, height, depth))
    const mesh = new THREE.Mesh(geometry, this.mat(color, options.material))
    mesh.castShadow = options.cast ?? false
    mesh.receiveShadow = options.receive ?? false
    return mesh
  }

  private cylinder(
    radiusTop: number,
    radiusBottom: number,
    height: number,
    segments: number,
    color: number,
    options: { material?: MaterialOptions; cast?: boolean; receive?: boolean } = {}
  ): THREE.Mesh {
    const key = `cyl:${radiusTop}:${radiusBottom}:${height}:${segments}`
    const geometry = this.assets.getGeometry(
      key,
      () => new THREE.CylinderGeometry(radiusTop, radiusBottom, height, segments)
    )
    const mesh = new THREE.Mesh(geometry, this.mat(color, options.material))
    mesh.castShadow = options.cast ?? true
    mesh.receiveShadow = options.receive ?? false
    return mesh
  }

  private sphere(
    radius: number,
    color: number,
    options: { segments?: number; material?: MaterialOptions; cast?: boolean; scaleY?: number } = {}
  ): THREE.Mesh {
    const segments = options.segments ?? 16
    const key = `sph:${radius}:${segments}`
    const geometry = this.assets.getGeometry(
      key,
      () => new THREE.SphereGeometry(radius, segments, Math.max(8, Math.floor(segments * 0.75)))
    )
    const mesh = new THREE.Mesh(geometry, this.mat(color, options.material))
    mesh.castShadow = options.cast ?? false
    if (options.scaleY) mesh.scale.y = options.scaleY
    return mesh
  }

  private cone(radius: number, height: number, segments: number, color: number): THREE.Mesh {
    const key = `cone:${radius}:${height}:${segments}`
    const geometry = this.assets.getGeometry(
      key,
      () => new THREE.ConeGeometry(radius, height, segments)
    )
    const mesh = new THREE.Mesh(geometry, this.mat(color))
    mesh.castShadow = true
    return mesh
  }

  private torus(
    radius: number,
    tube: number,
    color: number,
    options: { radialSegments?: number; tubularSegments?: number; arc?: number } = {}
  ): THREE.Mesh {
    const radial = options.radialSegments ?? 8
    const tubular = options.tubularSegments ?? 32
    const arc = options.arc ?? Math.PI * 2
    const key = `torus:${radius}:${tube}:${radial}:${tubular}:${arc}`
    const geometry = this.assets.getGeometry(
      key,
      () => new THREE.TorusGeometry(radius, tube, radial, tubular, arc)
    )
    const mesh = new THREE.Mesh(geometry, this.mat(color))
    mesh.castShadow = true
    return mesh
  }

  private place(
    parent: THREE.Object3D,
    mesh: THREE.Object3D,
    x = 0,
    y = 0,
    z = 0,
    rotX = 0,
    rotY = 0,
    rotZ = 0
  ): THREE.Object3D {
    mesh.position.set(x, y, z)
    mesh.rotation.set(rotX, rotY, rotZ)
    parent.add(mesh)
    return mesh
  }

  private cylinderBetween(
    parent: THREE.Object3D,
    from: THREE.Vector3,
    to: THREE.Vector3,
    radius: number,
    color: number,
    cast = false
  ): THREE.Mesh {
    const direction = new THREE.Vector3().subVectors(to, from)
    const length = direction.length()
    const mesh = this.cylinder(radius, radius, length, 8, color, { cast })
    mesh.position.copy(from).add(to).multiplyScalar(0.5)
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize())
    parent.add(mesh)
    return mesh
  }

  private glow(parent: THREE.Object3D, color: number, x: number, y: number, z: number, scale: number): THREE.Sprite {
    const texture = this.assets.getCanvasTexture('glow-soft', 128, 128, (ctx, w, h) => {
      const gradient = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2)
      gradient.addColorStop(0, 'rgba(255,255,255,1)')
      gradient.addColorStop(0.35, 'rgba(255,255,255,0.55)')
      gradient.addColorStop(1, 'rgba(255,255,255,0)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, w, h)
    })
    const sprite = new THREE.Sprite(this.assets.getSpriteMaterial(color, { opacity: 0.72 }))
    sprite.material.map = texture
    sprite.material.needsUpdate = true
    sprite.position.set(x, y, z)
    sprite.scale.setScalar(scale)
    parent.add(sprite)
    return sprite
  }

  private signTexture(key: string, text: string, background: string, foreground: string): THREE.CanvasTexture {
    return this.assets.getCanvasTexture(key, 512, 256, (ctx, width, height) => {
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = background
      this.roundRect(ctx, 12, 12, width - 24, height - 24, 42)
      ctx.fill()
      ctx.strokeStyle = 'rgba(43,33,64,0.28)'
      ctx.lineWidth = 8
      this.roundRect(ctx, 22, 22, width - 44, height - 44, 34)
      ctx.stroke()
      ctx.fillStyle = foreground
      ctx.font = '900 96px "PingFang SC","Microsoft YaHei","Noto Sans CJK SC",sans-serif'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(text, width / 2, height / 2 + 4)
    })
  }

  private roundRect(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number
  ): void {
    ctx.beginPath()
    ctx.moveTo(x + radius, y)
    ctx.arcTo(x + width, y, x + width, y + height, radius)
    ctx.arcTo(x + width, y + height, x, y + height, radius)
    ctx.arcTo(x, y + height, x, y, radius)
    ctx.arcTo(x, y, x + width, y, radius)
    ctx.closePath()
  }

  private addBoard(
    parent: THREE.Object3D,
    text: string,
    key: string,
    x: number,
    y: number,
    z: number,
    width = 2.6,
    height = 1.1,
    background = '#fff6e7',
    foreground = '#2b2140',
    rotY = 0
  ): void {
    const texture = this.signTexture(key, text, background, foreground)
    const board = new THREE.Mesh(
      this.assets.getGeometry(`plane:${width}:${height}`, () => new THREE.PlaneGeometry(width, height)),
      this.assets.getBasicTextureMaterial(texture, { transparent: true })
    )
    board.position.set(x, y, z)
    board.rotation.y = rotY
    parent.add(board)

    const frame = this.roundBox(width + 0.16, height + 0.16, 0.1, COLORS.woodDark, {
      radius: 0.05,
      cast: false
    })
    frame.position.set(x, y, z - 0.07)
    frame.rotation.y = rotY
    parent.add(frame)
  }

  private fenceLine(
    parent: THREE.Object3D,
    ax: number,
    az: number,
    bx: number,
    bz: number,
    color: number,
    accent: number
  ): void {
    const length = Math.hypot(bx - ax, bz - az)
    const posts = Math.max(2, Math.round(length / 1.3) + 1)
    for (let i = 0; i < posts; i++) {
      const t = i / (posts - 1)
      const x = ax + (bx - ax) * t
      const z = az + (bz - az) * t
      this.place(parent, this.cylinder(0.065, 0.09, 1.35, 8, color), x, 0.68, z)
      this.place(parent, this.sphere(0.11, accent, { segments: 8 }), x, 1.4, z)
    }
    this.cylinderBetween(parent, new THREE.Vector3(ax, 0.55, az), new THREE.Vector3(bx, 0.55, bz), 0.045, accent)
    this.cylinderBetween(parent, new THREE.Vector3(ax, 1.0, az), new THREE.Vector3(bx, 1.0, bz), 0.045, accent)
  }

  private addStringLights(
    parent: THREE.Object3D,
    from: THREE.Vector3,
    to: THREE.Vector3,
    count: number,
    sag: number,
    color = COLORS.warmLight
  ): void {
    const points: THREE.Vector3[] = []
    for (let i = 0; i <= count; i++) {
      const t = i / count
      const point = new THREE.Vector3().lerpVectors(from, to, t)
      point.y -= Math.sin(t * Math.PI) * sag
      points.push(point)
    }

    const curve = new THREE.CatmullRomCurve3(points)
    const wire = new THREE.Mesh(
      this.assets.getGeometry(
        `tube:${count}:${sag}`,
        () => new THREE.TubeGeometry(curve, 20, 0.014, 4, false)
      ),
      this.mat(COLORS.inkSoft)
    )
    wire.castShadow = false
    parent.add(wire)

    const bulbGeometry = this.assets.getGeometry(
      'bulb',
      () => new THREE.SphereGeometry(0.065, 6, 5)
    )
    const bulbMaterial = this.assets.getBasicMaterial(color)
    const bulbs = new THREE.InstancedMesh(bulbGeometry, bulbMaterial, count)
    const matrix = new THREE.Matrix4()
    for (let i = 0; i < count; i++) {
      const t = (i + 0.5) / count
      const point = curve.getPoint(t)
      point.y -= 0.06
      matrix.makeTranslation(point.x, point.y, point.z)
      bulbs.setMatrixAt(i, matrix)
    }
    bulbs.instanceMatrix.needsUpdate = true
    parent.add(bulbs)
  }

  private addBunting(
    parent: THREE.Object3D,
    from: THREE.Vector3,
    to: THREE.Vector3,
    count: number
  ): void {
    const colors = [COLORS.pink, COLORS.gold, COLORS.mint, COLORS.lavender]
    for (let i = 0; i < count; i++) {
      const t = (i + 0.5) / count
      const point = new THREE.Vector3().lerpVectors(from, to, t)
      point.y -= Math.sin(t * Math.PI) * 0.35
      const flag = this.cone(0.16, 0.34, 3, colors[i % colors.length])
      flag.rotation.x = Math.PI
      flag.position.copy(point)
      flag.castShadow = false
      parent.add(flag)
    }
  }

  private addFlowers(
    parent: THREE.Object3D,
    x: number,
    y: number,
    z: number,
    spread: number,
    count: number,
    colors: number[]
  ): void {
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + i * 0.37
      const radius = spread * (0.35 + (i % 3) * 0.22)
      const fx = x + Math.cos(angle) * radius
      const fz = z + Math.sin(angle) * radius
      const stemHeight = 0.22 + (i % 4) * 0.045
      const stem = this.cylinder(0.018, 0.018, stemHeight, 4, COLORS.leafDeep, { cast: false })
      stem.position.set(fx, y + stemHeight / 2, fz)
      parent.add(stem)
      const head = this.sphere(0.075 + (i % 3) * 0.012, colors[i % colors.length], {
        segments: 8,
        cast: false
      })
      head.position.set(fx, y + stemHeight, fz)
      parent.add(head)
    }
  }

  // ── 小道具 ────────────────────────────────────────────────
  private buildLamp(group: THREE.Group, spec: PropSpec): void {
    const dark = COLORS.inkSoft
    const lanternColor = spec.variant === 'pink' ? COLORS.pink : COLORS.warmLight
    this.place(group, this.cylinder(0.28, 0.34, 0.18, 10, dark), 0, 0.09, 0)
    this.place(group, this.cylinder(0.07, 0.09, 3.1, 10, dark), 0, 1.65, 0)
    this.place(group, this.cylinder(0.05, 0.05, 0.7, 8, dark), 0.35, 3.1, 0, 0, 0, Math.PI / 2)
    this.place(
      group,
      this.roundBox(0.42, 0.52, 0.42, lanternColor, {
        radius: 0.08,
        material: { emissive: lanternColor, emissiveIntensity: 1.35, roughness: 0.4 }
      }),
      0.7,
      2.95,
      0
    )
    this.place(group, this.cone(0.34, 0.28, 4, COLORS.ink), 0.7, 3.34, 0, 0, Math.PI / 4)
    this.place(group, this.cylinder(0.2, 0.26, 0.08, 8, dark), 0.7, 2.67, 0)
    this.glow(group, lanternColor, 0.7, 2.95, 0, 2.2)
  }

  private buildBench(group: THREE.Group, spec: PropSpec): void {
    const wood = spec.variant === 'pink' ? COLORS.pink : COLORS.wood
    const metal = COLORS.inkSoft
    this.place(group, this.roundBox(2.9, 0.16, 0.74, wood, { radius: 0.06 }), 0, 0.64, 0)
    this.place(group, this.roundBox(2.9, 0.68, 0.14, wood, { radius: 0.06 }), 0, 1.02, -0.31, -0.1)
    for (const x of [-1.18, 1.18]) {
      for (const z of [-0.24, 0.24]) {
        this.place(group, this.cylinder(0.055, 0.07, 0.62, 8, metal), x, 0.31, z)
      }
      this.place(group, this.roundBox(0.12, 0.1, 0.72, metal, { radius: 0.03, cast: false }), x, 0.93, 0.02)
    }
    this.place(group, this.roundBox(2.7, 0.06, 0.1, COLORS.gold, { radius: 0.02, cast: false }), 0, 0.73, 0.34)
  }

  private buildPlanter(group: THREE.Group, spec: PropSpec): void {
    const pot = spec.variant === 'mint' ? COLORS.mint : spec.variant === 'gold' ? COLORS.gold : COLORS.wood
    this.place(group, this.cylinder(0.86, 0.72, 0.66, 12, pot), 0, 0.33, 0)
    this.place(group, this.cylinder(0.74, 0.74, 0.08, 12, COLORS.woodDark, { cast: false }), 0, 0.67, 0)
    this.place(group, this.torus(0.86, 0.05, COLORS.cream, { tubularSegments: 24 }), 0, 0.66, 0, Math.PI / 2)
    const colors =
      spec.variant === 'gold'
        ? [COLORS.gold, COLORS.coral, COLORS.cream]
        : spec.variant === 'mint'
          ? [COLORS.mint, COLORS.cream, COLORS.pink]
          : [COLORS.pink, COLORS.lavender, COLORS.cream]
    this.addFlowers(group, 0, 0.67, 0, 0.58, 7, colors)
  }

  private buildLuggage(group: THREE.Group, spec: PropSpec): void {
    const main = spec.variant === 'mint' ? COLORS.mint : spec.variant === 'gold' ? COLORS.gold : spec.variant === 'blue' ? COLORS.sky : COLORS.pink
    this.place(group, this.roundBox(2.5, 0.18, 1.35, COLORS.woodDark, { radius: 0.05 }), 0, 0.5, 0)
    for (const x of [-0.95, 0.95]) {
      for (const z of [-0.48, 0.48]) {
        const wheel = this.cylinder(0.18, 0.18, 0.12, 12, COLORS.ink)
        wheel.rotation.x = Math.PI / 2
        wheel.position.set(x, 0.2, z)
        group.add(wheel)
      }
    }
    this.place(group, this.cylinder(0.05, 0.05, 1.2, 8, COLORS.inkSoft), 1.1, 1.25, 0.55, 0, 0, -0.18)
    this.place(group, this.cylinder(0.05, 0.05, 1.2, 8, COLORS.inkSoft), 1.1, 1.25, -0.55, 0, 0, -0.18)
    this.place(group, this.cylinder(0.05, 0.05, 1.1, 8, COLORS.inkSoft), 1.1, 1.82, 0, Math.PI / 2)

    const cases = [
      { x: -0.55, y: 0.92, z: 0, w: 1.35, h: 0.72, d: 0.9, rot: 0.04, color: main },
      { x: 0.5, y: 0.88, z: 0.08, w: 1.05, h: 0.62, d: 0.78, rot: -0.08, color: COLORS.lavender },
      { x: -0.1, y: 1.52, z: -0.04, w: 0.86, h: 0.5, d: 0.62, rot: 0.12, color: COLORS.cream }
    ]
    for (const item of cases) {
      this.place(
        group,
        this.roundBox(item.w, item.h, item.d, item.color, { radius: 0.07 }),
        item.x,
        item.y,
        item.z,
        0,
        item.rot
      )
      this.place(
        group,
        this.roundBox(item.w * 0.16, item.h + 0.02, item.d + 0.02, COLORS.woodDark, {
          radius: 0.02,
          cast: false
        }),
        item.x,
        item.y,
        item.z,
        0,
        item.rot
      )
    }
  }

  private buildTrainCar(group: THREE.Group, spec: PropSpec): void {
    const bodyColor =
      spec.variant === 'pink' ? COLORS.pink : spec.variant === 'cream' ? COLORS.cream : COLORS.sky
    const windowColor = COLORS.warmLight
    this.place(group, this.roundBox(13.6, 2.6, 2.8, bodyColor, { radius: 0.18 }), 0, 1.9, 0)
    this.place(group, this.roundBox(14, 0.5, 3.2, COLORS.cream, { radius: 0.16 }), 0, 3.35, 0)
    this.place(group, this.roundBox(13.8, 0.28, 2.4, COLORS.inkSoft, { radius: 0.05 }), 0, 0.55, 0)
    this.place(group, this.roundBox(13.7, 0.1, 2.86, COLORS.gold, { radius: 0.02, cast: false }), 0, 1.08, 0)
    this.place(group, this.roundBox(13.7, 0.1, 2.86, COLORS.gold, { radius: 0.02, cast: false }), 0, 2.72, 0)

    for (const z of [-1.42, 1.42]) {
      for (let i = 0; i < 6; i++) {
        const x = -5.3 + i * 2.12
        this.place(
          group,
          this.roundBox(1.1, 0.82, 0.06, windowColor, {
            radius: 0.04,
            material: { emissive: windowColor, emissiveIntensity: 0.7, roughness: 0.3 },
            cast: false
          }),
          x,
          2.15,
          z
        )
        this.place(
          group,
          this.roundBox(1.24, 0.96, 0.04, COLORS.woodDark, { radius: 0.03, cast: false }),
          x,
          2.15,
          z - Math.sign(z) * 0.025
        )
      }
      for (const x of [-3.6, 3.6]) {
        this.place(group, this.roundBox(1.3, 1.9, 0.06, COLORS.woodDark, { radius: 0.04, cast: false }), x, 1.75, z)
        this.place(group, this.roundBox(0.16, 0.16, 0.08, COLORS.gold, { radius: 0.04, cast: false }), x + 0.35, 1.9, z)
      }
    }

    for (const x of [-4.8, -2.4, 2.4, 4.8]) {
      for (const z of [-1.15, 1.15]) {
        const wheel = this.cylinder(0.44, 0.44, 0.22, 12, COLORS.ink)
        wheel.rotation.x = Math.PI / 2
        wheel.position.set(x, 0.45, z)
        group.add(wheel)
        const hub = this.cylinder(0.16, 0.16, 0.26, 8, COLORS.gold)
        hub.rotation.x = Math.PI / 2
        hub.position.set(x, 0.45, z)
        group.add(hub)
      }
    }

    for (const x of [-6.9, 6.9]) {
      this.place(group, this.roundBox(0.3, 0.5, 2.5, COLORS.inkSoft, { radius: 0.06 }), x, 0.8, 0)
      this.glow(group, COLORS.warmLight, x, 1.55, 0, 1.6)
    }
    this.place(group, this.roundBox(2.2, 0.18, 3.2, COLORS.inkSoft, { radius: 0.05 }), 0, 3.66, 0)
    this.place(group, this.cylinder(0.16, 0.2, 0.4, 8, COLORS.gold), 0, 3.94, 0)
  }

  private buildClockTower(group: THREE.Group): void {
    this.place(group, this.roundBox(4.4, 6, 4.4, COLORS.cream, { radius: 0.2 }), 0, 3, 0)
    this.place(group, this.roundBox(4.8, 0.3, 4.8, COLORS.stoneDark, { radius: 0.08 }), 0, 6.1, 0)
    this.place(group, this.roundBox(3.4, 4.2, 3.4, COLORS.paper, { radius: 0.16 }), 0, 8.2, 0)
    this.place(group, this.cone(3.8, 2.6, 4, COLORS.plum), 0, 11.6, 0, 0, Math.PI / 4)
    this.place(group, this.cylinder(0.08, 0.08, 0.9, 6, COLORS.gold), 0, 13.3, 0)
    this.place(group, this.sphere(0.2, COLORS.gold, { segments: 10 }), 0, 13.8, 0)

    const faceTexture = this.assets.getCanvasTexture('clock-face', 256, 256, (ctx, width, height) => {
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = '#fff6e7'
      ctx.beginPath()
      ctx.arc(width / 2, height / 2, 116, 0, Math.PI * 2)
      ctx.fill()
      ctx.strokeStyle = '#2b2140'
      ctx.lineWidth = 8
      ctx.stroke()
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2
        const inner = i % 3 === 0 ? 78 : 92
        ctx.beginPath()
        ctx.moveTo(width / 2 + Math.cos(angle) * inner, height / 2 + Math.sin(angle) * inner)
        ctx.lineTo(width / 2 + Math.cos(angle) * 104, height / 2 + Math.sin(angle) * 104)
        ctx.lineWidth = i % 3 === 0 ? 9 : 5
        ctx.stroke()
      }
      ctx.strokeStyle = '#ef7fa4'
      ctx.lineWidth = 10
      ctx.lineCap = 'round'
      ctx.beginPath()
      ctx.moveTo(width / 2, height / 2)
      ctx.lineTo(width / 2 + 42, height / 2 - 34)
      ctx.stroke()
      ctx.strokeStyle = '#2b2140'
      ctx.lineWidth = 7
      ctx.beginPath()
      ctx.moveTo(width / 2, height / 2)
      ctx.lineTo(width / 2 - 14, height / 2 - 72)
      ctx.stroke()
      ctx.fillStyle = '#f6c85f'
      ctx.beginPath()
      ctx.arc(width / 2, height / 2, 12, 0, Math.PI * 2)
      ctx.fill()
    })
    const face = new THREE.Mesh(
      this.assets.getGeometry('clock-face-geo', () => new THREE.CircleGeometry(1.22, 40)),
      this.assets.getBasicTextureMaterial(faceTexture, { transparent: true })
    )
    face.position.set(0, 9.1, 1.72)
    group.add(face)
    this.place(group, this.torus(1.3, 0.09, COLORS.gold, { tubularSegments: 40 }), 0, 9.1, 1.73)
    this.glow(group, COLORS.warmLight, 0, 9.1, 1.9, 3.4)

    for (const x of [-1.1, 1.1]) {
      this.place(
        group,
        this.roundBox(0.7, 1.6, 0.12, COLORS.warmLight, {
          radius: 0.05,
          material: { emissive: COLORS.warmLight, emissiveIntensity: 0.65 },
          cast: false
        }),
        x,
        3.4,
        2.23
      )
    }
    this.addBoard(group, '火车站', 'sign-clock', 0, 5.2, 2.25, 3.2, 1.0, '#fff6e7', '#2b2140')
  }

  private buildCanopy(group: THREE.Group, spec: PropSpec): void {
    const length = spec.length ?? 16
    const halfLength = length / 2 - 0.8
    for (const x of [-halfLength, halfLength]) {
      for (const z of [-3.2, 3.2]) {
        this.place(group, this.cylinder(0.1, 0.13, 3.7, 10, COLORS.inkSoft), x, 1.85, z)
        this.place(group, this.sphere(0.16, COLORS.gold, { segments: 8 }), x, 3.72, z)
      }
    }
    const panels = 8
    for (let i = 0; i < panels; i++) {
      const color = i % 2 === 0 ? COLORS.cream : COLORS.pink
      this.place(
        group,
        this.roundBox(length / panels, 0.14, 8, color, { radius: 0.04 }),
        -length / 2 + (i + 0.5) * (length / panels),
        3.78,
        0
      )
    }
    this.place(group, this.roundBox(length, 0.12, 0.28, COLORS.gold, { radius: 0.04 }), 0, 3.86, 4.0)
    this.place(group, this.roundBox(length, 0.12, 0.28, COLORS.gold, { radius: 0.04 }), 0, 3.86, -4.0)
    this.addBunting(group, new THREE.Vector3(-length / 2, 3.5, 4.05), new THREE.Vector3(length / 2, 3.5, 4.05), 12)
    for (const x of [-length / 3, 0, length / 3]) {
      this.place(group, this.cylinder(0.025, 0.025, 0.5, 6, COLORS.inkSoft, { cast: false }), x, 3.45, 0)
      this.place(
        group,
        this.sphere(0.15, COLORS.warmLight, {
          segments: 8,
          material: { emissive: COLORS.warmLight, emissiveIntensity: 1.1 }
        }),
        x,
        3.15,
        0
      )
      this.glow(group, COLORS.warmLight, x, 3.15, 0, 1.5)
    }
  }

  private buildTicketBooth(group: THREE.Group): void {
    this.place(group, this.roundBox(4.2, 2.5, 3.6, COLORS.cream, { radius: 0.18 }), 0, 1.25, 0)
    this.place(group, this.roundBox(4.8, 0.32, 4.2, COLORS.pink, { radius: 0.08 }), 0, 2.66, 0)
    this.place(group, this.roundBox(4.9, 0.16, 4.3, COLORS.gold, { radius: 0.04, cast: false }), 0, 2.84, 0)
    this.place(
      group,
      this.roundBox(2.2, 1.1, 0.08, COLORS.glass, {
        radius: 0.03,
        material: { emissive: COLORS.glass, emissiveIntensity: 0.35, roughness: 0.2 },
        cast: false
      }),
      0,
      1.8,
      1.82
    )
    this.place(group, this.roundBox(2.5, 0.16, 0.62, COLORS.wood), 0, 1.18, 2.0)
    this.place(group, this.roundBox(0.9, 1.8, 0.08, COLORS.lavender), 1.45, 0.9, 1.82)
    this.place(group, this.sphere(0.1, COLORS.gold), 1.6, 1.1, 1.9)
    this.addBoard(group, '售票处', 'sign-ticket', 0, 3.1, 1.9, 2.4, 0.85, '#ff9ebb', '#3b1730')
    this.addStringLights(
      group,
      new THREE.Vector3(-2.1, 2.55, 1.9),
      new THREE.Vector3(2.1, 2.55, 1.9),
      8,
      0.18
    )
    this.glow(group, COLORS.warmLight, 0, 1.8, 2.0, 2.2)
  }

  private buildCarousel(group: THREE.Group): PropUpdater {
    this.place(group, this.cylinder(8, 8.2, 0.5, 40, COLORS.cream), 0, 0.25, 0)
    this.place(group, this.cylinder(7.7, 7.7, 0.08, 40, COLORS.pink, { cast: false }), 0, 0.53, 0)
    this.place(group, this.torus(8.05, 0.14, COLORS.gold, { tubularSegments: 48 }), 0, 0.5, 0, Math.PI / 2)
    this.place(group, this.cylinder(0.42, 0.52, 5.8, 16, COLORS.gold), 0, 3.2, 0)

    const stripeTexture = this.assets.getCanvasTexture('carousel-stripes', 512, 128, (ctx, width, height) => {
      for (let i = 0; i < 16; i++) {
        ctx.fillStyle = i % 2 === 0 ? '#ff9ebb' : '#fff6e7'
        ctx.fillRect((i / 16) * width, 0, width / 16 + 1, height)
      }
    })
    const canopy = new THREE.Mesh(
      this.assets.getGeometry('carousel-canopy', () => new THREE.ConeGeometry(8.7, 2.3, 40, 1, true)),
      this.assets.getBasicTextureMaterial(stripeTexture, { side: THREE.DoubleSide })
    )
    canopy.position.y = 6.35
    canopy.castShadow = true
    group.add(canopy)
    this.place(group, this.torus(8.7, 0.16, COLORS.gold, { tubularSegments: 48 }), 0, 5.2, 0, Math.PI / 2)
    this.place(group, this.sphere(0.42, COLORS.gold, { segments: 12 }), 0, 7.7, 0)
    this.place(group, this.cone(0.5, 0.9, 8, COLORS.pink), 0, 7.95, 0)

    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2
      const x = Math.cos(angle) * 5.8
      const z = Math.sin(angle) * 5.8
      const horse = new THREE.Group()
      horse.position.set(x, 0, z)
      horse.rotation.y = -angle + Math.PI / 2
      const color = HIDER_PALETTES[i % HIDER_PALETTES.length].shirt
      this.place(horse, this.cylinder(0.055, 0.055, 4.6, 8, COLORS.gold), 0, 2.3, 0)
      this.place(horse, this.roundBox(1.15, 0.48, 0.42, color, { radius: 0.12 }), 0, 1.65, 0)
      this.place(horse, this.sphere(0.26, color, { segments: 12 }), 0.6, 1.9, 0)
      this.place(horse, this.roundBox(0.42, 0.3, 0.32, color, { radius: 0.1 }), 0.84, 1.82, 0)
      this.place(horse, this.sphere(0.08, COLORS.ink, { segments: 8 }), 0.68, 1.98, 0.2)
      this.place(horse, this.roundBox(0.42, 0.1, 0.5, COLORS.cream, { radius: 0.04 }), 0, 1.94, 0)
      for (const lx of [-0.36, 0.36]) {
        for (const lz of [-0.16, 0.16]) {
          this.place(horse, this.cylinder(0.045, 0.06, 0.62, 6, color), lx, 1.2, lz, 0, 0, lx > 0 ? -0.12 : 0.12)
        }
      }
      this.place(horse, this.cylinder(0.05, 0.08, 0.45, 6, COLORS.pinkDeep), -0.62, 1.7, 0, 0, 0, 0.6)
      group.add(horse)
    }

    for (let i = 0; i < 20; i++) {
      const angle = (i / 20) * Math.PI * 2
      const bulb = this.sphere(0.085, COLORS.warmLight, {
        segments: 8,
        material: { emissive: COLORS.warmLight, emissiveIntensity: 1.4 }
      })
      bulb.position.set(Math.cos(angle) * 8.25, 5.28, Math.sin(angle) * 8.25)
      group.add(bulb)
      if (i % 2 === 0) this.glow(group, COLORS.warmLight, bulb.position.x, bulb.position.y, bulb.position.z, 0.8)
    }

    return (dt) => {
      group.rotation.y += dt * 0.11
    }
  }

  private buildFerrisWheel(group: THREE.Group): PropUpdater {
    const hubHeight = 12
    this.place(group, this.cylinder(2.4, 3.2, 0.6, 16, COLORS.stoneDark), 0, 0.3, 0)
    for (const x of [-3.2, 3.2]) {
      for (const z of [-2.2, 2.2]) {
        this.cylinderBetween(
          group,
          new THREE.Vector3(x * 1.3, 0.5, z * 1.3),
          new THREE.Vector3(x * 0.35, hubHeight, z * 0.35),
          0.18,
          COLORS.inkSoft,
          true
        )
      }
    }
    this.place(group, this.cylinder(0.65, 0.65, 0.9, 16, COLORS.gold), 0, hubHeight, 0, Math.PI / 2)

    const wheel = new THREE.Group()
    wheel.position.set(0, hubHeight, 0)
    group.add(wheel)
    this.place(wheel, this.torus(8, 0.24, COLORS.gold, { tubularSegments: 64 }), 0, 0, 0)
    this.place(wheel, this.torus(6.2, 0.1, COLORS.cream, { tubularSegments: 48 }), 0, 0, 0)
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2
      const x = Math.cos(angle) * 4
      const y = Math.sin(angle) * 4
      const spoke = this.cylinder(0.07, 0.07, 8, 6, COLORS.cream, { cast: false })
      spoke.position.set(x, y, 0)
      spoke.rotation.z = angle - Math.PI / 2
      wheel.add(spoke)
    }

    const gondolas: THREE.Group[] = []
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2
      const gondola = new THREE.Group()
      gondola.position.set(Math.cos(angle) * 8, Math.sin(angle) * 8, 0)
      wheel.add(gondola)
      this.place(gondola, this.cylinder(0.05, 0.05, 0.6, 6, COLORS.inkSoft, { cast: false }), 0, -0.3, 0)
      this.place(
        gondola,
        this.roundBox(1.15, 0.95, 0.95, CANDY[i % CANDY.length], { radius: 0.14 }),
        0,
        -1.05,
        0
      )
      this.place(gondola, this.cylinder(0.62, 0.72, 0.18, 12, COLORS.cream), 0, -0.52, 0)
      this.place(
        gondola,
        this.roundBox(0.5, 0.34, 0.06, COLORS.warmLight, {
          radius: 0.04,
          material: { emissive: COLORS.warmLight, emissiveIntensity: 0.5 },
          cast: false
        }),
        0,
        -0.98,
        0.5
      )
      gondolas.push(gondola)
    }

    for (let i = 0; i < 24; i++) {
      const angle = (i / 24) * Math.PI * 2
      const bulb = this.sphere(0.075, COLORS.warmLight, {
        segments: 6,
        material: { emissive: COLORS.warmLight, emissiveIntensity: 1.5 }
      })
      bulb.position.set(Math.cos(angle) * 8.3, Math.sin(angle) * 8.3, 0)
      wheel.add(bulb)
    }

    const glowSprite = this.glow(group, COLORS.pink, 0, hubHeight, -0.5, 18)
    glowSprite.material.opacity = 0.22

    let angle = 0
    return (dt) => {
      angle += dt * 0.075
      wheel.rotation.z = angle
      for (const gondola of gondolas) gondola.rotation.z = -angle
      glowSprite.material.opacity = 0.2 + Math.sin(angle * 2) * 0.03
    }
  }

  private buildStall(group: THREE.Group, spec: PropSpec): void {
    const palettes: Record<string, { main: number; accent: number; text: string; key: string }> = {
      candy: { main: COLORS.pink, accent: COLORS.cream, text: '糖果屋', key: 'candy' },
      ticket: { main: COLORS.sky, accent: COLORS.cream, text: '售票亭', key: 'ticket' },
      prize: { main: COLORS.lavender, accent: COLORS.pink, text: '奖品铺', key: 'prize' },
      popcorn: { main: COLORS.gold, accent: COLORS.cream, text: '爆米花', key: 'popcorn' },
      cotton: { main: COLORS.mint, accent: COLORS.pink, text: '棉花糖', key: 'cotton' }
    }
    const palette = palettes[spec.variant ?? 'candy'] ?? palettes.candy
    this.place(group, this.roundBox(3.8, 1.0, 2.2, COLORS.cream, { radius: 0.1 }), 0, 0.5, 0)
    this.place(group, this.roundBox(3.9, 0.18, 2.3, palette.main, { radius: 0.05 }), 0, 1.06, 0)
    this.place(group, this.roundBox(3.8, 2.3, 0.16, palette.accent, { radius: 0.06 }), 0, 2.0, -1.0)
    for (const x of [-1.75, 1.75]) {
      this.place(group, this.cylinder(0.08, 0.1, 2.8, 8, COLORS.inkSoft), x, 1.4, 0.8)
    }
    for (let i = 0; i < 6; i++) {
      this.place(
        group,
        this.roundBox(3.95 / 6, 0.12, 2.4, i % 2 === 0 ? palette.main : palette.accent, {
          radius: 0.03
        }),
        -1.975 + (i + 0.5) * (3.95 / 6),
        2.85,
        0.2,
        -0.12
      )
    }
    this.addBoard(group, palette.text, `stall-${palette.key}`, 0, 3.45, 0.9, 2.8, 0.9, '#fff6e7', '#2b2140')
    this.addStringLights(
      group,
      new THREE.Vector3(-1.9, 2.6, 0.9),
      new THREE.Vector3(1.9, 2.6, 0.9),
      8,
      0.16
    )
    this.addGoods(group, palette.main, palette.accent)
    this.glow(group, palette.main, 0, 1.6, 0.75, 2.2)
  }

  private addGoods(group: THREE.Group, main: number, accent: number): void {
    for (let i = 0; i < 7; i++) {
      const x = -1.4 + i * 0.46
      const color = i % 2 === 0 ? main : accent
      const item =
        i % 3 === 0
          ? this.roundBox(0.3, 0.28, 0.3, color, { radius: 0.06, cast: false })
          : this.sphere(0.16 + (i % 2) * 0.03, color, { segments: 8, cast: false })
      item.position.set(x, 1.24 + (i % 2) * 0.06, 0.35)
      group.add(item)
    }
    this.place(group, this.roundBox(0.5, 0.34, 0.34, COLORS.cream, { radius: 0.06, cast: false }), 1.25, 1.24, 0.4)
  }

  private buildBalloonCart(group: THREE.Group, spec: PropSpec): PropUpdater {
    const main = spec.variant === 'pink' ? COLORS.pink : COLORS.gold
    this.place(group, this.roundBox(2.4, 0.85, 1.6, main, { radius: 0.1 }), 0, 0.65, 0)
    this.place(group, this.roundBox(2.5, 0.16, 1.7, COLORS.cream, { radius: 0.05 }), 0, 1.12, 0)
    for (const x of [-0.85, 0.85]) {
      for (const z of [-0.55, 0.55]) {
        const wheel = this.cylinder(0.2, 0.2, 0.12, 10, COLORS.ink)
        wheel.rotation.x = Math.PI / 2
        wheel.position.set(x, 0.24, z)
        group.add(wheel)
      }
    }
    this.place(group, this.cylinder(0.06, 0.08, 1.5, 8, COLORS.woodDark), 0, 1.8, 0)
    const balloonGroup = new THREE.Group()
    balloonGroup.position.set(0, 2.7, 0)
    group.add(balloonGroup)
    for (let i = 0; i < 9; i++) {
      const angle = (i / 9) * Math.PI * 2
      const radius = 0.5 + (i % 3) * 0.26
      const x = Math.cos(angle) * radius
      const z = Math.sin(angle) * radius
      const y = 0.4 + (i % 4) * 0.32
      const balloon = this.sphere(0.28 + (i % 3) * 0.05, CANDY[i % CANDY.length], {
        segments: 12,
        material: { roughness: 0.55 }
      })
      balloon.scale.y = 1.18
      balloon.position.set(x, y, z)
      balloonGroup.add(balloon)
      this.cylinderBetween(
        balloonGroup,
        new THREE.Vector3(0, -1.1, 0),
        new THREE.Vector3(x, y - 0.1, z),
        0.012,
        COLORS.cream
      )
    }
    this.addBoard(group, '气球', 'sign-balloon', 0, 1.55, 0.82, 1.2, 0.5, '#ff9ebb', '#3b1730')
    this.glow(group, COLORS.pink, 0, 3.2, 0, 2.6)

    return (_dt, elapsed) => {
      balloonGroup.position.y = 2.7 + Math.sin(elapsed * 1.4) * 0.1
    }
  }

  private buildHedge(group: THREE.Group, spec: PropSpec): void {
    const length = spec.length ?? 8
    const green = spec.variant === 'pink' ? COLORS.leaf : spec.variant === 'rose' ? COLORS.leafDeep : COLORS.leaf
    this.place(group, this.roundBox(length, 1.35, 1.2, green, { radius: 0.25 }), 0, 0.68, 0)
    this.place(group, this.roundBox(length * 0.94, 0.5, 1.05, COLORS.leafDeep, { radius: 0.2 }), 0, 1.5, 0)
    const clusters = Math.max(4, Math.round(length / 1.2))
    for (let i = 0; i < clusters; i++) {
      const x = -length / 2 + (i + 0.5) * (length / clusters)
      const clump = this.sphere(0.42 + (i % 3) * 0.08, i % 2 === 0 ? green : COLORS.leafDeep, {
        segments: 8,
        scaleY: 0.8
      })
      clump.position.set(x, 1.25 + (i % 2) * 0.18, (i % 3 - 1) * 0.22)
      group.add(clump)
    }
    if (spec.variant === 'pink' || spec.variant === 'rose') {
      this.addFlowers(group, 0, 1.75, 0, length * 0.38, 9, [COLORS.pink, COLORS.cream, COLORS.lavender])
    }
  }

  private buildFence(group: THREE.Group, spec: PropSpec): void {
    const length = spec.length ?? 8
    const posts = Math.max(2, Math.round(length / 2.4))
    const color = spec.variant === 'manor' ? COLORS.cream : spec.variant === 'park' ? COLORS.pink : COLORS.cream
    const metal = spec.variant === 'manor' ? COLORS.inkSoft : COLORS.woodDark
    for (let i = 0; i < posts; i++) {
      const x = -length / 2 + (i / (posts - 1)) * length
      this.place(group, this.cylinder(0.1, 0.13, 1.25, 8, metal), x, 0.63, 0)
      this.place(group, this.sphere(0.14, color, { segments: 8 }), x, 1.3, 0)
    }
    this.place(group, this.roundBox(length, 0.1, 0.12, color, { radius: 0.03 }), 0, 0.95, 0)
    this.place(group, this.roundBox(length, 0.08, 0.1, color, { radius: 0.03 }), 0, 0.55, 0)
  }

  private buildFountain(group: THREE.Group): PropUpdater {
    this.place(group, this.cylinder(4.0, 4.2, 0.7, 32, COLORS.stone), 0, 0.35, 0)
    this.place(group, this.torus(4.05, 0.16, COLORS.stoneDark, { tubularSegments: 48 }), 0, 0.72, 0, Math.PI / 2)
    this.place(
      group,
      this.cylinder(3.62, 3.62, 0.08, 32, COLORS.sky, {
        material: { emissive: COLORS.sky, emissiveIntensity: 0.45, transparent: true, opacity: 0.75, roughness: 0.15 }
      }),
      0,
      0.74,
      0
    )
    this.place(group, this.cylinder(0.75, 1.0, 1.2, 16, COLORS.stone), 0, 1.3, 0)
    this.place(group, this.cylinder(1.5, 1.1, 0.3, 16, COLORS.stone), 0, 1.95, 0)

    const starShape = new THREE.Shape()
    const outer = 1.0
    const inner = 0.45
    for (let i = 0; i < 10; i++) {
      const angle = (i / 10) * Math.PI * 2 - Math.PI / 2
      const radius = i % 2 === 0 ? outer : inner
      const x = Math.cos(angle) * radius
      const y = Math.sin(angle) * radius
      if (i === 0) starShape.moveTo(x, y)
      else starShape.lineTo(x, y)
    }
    starShape.closePath()
    const star = new THREE.Mesh(
      this.assets.getGeometry('fountain-star', () => new THREE.ExtrudeGeometry(starShape, { depth: 0.22, bevelEnabled: true, bevelSize: 0.05, bevelThickness: 0.05, bevelSegments: 2 })),
      this.mat(COLORS.gold, { emissive: COLORS.gold, emissiveIntensity: 0.35, metalness: 0.35, roughness: 0.4 })
    )
    star.position.set(0, 2.6, 0)
    star.castShadow = true
    group.add(star)

    const waterGroup = new THREE.Group()
    group.add(waterGroup)
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2
      const jet = this.cylinder(0.035, 0.06, 1.4, 6, COLORS.sky, {
        material: { emissive: COLORS.sky, emissiveIntensity: 0.7, transparent: true, opacity: 0.55, roughness: 0.1 },
        cast: false
      })
      jet.position.set(Math.cos(angle) * 1.35, 2.2, Math.sin(angle) * 1.35)
      jet.rotation.z = Math.cos(angle) * 0.45
      jet.rotation.x = Math.sin(angle) * 0.45
      waterGroup.add(jet)
    }
    for (let i = 0; i < 14; i++) {
      const angle = (i / 14) * Math.PI * 2
      const drop = this.sphere(0.07, COLORS.cream, {
        segments: 6,
        material: { emissive: COLORS.sky, emissiveIntensity: 0.6, transparent: true, opacity: 0.8 },
        cast: false
      })
      drop.position.set(Math.cos(angle) * (1.6 + (i % 3) * 0.5), 2.7 + (i % 4) * 0.15, Math.sin(angle) * (1.6 + (i % 3) * 0.5))
      waterGroup.add(drop)
    }
    this.glow(group, COLORS.sky, 0, 2.0, 0, 5.5)

    return (dt) => {
      waterGroup.rotation.y += dt * 0.4
      star.rotation.y += dt * 0.25
    }
  }

  private buildGreenhouse(group: THREE.Group): void {
    const halfX = 7
    const halfZ = 5
    this.place(group, this.roundBox(14.4, 0.22, 10.4, COLORS.stone, { radius: 0.06 }), 0, 0.11, 0)
    const glass = this.mat(COLORS.glass, {
      transparent: true,
      opacity: 0.2,
      roughness: 0.12,
      metalness: 0.1,
      side: THREE.DoubleSide,
      depthWrite: false
    })
    const frame = COLORS.cream
    const gate = 1.25
    const segment = (halfX - gate) / 2
    const segmentCenter = gate + segment

    // 北/南墙玻璃与门框
    for (const z of [-halfZ, halfZ]) {
      for (const x of [-segmentCenter, segmentCenter]) {
        const panel = this.flatBox(segment * 2, 3.2, 0.06, COLORS.glass, { material: { transparent: true, opacity: 0.2, roughness: 0.12, side: THREE.DoubleSide, depthWrite: false } })
        panel.material = glass
        panel.position.set(x, 1.7, z)
        group.add(panel)
        for (const px of [x - segment, x + segment]) {
          this.place(group, this.flatBox(0.1, 3.4, 0.1, frame), px, 1.7, z)
        }
      }
      for (const x of [-gate, gate]) {
        this.place(group, this.flatBox(0.12, 3.5, 0.12, frame), x, 1.75, z)
      }
      this.place(group, this.flatBox(gate * 2, 0.14, 0.12, frame), 0, 3.5, z)
    }

    // 西/东墙玻璃与门框
    for (const x of [-halfX, halfX]) {
      for (const z of [-segmentCenter, segmentCenter]) {
        const panel = this.flatBox(0.06, 3.2, segment * 2, COLORS.glass, { material: { transparent: true, opacity: 0.2, roughness: 0.12, side: THREE.DoubleSide, depthWrite: false } })
        panel.material = glass
        panel.position.set(x, 1.7, z)
        group.add(panel)
        for (const pz of [z - segment, z + segment]) {
          this.place(group, this.flatBox(0.1, 3.4, 0.1, frame), x, 1.7, pz)
        }
      }
      for (const z of [-gate, gate]) {
        this.place(group, this.flatBox(0.12, 3.5, 0.12, frame), x, 1.75, z)
      }
      this.place(group, this.flatBox(0.12, 0.14, gate * 2, frame), x, 3.5, 0)
    }

    // 坡屋顶
    const roofMaterial = { transparent: true, opacity: 0.24, roughness: 0.1, side: THREE.DoubleSide, depthWrite: false }
    for (const z of [-2.6, 2.6]) {
      const roof = this.flatBox(14.4, 0.08, 5.6, COLORS.glass, { material: roofMaterial })
      roof.position.set(0, 4.0, z)
      roof.rotation.x = z > 0 ? -0.25 : 0.25
      group.add(roof)
    }
    this.place(group, this.flatBox(14.5, 0.12, 0.12, frame), 0, 4.7, 0)
    for (let i = -3; i <= 3; i++) {
      this.place(group, this.flatBox(0.1, 0.1, 10.4, frame), i * 2.3, 4.05, 0, 0.25)
    }

    // 室内植物与灯串
    for (const [x, z] of [
      [-4.6, -2.6],
      [4.6, -2.6],
      [-4.6, 2.6],
      [4.6, 2.6],
      [0, -3.2]
    ]) {
      this.place(group, this.cylinder(0.5, 0.4, 0.6, 10, COLORS.wood), x, 0.3, z)
      this.place(group, this.sphere(0.65, COLORS.leaf, { segments: 10, scaleY: 0.9 }), x, 0.95, z)
      this.addFlowers(group, x, 1.0, z, 0.4, 4, [COLORS.pink, COLORS.cream, COLORS.lavender])
    }
    this.place(group, this.roundBox(2.4, 0.12, 1.2, COLORS.wood), 0, 0.9, 1.6)
    this.place(group, this.cylinder(0.12, 0.12, 0.8, 8, COLORS.woodDark), 0, 0.45, 1.6)
    this.addStringLights(group, new THREE.Vector3(-6, 3.2, 0), new THREE.Vector3(6, 3.2, 0), 16, 0.7)
    this.glow(group, COLORS.warmLight, 0, 2.6, 0, 5.5)
  }

  private buildGazebo(group: THREE.Group): void {
    this.place(group, this.cylinder(4.2, 4.4, 0.26, 8, COLORS.stone), 0, 0.13, 0)
    this.place(group, this.cylinder(3.8, 3.8, 0.08, 8, COLORS.cream, { cast: false }), 0, 0.3, 0)
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2
      const x = Math.cos(angle) * 3.6
      const z = Math.sin(angle) * 3.6
      this.place(group, this.cylinder(0.13, 0.16, 3.2, 8, COLORS.cream), x, 1.9, z)
      this.place(group, this.sphere(0.16, COLORS.gold, { segments: 8 }), x, 3.55, z)
    }
    this.place(group, this.cone(5.0, 1.8, 8, COLORS.lavender), 0, 4.5, 0)
    this.place(group, this.torus(4.3, 0.1, COLORS.pink, { tubularSegments: 32 }), 0, 3.6, 0, Math.PI / 2)
    this.place(group, this.sphere(0.22, COLORS.gold, { segments: 10 }), 0, 5.5, 0)
    this.place(group, this.cylinder(0.06, 0.06, 0.8, 6, COLORS.gold), 0, 6.0, 0)
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2
      const x = Math.cos(angle) * 3.3
      const z = Math.sin(angle) * 3.3
      this.place(group, this.cylinder(0.02, 0.02, 0.55, 5, COLORS.inkSoft, { cast: false }), x, 3.35, z)
      this.place(
        group,
        this.sphere(0.12, COLORS.warmLight, {
          segments: 8,
          material: { emissive: COLORS.warmLight, emissiveIntensity: 1.2 }
        }),
        x,
        3.05,
        z
      )
      this.glow(group, COLORS.warmLight, x, 3.05, z, 1.1)
    }
    this.place(group, this.roundBox(2.6, 0.14, 0.6, COLORS.wood, { radius: 0.05 }), 0, 0.75, -2.2)
    this.place(group, this.roundBox(2.6, 0.55, 0.14, COLORS.wood, { radius: 0.05 }), 0, 1.05, -2.5)
    for (const x of [-1.0, 1.0]) {
      this.place(group, this.cylinder(0.06, 0.08, 0.65, 6, COLORS.inkSoft), x, 0.38, -2.2)
    }
  }

  private buildFlowerArch(group: THREE.Group, spec: PropSpec): void {
    const rose = spec.variant === 'lilac' ? COLORS.lavender : COLORS.pink
    for (const x of [-1.8, 1.8]) {
      this.place(group, this.cylinder(0.14, 0.18, 3.2, 8, COLORS.cream), x, 1.6, 0)
      this.place(group, this.sphere(0.22, COLORS.gold, { segments: 8 }), x, 3.2, 0)
    }
    const arch = this.torus(1.8, 0.16, COLORS.cream, {
      radialSegments: 8,
      tubularSegments: 24,
      arc: Math.PI
    })
    arch.position.set(0, 3.2, 0)
    arch.rotation.z = 0
    group.add(arch)
    for (let i = 0; i <= 10; i++) {
      const angle = (i / 10) * Math.PI
      const flower = this.sphere(0.12 + (i % 3) * 0.025, i % 2 === 0 ? rose : COLORS.cream, {
        segments: 8,
        cast: false
      })
      flower.position.set(Math.cos(angle) * 1.8, 3.2 + Math.sin(angle) * 1.8, 0.12)
      group.add(flower)
    }
    this.addFlowers(group, -1.8, 0.5, 0, 0.35, 5, [rose, COLORS.cream, COLORS.leaf])
    this.addFlowers(group, 1.8, 0.5, 0, 0.35, 5, [rose, COLORS.cream, COLORS.leaf])
  }

  private buildMansion(group: THREE.Group): void {
    const wall = COLORS.paper
    const roof = COLORS.plum
    this.place(group, this.roundBox(30, 9, 2.4, wall, { radius: 0.18 }), 0, 4.5, 0)
    this.place(group, this.roundBox(10, 12, 2.8, wall, { radius: 0.16 }), 0, 6, 0.3)
    this.place(group, this.roundBox(8.5, 7.2, 2.2, COLORS.cream, { radius: 0.14 }), -11, 3.6, 0.2)
    this.place(group, this.roundBox(8.5, 7.2, 2.2, COLORS.cream, { radius: 0.14 }), 11, 3.6, 0.2)

    this.place(group, this.cone(6.8, 4.0, 4, roof), 0, 14, 0.3, 0, Math.PI / 4)
    this.place(group, this.cone(5.0, 2.6, 4, roof), -11, 8.5, 0.2, 0, Math.PI / 4)
    this.place(group, this.cone(5.0, 2.6, 4, roof), 11, 8.5, 0.2, 0, Math.PI / 4)
    this.place(group, this.cylinder(0.08, 0.08, 1.6, 6, COLORS.gold), 0, 16.6, 0.3)
    this.place(group, this.sphere(0.2, COLORS.gold, { segments: 10 }), 0, 17.4, 0.3)

    const windowColor = COLORS.warmLight
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 7; col++) {
        if (row === 0 && Math.abs(col - 3) < 1) continue
        const x = -12 + col * 4
        const y = 3.2 + row * 2.5
        this.place(
          group,
          this.roundBox(1.15, 1.7, 0.1, windowColor, {
            radius: 0.04,
            material: { emissive: windowColor, emissiveIntensity: 0.62, roughness: 0.35 },
            cast: false
          }),
          x,
          y,
          1.23
        )
        this.place(group, this.roundBox(1.35, 1.9, 0.06, COLORS.woodDark, { radius: 0.03, cast: false }), x, y, 1.17)
      }
    }

    this.place(group, this.roundBox(2.0, 3.2, 0.16, COLORS.woodDark, { radius: 0.06 }), 0, 1.8, 1.25)
    this.place(group, this.roundBox(1.4, 2.2, 0.08, COLORS.gold, { radius: 0.04, cast: false }), 0, 1.7, 1.35)
    this.place(group, this.roundBox(3.1, 0.2, 1.2, COLORS.stone, { radius: 0.04 }), 0, 0.1, 1.7)
    for (const x of [-2.4, 2.4]) {
      this.place(group, this.cylinder(0.24, 0.3, 4.4, 10, COLORS.cream), x, 2.2, 1.6)
      this.place(group, this.sphere(0.3, COLORS.gold, { segments: 8 }), x, 4.5, 1.6)
    }
    this.place(group, this.roundBox(8, 0.22, 1.4, COLORS.cream, { radius: 0.05 }), 0, 6.4, 1.7)
    for (const x of [-3.4, -1.2, 1.2, 3.4]) {
      this.place(group, this.cylinder(0.07, 0.08, 0.8, 6, COLORS.gold), x, 6.9, 1.9)
    }

    for (let i = 0; i < 18; i++) {
      const x = -14 + (i % 9) * 3.4
      const y = 1.2 + Math.floor(i / 9) * 4.2
      const vine = this.sphere(0.24, COLORS.leafDeep, { segments: 6, scaleY: 1.4 })
      vine.position.set(x, y, 1.28)
      group.add(vine)
    }
    this.glow(group, COLORS.warmLight, 0, 7.5, 1.6, 8)
  }

  private buildTree(group: THREE.Group, spec: PropSpec): PropUpdater {
    const foliageColor =
      spec.variant === 'pink' ? COLORS.pink : spec.variant === 'gold' ? COLORS.gold : COLORS.leaf
    const darkFoliage = spec.variant === 'pink' ? COLORS.pinkDeep : spec.variant === 'gold' ? COLORS.goldDeep : COLORS.leafDeep
    this.place(group, this.cylinder(0.3, 0.46, 2.4, 8, COLORS.woodDark), 0, 1.2, 0)
    this.place(group, this.cylinder(0.12, 0.18, 1.4, 6, COLORS.woodDark), -0.45, 2.4, 0, 0, 0, 0.5)
    this.place(group, this.cylinder(0.1, 0.16, 1.2, 6, COLORS.woodDark), 0.45, 2.5, 0, 0, 0, -0.45)
    const foliage = new THREE.Group()
    foliage.position.y = 0.2
    group.add(foliage)
    const clusters = [
      [0, 3.1, 0, 1.15],
      [-0.7, 2.9, 0.3, 0.8],
      [0.72, 3.0, -0.2, 0.85],
      [-0.25, 3.7, -0.25, 0.8],
      [0.35, 3.55, 0.35, 0.75]
    ]
    for (let i = 0; i < clusters.length; i++) {
      const [x, y, z, size] = clusters[i]
      const clump = this.sphere(size, i % 2 === 0 ? foliageColor : darkFoliage, {
        segments: 10,
        scaleY: 0.86
      })
      clump.position.set(x, y, z)
      foliage.add(clump)
    }
    this.addFlowers(foliage, 0, 3.1, 0, 1.2, 8, [COLORS.cream, COLORS.pink, COLORS.gold])
    this.glow(group, foliageColor, 0, 3.4, 0, 2.4)

    const phase = spec.x * 0.13 + spec.z * 0.17
    return (_dt, elapsed) => {
      foliage.rotation.z = Math.sin(elapsed * 0.7 + phase) * 0.025
      foliage.rotation.x = Math.cos(elapsed * 0.55 + phase) * 0.018
    }
  }

  private buildRock(group: THREE.Group): void {
    const rockGeometry = this.assets.getGeometry('rock', () => new THREE.DodecahedronGeometry(1.2, 0))
    const rock = new THREE.Mesh(rockGeometry, this.mat(COLORS.stoneDark, { flatShading: true, roughness: 0.9 }))
    rock.scale.set(1.25, 0.72, 1.05)
    rock.position.y = 0.6
    rock.castShadow = true
    group.add(rock)
    for (let i = 0; i < 4; i++) {
      const moss = this.sphere(0.35, COLORS.leaf, { segments: 7, scaleY: 0.45, cast: false })
      moss.position.set(-0.6 + i * 0.4, 0.95 + (i % 2) * 0.1, -0.2 + (i % 3) * 0.3)
      group.add(moss)
    }
    this.addFlowers(group, 0.3, 0.7, 0.5, 0.5, 4, [COLORS.pink, COLORS.cream])
  }

  private buildPicnicTable(group: THREE.Group, spec: PropSpec): void {
    const top = spec.variant === 'lavender' ? COLORS.lavender : spec.variant === 'mint' ? COLORS.mint : COLORS.wood
    this.place(group, this.roundBox(3.2, 0.16, 1.6, top, { radius: 0.05 }), 0, 0.92, 0)
    this.place(group, this.roundBox(3.3, 0.06, 1.7, COLORS.cream, { radius: 0.03, cast: false }), 0, 1.01, 0)
    for (const z of [-1.05, 1.05]) {
      this.place(group, this.roundBox(3.2, 0.14, 0.52, COLORS.wood, { radius: 0.04 }), 0, 0.55, z)
    }
    for (const x of [-1.2, 1.2]) {
      this.place(group, this.roundBox(0.14, 0.9, 1.9, COLORS.woodDark, { radius: 0.04 }), x, 0.45, 0, 0.2)
    }
    this.place(group, this.cylinder(0.16, 0.2, 0.28, 10, COLORS.pink), 0, 1.18, 0)
    for (const [x, z] of [
      [-0.55, 0.25],
      [0.55, 0.25],
      [-0.55, -0.25]
    ]) {
      this.place(group, this.cylinder(0.1, 0.08, 0.12, 8, COLORS.cream), x, 1.1, z)
    }
  }

  private buildSign(group: THREE.Group, spec: PropSpec): void {
    const text =
      spec.variant === 'park'
        ? '游乐园'
        : spec.variant === 'manor'
          ? '庄园'
          : spec.variant === 'station'
            ? '火车站'
            : '欢迎'
    this.place(group, this.cylinder(0.1, 0.14, 2.4, 8, COLORS.woodDark), 0, 1.2, 0)
    this.place(group, this.roundBox(2.8, 1.15, 0.14, COLORS.wood), 0, 2.3, 0)
    this.addBoard(group, text, `sign-${spec.variant ?? 'welcome'}`, 0, 2.3, 0.1, 2.6, 1.0, '#fff6e7', '#2b2140')
    this.place(group, this.sphere(0.18, COLORS.gold, { segments: 8 }), 0, 3.0, 0)
    this.glow(group, COLORS.gold, 0, 3.0, 0, 1.2)
  }

  private buildTeacup(group: THREE.Group, spec: PropSpec): PropUpdater {
    const color = spec.variant === 'mint' ? COLORS.mint : COLORS.pink
    this.place(group, this.cylinder(1.62, 1.72, 0.16, 24, COLORS.cream), 0, 0.08, 0)
    this.place(group, this.cylinder(0.95, 1.05, 0.85, 24, color), 0, 0.55, 0)
    this.place(group, this.cylinder(0.88, 0.88, 0.06, 24, COLORS.cream, { cast: false }), 0, 0.98, 0)
    this.place(group, this.torus(0.55, 0.12, color, { tubularSegments: 24, arc: Math.PI * 1.35 }), 1.1, 0.7, 0, Math.PI / 2, 0, -0.3)
    this.place(group, this.cylinder(0.06, 0.08, 0.3, 8, COLORS.gold), 0, 1.14, 0)
    this.place(group, this.sphere(0.12, COLORS.gold, { segments: 8 }), 0, 1.32, 0)
    this.place(group, this.cylinder(0.08, 0.06, 0.6, 8, COLORS.cream), 1.12, 1.2, 0.15, 0.6, 0, -0.5)
    this.glow(group, color, 0, 1.0, 0, 2.4)
    return (dt) => {
      group.rotation.y += dt * 0.25
    }
  }
}
