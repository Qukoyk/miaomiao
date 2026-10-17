import type { PropSpec } from '../config/maps/types'
import type { ColliderSpec } from './CollisionWorld'

function box(
  x: number,
  z: number,
  halfX: number,
  halfZ: number,
  blocksSight: boolean
): ColliderSpec {
  return { shape: 'box', x, z, halfX, halfZ, blocksSight }
}

function circle(x: number, z: number, radius: number, blocksSight: boolean): ColliderSpec {
  return { shape: 'circle', x, z, radius, blocksSight }
}

function rotatedExtents(halfX: number, halfZ: number, rotY = 0): [number, number] {
  const cos = Math.abs(Math.cos(rotY))
  const sin = Math.abs(Math.sin(rotY))
  return [halfX * cos + halfZ * sin, halfX * sin + halfZ * cos]
}

function rotatedBox(spec: PropSpec, halfX: number, halfZ: number, blocksSight: boolean): ColliderSpec {
  const [rx, rz] = rotatedExtents(halfX, halfZ, spec.rotY ?? 0)
  return box(spec.x, spec.z, rx, rz, blocksSight)
}

/**
 * 道具的纯数据碰撞体。PropKit 与地图校验共用这一份尺寸，
 * 避免"看起来有墙、实际能穿过去"的错位。
 */
export function getPropColliders(spec: PropSpec): ColliderSpec[] {
  const scale = spec.scale ?? 1

  switch (spec.kind) {
    case 'trainCar':
      return [rotatedBox(spec, 7 * scale, 1.7 * scale, true)]
    case 'clockTower':
      return [rotatedBox(spec, 2.2 * scale, 2.2 * scale, true)]
    case 'ticketBooth':
      return [rotatedBox(spec, 2.2 * scale, 2.0 * scale, true)]
    case 'luggage':
      return [rotatedBox(spec, 1.4 * scale, 1.0 * scale, true)]
    case 'bench':
      return [rotatedBox(spec, 1.6 * scale, 0.45 * scale, false)]
    case 'planter':
      return [circle(spec.x, spec.z, 0.9 * scale, false)]
    case 'lamp':
      return [circle(spec.x, spec.z, 0.34 * scale, false)]
    case 'stall':
      return [rotatedBox(spec, 1.9 * scale, 1.3 * scale, true)]
    case 'balloonCart':
      return [rotatedBox(spec, 1.3 * scale, 1.0 * scale, false)]
    case 'picnicTable':
      return [rotatedBox(spec, 1.8 * scale, 1.35 * scale, false)]
    case 'sign':
      return [circle(spec.x, spec.z, 0.3 * scale, false)]
    case 'tree':
      return [circle(spec.x, spec.z, 0.55 * scale, false)]
    case 'rock':
      return [circle(spec.x, spec.z, 1.35 * scale, true)]
    case 'teacup':
      return [circle(spec.x, spec.z, 1.7 * scale, false)]
    case 'carousel':
      return [circle(spec.x, spec.z, 8.2 * scale, true)]
    case 'fountain':
      return [circle(spec.x, spec.z, 4.2 * scale, true)]
    case 'ferrisWheel': {
      const legs: ColliderSpec[] = []
      for (const dx of [-3, 3]) {
        for (const dz of [-2, 2]) {
          legs.push(circle(spec.x + dx * scale, spec.z + dz * scale, 0.5 * scale, false))
        }
      }
      return legs
    }
    case 'gazebo': {
      const pillars: ColliderSpec[] = []
      const count = 8
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2
        pillars.push(
          circle(
            spec.x + Math.cos(angle) * 3.6 * scale,
            spec.z + Math.sin(angle) * 3.6 * scale,
            0.24 * scale,
            false
          )
        )
      }
      return pillars
    }
    case 'flowerArch':
      return [
        circle(spec.x - 1.8 * scale, spec.z, 0.34 * scale, false),
        circle(spec.x + 1.8 * scale, spec.z, 0.34 * scale, false)
      ]
    case 'canopy': {
      const halfLength = ((spec.length ?? 16) * scale) / 2 - 0.8
      const halfDepth = 4 * scale - 0.8
      return [
        circle(spec.x - halfLength, spec.z - halfDepth, 0.3 * scale, false),
        circle(spec.x + halfLength, spec.z - halfDepth, 0.3 * scale, false),
        circle(spec.x - halfLength, spec.z + halfDepth, 0.3 * scale, false),
        circle(spec.x + halfLength, spec.z + halfDepth, 0.3 * scale, false)
      ]
    }
    case 'hedge': {
      const halfX = ((spec.length ?? 8) * scale) / 2
      return [rotatedBox(spec, halfX, 0.6 * scale, true)]
    }
    case 'fence': {
      const halfX = ((spec.length ?? 8) * scale) / 2
      return [rotatedBox(spec, halfX, 0.16 * scale, false)]
    }
    case 'mansion':
      return [rotatedBox(spec, 15 * scale, 1.2 * scale, true)]
    case 'greenhouse':
      return greenhouseColliders(spec.x, spec.z, scale)
    default:
      return []
  }
}

/** 玻璃花房：四面墙各留一个门洞，玻璃本身作为磨砂遮挡。 */
function greenhouseColliders(x: number, z: number, scale: number): ColliderSpec[] {
  const halfX = 7 * scale
  const halfZ = 5 * scale
  const thickness = 0.18 * scale
  const doorHalf = 1.25 * scale
  const segment = (halfX - doorHalf) / 2
  const segmentCenter = doorHalf + segment
  const result: ColliderSpec[] = []

  // 北 / 南墙
  for (const dz of [-1, 1]) {
    for (const dx of [-1, 1]) {
      result.push(
        box(
          x + dx * segmentCenter,
          z + dz * halfZ,
          segment,
          thickness,
          true
        )
      )
    }
  }

  // 西 / 东墙
  for (const dx of [-1, 1]) {
    for (const dz of [-1, 1]) {
      result.push(
        box(
          x + dx * halfX,
          z + dz * segmentCenter,
          thickness,
          segment,
          true
        )
      )
    }
  }

  return result
}
