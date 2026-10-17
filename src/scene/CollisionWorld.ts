import type { Bounds2 } from '../config/types'

export interface ColliderSpec {
  shape: 'box' | 'circle'
  x: number
  z: number
  halfX?: number
  halfZ?: number
  radius?: number
  blocksSight?: boolean
}

interface Collider {
  shape: 'box' | 'circle'
  minX: number
  maxX: number
  minZ: number
  maxZ: number
  x: number
  z: number
  halfX: number
  halfZ: number
  radius: number
  blocksSight: boolean
}

const CELL_SIZE = 4

/**
 * 2D 碰撞与视线查询。地面是平面，所有实体都在 XZ 平面上移动。
 */
export class CollisionWorld {
  readonly bounds: Bounds2
  private colliders: Collider[] = []
  private grid = new Map<string, number[]>()
  private queryStamp = new Uint32Array(0)
  private queryCounter = 0

  constructor(bounds: Bounds2) {
    this.bounds = bounds
  }

  addSpec(spec: ColliderSpec): void {
    if (spec.shape === 'box') {
      this.addBox(
        spec.x,
        spec.z,
        spec.halfX ?? 0.5,
        spec.halfZ ?? 0.5,
        spec.blocksSight ?? true
      )
    } else {
      this.addCircle(
        spec.x,
        spec.z,
        spec.radius ?? 0.5,
        spec.blocksSight ?? true
      )
    }
  }

  addBox(
    x: number,
    z: number,
    halfX: number,
    halfZ: number,
    blocksSight = true
  ): void {
    this.pushCollider({
      shape: 'box',
      x,
      z,
      halfX,
      halfZ,
      radius: Math.hypot(halfX, halfZ),
      minX: x - halfX,
      maxX: x + halfX,
      minZ: z - halfZ,
      maxZ: z + halfZ,
      blocksSight
    })
  }

  addCircle(x: number, z: number, radius: number, blocksSight = true): void {
    this.pushCollider({
      shape: 'circle',
      x,
      z,
      halfX: radius,
      halfZ: radius,
      radius,
      minX: x - radius,
      maxX: x + radius,
      minZ: z - radius,
      maxZ: z + radius,
      blocksSight
    })
  }

  get count(): number {
    return this.colliders.length
  }

  get allColliders(): readonly ColliderSpec[] {
    return this.colliders.map((collider) => ({
      shape: collider.shape,
      x: collider.x,
      z: collider.z,
      halfX: collider.halfX,
      halfZ: collider.halfZ,
      radius: collider.radius,
      blocksSight: collider.blocksSight
    }))
  }

  /** 半径为 radius 的圆心是否可以站在 (x,z)。 */
  blocksCircle(x: number, z: number, radius: number): boolean {
    if (
      x - radius < this.bounds.minX ||
      x + radius > this.bounds.maxX ||
      z - radius < this.bounds.minZ ||
      z + radius > this.bounds.maxZ
    ) {
      return true
    }

    const candidates = this.query(x, z, radius)
    for (const index of candidates) {
      const collider = this.colliders[index]
      if (collider.shape === 'circle') {
        const minDist = collider.radius + radius
        if (
          (x - collider.x) * (x - collider.x) +
            (z - collider.z) * (z - collider.z) <
          minDist * minDist
        ) {
          return true
        }
      } else if (
        x > collider.minX - radius &&
        x < collider.maxX + radius &&
        z > collider.minZ - radius &&
        z < collider.maxZ + radius
      ) {
        return true
      }
    }

    return false
  }

  /** 两点之间是否被高遮挡物阻挡（用于鬼的视线判定）。 */
  segmentBlocked(ax: number, az: number, bx: number, bz: number): boolean {
    for (const collider of this.colliders) {
      if (!collider.blocksSight) continue
      if (this.segmentIntersectsCollider(ax, az, bx, bz, collider)) return true
    }
    return false
  }

  /**
   * 从 a 到 b 的线段上第一个碰撞点参数 t（0..1）。
   * 用于第三人称相机避障。
   */
  segmentHit(ax: number, az: number, bx: number, bz: number, sightOnly = false): number | null {
    let nearest: number | null = null
    for (const collider of this.colliders) {
      if (sightOnly && !collider.blocksSight) continue
      const t = this.segmentColliderT(ax, az, bx, bz, collider)
      if (t !== null && (nearest === null || t < nearest)) {
        nearest = t
      }
    }
    return nearest
  }

