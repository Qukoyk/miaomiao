import * as THREE from 'three'
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js'
import type { MapConfig, HidingSpot } from '../config/maps/types'
import type { QualityLevel } from '../config/types'
import { COLORS } from '../config/theme'
import type { DisposalBag, SharedAssets } from '../core/Disposal'
import { hashString, mulberry32 } from '../utils/rng'
import { CollisionWorld } from './CollisionWorld'
import { NavGrid } from './NavGrid'
import { buildMapColliders } from './mapCollision'
import { PropKit, type BuiltProp } from './PropKit'
import { Sky } from './Sky'
import { Lighting } from './Lighting'

interface AmbientField {
  points: THREE.Points
  material: THREE.PointsMaterial
  base: Float32Array
  phase: Float32Array
  kind: 'firefly' | 'petal'
}

/** 一局的地图实例：视觉、碰撞、导航、天空与灯光。 */
export class World {
  readonly map: MapConfig
  readonly group = new THREE.Group()
  readonly collision: CollisionWorld
  readonly nav: NavGrid
  readonly hidingSpots: HidingSpot[]
  readonly sky: Sky
  readonly lighting: Lighting

  private readonly scene: THREE.Scene
  private readonly animated: BuiltProp[] = []
  private readonly ambient: AmbientField[] = []

  constructor(
    scene: THREE.Scene,
    map: MapConfig,
    quality: QualityLevel,
    assets: SharedAssets,
    bag: DisposalBag
  ) {
    this.scene = scene
    this.map = map
    this.hidingSpots = map.hidingSpots
    this.collision = new CollisionWorld(map.bounds)
    for (const spec of buildMapColliders(map)) this.collision.addSpec(spec)
    this.nav = new NavGrid(map.bounds, this.collision)

    scene.background = new THREE.Color(map.sky.top)
    scene.fog = new THREE.Fog(map.sky.fog, 38, 108)

    this.group.name = `world-${map.id}`
    scene.add(this.group)

    this.buildGround(assets, bag)
    const propKit = new PropKit(assets)
    const staticProps: THREE.Group[] = []
    for (const spec of map.props) {
      const built = propKit.build(spec)
      this.group.add(built.group)
      if (built.update) {
        if (built.mergeable !== false) mergePropMeshes(built.group, bag)
        this.animated.push(built)
      } else {
        staticProps.push(built.group)
      }
    }
    const jail = propKit.buildJail(map.jail)
    this.group.add(jail.group)
    staticProps.push(jail.group)
    if (jail.update) this.animated.push(jail)
    mergeStaticProps(this.group, staticProps, bag)

    this.sky = new Sky(assets, map.sky, quality)
    this.group.add(this.sky.group)

    const lampPositions = map.props
      .filter((prop) => prop.kind === 'lamp')
      .map((prop) => ({ x: prop.x, z: prop.z }))
    this.lighting = new Lighting(map.sky, quality, lampPositions, map.jail.center)
    this.group.add(this.lighting.group)

    this.buildAmbient(assets, bag, quality)
  }

  update(dt: number, elapsed: number): void {
    for (const item of this.animated) item.update?.(dt, elapsed)
    this.sky.update(dt, elapsed)
    this.lighting.update(elapsed)

    for (const field of this.ambient) {
      const position = field.points.geometry.getAttribute('position') as THREE.BufferAttribute
      const array = position.array as Float32Array
      for (let i = 0; i < field.phase.length; i++) {
        const baseIndex = i * 3
        if (field.kind === 'firefly') {
          const phase = field.phase[i]
          array[baseIndex] = field.base[baseIndex] + Math.sin(elapsed * 0.45 + phase) * 0.8
          array[baseIndex + 1] = field.base[baseIndex + 1] + Math.sin(elapsed * 1.1 + phase) * 0.45
          array[baseIndex + 2] = field.base[baseIndex + 2] + Math.cos(elapsed * 0.38 + phase) * 0.7
        } else {
          array[baseIndex + 1] = field.base[baseIndex + 1] - ((elapsed * 0.55 + field.phase[i] * 3) % 18)
          array[baseIndex] = field.base[baseIndex] + Math.sin(elapsed * 0.6 + field.phase[i]) * 1.6
        }
      }
      position.needsUpdate = true
    }
  }

