import { RULES } from '../config/rules'
import type { GameMode, MatchStats, Vec2 } from '../config/types'
import { distance2D } from '../utils/math'
import type { HiderRecord, MatchEvent, MatchOutcome } from './events'

export interface MatchRulesOptions {
  mode: GameMode
  hiderSpawns: Vec2[]
  names?: string[]
}

const DEFAULT_NAMES = ['苗苗', '队友 1', '队友 2', '队友 3', '队友 4']

/**
 * 单局规则的唯一入口。
 * 实体只读状态；任何抓捕/关押/救援/淘汰/胜负变化都必须经过这里。
 */
export class MatchRules {
  readonly mode: GameMode
  readonly hiders: HiderRecord[]
  readonly stats: MatchStats = {
    elapsed: 0,
    contacts: 0,
    jails: 0,
    rescues: 0,
    eliminated: 0
  }

  elapsed = 0
  countdown: number = RULES.countdownSeconds
  contactCooldown = 0
  outcome: MatchOutcome | null = null

  private eventQueue: MatchEvent[] = []

  constructor(options: MatchRulesOptions) {
    this.mode = options.mode
    const names = options.names ?? DEFAULT_NAMES
    this.hiders = options.hiderSpawns.map((spawn, index) => ({
      id: index,
      isPlayer: options.mode === 'hider' && index === 0,
      name: names[index] ?? `逃离者${index + 1}`,
      paletteIndex: index,
      state: 'free',
      contactCount: 0,
      jailCount: 0,
      jailSlot: null,
      rescueProgress: 0,
      invulnerableUntil: 0,
      x: spawn.x,
      z: spawn.z
    }))
  }

  get playerHider(): HiderRecord | null {
    return this.mode === 'hider' ? this.hiders[0] ?? null : null
  }

  get remaining(): number {
    return Math.max(0, RULES.matchSeconds - this.elapsed)
  }

  get isCountdown(): boolean {
    return this.countdown > 0
  }

  get isPlaying(): boolean {
    return this.outcome === null
  }

  get allHidersCaptured(): boolean {
    return this.hiders.every((hider) => hider.state !== 'free')
  }

  /** 每帧推进倒计时、比赛计时与接触冷却。 */
  tick(dt: number): void {
    if (this.outcome) return

    if (this.countdown > 0) {
      this.countdown = Math.max(0, this.countdown - dt)
      return
    }

    this.elapsed = Math.min(RULES.matchSeconds, this.elapsed + dt)
    this.stats.elapsed = this.elapsed
    this.contactCooldown = Math.max(0, this.contactCooldown - dt)
    this.evaluateOutcome()
  }

  canContact(hiderId: number): boolean {
    if (this.outcome || this.countdown > 0 || this.contactCooldown > 0) return false
    const hider = this.getHider(hiderId)
    if (!hider || hider.state !== 'free') return false
    return this.elapsed >= hider.invulnerableUntil
  }

  /**
   * 结算一次接触。返回产生的事件（若冷却中或目标不可接触则为 null）。
   * byPlayer 只用于统计与表现，不改变规则。
   */
  tryContact(hiderId: number, byPlayer: boolean): MatchEvent | null {
    if (!this.canContact(hiderId)) return null

    const hider = this.getHider(hiderId)
    if (!hider) return null

    this.contactCooldown = RULES.contactCooldown
    hider.contactCount++
    this.stats.contacts++

    const contactEvent: MatchEvent = {
      type: 'contact',
      hiderId,
      byPlayer,
      contacts: hider.contactCount
    }
    this.emit(contactEvent)

    if (hider.contactCount >= RULES.maxContactsPerJail) {
      this.jail(hider)
    }

    return contactEvent
  }

  /** 每帧推进所有被关押者的救援进度。 */
  updateRescue(dt: number): void {
    if (this.outcome || this.countdown > 0) return

    for (const jailed of this.hiders) {
      if (jailed.state !== 'jailed') continue

      const rescuer = this.findRescuer(jailed)
      if (rescuer) {
        jailed.rescueProgress += dt
        if (jailed.rescueProgress >= RULES.rescueSeconds) {
          this.rescue(jailed, rescuer)
        }
      } else if (jailed.rescueProgress > 0) {
        jailed.rescueProgress = Math.max(
          0,
          jailed.rescueProgress - dt * RULES.rescueDecayRate
        )
      }
    }
  }

  /** 直接触发投降/调试用：让某个被关押者立即获救。 */
  forceRescue(hiderId: number, byPlayer = false): void {
    const hider = this.getHider(hiderId)
    if (!hider || hider.state !== 'jailed') return
    this.rescue(hider, { id: -1, isPlayer: byPlayer })
  }

  drainEvents(): MatchEvent[] {
    const events = this.eventQueue
    this.eventQueue = []
    return events
  }

  private jail(hider: HiderRecord): void {
    hider.state = 'jailed'
    hider.contactCount = RULES.maxContactsPerJail
    hider.jailCount++
    hider.rescueProgress = 0
    hider.jailSlot = hider.id
    this.stats.jails++

    this.emit({
      type: 'jailed',
      hiderId: hider.id,
      jailCount: hider.jailCount,
      slot: hider.jailSlot
    })

    if (hider.jailCount >= RULES.maxJailsPerHider) {
      hider.state = 'eliminated'
      hider.jailSlot = null
      this.stats.eliminated++
      this.emit({ type: 'eliminated', hiderId: hider.id })
    }

    this.evaluateOutcome()
  }

  private rescue(jailed: HiderRecord, rescuer: { id: number; isPlayer: boolean }): void {
    jailed.state = 'free'
    jailed.contactCount = 0
    jailed.jailSlot = null
    jailed.rescueProgress = 0
    jailed.invulnerableUntil = this.elapsed + RULES.invulnerableSeconds
    this.stats.rescues++

    this.emit({
      type: 'rescued',
      hiderId: jailed.id,
      byPlayer: rescuer.isPlayer
    })
  }

  private findRescuer(jailed: HiderRecord): HiderRecord | null {
    for (const other of this.hiders) {
      if (other.id === jailed.id || other.state !== 'free') continue
      const dist = distance2D(other.x, other.z, jailed.x, jailed.z)
      if (dist <= RULES.rescueDistance) return other
    }
    return null
  }

  private evaluateOutcome(): void {
    if (this.outcome) return

    if (this.mode === 'hider') {
      const player = this.playerHider
      if (!player) return

      if (player.state === 'eliminated') {
        this.end('hider-lose')
        return
      }

      if (this.elapsed >= RULES.matchSeconds) {
        this.end(player.state === 'free' ? 'hider-win' : 'hider-lose')
      }
      return
    }

    if (this.allHidersCaptured) {
      this.end('ghost-win')
      return
    }

    if (this.elapsed >= RULES.matchSeconds) {
      this.end('ghost-lose')
    }
  }

  private end(outcome: MatchOutcome): void {
    if (this.outcome) return
    this.outcome = outcome
    this.emit({ type: 'match-end', outcome, mode: this.mode })
  }

  private getHider(id: number): HiderRecord | undefined {
    return this.hiders.find((hider) => hider.id === id)
  }

  private emit(event: MatchEvent): void {
    this.eventQueue.push(event)
  }
}
