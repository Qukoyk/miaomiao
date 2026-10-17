import type { MapConfig } from '../config/maps/types'
import type { ColliderSpec } from './CollisionWorld'
import { getPropColliders } from './propColliders'

/**
 * 关押区围栏：三面封闭，朝 +x 留一个 2.2m 的门。
 * 视觉构建与碰撞共用这一布局。
 */
export function getJailColliders(config: MapConfig): ColliderSpec[] {
  const { center, radius } = config.jail
  const wall = 0.16
  const gateHalf = 1.1
  const sideHalf = (radius - gateHalf) / 2
  const sideCenter = gateHalf + sideHalf

  return [
    { shape: 'box', x: center.x - radius, z: center.z, halfX: wall, halfZ: radius, blocksSight: true },
    { shape: 'box', x: center.x, z: center.z - radius, halfX: radius, halfZ: wall, blocksSight: true },
    { shape: 'box', x: center.x, z: center.z + radius, halfX: radius, halfZ: wall, blocksSight: true },
    {
      shape: 'box',
      x: center.x + radius,
      z: center.z - sideCenter,
      halfX: wall,
      halfZ: sideHalf,
      blocksSight: true
    },
    {
      shape: 'box',
      x: center.x + radius,
      z: center.z + sideCenter,
      halfX: wall,
      halfZ: sideHalf,
      blocksSight: true
    }
  ]
}

export function buildMapColliders(config: MapConfig): ColliderSpec[] {
  const colliders: ColliderSpec[] = []
  for (const prop of config.props) {
    colliders.push(...getPropColliders(prop))
  }
  colliders.push(...getJailColliders(config))
  return colliders
}