  private pushCollider(collider: Collider): void {
    const index = this.colliders.length
    this.colliders.push(collider)

    const minCol = Math.floor(collider.minX / CELL_SIZE)
    const maxCol = Math.floor(collider.maxX / CELL_SIZE)
    const minRow = Math.floor(collider.minZ / CELL_SIZE)
    const maxRow = Math.floor(collider.maxZ / CELL_SIZE)

    for (let col = minCol; col <= maxCol; col++) {
      for (let row = minRow; row <= maxRow; row++) {
        const key = `${col},${row}`
        let bucket = this.grid.get(key)
        if (!bucket) {
          bucket = []
          this.grid.set(key, bucket)
        }
        bucket.push(index)
      }
    }
  }

  private query(x: number, z: number, radius: number): number[] {
    if (this.queryStamp.length !== this.colliders.length) {
      this.queryStamp = new Uint32Array(this.colliders.length)
    }

    this.queryCounter = (this.queryCounter + 1) >>> 0
    if (this.queryCounter === 0) {
      this.queryStamp.fill(0)
      this.queryCounter = 1
    }

    const minCol = Math.floor((x - radius) / CELL_SIZE)
    const maxCol = Math.floor((x + radius) / CELL_SIZE)
    const minRow = Math.floor((z - radius) / CELL_SIZE)
    const maxRow = Math.floor((z + radius) / CELL_SIZE)
    const result: number[] = []

    for (let col = minCol; col <= maxCol; col++) {
      for (let row = minRow; row <= maxRow; row++) {
        const bucket = this.grid.get(`${col},${row}`)
        if (!bucket) continue
        for (const index of bucket) {
          if (this.queryStamp[index] === this.queryCounter) continue
          this.queryStamp[index] = this.queryCounter
          result.push(index)
        }
      }
    }

    return result
  }

  private segmentIntersectsCollider(
    ax: number,
    az: number,
    bx: number,
    bz: number,
    collider: Collider
  ): boolean {
    return this.segmentColliderT(ax, az, bx, bz, collider) !== null
  }

  private segmentColliderT(
    ax: number,
    az: number,
    bx: number,
    bz: number,
    collider: Collider
  ): number | null {
    if (collider.shape === 'circle') {
      return segmentCircleT(ax, az, bx, bz, collider.x, collider.z, collider.radius)
    }
    return segmentBoxT(
      ax,
      az,
      bx,
      bz,
      collider.minX,
      collider.maxX,
      collider.minZ,
      collider.maxZ
    )
  }
}

function segmentCircleT(
  ax: number,
  az: number,
  bx: number,
  bz: number,
  cx: number,
  cz: number,
  radius: number
): number | null {
  const dx = bx - ax
  const dz = bz - az
  const fx = ax - cx
  const fz = az - cz
  const a = dx * dx + dz * dz
  const b = 2 * (fx * dx + fz * dz)
  const c = fx * fx + fz * fz - radius * radius

  if (a < 1e-8) {
    return c <= 0 ? 0 : null
  }

  const discriminant = b * b - 4 * a * c
  if (discriminant < 0) return null

  const sqrt = Math.sqrt(discriminant)
  const t1 = (-b - sqrt) / (2 * a)
  const t2 = (-b + sqrt) / (2 * a)
  if (t1 >= 0 && t1 <= 1) return t1
  if (t2 >= 0 && t2 <= 1) return t2
  if (c <= 0 && t1 < 0) return 0
  return null
}

function segmentBoxT(
  ax: number,
  az: number,
  bx: number,
  bz: number,
  minX: number,
  maxX: number,
  minZ: number,
  maxZ: number
): number | null {
  const dx = bx - ax
  const dz = bz - az
  let tMin = 0
  let tMax = 1

  if (Math.abs(dx) < 1e-8) {
    if (ax < minX || ax > maxX) return null
  } else {
    const inv = 1 / dx
    let t1 = (minX - ax) * inv
    let t2 = (maxX - ax) * inv
    if (t1 > t2) [t1, t2] = [t2, t1]
    tMin = Math.max(tMin, t1)
    tMax = Math.min(tMax, t2)
    if (tMin > tMax) return null
  }

  if (Math.abs(dz) < 1e-8) {
    if (az < minZ || az > maxZ) return null
  } else {
    const inv = 1 / dz
    let t1 = (minZ - az) * inv
    let t2 = (maxZ - az) * inv
    if (t1 > t2) [t1, t2] = [t2, t1]
    tMin = Math.max(tMin, t1)
    tMax = Math.min(tMax, t2)
    if (tMin > tMax) return null
  }

  return tMin >= 0 && tMin <= 1 ? tMin : null
}