  dispose(): void {
    this.sky.dispose()
    this.scene.remove(this.group)
    this.group.clear()
    this.animated.length = 0
    this.ambient.length = 0
  }

  private buildGround(assets: SharedAssets, bag: DisposalBag): void {
    const width = this.map.bounds.maxX - this.map.bounds.minX
    const depth = this.map.bounds.maxZ - this.map.bounds.minZ
    const textureHeight = Math.round((1024 * depth) / width)
    const texture = assets.getCanvasTexture(
      `ground-${this.map.id}`,
      1024,
      textureHeight,
      (ctx, w, h) => drawGround(ctx, w, h, this.map)
    )
    texture.anisotropy = 8

    const groundMaterial = new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.92,
      metalness: 0.02
    })
    bag.track(groundMaterial)

    const groundGeometry = assets.getGeometry(
      `ground-plane-${this.map.id}`,
      () => new THREE.PlaneGeometry(width, depth)
    )
    const ground = new THREE.Mesh(groundGeometry, groundMaterial)
    ground.rotation.x = -Math.PI / 2
    ground.position.set(
      (this.map.bounds.minX + this.map.bounds.maxX) / 2,
      0.015,
      (this.map.bounds.minZ + this.map.bounds.maxZ) / 2
    )
    ground.receiveShadow = true
    this.group.add(ground)

    const slabGeometry = assets.getGeometry(
      `ground-slab-${this.map.id}`,
      () => new THREE.BoxGeometry(width + 3, 0.5, depth + 3)
    )
    const slab = new THREE.Mesh(slabGeometry, assets.getMaterial(COLORS.nightDeep, { roughness: 0.95 }))
    slab.position.set(0, -0.25, 0)
    slab.receiveShadow = true
    this.group.add(slab)
  }

  private buildAmbient(assets: SharedAssets, bag: DisposalBag, quality: QualityLevel): void {
    const fireflyCount =
      quality === 'high'
        ? this.map.fireflies
        : quality === 'medium'
          ? Math.round(this.map.fireflies * 0.65)
          : Math.round(this.map.fireflies * 0.4)
    if (fireflyCount > 0) {
      const texture = assets.getCanvasTexture('glow-soft', 128, 128, (ctx, width, height) => {
        const gradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width / 2)
        gradient.addColorStop(0, 'rgba(255,255,255,1)')
        gradient.addColorStop(0.35, 'rgba(255,255,255,0.55)')
        gradient.addColorStop(1, 'rgba(255,255,255,0)')
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, width, height)
      })
      const material = new THREE.PointsMaterial({
        map: texture,
        color: COLORS.warmLight,
        size: 0.34,
        transparent: true,
        opacity: 0.8,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true
      })
      bag.track(material)
      const { positions, phase } = scatter(this.map, fireflyCount, 1.0, 2.8, 0.3)
      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute('position', new THREE.BufferAttribute(positions.slice(), 3))
      bag.track(geometry)
      const points = new THREE.Points(geometry, material)
      this.group.add(points)
      this.ambient.push({ points, material, base: positions, phase, kind: 'firefly' })
    }

    const petalCount =
      quality === 'high'
        ? this.map.petals
        : quality === 'medium'
          ? Math.round(this.map.petals * 0.6)
          : Math.round(this.map.petals * 0.35)
    if (petalCount > 0) {
      const texture = assets.getCanvasTexture('petal-soft', 64, 64, (ctx, width, height) => {
        ctx.clearRect(0, 0, width, height)
        ctx.fillStyle = 'rgba(255,255,255,1)'
        ctx.beginPath()
        ctx.ellipse(width / 2, height / 2, width * 0.28, width * 0.16, Math.PI / 4, 0, Math.PI * 2)
        ctx.fill()
      })
      const material = new THREE.PointsMaterial({
        map: texture,
        color: 0xffc4d6,
        size: 0.28,
        transparent: true,
        opacity: 0.65,
        depthWrite: false,
        sizeAttenuation: true
      })
      bag.track(material)
      const { positions, phase } = scatter(this.map, petalCount, 8, 12, 1.5)
      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute('position', new THREE.BufferAttribute(positions.slice(), 3))
      bag.track(geometry)
      const points = new THREE.Points(geometry, material)
      this.group.add(points)
      this.ambient.push({ points, material, base: positions, phase, kind: 'petal' })
    }
  }
}

