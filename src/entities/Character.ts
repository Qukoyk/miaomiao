import type { SharedAssets } from '../core/Disposal'
import { HIDER_PALETTES } from '../config/theme'
import type { HiderRecord } from '../gameplay/events'
import { approachAngle } from '../utils/math'
import { CharacterModel, type AnimState } from './CharacterModel'
import { StatusBillboard } from './StatusBillboard'

export type CharacterRole = 'hider' | 'ghost'

/** 把一个玩法状态记录与 3D 表现连接起来。 */
export class Character {
  readonly role: CharacterRole
  readonly id: number
  readonly record: HiderRecord | null
  readonly model: CharacterModel

  private readonly billboard: StatusBillboard | null
  private yaw = 0
  private desiredYaw = 0
  private speed = 0
  private baseState: AnimState = 'idle'
  private overrideState: AnimState | null = null
  private overrideTimer = 0
  private eliminatedTimer = 0
  private eliminatedStarted = false

  constructor(
    assets: SharedAssets,
    role: CharacterRole,
    id: number,
    paletteIndex: number,
    record: HiderRecord | null
  ) {
    this.role = role
    this.id = id
    this.record = record
    const palette = HIDER_PALETTES[paletteIndex % HIDER_PALETTES.length]
    this.model = new CharacterModel(assets, palette, role === 'ghost')
    this.billboard = role === 'hider' ? new StatusBillboard(this.model.statusAnchor) : null
    if (record) {
      this.model.group.position.set(record.x, 0, record.z)
      this.billboard?.update(record.contactCount, record.jailCount, false)
    }
  }

  get x(): number {
    return this.model.group.position.x
  }

  get z(): number {
    return this.model.group.position.z
  }

  get isEliminated(): boolean {
    return this.record?.state === 'eliminated'
  }

  get isJailed(): boolean {
    return this.record?.state === 'jailed'
  }

  get isFree(): boolean {
    return this.record?.state === 'free' || this.role === 'ghost'
  }

  get facingYaw(): number {
    return this.yaw
  }

  setPosition(x: number, z: number): void {
    this.model.group.position.set(x, 0, z)
    if (this.record) {
      this.record.x = x
      this.record.z = z
    }
  }

  setFacingYaw(yaw: number): void {
    this.yaw = yaw
    this.desiredYaw = yaw
    this.model.group.rotation.y = yaw
  }

  setMove(dx: number, dz: number, speed: number, running: boolean): void {
    if (this.record && this.record.state !== 'free') return
    this.speed = speed
    if (speed > 0.05) {
      this.desiredYaw = Math.atan2(dx, dz)
      this.baseState = running ? 'run' : 'walk'
    } else {
      this.baseState = 'idle'
    }
  }

  setCrouch(active: boolean): void {
    this.model.setCrouch(active)
  }

  setRescuePose(): void {
    this.setOverride('rescue', 0.22)
  }

  playLunge(duration = 0.4): void {
    this.setOverride('lunge', duration)
  }

  playHit(): void {
    this.setOverride('hit', 0.28)
  }

  update(dt: number, elapsed: number): void {
    if (this.record) {
      if (this.record.state === 'free') {
        if (this.speed > 0.05) {
          this.yaw = approachAngle(this.yaw, this.desiredYaw, 11 * dt)
        }
      }
      this.model.group.rotation.y = this.yaw
      this.billboard?.update(
        this.record.contactCount,
        this.record.jailCount,
        this.record.state === 'eliminated'
      )
    } else if (this.speed > 0.05) {
      this.yaw = approachAngle(this.yaw, this.desiredYaw, 11 * dt)
      this.model.group.rotation.y = this.yaw
    }

    if (this.overrideTimer > 0) {
      this.overrideTimer = Math.max(0, this.overrideTimer - dt)
      if (this.overrideTimer === 0) this.overrideState = null
    }

    let state: AnimState
    if (this.record?.state === 'jailed') {
      state = 'jail'
    } else if (this.record?.state === 'eliminated') {
      if (!this.eliminatedStarted) {
        this.eliminatedStarted = true
        this.eliminatedTimer = 0
      }
      this.eliminatedTimer += dt
      this.model.setEliminated(this.eliminatedTimer / 0.9)
      this.billboard?.update(0, 0, true)
      return
    } else if (this.overrideState) {
      state = this.overrideState
    } else {
      state = this.baseState
    }

    this.model.animate(state, elapsed, dt)
  }

  dispose(): void {
    this.billboard?.dispose()
    this.model.dispose()
  }

  private setOverride(state: AnimState, duration: number): void {
    this.overrideState = state
    this.overrideTimer = duration
  }
}
