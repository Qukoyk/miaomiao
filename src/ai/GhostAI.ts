import { RULES } from '../config/rules'
import type { SharedAssets } from '../core/Disposal'
import { Character } from '../entities/Character'
import type { World } from '../scene/World'
import { distance2D } from '../utils/math'
import { PathFollower } from './PathFollower'
import { Perception } from './Perception'

export interface GhostTarget {
  character: Character
  crouching: boolean
  hidden: boolean
}

type GhostState = 'patrol' | 'investigate' | 'chase'
type LungePhase = 'none' | 'windup' | 'dash' | 'recover'

/** AI 鬼：巡逻 → 调查 → 追击 → 扑击。目标是玩家与 AI 逃离者的并集。 */
export class GhostAI {
  readonly character: Character
  readonly perception = new Perception()

  private readonly world: World
  private readonly follower = new PathFollower()
  private state: GhostState = 'patrol'
  private targetId = -1
  private lastKnownX = 0
  private lastKnownZ = 0
  private memory = 0
  private searchTimer = 0
  private patrolIndex = 0
  private thinkTimer = 0
  private repathTimer = 0
  private lastPathGoalX = Infinity
  private lastPathGoalZ = Infinity
  private lungePhase: LungePhase = 'none'
  private lungeTimer = 0
  private lungeCooldown = 0
  private lungeX = 0
  private lungeZ = 1
  private lungeRecoverTimer = 0

  constructor(assets: SharedAssets, world: World) {
    this.world = world
    this.character = new Character(assets, 'ghost', -1, 0, null)
    this.character.setPosition(world.map.spawns.ghost.x, world.map.spawns.ghost.z)
  }

  get isLunging(): boolean {
    return this.lungePhase === 'dash'
  }

  get isAttacking(): boolean {
    return this.lungePhase !== 'none'
  }

  get chasingId(): number {
    return this.state === 'chase' ? this.targetId : -1
  }

  get stateName(): string {
    return this.lungePhase !== 'none' ? this.lungePhase : this.state
  }

  setPosition(x: number, z: number): void {
    this.character.setPosition(x, z)
    this.follower.clear()
    this.repathTimer = 0
  }

  get x(): number {
    return this.character.x
  }

  get z(): number {
    return this.character.z
  }

  addNoise(x: number, z: number, radius: number, source: 'sprint' | 'walk' | 'rescue' | 'call' | 'lungeMiss'): void {
    this.perception.addNoise(x, z, radius, source)
  }

  notifyHit(): void {
    if (this.lungePhase === 'dash') {
      this.lungePhase = 'recover'
      this.lungeRecoverTimer = 0.45
      this.lungeTimer = 0
      this.character.playHit()
    }
  }

  notifyJail(x: number, z: number): void {
    this.state = 'investigate'
    this.lastKnownX = x
    this.lastKnownZ = z
    this.memory = 5.5
    this.searchTimer = 3.5
    this.follower.clear()
    this.repathTimer = 0
  }

  update(dt: number, elapsed: number, targets: GhostTarget[]): void {
    this.perception.update(dt)
    this.lungeCooldown = Math.max(0, this.lungeCooldown - dt)

    if (this.lungePhase !== 'none') {
      this.updateLunge(dt, elapsed)
      this.character.update(dt, elapsed)
      return
    }

    this.thinkTimer -= dt
    if (this.thinkTimer <= 0) {
      this.thinkTimer = 0.12
      this.think(targets)
    }

    if (this.state === 'chase') {
      this.updateChase(dt, targets)
    } else if (this.state === 'investigate') {
      this.updateInvestigate(dt)
    } else {
      this.updatePatrol(dt)
    }

    this.character.update(dt, elapsed)
  }

  dispose(): void {
    this.character.dispose()
  }