function scatter(
  map: MapConfig,
  count: number,
  minY: number,
  maxY: number,
  margin: number
): { positions: Float32Array; phase: Float32Array } {
  const rng = mulberry32(hashString(map.id))
  const positions = new Float32Array(count * 3)
  const phase = new Float32Array(count)
  for (let i = 0; i < count; i++) {
    positions[i * 3] = map.bounds.minX + margin + rng() * (map.bounds.maxX - map.bounds.minX - margin * 2)
    positions[i * 3 + 1] = minY + rng() * (maxY - minY)
    positions[i * 3 + 2] = map.bounds.minZ + margin + rng() * (map.bounds.maxZ - map.bounds.minZ - margin * 2)
    phase[i] = rng() * Math.PI * 2
  }
  return { positions, phase }
}

function css(color: number, alpha = 1): string {
  const r = (color >> 16) & 0xff
  const g = (color >> 8) & 0xff
  const b = color & 0xff
  return `rgba(${r},${g},${b},${alpha})`
}

function drawGround(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  map: MapConfig
): void {
  const rng = mulberry32(hashString(map.id))
  const { base, accent, path, detail } = map.ground

  ctx.fillStyle = css(base)
  ctx.fillRect(0, 0, width, height)

  // 柔和的色块，避免大面积纯色
  for (let i = 0; i < 18; i++) {
    const x = rng() * width
    const y = rng() * height
    const r = 40 + rng() * 130
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, r)
    gradient.addColorStop(0, css(i % 2 === 0 ? detail : accent, 0.1))
    gradient.addColorStop(1, css(i % 2 === 0 ? detail : accent, 0))
    ctx.fillStyle = gradient
    ctx.fillRect(x - r, y - r, r * 2, r * 2)
  }

  const toX = (x: number): number =>
    ((x - map.bounds.minX) / (map.bounds.maxX - map.bounds.minX)) * width
  const toY = (z: number): number =>
    ((z - map.bounds.minZ) / (map.bounds.maxZ - map.bounds.minZ)) * height

  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'

  if (map.id === 'station') {
    // 月台铺装
    ctx.fillStyle = css(path, 0.72)
    roundedRect(ctx, width * 0.04, height * 0.08, width * 0.92, height * 0.84, 26)
    ctx.fill()
    ctx.strokeStyle = css(COLORS.cream, 0.35)
    ctx.lineWidth = 4
    roundedRect(ctx, width * 0.045, height * 0.085, width * 0.91, height * 0.83, 24)
    ctx.stroke()

    // 铺装分格
    ctx.strokeStyle = css(COLORS.cream, 0.14)
    ctx.lineWidth = 2
    for (let x = 0.08; x < 1; x += 0.08) {
      ctx.beginPath()
      ctx.moveTo(width * x, height * 0.1)
      ctx.lineTo(width * x, height * 0.9)
      ctx.stroke()
    }
    for (let y = 0.12; y < 1; y += 0.12) {
      ctx.beginPath()
      ctx.moveTo(width * 0.05, height * y)
      ctx.lineTo(width * 0.95, height * y)
      ctx.stroke()
    }

    // 棋盘铺装与中央星徽
    const tile = 56
    for (let x = width * 0.06; x < width * 0.94; x += tile) {
      for (let y = height * 0.1; y < height * 0.9; y += tile) {
        const even = (Math.floor(x / tile) + Math.floor(y / tile)) % 2 === 0
        ctx.fillStyle = css(even ? COLORS.cream : COLORS.wood, even ? 0.07 : 0.035)
        ctx.fillRect(x, y, tile, tile)
      }
    }

    const medX = toX(0)
    const medY = toY(0)
    ctx.strokeStyle = css(COLORS.gold, 0.5)
    ctx.lineWidth = 6
    ctx.beginPath()
    ctx.arc(medX, medY, 96, 0, Math.PI * 2)
    ctx.stroke()
    ctx.strokeStyle = css(COLORS.cream, 0.42)
    ctx.lineWidth = 4
    ctx.beginPath()
    ctx.arc(medX, medY, 68, 0, Math.PI * 2)
    ctx.stroke()
    ctx.fillStyle = css(COLORS.gold, 0.18)
    ctx.beginPath()
    for (let i = 0; i < 16; i++) {
      const angle = (i / 16) * Math.PI * 2 - Math.PI / 2
      const radius = i % 2 === 0 ? 58 : 25
      const x = medX + Math.cos(angle) * radius
      const y = medY + Math.sin(angle) * radius
      if (i === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    }
    ctx.closePath()
    ctx.fill()

    // 黄色安全线（靠列车一侧）
    const safetyY = toY(-18.4)
    ctx.fillStyle = css(accent, 0.9)
    ctx.fillRect(width * 0.06, safetyY - 5, width * 0.88, 10)
    ctx.fillStyle = css(COLORS.cream, 0.35)
    for (let i = 0; i < 18; i++) {
      ctx.fillRect(width * 0.06 + i * (width * 0.88) / 18, safetyY - 14, 10, 5)
    }

    // 铁轨与枕木
    const trackY = toY(-24)
    ctx.fillStyle = css(COLORS.inkSoft, 0.75)
    ctx.fillRect(0, trackY - 16, width, 32)
    ctx.fillStyle = css(COLORS.woodDark, 0.8)
    for (let x = 0; x < width; x += 34) ctx.fillRect(x, trackY - 18, 18, 36)
    ctx.strokeStyle = css(COLORS.cream, 0.4)
    ctx.lineWidth = 5
    ctx.beginPath()
    ctx.moveTo(0, trackY - 9)
    ctx.lineTo(width, trackY - 9)
    ctx.moveTo(0, trackY + 9)
    ctx.lineTo(width, trackY + 9)
    ctx.stroke()

    // 花坛与站台点缀
    for (const [x, z, w, h] of [
      [-24, 8, 5, 4],
      [24, -4, 5, 4],
      [14, 18, 4, 3],
      [-6, -18, 4, 3]
    ]) {
      ctx.fillStyle = css(COLORS.leafDeep, 0.7)
      roundedRect(ctx, toX(x) - w * 6, toY(z) - h * 6, w * 12, h * 12, 18)
      ctx.fill()
      for (let i = 0; i < 8; i++) {
        ctx.fillStyle = css(i % 2 === 0 ? COLORS.pink : COLORS.cream, 0.8)
        ctx.beginPath()
        ctx.arc(toX(x) + (rng() - 0.5) * w * 10, toY(z) + (rng() - 0.5) * h * 10, 2.5, 0, Math.PI * 2)
        ctx.fill()
      }
    }
  } else if (map.id === 'park') {
    // 中央广场
    const cx = toX(0)
    const cy = toY(0)
    const radius = (9.6 / (map.bounds.maxX - map.bounds.minX)) * width
    ctx.fillStyle = css(path, 0.72)
    ctx.beginPath()
    ctx.arc(cx, cy, radius, 0, Math.PI * 2)
    ctx.fill()
    ctx.strokeStyle = css(COLORS.cream, 0.4)
    ctx.lineWidth = 5
    ctx.stroke()

    // 连接各区域的小路
    ctx.strokeStyle = css(path, 0.7)
    ctx.lineWidth = Math.max(18, width * 0.018)
    const pathPoints: Array<[number, number]> = [
      [0, 0],
      [20, 12],
      [-18, 12],
      [22, -12],
      [-20, -12],
      [10, -18],
      [14, 18],
      [-30, -22],
      [-30, 18],
      [0, 26]
    ]
    for (const [x, z] of pathPoints) {
      ctx.beginPath()
      ctx.moveTo(cx, cy)
      ctx.quadraticCurveTo((cx + toX(x)) / 2 + 30, (cy + toY(z)) / 2 - 30, toX(x), toY(z))
      ctx.stroke()
    }

    // 花圃
    for (const [x, z] of [
      [-14, 10],
      [14, 10],
      [-14, -10],
      [14, -10],
      [-30, -6],
      [30, -6]
    ]) {
      ctx.fillStyle = css(COLORS.pink, 0.16)
      ctx.beginPath()
      ctx.arc(toX(x), toY(z), 34, 0, Math.PI * 2)
      ctx.fill()
      for (let i = 0; i < 10; i++) {
        ctx.fillStyle = css(i % 2 === 0 ? COLORS.pink : COLORS.cream, 0.85)
        ctx.beginPath()
        ctx.arc(toX(x) + (rng() - 0.5) * 56, toY(z) + (rng() - 0.5) * 56, 3, 0, Math.PI * 2)
        ctx.fill()
      }
    }
  } else {
    // 庄园草坪与十字石径
    ctx.fillStyle = css(path, 0.7)
    ctx.fillRect(width * 0.44, 0, width * 0.12, height)
    ctx.fillRect(0, height * 0.44, width, height * 0.12)
    ctx.strokeStyle = css(COLORS.cream, 0.28)
    ctx.lineWidth = 4
    ctx.strokeRect(width * 0.44, 0, width * 0.12, height)
    ctx.strokeRect(0, height * 0.44, width, height * 0.12)

    // 喷泉环形路
    ctx.strokeStyle = css(path, 0.85)
    ctx.lineWidth = 22
    ctx.beginPath()
    ctx.arc(toX(0), toY(0), (5.4 / (map.bounds.maxX - map.bounds.minX)) * width, 0, Math.PI * 2)
    ctx.stroke()

    // 通往各区域的弯曲小径
    ctx.strokeStyle = css(path, 0.58)
    ctx.lineWidth = 16
    for (const [x, z] of [
      [18, 8],
      [-24, 16],
      [26, -22],
      [-32, -25],
      [0, -28]
    ]) {
      ctx.beginPath()
      ctx.moveTo(toX(0), toY(0))
      ctx.quadraticCurveTo((toX(0) + toX(x)) / 2 + 20, (toY(0) + toY(z)) / 2, toX(x), toY(z))
      ctx.stroke()
    }

    // 玫瑰花圃
    for (const [x, z, w, h] of [
      [-30, 8, 6, 4],
      [30, 10, 6, 4],
      [-12, 22, 5, 3],
      [12, -22, 5, 3],
      [-18, 8, 4, 3]
    ]) {
      ctx.fillStyle = css(COLORS.leafDeep, 0.55)
      roundedRect(ctx, toX(x) - w * 5, toY(z) - h * 5, w * 10, h * 10, 20)
      ctx.fill()
      for (let i = 0; i < 12; i++) {
        ctx.fillStyle = css(i % 3 === 0 ? COLORS.cream : COLORS.pink, 0.85)
        ctx.beginPath()
        ctx.arc(toX(x) + (rng() - 0.5) * w * 9, toY(z) + (rng() - 0.5) * h * 9, 3, 0, Math.PI * 2)
        ctx.fill()
      }
    }
  }

  // 细碎斑点，增加手绘质感
  for (let i = 0; i < 500; i++) {
    ctx.fillStyle = css(i % 2 === 0 ? COLORS.cream : COLORS.ink, 0.04)
    ctx.fillRect(rng() * width, rng() * height, 2 + rng() * 4, 2 + rng() * 4)
  }

  // 外圈柔和暗角
  const vignette = ctx.createRadialGradient(
    width / 2,
    height / 2,
    width * 0.25,
    width / 2,
    height / 2,
    width * 0.72
  )
  vignette.addColorStop(0, 'rgba(0,0,0,0)')
  vignette.addColorStop(1, 'rgba(20,12,40,0.32)')
  ctx.fillStyle = vignette
  ctx.fillRect(0, 0, width, height)
}

