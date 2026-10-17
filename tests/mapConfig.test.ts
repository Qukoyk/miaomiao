import { describe, expect, it } from 'vitest'
import { MAPS, MAP_ORDER } from '../src/config/maps'
import { RULES } from '../src/config/rules'
import type { Vec2 } from '../src/config/types'
import { CollisionWorld } from '../src/scene/CollisionWorld'
import { NavGrid } from '../src/scene/NavGrid'
import { buildMapColliders } from '../src/scene/mapCollision'

function build(mapId: (typeof MAP_ORDER)[number]) {
  const map = MAPS[mapId]
  const collision = new CollisionWorld(map.bounds)
  for (const spec of buildMapColliders(map)) collision.addSpec(spec)
  const nav = new NavGrid(map.bounds, collision)
  return { map, collision, nav }
}

function expectWalkable(
  collision: CollisionWorld,
  nav: NavGrid,
  point: Vec2,
  label: string
): void {
  expect(
    collision.blocksCircle(point.x, point.z, RULES.nav.agentRadius),
    `${label} 被障碍物占据 (${point.x}, ${point.z})`
  ).toBe(false)
  expect(
    nav.isWalkableWorld(point.x, point.z),
    `${label} 不在导航网格上 (${point.x}, ${point.z})`
  ).toBe(true)
}

describe.each(MAP_ORDER)('地图 %s', (mapId) => {
  it('关键点可站立且在导航网格内', () => {
    const { map, collision, nav } = build(mapId)
    expect(nav.walkableCount).toBeGreaterThan(1000)

    expect(map.spawns.hiders).toHaveLength(5)
    expect(map.jail.slots).toHaveLength(5)
    expect(map.hidingSpots.length).toBeGreaterThanOrEqual(20)
    expect(map.patrol.length).toBeGreaterThanOrEqual(8)

    expectWalkable(collision, nav, map.spawns.ghost, '鬼出生点')
    for (const [index, spawn] of map.spawns.hiders.entries()) {
      expectWalkable(collision, nav, spawn, `逃离者出生点 ${index}`)
    }
    expectWalkable(collision, nav, map.jail.releasePoint, '关押区释放点')
    for (const [index, slot] of map.jail.slots.entries()) {
      expectWalkable(collision, nav, slot, `关押槽 ${index}`)
    }
    for (const [index, point] of map.patrol.entries()) {
      expectWalkable(collision, nav, point, `巡逻点 ${index}`)
    }
    for (const [index, spot] of map.hidingSpots.entries()) {
      expectWalkable(collision, nav, spot, `藏点 ${index}`)
    }
  })

  it('鬼可以到达所有出生点、巡逻点和藏点', () => {
    const { map, nav } = build(mapId)
    const start = map.spawns.ghost

    for (const [index, spawn] of map.spawns.hiders.entries()) {
      expect(
        nav.findPath(start, spawn).length,
        `鬼无法到达逃离者出生点 ${index}`
      ).toBeGreaterThan(0)
    }

    for (const [index, point] of map.patrol.entries()) {
      expect(nav.findPath(start, point).length, `鬼无法到达巡逻点 ${index}`).toBeGreaterThan(0)
    }

    for (const [index, spot] of map.hidingSpots.entries()) {
      expect(nav.findPath(start, spot).length, `鬼无法到达藏点 ${index}`).toBeGreaterThan(0)
    }
  })

  it('每个逃离者出生点都能到达所有藏点', () => {
    const { map, nav } = build(mapId)

    for (const [spawnIndex, spawn] of map.spawns.hiders.entries()) {
      for (const [spotIndex, spot] of map.hidingSpots.entries()) {
        expect(
          nav.findPath(spawn, spot).length,
          `出生点 ${spawnIndex} 无法到达藏点 ${spotIndex} (${spot.x}, ${spot.z})`
        ).toBeGreaterThan(0)
      }
    }
  })

  it('逃离者可以到达关押区并进入每个关押槽', () => {
    const { map, nav } = build(mapId)

    for (const [index, spawn] of map.spawns.hiders.entries()) {
      expect(
        nav.findPath(spawn, map.jail.releasePoint).length,
        `逃离者出生点 ${index} 无法到达关押区`
      ).toBeGreaterThan(0)
    }

    for (const [index, slot] of map.jail.slots.entries()) {
      expect(
        nav.findPath(map.jail.releasePoint, slot).length,
        `关押槽 ${index} 无法从释放点进入`
      ).toBeGreaterThan(0)
    }
  })
})
