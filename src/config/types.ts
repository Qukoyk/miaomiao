export type GameMode = 'hider' | 'ghost'

export type HiderState = 'free' | 'jailed' | 'eliminated'

export type QualityLevel = 'high' | 'medium' | 'low'

export type MapId = 'station' | 'park' | 'manor'

export type MapSelection = MapId | 'random'

export interface Vec2 {
  x: number
  z: number
}

export interface Vec3 {
  x: number
  y: number
  z: number
}

export interface Bounds2 {
  minX: number
  maxX: number
  minZ: number
  maxZ: number
}

export interface MatchStats {
  elapsed: number
  contacts: number
  jails: number
  rescues: number
  eliminated: number
}
