import { RULES } from '../config/rules'
import type { Input } from '../core/Input'
import type { CameraRig } from '../fx/CameraRig'
import type { World } from '../scene/World'
import { distance2D } from '../utils/math'
import type { Character } from './Character'

const PLAYER_RADIUS = RULES.nav.agentRadius

/** 玩家移动、冲刺体力、鬼的扑击与相机输入。 */
export class PlayerController {
  onCall: (() => void) | null = null

  private readonly world: World
  private readonly character: Character
  private readonly cameraRig: CameraRig
  private readonly input: Input
  private readonly isGhost: boolean

  private stamina: number = RULES.playerHider.staminaSeconds
  private staminaDelay = 0
  private lungeCooldown = 0
  private lungeTimer = 0
  private lungeX = 0
  private lungeZ = 1
  private idleTime = 0
  private crouching = false
  private moving = false
  private sprinting = false

  constructor(
    world: World,
    character: Character,
    cameraRig: CameraRig,
    input: Input,
    isGhost: boolean
  ) {
    this.world = world
    this.character = character
    this.cameraRig = cameraRig
    this.input = input
    this.isGhost = isGhost
  }

  get isLunging(): boolean {
    return this.lungeTimer > 0
  }

  get isCrouching(): boolean {
    return this.crouching
  }

  get isMoving(): boolean {
    return this.moving
  }

  get isSprinting(): boolean {
    return this.sprinting
  }

  get staminaRatio(): number {
    if (this.isGhost) return 1
    return Math.max(0, this.stamina / RULES.playerHider.staminaSeconds)
  }

  get lungeCooldownRatio(): number {
    return Math.max(0, this.lungeCooldown / RULES.playerGhost.lungeCooldown)
  }

  resetTransient(): void {
    this.stamina = RULES.playerHider.staminaSeconds
    this.staminaDelay = 0
    this.lungeCooldown = 0
    this.lungeTimer = 0
    this.idleTime = 0
    this.crouching = false
    this.moving = false
    this.sprinting = false
  }

