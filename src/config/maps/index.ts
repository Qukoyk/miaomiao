import type { MapId, MapSelection } from '../types'
import { stationMap } from './station'
import { parkMap } from './park'
import { manorMap } from './manor'
import type { MapConfig } from './types'

export const MAPS: Record<MapId, MapConfig> = {
  station: stationMap,
  park: parkMap,
  manor: manorMap
}

export const MAP_ORDER: MapId[] = ['station', 'park', 'manor']

export const MAP_SUMMARIES: Array<{
  id: MapSelection
  name: string
  subtitle: string
}> = [
  { id: 'random', name: '随机地图', subtitle: '每次都有新惊喜' },
  { id: 'station', name: stationMap.name, subtitle: stationMap.subtitle },
  { id: 'park', name: parkMap.name, subtitle: parkMap.subtitle },
  { id: 'manor', name: manorMap.name, subtitle: manorMap.subtitle }
]

export function resolveMap(selection: MapSelection, rng: () => number): MapConfig {
  if (selection === 'random') {
    return MAPS[MAP_ORDER[Math.floor(rng() * MAP_ORDER.length)]]
  }
  return MAPS[selection]
}

export type { MapConfig }
