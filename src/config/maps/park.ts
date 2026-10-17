import { SKY_PRESETS } from '../theme'
import type { MapConfig, PropSpec } from './types'
import { v } from './types'

const props: PropSpec[] = []

function add(kind: PropSpec['kind'], x: number, z: number, extra: Partial<PropSpec> = {}): void {
  props.push({ kind, x, z, ...extra })
}

// 中央地标：旋转木马；远端摩天轮
add('carousel', 0, 0, { scale: 1.05 })
add('ferrisWheel', -30, 18, { scale: 1.2, variant: 'park' })
add('teacup', -12, 18, { variant: 'pink' })
add('fountain', 20, 0, { scale: 0.95 })
add('sign', 0, 25, { variant: 'park', rotY: Math.PI })

// 六个摊位围绕中央
add('stall', 20, 12, { variant: 'candy', rotY: Math.PI })
add('balloonCart', -18, 12, { variant: 'pink' })
add('stall', 22, -12, { variant: 'ticket', rotY: Math.PI })
add('stall', -20, -12, { variant: 'prize', rotY: Math.PI })
add('stall', 10, -18, { variant: 'popcorn', rotY: Math.PI })
add('stall', 14, 18, { variant: 'cotton', rotY: Math.PI })

// 树篱切碎中央视野，留出绕行缺口
add('hedge', -10, 10, { length: 8, variant: 'green' })
add('hedge', 10, 10, { length: 8, variant: 'green' })
add('hedge', -10, -10, { length: 8, variant: 'green' })
add('hedge', 10, -10, { length: 8, variant: 'green' })
add('hedge', -24, 0, { length: 10, variant: 'pink', rotY: Math.PI / 2 })
add('hedge', 26, 4, { length: 10, variant: 'pink', rotY: Math.PI / 2 })
add('hedge', 0, 20, { length: 12, variant: 'green' })
add('hedge', 0, -20, { length: 12, variant: 'green' })

// 长椅、野餐桌、树、灯
add('bench', 6, 10, { rotY: Math.PI })
add('bench', -6, -10, { rotY: 0 })
add('bench', 24, 4, { rotY: Math.PI / 2 })
add('bench', -24, 4, { rotY: -Math.PI / 2 })
add('picnicTable', 28, 18, { variant: 'pink' })
add('picnicTable', -28, 8, { variant: 'mint' })
add('lamp', -14, 14)
add('lamp', 14, 14)
add('lamp', -14, -14)
add('lamp', 14, -14)
add('lamp', -30, -6)
add('lamp', 30, -6)
add('lamp', 0, 24)
add('tree', 32, 18, { variant: 'pink' })
add('tree', -32, 8, { variant: 'green' })
add('tree', 18, -24, { variant: 'gold' })
add('tree', -16, -22, { variant: 'pink' })
add('tree', 34, 2, { variant: 'green' })
add('tree', -34, -2, { variant: 'gold' })

// 边界栅栏
add('fence', 0, 28, { length: 34, variant: 'park' })
add('fence', 0, -28, { length: 34, variant: 'park' })
add('fence', -36, 0, { length: 28, variant: 'park', rotY: Math.PI / 2 })
add('fence', 36, 0, { length: 28, variant: 'park', rotY: Math.PI / 2 })

export const parkMap: MapConfig = {
  id: 'park',
  name: '游乐园',
  subtitle: '月光游乐园',
  difficulty: 3,
  bounds: { minX: -37, maxX: 37, minZ: -29, maxZ: 29 },
  ground: {
    base: 0x7fcf9a,
    accent: 0xff9ebb,
    path: 0xe0d0b0,
    detail: 0x8fe2ce
  },
  sky: SKY_PRESETS.park,
  spawns: {
    hiders: [v(24, 8), v(24, -22), v(-24, 22), v(8, 24), v(32, 0)],
    ghost: v(-32, 0)
  },
  jail: {
    theme: 'park',
    center: v(-30, -22),
    radius: 4,
    slots: [v(-32, -22), v(-31, -23.6), v(-30, -22), v(-29, -23.6), v(-28, -22)],
    releasePoint: v(-25.8, -22)
  },
  patrol: [
    v(-28, 0),
    v(-18, 22),
    v(0, 26),
    v(18, 22),
    v(28, 0),
    v(18, -20),
    v(0, -24),
    v(-18, -20)
  ],
  hidingSpots: [
    { x: 20, z: 9, cover: 'high' },
    { x: -18, z: 9, cover: 'high' },
    { x: 22, z: -9, cover: 'high' },
    { x: -20, z: -9, cover: 'high' },
    { x: 10, z: -15, cover: 'high' },
    { x: 14, z: 15, cover: 'high' },
    { x: -10, z: 11.2, cover: 'low' },
    { x: 10, z: 11.2, cover: 'low' },
    { x: -10, z: -11.2, cover: 'low' },
    { x: 10, z: -11.2, cover: 'low' },
    { x: -22.8, z: 4.8, cover: 'low' },
    { x: 27.2, z: 0, cover: 'low' },
    { x: 4, z: 21.4, cover: 'low' },
    { x: -4, z: -21.4, cover: 'low' },
    { x: 9.5, z: 0, cover: 'high' },
    { x: -9.5, z: 0, cover: 'high' },
    { x: 0, z: 9.5, cover: 'high' },
    { x: 0, z: -9.5, cover: 'high' },
    { x: -24.8, z: 18, cover: 'high' },
    { x: -30, z: 14, cover: 'high' },
    { x: 6, z: 12, cover: 'low' },
    { x: -6, z: -12, cover: 'low' },
    { x: 27.4, z: 4, cover: 'low' },
    { x: -26, z: 4, cover: 'low' },
    { x: 32, z: 19.6, cover: 'low' },
    { x: -32, z: 9.6, cover: 'low' },
    { x: 18, z: -22.4, cover: 'low' },
    { x: -16, z: -20.4, cover: 'low' }
  ],
  props,
  fireflies: 110,
  petals: 34
}
