import { RULES } from '../config/rules'
import type { Vec2 } from '../config/types'
import type { CollisionWorld } from '../scene/CollisionWorld'
import { distance2D } from '../utils/math'

export interface FollowResult {
  x: number
  z: number
  dx: number
  dz: number
  moved: boolean
  reached: boolean
  stuck: boolean
}

/** 沿 A* 路径移动，带轴分离碰撞、侧移与卡住检测。 */
export class PathFollower {
  private path: Vec2[] = []
  private index = 0
  private stuckTimer = 0
  private sidestepTimer = 0
  private sidestepSign = 1

  setPath(path: Vec2[]): void {
    this.path = path
    this.index = 0
    this.stuckTimer = 0
    this.sidestepTimer = 0
  }

  clear(): void {
    this.path = []
    this.index = 0
    this.sidestepTimer = 0
    this.stuckTimer = 0
  }

  get hasPath(): boolean {
    return this.index < this.path.length
  }

  get currentTarget(): Vec2 | null {
    return this.path[this.index] ?? null
  }

  follow(
    dt: number,
    x: number,
    z: number,
    speed: number,
    collision: CollisionWorld
  ): FollowResult {
    if (this.path.length === 0 || this.index >= this.path.length) {
      return { x, z, dx: 0, dz: 0, moved: false, reached: true, stuck: false }
    }

    let target = this.path[this.index]
    let distance = distance2D(x, z, target.x, target.z)
    if (distance < 0.38) {
      this.index++
      if (this.index >= this.path.length) {
        return { x, z, dx: 0, dz: 0, moved: false, reached: true, stuck: false }
      }
      target = this.path[this.index]
      distance = distance2D(x, z, target.x, target.z)
    }

    let dx = distance > 0.001 ? (target.x - x) / distance : 0
    let dz = distance > 0.001 ? (target.z - z) / distance : 0

    if (this.sidestepTimer > 0) {
      this.sidestepTimer = Math.max(0, this.sidestepTimer - dt)
      dx = (-(target.z - z) / Math.max(0.001, distance)) * this.sidestepSign
      dz = ((target.x - x) / Math.max(0.001, distance)) * this.sidestepSign
    }

    const step = speed * dt
    const nextX = x + dx * step
    const nextZ = z + dz * step
    let movedX = false
    let movedZ = false

    if (!collision.blocksCircle(nextX, z, RULES.nav.agentRadius)) movedX = true
    if (!collision.blocksCircle(x, nextZ, RULES.nav.agentRadius)) movedZ = true

    if (!movedX && !movedZ) {
      if (this.sidestepTimer <= 0) {
        this.sidestepTimer = RULES.nav.sidestepSeconds
        this.sidestepSign = Math.random() > 0.5 ? 1 : -1
      }
      return { x, z, dx, dz, moved: false, reached: false, stuck: false }
    }

    const outX = movedX ? nextX : x
    const outZ = movedZ ? nextZ : z
    const actual = distance2D(x, z, outX, outZ)
    if (actual < 0.04) {
      this.stuckTimer += dt
    } else {
      this.stuckTimer = 0
    }

    return {
      x: outX,
      z: outZ,
      dx,
      dz,
      moved: actual > 0.001,
      reached: false,
      stuck: this.stuckTimer >= RULES.nav.stuckCheckInterval
    }
  }
}