  private think(targets: GhostTarget[]): void {
    let nearest: GhostTarget | null = null
    let nearestDistance = Infinity
    for (const target of targets) {
      if (!target.character.isFree) continue
      if (
        !this.perception.canGhostSee(
          this.character.x,
          this.character.z,
          this.character.facingYaw,
          target.character.x,
          target.character.z,
          target.hidden,
          this.world.collision
        )
      ) {
        continue
      }
      const distance = distance2D(
        this.character.x,
        this.character.z,
        target.character.x,
        target.character.z
      )
      if (distance < nearestDistance) {
        nearest = target
        nearestDistance = distance
      }
    }

    if (nearest) {
      this.state = 'chase'
      this.targetId = nearest.character.id
      this.lastKnownX = nearest.character.x
      this.lastKnownZ = nearest.character.z
      this.memory = RULES.perception.memorySeconds
      this.searchTimer = 0
      return
    }

    if (this.state === 'chase') {
      this.state = 'investigate'
      this.searchTimer = RULES.perception.searchSeconds
    }

    if (this.memory > 0) return

    const sound = this.perception.consumeSound(this.character.x, this.character.z)
    if (sound) {
      this.state = 'investigate'
      this.lastKnownX = sound.x
      this.lastKnownZ = sound.z
      this.memory = RULES.perception.memorySeconds
      this.searchTimer = RULES.perception.searchSeconds
      this.follower.clear()
      this.repathTimer = 0
      return
    }

    if (this.state === 'investigate' && this.searchTimer <= 0) {
      this.state = 'patrol'
      this.follower.clear()
    }
  }

  private updateChase(dt: number, targets: GhostTarget[]): void {
    const target = targets.find((item) => item.character.id === this.targetId)
    if (!target || !target.character.isFree) {
      this.state = 'investigate'
      this.memory = Math.min(this.memory, RULES.perception.memorySeconds)
      return
    }

    this.lastKnownX = target.character.x
    this.lastKnownZ = target.character.z
    this.memory = RULES.perception.memorySeconds

    const distance = distance2D(
      this.character.x,
      this.character.z,
      this.lastKnownX,
      this.lastKnownZ
    )

    if (
      this.lungeCooldown <= 0 &&
      distance >= RULES.aiGhost.lungeRangeMin &&
      distance <= RULES.aiGhost.lungeRangeMax &&
      this.perception.canGhostSee(
        this.character.x,
        this.character.z,
        this.character.facingYaw,
        this.lastKnownX,
        this.lastKnownZ,
        target.hidden,
        this.world.collision
      )
    ) {
      this.startLunge(this.lastKnownX, this.lastKnownZ)
      return
    }

    if (distance > 0.9) {
      this.moveTo(this.lastKnownX, this.lastKnownZ, RULES.aiGhost.chaseSpeed, dt)
    } else {
      this.character.setMove(0, 0, 0, false)
    }

    this.memory = RULES.perception.memorySeconds
  }

  private updateInvestigate(dt: number): void {
    const distance = distance2D(this.character.x, this.character.z, this.lastKnownX, this.lastKnownZ)
    if (distance > 1.1) {
      this.moveTo(this.lastKnownX, this.lastKnownZ, RULES.aiGhost.investigateSpeed, dt)
      this.memory = Math.max(0, this.memory - dt)
      return
    }

    this.character.setMove(0, 0, 0, false)
    this.searchTimer -= dt
    this.memory = Math.max(0, this.memory - dt)

    if (this.searchTimer % 1.5 < dt) {
      const angle = Math.random() * Math.PI * 2
      const radius = 3 + Math.random() * 5
      const next = this.world.nav.nearestWalkable(
        this.lastKnownX + Math.cos(angle) * radius,
        this.lastKnownZ + Math.sin(angle) * radius
      )
      if (next) {
        this.lastKnownX = next.x
        this.lastKnownZ = next.z
        this.follower.clear()
        this.repathTimer = 0
      }
    }

    if (this.searchTimer <= 0) {
      this.state = 'patrol'
      this.follower.clear()
      this.repathTimer = 0
    }
  }

