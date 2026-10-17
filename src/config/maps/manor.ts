import { SKY_PRESETS } from '../theme'
import type { MapConfig, PropSpec } from './types'
import { v } from './types'

const props: PropSpec[] = []

function add(kind: PropSpec['kind'], x: number, z: number, extra: Partial<PropSpec> = {}): void {
  props.push({ kind, x, z, ...extra })
}

// 洋馆立面、钟楼、玻璃花房
add('mansion', 0, -28.5, { scale: 1.05, variant: 'manor' })
add('clockTower', 26, -22, { scale: 1.15 })
add('greenhouse', 18, 8, { scale: 1 })
add('fountain', 0, 0, { scale: 1.1 })
add('gazebo', -24, 16, { scale: 1.05 })
add('flowerArch', -16, 12, { variant: 'rose' })
add('flowerArch', 16, -12, { variant: 'lilac' })
add('sign', 0, 27, { variant: 'manor', rotY: Math.PI })

// 树篱短迷宫
add('hedge', -10, 10, { length: 8, variant: 'green' })
add('hedge', 10, 10, { length: 8, variant: 'green' })
add('hedge', -10, -10, { length: 8, variant: 'green' })
add('hedge', 10, -10, { length: 8, variant: 'green' })
add('hedge', -20, 0, { length: 10, variant: 'rose', rotY: Math.PI / 2 })
add('hedge', 20, 0, { length: 10, variant: 'rose', rotY: Math.PI / 2 })
add('hedge', -16, 20, { length: 8, variant: 'green' })
add('hedge', 16, -20, { length: 8, variant: 'green' })

// 家具与灯
add('bench', 24, 4, { rotY: Math.PI / 2 })
add('bench', -24, -4, { rotY: -Math.PI / 2 })
add('bench', 8, 24, { rotY: Math.PI })
add('bench', -8, -24, { rotY: 0 })
add('picnicTable', -18, 8, { variant: 'lavender' })
add('picnicTable', 8, 18, { variant: 'mint' })
add('lamp', -30, 20)
add('lamp', 30, 20)
add('lamp', -30, -12)
add('lamp', 30, -12)
add('lamp', -12, 0)
add('lamp', 12, 0)
add('lamp', 0, 24)
add('lamp', 0, -16)

// 树与玫瑰园
add('tree', 34, 22, { variant: 'pink' })
add('tree', -34, 24, { variant: 'green' })
add('tree', 34, -14, { variant: 'gold' })
add('tree', -34, -14, { variant: 'pink' })
add('planter', 30, 10, { variant: 'pink' })
add('planter', -30, 8, { variant: 'mint' })
add('planter', 12, -22, { variant: 'gold' })
add('planter', -12, 22, { variant: 'pink' })
add('rock', 30, -24, { variant: 'stone' })
add('rock', -36, -28, { variant: 'stone' })

// 边界围栏
add('fence', 0, 30, { length: 38, variant: 'manor' })
add('fence', -38, 0, { length: 30, variant: 'manor', rotY: Math.PI / 2 })
add('fence', 38, 0, { length: 30, variant: 'manor', rotY: Math.PI / 2 })

export const manorMap: MapConfig = {
  id: 'manor',
  name: '庄园',
  subtitle: '绘本庄园',
  difficulty: 4,
  bounds: { minX: -39, maxX: 39, minZ: -31, maxZ: 31 },
  ground: {
    base: 0x8fc49a,
    accent: 0xb8a7f2,
    path: 0xd8c8e0,
    detail: 0x6fbf9a
  },
  sky: SKY_PRESETS.manor,
  spawns: {
    hiders: [v(28, 22), v(30, -27), v(-28, 25), v(10, 28), v(36, 0)],
    ghost: v(-36, 0)
  },
  jail: {
    theme: 'manor',
    center: v(-32, -25),
    radius: 4,
    slots: [v(-34, -25), v(-33, -26.6), v(-32, -25), v(-31, -26.6), v(-30, -25)],
    releasePoint: v(-27.5, -25)
  },
  patrol: [
    v(-32, 0),
    v(-20, 22),
    v(0, 26),
    v(20, 22),
    v(32, 0),
    v(22, -18),
    v(0, -24),
    v(-20, -20)
  ],
  hidingSpots: [
    { x: 18, z: 8, cover: 'high' },
    { x: 16, z: 6, cover: 'high' },
    { x: 20, z: 10, cover: 'high' },
    { x: 18, z: 4, cover: 'high' },
    { x: -10, z: 11.2, cover: 'low' },
    { x: 10, z: 11.2, cover: 'low' },
    { x: -10, z: -11.2, cover: 'low' },
    { x: 10, z: -11.2, cover: 'low' },
    { x: -21.4, z: 4, cover: 'low' },
    { x: 21.4, z: 4, cover: 'low' },
    { x: -16, z: 17, cover: 'low' },
    { x: 16, z: -17, cover: 'low' },
    { x: 0, z: 5.6, cover: 'high' },
    { x: 0, z: -5.6, cover: 'high' },
    { x: 5.6, z: 0, cover: 'high' },
    { x: -5.6, z: 0, cover: 'high' },
    { x: -22, z: 16, cover: 'high' },
    { x: -26, z: 14, cover: 'high' },
    { x: -16, z: 12, cover: 'high' },
    { x: 16, z: -12, cover: 'high' },
    { x: -4, z: -24, cover: 'high' },
    { x: 6, z: -24, cover: 'high' },
    { x: -14, z: -24, cover: 'high' },
    { x: 16, z: -24, cover: 'high' },
    { x: 24, z: 7, cover: 'low' },
    { x: -24, z: -7, cover: 'low' },
    { x: 8, z: 26, cover: 'low' },
    { x: -8, z: -22, cover: 'low' },
    { x: -30, z: 10, cover: 'low' },
    { x: 30, z: 18, cover: 'low' },
    { x: -18, z: 10, cover: 'low' }
  ],
  props,
  fireflies: 95,
  petals: 46
}
