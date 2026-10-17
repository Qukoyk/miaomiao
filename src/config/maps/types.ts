import type { Bounds2, MapId, Vec2 } from '../types'
import type { SkyPreset } from '../theme'

export type PropKind =
  | 'lamp'
  | 'bench'
  | 'planter'
  | 'luggage'
  | 'trainCar'
  | 'clockTower'
  | 'canopy'
  | 'ticketBooth'
  | 'carousel'
  | 'ferrisWheel'
  | 'stall'
  | 'balloonCart'
  | 'hedge'
  | 'fence'
  | 'fountain'
  | 'greenhouse'
  | 'gazebo'
  | 'flowerArch'
  | 'mansion'
  | 'tree'
  | 'rock'
  | 'picnicTable'
  | 'sign'
  | 'teacup'

export interface PropSpec {
  kind: PropKind
  x: number
  z: number
  rotY?: number
  scale?: number
  variant?: string
  length?: number
}

export interface HidingSpot {
  x: number
  z: number
  yaw?: number
  cover: 'low' | 'high'
}

export interface JailTheme {
  theme: 'station' | 'park' | 'manor'
}

export interface JailConfig extends JailTheme {
  center: Vec2
  radius: number
  slots: Vec2[]
  releasePoint: Vec2
}

export interface SpawnConfig {
  hiders: Vec2[]
  ghost: Vec2
}

export interface GroundPalette {
  base: number
  accent: number
  path: number
  detail: number
}

export interface MapConfig {
  id: MapId
  name: string
  subtitle: string
  difficulty: number
  bounds: Bounds2
  ground: GroundPalette
  sky: SkyPreset
  spawns: SpawnConfig
  jail: JailConfig
  patrol: Vec2[]
  hidingSpots: HidingSpot[]
  props: PropSpec[]
  fireflies: number
  petals: number
}

export function v(x: number, z: number): Vec2 {
  return { x, z }
}
