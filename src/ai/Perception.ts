import { RULES } from '../config/rules'
import type { CollisionWorld } from '../scene/CollisionWorld'
import { angleDifference, distance2D } from '../utils/math'

export type NoiseSource = 'sprint' | 'walk' | 'rescue' | 'call' | 'lungeMiss'

export interface NoiseEvent {
  x: number
  z: number
  radius: number
  source: NoiseSource
  age: number
}

/** 视线与听觉。鬼的感知和 AI 逃离者对鬼的感知共用。 */
export class Perception {
  private readonly noises: NoiseEvent[] = []

  addNoise(x: number, z: number, radius: number, source: NoiseSource): void {
    this.noises.push({ x, z, radius, source, age: 0 })
    if (this.noises.length > 32) this.noises.shift()
  }

  update(dt: number): void {
    for (let i = this.noises.length - 1; i >= 0; i--) {
      this.noises[i].age += dt
      if (this.noises[i].age > 2.4) this.noises.splice(i, 1)
    }
  }

  clear(): void {
    this.noises.length = 0
  }

  canGhostSee(
    ghostX: number,
    ghostZ: number,
    ghostYaw: number,
    targetX: number,
    targetZ: number,
    hidden: boolean,
    collision: CollisionWorld
  ): boolean {
    const range = hidden
      ? RULES.perception.ghostVisionRange * 0.5
      : RULES.perception.ghostVisionRange
    const distance = distance2D(ghostX, ghostZ, targetX, targetZ)
    if (distance > range) return false
    if (distance > 0.6) {
      const angleToTarget = Math.atan2(targetX - ghostX, targetZ - ghostZ)
      if (
        Math.abs(angleDifference(angleToTarget, ghostYaw)) >
        RULES.perception.ghostFovRadians / 2
      ) {
        return false
      }
    }
    return !collision.segmentBlocked(ghostX, ghostZ, targetX, targetZ)
  }

  canHiderSeeGhost(
    hiderX: number,
    hiderZ: number,
    hiderYaw: number,
    ghostX: number,
    ghostZ: number,
    collision: CollisionWorld
  ): boolean {
    const distance = distance2D(hiderX, hiderZ, ghostX, ghostZ)
    if (distance < RULES.perception.hiderDangerRadius) return true
    if (distance > RULES.perception.hiderVisionRange) return false
    const angleToGhost = Math.atan2(ghostX - hiderX, ghostZ - hiderZ)
    if (Math.abs(angleDifference(angleToGhost, hiderYaw)) > RULES.perception.hiderFovRadians / 2) {
      return false
    }
    return !collision.segmentBlocked(hiderX, hiderZ, ghostX, ghostZ)
  }

  consumeSound(x: number, z: number): NoiseEvent | null {
    let bestIndex = -1
    let bestScore = -Infinity
    for (let i = 0; i < this.noises.length; i++) {
      const noise = this.noises[i]
      const distance = distance2D(x, z, noise.x, noise.z)
      if (distance > noise.radius) continue
      const score = noise.radius - distance - noise.age * 2
      if (score > bestScore) {
        bestScore = score
        bestIndex = i
      }
    }
    if (bestIndex < 0) return null
    return this.noises.splice(bestIndex, 1)[0]
  }
}
