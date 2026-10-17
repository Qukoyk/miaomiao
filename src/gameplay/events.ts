import type { GameMode, HiderState } from '../config/types'

export type MatchOutcome = 'hider-win' | 'ghost-win' | 'hider-lose' | 'ghost-lose'

export type MatchEvent =
  | { type: 'contact'; hiderId: number; byPlayer: boolean; contacts: number }
  | { type: 'jailed'; hiderId: number; jailCount: number; slot: number }
  | { type: 'rescued'; hiderId: number; byPlayer: boolean }
  | { type: 'eliminated'; hiderId: number }
  | { type: 'match-end'; outcome: MatchOutcome; mode: GameMode }

export interface HiderRecord {
  id: number
  isPlayer: boolean
  name: string
  paletteIndex: number
  state: HiderState
  contactCount: number
  jailCount: number
  jailSlot: number | null
  rescueProgress: number
  invulnerableUntil: number
  x: number
  z: number
}