  update(dt: number, elapsed: number): void {
    const look = this.input.consumeLookDelta()
    this.cameraRig.applyLook(look.x, look.y)

    this.lungeCooldown = Math.max(0, this.lungeCooldown - dt)

    if (this.character.isJailed || this.character.isEliminated) {
      this.character.setMove(0, 0, 0, false)
      this.character.setCrouch(false)
      this.moving = false
      if (this.character.isJailed && this.input.consumePressed('call')) {
        this.onCall?.()
      }
      this.character.update(dt, elapsed)
      this.cameraRig.update(dt, this.character.x, this.character.z, false, false)
      return
    }

    if (this.isGhost && this.lungeTimer <= 0 && this.lungeCooldown <= 0) {
      if (this.input.consumePressed('lunge')) {
        this.startLunge()
      }
    }

    if (this.lungeTimer > 0) {
      this.updateLunge(dt, elapsed)
      this.cameraRig.update(dt, this.character.x, this.character.z, false, true)
      return
    }

    const move = this.input.getMoveInput()
    const hasInput = Math.hypot(move.x, move.z) > 0.01
    const sin = Math.sin(this.cameraRig.yaw)
    const cos = Math.cos(this.cameraRig.yaw)
    let dx = move.z * sin - move.x * cos
    let dz = move.z * cos + move.x * sin
    const length = Math.hypot(dx, dz)
    if (length > 0.001) {
      dx /= length
      dz /= length
    }

    let speed: number = this.isGhost ? RULES.playerGhost.walkSpeed : RULES.playerHider.walkSpeed
    this.sprinting = false
    this.crouching = false

    if (hasInput) {
      const wantsSprint = this.input.sprinting
      if (wantsSprint && (this.isGhost || this.stamina > 0.02)) {
        speed = this.isGhost ? RULES.playerGhost.sprintSpeed : RULES.playerHider.sprintSpeed
        this.sprinting = true
        if (!this.isGhost) {
          this.stamina = Math.max(0, this.stamina - dt)
          this.staminaDelay = RULES.playerHider.staminaRegenDelay
        }
      }

      if (!this.isGhost && this.input.crouching) {
        speed = RULES.playerHider.crouchSpeed
        this.crouching = true
        this.sprinting = false
      }

      this.idleTime = 0
    } else {
      this.idleTime += dt
      if (!this.isGhost) {
        if (this.input.crouching) {
          this.crouching = true
        } else if (
          this.input.isTouchDevice &&
          this.idleTime > 1.2 &&
          this.nearHidingSpot(this.character.x, this.character.z)
        ) {
          this.crouching = true
        }
      }
    }

    if (!this.sprinting && !this.isGhost) {
      if (this.staminaDelay > 0) {
        this.staminaDelay = Math.max(0, this.staminaDelay - dt)
      } else if (this.stamina < RULES.playerHider.staminaSeconds) {
        this.stamina = Math.min(
          RULES.playerHider.staminaSeconds,
          this.stamina + RULES.playerHider.staminaRegenPerSecond * dt
        )
      }
    }

    this.moving = hasInput && speed > 0.01

    if (this.moving) {
      const distance = speed * dt
      const nextX = this.character.x + dx * distance
      const nextZ = this.character.z + dz * distance
      let movedX = false
      let movedZ = false

      if (!this.world.collision.blocksCircle(nextX, this.character.z, PLAYER_RADIUS)) {
        this.character.setPosition(nextX, this.character.z)
        movedX = true
      }
      if (!this.world.collision.blocksCircle(this.character.x, nextZ, PLAYER_RADIUS)) {
        this.character.setPosition(this.character.x, nextZ)
        movedZ = true
      }

      if (!movedX && !movedZ) {
        this.moving = false
      }
    }

    const animSpeed = this.moving ? speed : 0
    this.character.setMove(dx, dz, animSpeed, this.sprinting)
    this.character.setCrouch(this.crouching)
    this.character.update(dt, elapsed)

    this.cameraRig.update(
      dt,
      this.character.x,
      this.character.z,
      this.sprinting && this.moving,
      false
    )
  }

  private startLunge(): void {
    this.lungeTimer = RULES.playerGhost.lungeWindup + RULES.playerGhost.lungeDuration
    this.lungeX = Math.sin(this.cameraRig.yaw)
    this.lungeZ = Math.cos(this.cameraRig.yaw)
    this.character.playLunge(this.lungeTimer)
    this.cameraRig.addShake(0.12)
  }

  private updateLunge(dt: number, elapsed: number): void {
    this.lungeTimer = Math.max(0, this.lungeTimer - dt)
    const dashing = this.lungeTimer <= RULES.playerGhost.lungeDuration
    const speed = RULES.playerGhost.lungeSpeed

    if (dashing) {
      const nextX = this.character.x + this.lungeX * speed * dt
      const nextZ = this.character.z + this.lungeZ * speed * dt
      if (!this.world.collision.blocksCircle(nextX, this.character.z, PLAYER_RADIUS)) {
        this.character.setPosition(nextX, this.character.z)
      }
      if (!this.world.collision.blocksCircle(this.character.x, nextZ, PLAYER_RADIUS)) {
        this.character.setPosition(this.character.x, nextZ)
      }
      this.character.setMove(this.lungeX, this.lungeZ, speed, true)
      this.moving = true
    } else {
      this.character.setMove(0, 0, 0, false)
      this.moving = false
    }

    this.sprinting = false
    this.crouching = false
    this.character.setCrouch(false)
    this.character.update(dt, elapsed)

    if (this.lungeTimer === 0) {
      this.lungeCooldown = RULES.playerGhost.lungeCooldown
      this.character.playHit()
    }
  }

  private nearHidingSpot(x: number, z: number): boolean {
    for (const spot of this.world.hidingSpots) {
      if (distance2D(x, z, spot.x, spot.z) < 1.5) return true
    }
    return false
  }
}
