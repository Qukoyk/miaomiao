import { RULES } from '../config/rules'
import type { SharedAssets } from '../core/Disposal'
import { Character } from '../entities/Character'
import type { HiderRecord } from '../gameplay/events'
import type { World } from '../scene/World'
import { distance2D } from '../utils/math'
import { PathFollower } from './PathFollower'

export interface HiderContext {
  ghostX: number
  ghostZ: number
  ghostVisible: boolean
  ghostBusy: boolean
  rescueTarget: { x: number; z: number; id: number } | null
}

type HiderState = 'hide' | 'flee' | 'rescue' | 'roam' | 'held'

/** AI 逃离者：救援 > 逃跑 > 躲藏/游走。 */
export class HiderAI {
  readonly character: Character
  readonly record: HiderRecord

  private readonly world: World
  private readonly follower = new PathFollower()
  private state: HiderState = 'hide'
  private crouching = false
  private repathTimer = 0
  private lastGoalX = Infinity
  private lastGoalZ = Infinity
  private roamTimer = 0
  private speedBoostTimer = 0
  private hideSpotX = 0
  private hideSpotZ = 0
  private hasHideSpot = false

  constructor(assets: SharedAssets, world: World, record: HiderRecord) {
    this.world = world
    this.record = record
    this.character = new Character(assets, 'hider', record.id, record.paletteIndex, record)
    this.character.setPosition(record.x, record.z)
  }

  get isCrouching(): boolean {
    return this.crouching
  }

  get isHidden(): boolean {
    return this.crouching && this.nearHidingSpot(this.character.x, this.character.z)
  }

  get currentState(): HiderState {
    return this.state
  }

  get hasPath(): boolean {
    return this.follower.hasPath
  }

  get isSpeedBoosted(): boolean {
    return this.speedBoostTimer > 0
  }

  get pathTarget(): { x: number; z: number } | null {
    return this.follower.currentTarget
  }

  get x(): number {
    return this.character.x
  }

  get z(): number {
    return this.character.z
  }

  update(dt: number, elapsed: number, context: HiderContext): void {
    this.speedBoostTimer = Math.max(0, this.speedBoostTimer - dt)
    if (this.record.state !== 'free') {
      this.crouching = false
      this.character.setCrouch(false)
      this.character.setMove(0, 0, 0, false)
      this.character.update(dt, elapsed)
      this.state = 'held'
      return
    }

    const ghostDistance = distance2D(
      this.character.x,
      this.character.z,
      context.ghostX,
      context.ghostZ
    )
    const threatened =
      context.ghostVisible || ghostDistance < RULES.aiHider.fleeDistance

    if (threatened) {
      this.state = 'flee'
      this.crouching = false
      this.character.setCrouch(false)
      this.flee(dt, context, ghostDistance)
    } else if (
      context.rescueTarget &&
      (ghostDistance > RULES.aiHider.rescueGhostDistance || context.ghostBusy)
    ) {
      this.state = 'rescue'
      this.crouching = false
      this.character.setCrouch(false)
      this.rescue(dt, context.rescueTarget)
    } else {
      this.hide(dt, context)
    }

    this.character.update(dt, elapsed)
  }

  dispose(): void {
    this.character.dispose()
  }

  private flee(dt: number, context: HiderContext, ghostDistance: number): void {
    this.repathTimer -= dt
    const targetChanged = distance2D(
      this.character.x,
      this.character.z,
      this.lastGoalX,
      this.lastGoalZ
    )
    if (this.repathTimer <= 0 || !this.follower.hasPath || targetChanged < 0.6) {
      const target = this.pickFleeTarget(context)
      let path = this.world.nav.findPath(
        { x: this.character.x, z: this.character.z },
        target
      )
      if (path.length === 0) {
        const fallback = this.world.nav.randomWalkable(Math.random)
        path = this.world.nav.findPath(
          { x: this.character.x, z: this.character.z },
          fallback
        )
        this.lastGoalX = fallback.x
        this.lastGoalZ = fallback.z
      } else {
        this.lastGoalX = target.x
        this.lastGoalZ = target.z
      }
      this.follower.setPath(path)
      this.repathTimer = 0.65
    }

    const speed = RULES.aiHider.runSpeed
    this.follow(dt, speed, true)
    if (!this.follower.hasPath || ghostDistance < 5.5) {
      this.repathTimer = 0
    }
  }

  private rescue(dt: number, target: { x: number; z: number; id: number }): void {
    const distance = distance2D(this.character.x, this.character.z, target.x, target.z)
    if (distance <= RULES.aiHider.rescueStopDistance) {
      this.character.setMove(0, 0, 0, false)
      this.character.setRescuePose()
      return
    }

    this.repathTimer -= dt
    if (this.repathTimer <= 0 || !this.follower.hasPath) {
      const path = this.world.nav.findPath(
        { x: this.character.x, z: this.character.z },
        { x: target.x, z: target.z }
      )
      this.follower.setPath(path)
      this.repathTimer = 0.5
    }
    this.follow(dt, RULES.aiHider.runSpeed, true)
  }