/**
 * 把所有静态道具的网格跨道具按材质合并到世界组。
 * Sprite / InstancedMesh 先脱出并烘焙世界变换，避免丢失灯光和灯串。
 */
function mergeStaticProps(
  worldGroup: THREE.Group,
  propGroups: THREE.Group[],
  bag: DisposalBag
): void {
  worldGroup.updateMatrixWorld(true)
  const inverseWorld = new THREE.Matrix4().copy(worldGroup.matrixWorld).invert()
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

  for (const propGroup of propGroups) {
    propGroup.updateMatrixWorld(true)

    const extras: THREE.Object3D[] = []
    propGroup.traverse((object) => {
      if (object === propGroup) return
      if (object instanceof THREE.Sprite || object instanceof THREE.InstancedMesh) {
        extras.push(object)
      }
    })
    for (const extra of extras) {
      const matrix = new THREE.Matrix4().copy(inverseWorld).multiply(extra.matrixWorld)
      extra.removeFromParent()
      matrix.decompose(extra.position, extra.quaternion, extra.scale)
      worldGroup.add(extra)
    }

    propGroup.traverse((object) => {
      if (!(object instanceof THREE.Mesh)) return
      if (object instanceof THREE.InstancedMesh) return
      if (Array.isArray(object.material)) return
      if (object.children.length > 0) return
      const geometry = object.geometry
      const signature = `${geometry.index ? 'i' : 'n'}:${Object.keys(geometry.attributes).sort().join(',')}`
      const key = `${object.material.uuid}:${object.castShadow ? 1 : 0}:${object.receiveShadow ? 1 : 0}:${signature}`
      const clone = geometry.clone()
      const matrix = new THREE.Matrix4().copy(inverseWorld).multiply(object.matrixWorld)
      clone.applyMatrix4(matrix)
      const bucket = buckets.get(key)
      if (bucket) {
        bucket.geometries.push(clone)
        bucket.meshes.push(object)
      } else {
        buckets.set(key, {
          material: object.material,
          cast: object.castShadow,
          receive: object.receiveShadow,
          geometries: [clone],
          meshes: [object]
        })
      }
    })
  }

  for (const bucket of buckets.values()) {
    if (bucket.geometries.length === 1) {
      const geometry = bucket.geometries[0]
      bag.track(geometry)
      const mesh = new THREE.Mesh(geometry, bucket.material)
      mesh.castShadow = bucket.cast
      mesh.receiveShadow = bucket.receive
      worldGroup.add(mesh)
      for (const original of bucket.meshes) original.removeFromParent()
      continue
    }
    const merged = mergeGeometries(bucket.geometries, false) as THREE.BufferGeometry | null
    if (!merged) {
      for (const geometry of bucket.geometries) geometry.dispose()
      continue
    }
    merged.computeBoundingSphere()
    merged.computeBoundingBox()
    bag.track(merged)
    const mesh = new THREE.Mesh(merged, bucket.material)
    mesh.castShadow = bucket.cast
    mesh.receiveShadow = bucket.receive
    worldGroup.add(mesh)
    for (const original of bucket.meshes) original.removeFromParent()
    for (const geometry of bucket.geometries) geometry.dispose()
  }

  for (const propGroup of propGroups) {
    let hasRemainingMesh = false
    propGroup.traverse((object) => {
      if (object instanceof THREE.Mesh) hasRemainingMesh = true
    })
    if (!hasRemainingMesh) propGroup.removeFromParent()
  }
}

