import { SKY_PRESETS } from '../theme'
import type { MapConfig, PropSpec } from './types'
import { v } from './types'

const props: PropSpec[] = []

function add(kind: PropSpec['kind'], x: number, z: number, extra: Partial<PropSpec> = {}): void {
  props.push({ kind, x, z, ...extra })
}

// 站台主体：三节停靠列车沿北侧形成长墙
add('trainCar', -18, -21.5, { variant: 'blue', rotY: 0 })
add('trainCar', 0, -21.5, { variant: 'pink', rotY: 0 })
add('trainCar', 18, -21.5, { variant: 'cream', rotY: 0 })

// 地标与功能区
add('clockTower', -28, 18, { scale: 1.05 })
add('ticketBooth', 26, 12, { variant: 'station' })
add('canopy', 0, 8, { length: 16 })
add('sign', 24, 20, { variant: 'station', rotY: Math.PI })

// 长椅、行李、花坛
add('bench', 12, 8, { rotY: Math.PI })
add('bench', -8, 8, { rotY: Math.PI })
add('bench', 16, -8, { rotY: 0 })
add('bench', -14, -8, { rotY: 0 })

add('luggage', 8, 14, { variant: 'rose' })
add('luggage', -12, 10, { variant: 'mint' })
add('luggage', 20, -6, { variant: 'gold' })
add('luggage', -20, 4, { variant: 'blue' })

add('planter', -4, 14, { variant: 'pink' })
add('planter', 0, -10, { variant: 'mint' })
add('planter', -24, 8, { variant: 'gold' })
add('planter', 24, -4, { variant: 'pink' })
add('planter', 14, 18, { variant: 'mint' })
add('planter', -6, -18, { variant: 'gold' })

// 灯柱与树
add('lamp', -30, 22)
add('lamp', 30, 22)
add('lamp', -30, -8)
add('lamp', 30, -12)
add('lamp', -14, 0)
add('lamp', 14, 0)
add('tree', -31, -20, { variant: 'green' })
add('tree', 31, 20, { variant: 'pink' })
add('tree', -31, 22, { variant: 'gold' })
add('tree', 31, -22, { variant: 'green' })

// 南侧矮树篱，增加绕行与藏身
add('hedge', -24, 23, { length: 10, variant: 'green' })
add('hedge', 24, 23, { length: 10, variant: 'green' })
add('hedge', 0, -4, { length: 8, variant: 'pink', rotY: Math.PI / 2 })

// 边界装饰栅栏
add('fence', 0, 24, { length: 28, variant: 'station' })
add('fence', -32, 0, { length: 26, variant: 'station', rotY: Math.PI / 2 })
add('fence', 32, 0, { length: 26, variant: 'station', rotY: Math.PI / 2 })

export const stationMap: MapConfig = {
  id: 'station',
  name: '火车站',
  subtitle: '童话火车站',
  difficulty: 2,
  bounds: { minX: -33, maxX: 33, minZ: -25, maxZ: 25 },
  ground: {
    base: 0xd8c8b8,
    accent: 0xffd08a,
    path: 0xc9b8a8,
    detail: 0x6fbf9a
  },
  sky: SKY_PRESETS.station,
  spawns: {
    hiders: [v(4, 18), v(20, -16), v(-20, 16), v(10, 20), v(28, 0)],
    ghost: v(-28, 0)
  },
  jail: {
    theme: 'station',
    center: v(-27, -14.5),
    radius: 4,
    slots: [v(-29, -14.5), v(-28, -16), v(-27, -14.5), v(-26, -16), v(-25, -14.5)],
    releasePoint: v(-22, -12)
  },
  patrol: [
    v(-26, 0),
    v(-14, 16),
    v(0, 20),
    v(16, 16),
    v(26, 0),
    v(16, -12),
    v(0, -14),
    v(-16, -12)
  ],
  hidingSpots: [
    { x: -18, z: -18.4, cover: 'high' },
    { x: 0, z: -18.4, cover: 'high' },
    { x: 18, z: -18.4, cover: 'high' },
    { x: -9, z: -19.8, cover: 'high' },
    { x: 9, z: -19.8, cover: 'high' },
    { x: 22.6, z: 12, cover: 'high' },
    { x: 26, z: 9.2, cover: 'high' },
    { x: 8, z: 17, cover: 'high' },
    { x: -12, z: 13, cover: 'high' },
    { x: 20, z: -3, cover: 'high' },
    { x: -20, z: 7, cover: 'high' },
    { x: 12, z: 10.2, cover: 'low' },
    { x: -8, z: 10.2, cover: 'low' },
    { x: 16, z: -6, cover: 'low' },
    { x: -14, z: -6, cover: 'low' },
    { x: -4, z: 16.2, cover: 'low' },
    { x: 1.4, z: -8, cover: 'low' },
    { x: -24, z: 10.2, cover: 'low' },
    { x: 24, z: -2, cover: 'low' },
    { x: 14, z: 20.2, cover: 'low' },
    { x: -6, z: -16, cover: 'low' },
    { x: -7.2, z: 6, cover: 'high' },
    { x: 7.2, z: 6, cover: 'high' },
    { x: -24.8, z: 18, cover: 'high' },
    { x: -28, z: 15, cover: 'high' },
    { x: -28, z: -19.2, cover: 'low' },
    { x: 28, z: 20, cover: 'low' },
    { x: -24, z: 20.8, cover: 'low' },
    { x: 24, z: 20.8, cover: 'low' }
  ],
  props,
  fireflies: 80,
  petals: 24
}