  private hide(dt: number, context: HiderContext): void {
    if (this.nearHidingSpot(this.character.x, this.character.z)) {
      this.crouching = true
      this.character.setCrouch(true)
      this.character.setMove(0, 0, 0, false)
      this.state = 'hide'
      return
    }

    this.state = 'hide'
    if (
      !this.hasHideSpot ||
      !this.follower.hasPath ||
      distance2D(this.character.x, this.character.z, this.hideSpotX, this.hideSpotZ) < 0.8
    ) {
      const spot = this.pickHidingSpot(context.ghostX, context.ghostZ)
      if (spot) {
        this.hideSpotX = spot.x
        this.hideSpotZ = spot.z
        this.hasHideSpot = true
        let path = this.world.nav.findPath(
          { x: this.character.x, z: this.character.z },
          spot
        )
        if (path.length === 0) {
          this.hasHideSpot = false
          const fallback = this.world.nav.randomWalkable(Math.random)
          path = this.world.nav.findPath(
            { x: this.character.x, z: this.character.z },
            fallback
          )
        }
        this.follower.setPath(path)
      } else {
        this.state = 'roam'
        this.hasHideSpot = false
        this.roamTimer -= dt
        if (this.roamTimer <= 0) {
          const target = this.world.nav.randomWalkable(Math.random)
          const path = this.world.nav.findPath(
            { x: this.character.x, z: this.character.z },
            target
          )
          this.follower.setPath(path)
          this.roamTimer = 3 + Math.random() * 3
        }
      }
    }

    this.crouching = false
    this.character.setCrouch(false)
    this.follow(dt, RULES.aiHider.walkSpeed, false)
  }

  grantSpeedBoost(): void {
    this.speedBoostTimer = RULES.hiderHitBoostSeconds
  }

  private follow(dt: number, speed: number, running: boolean): void {
    const effectiveSpeed = speed * (this.speedBoostTimer > 0 ? RULES.hiderHitBoostSpeed : 1)
    const result = this.follower.follow(
      dt,
      this.character.x,
      this.character.z,
      effectiveSpeed,
      this.world.collision
    )
    if (result.stuck) {
      this.follower.clear()
      this.repathTimer = 0
    }
    if (result.moved) {
      this.character.setPosition(result.x, result.z)
      this.character.setMove(result.dx, result.dz, effectiveSpeed, running)
    } else {
      this.character.setMove(0, 0, 0, false)
    }
    if (result.reached) {
      this.character.setMove(0, 0, 0, false)
      this.repathTimer = 0
    }
  }

  private pickHidingSpot(ghostX: number, ghostZ: number): { x: number; z: number } | null {
    let best: { x: number; z: number } | null = null
    let bestScore = Infinity
    for (const spot of this.world.hidingSpots) {
      const spotGhostDistance = distance2D(spot.x, spot.z, ghostX, ghostZ)
      if (spotGhostDistance < 6) continue
      const score =
        distance2D(this.character.x, this.character.z, spot.x, spot.z) +
        (spot.cover === 'high' ? -1.5 : 0) +
        Math.random() * 5
      if (score < bestScore) {
        bestScore = score
        best = { x: spot.x, z: spot.z }
      }
    }
    return best
  }

  private pickFleeTarget(context: HiderContext): { x: number; z: number } {
    let best = { x: this.character.x, z: this.character.z }
    let bestScore = -Infinity
    for (let i = 0; i < 10; i++) {
      const angle = (i / 10) * Math.PI * 2 + Math.random() * 0.3
      const radius = 9 + Math.random() * 8
      const candidate = this.world.nav.nearestWalkable(
        this.character.x + Math.cos(angle) * radius,
        this.character.z + Math.sin(angle) * radius
      )
      if (!candidate) continue
      const ghostDistance = distance2D(
        candidate.x,
        candidate.z,
        context.ghostX,
        context.ghostZ
      )
      const cover = this.world.collision.segmentBlocked(
        candidate.x,
        candidate.z,
        context.ghostX,
        context.ghostZ
      )
        ? 4
        : 0
      const score = ghostDistance + cover - distance2D(
        this.character.x,
        this.character.z,
        candidate.x,
        candidate.z
      ) * 0.25
      if (score > bestScore) {
        bestScore = score
        best = candidate
      }
    }
    return best
  }

  private nearHidingSpot(x: number, z: number): boolean {
    for (const spot of this.world.hidingSpots) {
      if (distance2D(x, z, spot.x, spot.z) < 1.4) return true
    }
    return false
  }
}
