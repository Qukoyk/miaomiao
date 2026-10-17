import { describe, expect, it } from 'vitest'
import { MatchRules } from '../src/gameplay/MatchRules'
import { RULES } from '../src/config/rules'
import type { Vec2 } from '../src/config/types'

function makeRules(mode: 'hider' | 'ghost' = 'hider'): MatchRules {
  const spawns: Vec2[] = [
    { x: 0, z: 0 },
    { x: 2, z: 0 },
    { x: 4, z: 0 },
    { x: 6, z: 0 },
    { x: 8, z: 0 }
  ]
  return new MatchRules({ mode, hiderSpawns: spawns })
}

function forceContact(rules: MatchRules, id: number, times = 1): void {
  for (let i = 0; i < times; i++) {
    rules.contactCooldown = 0
    const hider = rules.hiders[id]
    hider.invulnerableUntil = 0
    rules.tryContact(id, false)
  }
}

function rescue(rules: MatchRules, jailedId: number, rescuerId: number): void {
  rules.countdown = 0
  const jailed = rules.hiders[jailedId]
  const rescuer = rules.hiders[rescuerId]
  rescuer.x = jailed.x
  rescuer.z = jailed.z
  rules.updateRescue(RULES.rescueSeconds + 0.01)
}

describe('MatchRules 抓捕与关押', () => {
  it('接触 3 次后关押，星星保持 3 颗，累计关押次数 +1', () => {
    const rules = makeRules()
    rules.countdown = 0
    forceContact(rules, 1, 3)

    const hider = rules.hiders[1]
    expect(hider.state).toBe('jailed')
    expect(hider.contactCount).toBe(3)
    expect(hider.jailCount).toBe(1)
    expect(hider.jailSlot).toBe(1)
    expect(rules.stats.jails).toBe(1)
  })

  it('接触冷却期间不能重复计数', () => {
    const rules = makeRules()
    rules.countdown = 0
    const hider = rules.hiders[1]

    rules.tryContact(1, false)
    expect(hider.contactCount).toBe(1)
    expect(rules.tryContact(1, false)).toBeNull()
    expect(hider.contactCount).toBe(1)

    rules.tick(RULES.contactCooldown + 0.01)
    expect(rules.tryContact(1, false)).not.toBeNull()
    expect(hider.contactCount).toBe(2)
  })

  it('命中后进入擦刀后摇，冷却结束前无法再次接触', () => {
    const rules = makeRules()
    rules.countdown = 0
    rules.tryContact(1, false)
    rules.tick(RULES.contactCooldown - 0.1)
    expect(rules.canContact(1)).toBe(false)
    rules.tick(0.2)
    expect(rules.canContact(1)).toBe(true)
  })

  it('救援后当前星星清零，但累计关押次数保留', () => {
    const rules = makeRules()
    rules.countdown = 0

    forceContact(rules, 1, 3)
    expect(rules.hiders[1].state).toBe('jailed')

    rescue(rules, 1, 2)
    const hider = rules.hiders[1]
    expect(hider.state).toBe('free')
    expect(hider.contactCount).toBe(0)
    expect(hider.jailCount).toBe(1)
    expect(hider.jailSlot).toBeNull()
    expect(rules.stats.rescues).toBe(1)
  })

  it('累计被关押 3 次后淘汰', () => {
    const rules = makeRules()
    rules.countdown = 0

    for (let jailRound = 1; jailRound <= 2; jailRound++) {
      forceContact(rules, 1, 3)
      expect(rules.hiders[1].state).toBe('jailed')
      rescue(rules, 1, 2)
      expect(rules.hiders[1].state).toBe('free')
    }

    forceContact(rules, 1, 3)
    const hider = rules.hiders[1]
    expect(hider.jailCount).toBe(3)
    expect(hider.state).toBe('eliminated')
    expect(rules.stats.eliminated).toBe(1)
  })

  it('救援进度离开后会衰减', () => {
    const rules = makeRules()
    rules.countdown = 0
    forceContact(rules, 1, 3)
    const jailed = rules.hiders[1]
    const rescuer = rules.hiders[2]

    rescuer.x = jailed.x
    rescuer.z = jailed.z
    rules.updateRescue(2)
    expect(jailed.rescueProgress).toBeCloseTo(2)

    rescuer.x = 20
    rescuer.z = 20
    rules.updateRescue(1)
    expect(jailed.rescueProgress).toBeCloseTo(1.5)
  })
})

describe('MatchRules 胜负', () => {
  it('逃离者模式：时间到时玩家自由则胜', () => {
    const rules = makeRules('hider')
    rules.countdown = 0
    rules.elapsed = RULES.matchSeconds - 0.05
    rules.tick(0.1)
    expect(rules.outcome).toBe('hider-win')
  })

  it('逃离者模式：时间到时玩家被关押则负', () => {
    const rules = makeRules('hider')
    rules.countdown = 0
    forceContact(rules, 0, 3)
    rules.elapsed = RULES.matchSeconds - 0.05
    rules.tick(0.1)
    expect(rules.outcome).toBe('hider-lose')
  })

  it('逃离者模式：玩家被淘汰立即负', () => {
    const rules = makeRules('hider')
    rules.countdown = 0
    for (let i = 0; i < 2; i++) {
      forceContact(rules, 0, 3)
      rescue(rules, 0, 1)
    }
    forceContact(rules, 0, 3)
    expect(rules.hiders[0].state).toBe('eliminated')
    expect(rules.outcome).toBe('hider-lose')
  })

  it('鬼模式：所有逃离者被关押或淘汰则鬼胜', () => {
    const rules = makeRules('ghost')
    rules.countdown = 0
    for (const hider of rules.hiders) {
      hider.state = 'jailed'
    }
    rules.tick(0.016)
    expect(rules.outcome).toBe('ghost-win')
  })

  it('鬼模式：时间到时仍有自由逃离者则鬼负', () => {
    const rules = makeRules('ghost')
    rules.countdown = 0
    rules.hiders[1].state = 'jailed'
    rules.elapsed = RULES.matchSeconds - 0.05
    rules.tick(0.1)
    expect(rules.outcome).toBe('ghost-lose')
  })

  it('开局倒计时期间不推进比赛时间', () => {
    const rules = makeRules()
    rules.tick(1)
    expect(rules.elapsed).toBe(0)
    expect(rules.countdown).toBeCloseTo(RULES.countdownSeconds - 1)
  })
})