/**
 * 把一个静态道具内部的网格按材质合并，保留 Sprite / InstancedMesh。
 * 道具组自身的位移/旋转/缩放会继续作用于合并后的网格。
 */
function mergePropMeshes(group: THREE.Group, bag: DisposalBag): void {
  group.updateMatrixWorld(true)
  const inverse = new THREE.Matrix4().copy(group.matrixWorld).invert()
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

  group.traverse((object) => {
    if (!(object instanceof THREE.Mesh)) return
    if (object instanceof THREE.InstancedMesh) return
    if (Array.isArray(object.material)) return
    if (object.children.length > 0) return
    const geometry = object.geometry
    const signature = `${geometry.index ? 'i' : 'n'}:${Object.keys(geometry.attributes).sort().join(',')}`
    const key = `${object.material.uuid}:${object.castShadow ? 1 : 0}:${object.receiveShadow ? 1 : 0}:${signature}`
    const clone = geometry.clone()
    const matrix = new THREE.Matrix4().copy(inverse).multiply(object.matrixWorld)
    clone.applyMatrix4(matrix)
    const bucket = buckets.get(key)
    if (bucket) {
      bucket.geometries.push(clone)
      bucket.meshes.push(object)
    } else {
      buckets.set(key, {
        material: object.material,
        cast: object.castShadow,
        receive: object.receiveShadow,
        geometries: [clone],
        meshes: [object]
      })
    }
  })

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
    merged.computeBoundingBox()
    bag.track(merged)
    const mesh = new THREE.Mesh(merged, bucket.material)
    mesh.castShadow = bucket.cast
    mesh.receiveShadow = bucket.receive
    group.add(mesh)
    for (const original of bucket.meshes) original.removeFromParent()
    for (const geometry of bucket.geometries) geometry.dispose()
  }
}

function roundedRect(
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