  private updatePatrol(dt: number): void {
    const patrol = this.world.map.patrol
    if (patrol.length === 0) return
    const point = patrol[this.patrolIndex % patrol.length]
    const distance = distance2D(this.character.x, this.character.z, point.x, point.z)
    if (distance < 1.1) {
      this.patrolIndex = (this.patrolIndex + 1) % patrol.length
      this.follower.clear()
      this.repathTimer = 0
      this.character.setMove(0, 0, 0, false)
      return
    }
    this.moveTo(point.x, point.z, RULES.aiGhost.patrolSpeed, dt)
  }

  private moveTo(
    targetX: number,
    targetZ: number,
    speed: number,
    dt: number
  ): void {
    this.repathTimer -= dt
    const goalMoved = distance2D(targetX, targetZ, this.lastPathGoalX, this.lastPathGoalZ)
    if (this.repathTimer <= 0 || goalMoved > 1.2 || !this.follower.hasPath) {
      const path = this.world.nav.findPath(
        { x: this.character.x, z: this.character.z },
        { x: targetX, z: targetZ }
      )
      this.follower.setPath(path)
      this.lastPathGoalX = targetX
      this.lastPathGoalZ = targetZ
      this.repathTimer = RULES.aiGhost.pathInterval
    }

    const result = this.follower.follow(dt, this.character.x, this.character.z, speed, this.world.collision)
    if (result.stuck) {
      this.follower.clear()
      this.repathTimer = 0
    }
    if (result.moved) {
      this.character.setPosition(result.x, result.z)
      this.character.setMove(result.dx, result.dz, speed, speed > 4.5)
    } else {
      this.character.setMove(0, 0, 0, false)
    }

    if (result.reached) {
      this.character.setMove(0, 0, 0, false)
    }
  }

  private startLunge(targetX: number, targetZ: number): void {
    const dx = targetX - this.character.x
    const dz = targetZ - this.character.z
    const length = Math.hypot(dx, dz)
    if (length < 0.001) return
    this.lungeX = dx / length
    this.lungeZ = dz / length
    this.lungePhase = 'windup'
    this.lungeTimer = RULES.aiGhost.lungeWindup
    this.character.playLunge(RULES.aiGhost.lungeWindup + RULES.aiGhost.lungeDuration)
  }

  private updateLunge(dt: number, elapsed: number): void {
    if (this.lungePhase === 'windup') {
      this.lungeTimer -= dt
      this.character.setMove(0, 0, 0, false)
      if (this.lungeTimer <= 0) {
        this.lungePhase = 'dash'
        this.lungeTimer = RULES.aiGhost.lungeDuration
      }
      this.character.update(dt, elapsed)
      return
    }

    if (this.lungePhase === 'dash') {
      this.lungeTimer -= dt
      const speed = RULES.aiGhost.lungeSpeed
      const nextX = this.character.x + this.lungeX * speed * dt
      const nextZ = this.character.z + this.lungeZ * speed * dt
      if (!this.world.collision.blocksCircle(nextX, this.character.z, RULES.nav.agentRadius)) {
        this.character.setPosition(nextX, this.character.z)
      }
      if (!this.world.collision.blocksCircle(this.character.x, nextZ, RULES.nav.agentRadius)) {
        this.character.setPosition(this.character.x, nextZ)
      }
      this.character.setMove(this.lungeX, this.lungeZ, speed, true)
      this.character.update(dt, elapsed)

      if (this.lungeTimer <= 0) {
        this.lungePhase = 'recover'
        this.lungeRecoverTimer = RULES.aiGhost.lungeStun
        this.lungeCooldown = RULES.aiGhost.lungeCooldown
        this.character.playHit()
        this.perception.addNoise(
          this.character.x,
          this.character.z,
          RULES.perception.hearing.lungeMiss,
          'lungeMiss'
        )
      }
      return
    }

    this.lungeRecoverTimer -= dt
    this.character.setMove(0, 0, 0, false)
    this.character.update(dt, elapsed)
    if (this.lungeRecoverTimer <= 0) {
      this.lungePhase = 'none'
      this.repathTimer = 0
    }
  }
}
