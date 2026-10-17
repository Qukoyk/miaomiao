import type { Bounds2, Vec2 } from '../config/types'
import { RULES } from '../config/rules'
import { CollisionWorld } from './CollisionWorld'

const SQRT2 = Math.SQRT2

/**
 * 平面导航网格 + A*。
 * 同一套网格服务三张地图，实体只拿到世界坐标路径。
 */
export class NavGrid {
  readonly bounds: Bounds2
  readonly cellSize: number
  readonly cols: number
  readonly rows: number
  readonly agentRadius: number

  private readonly collision: CollisionWorld
  private readonly blocked: Uint8Array
  private walkableCells = 0

  constructor(
    bounds: Bounds2,
    collision: CollisionWorld,
    cellSize = RULES.nav.cellSize,
    agentRadius = RULES.nav.agentRadius
  ) {
    this.bounds = bounds
    this.collision = collision
    this.cellSize = cellSize
    this.agentRadius = agentRadius
    this.cols = Math.max(1, Math.ceil((bounds.maxX - bounds.minX) / cellSize))
    this.rows = Math.max(1, Math.ceil((bounds.maxZ - bounds.minZ) / cellSize))
    this.blocked = new Uint8Array(this.cols * this.rows)

    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        const center = this.cellCenter(col, row)
        const isBlocked = collision.blocksCircle(center.x, center.z, agentRadius)
        this.blocked[row * this.cols + col] = isBlocked ? 1 : 0
        if (!isBlocked) this.walkableCells++
      }
    }
  }

  get totalCells(): number {
    return this.blocked.length
  }

  get walkableCount(): number {
    return this.walkableCells
  }

  isWalkable(col: number, row: number): boolean {
    if (col < 0 || row < 0 || col >= this.cols || row >= this.rows) return false
    return this.blocked[row * this.cols + col] === 0
  }

  isWalkableWorld(x: number, z: number): boolean {
    const col = Math.floor((x - this.bounds.minX) / this.cellSize)
    const row = Math.floor((z - this.bounds.minZ) / this.cellSize)
    return this.isWalkable(col, row)
  }

  cellCenter(col: number, row: number): Vec2 {
    return {
      x: this.bounds.minX + (col + 0.5) * this.cellSize,
      z: this.bounds.minZ + (row + 0.5) * this.cellSize
    }
  }

  /**
   * 返回从 start 到 goal 的平滑世界坐标路径。
   * 目标不可达时返回空数组。
   */
  findPath(start: Vec2, goal: Vec2): Vec2[] {
    const startCell = this.nearestCell(start)
    const goalCell = this.nearestCell(goal)
    if (!startCell || !goalCell) return []

    if (startCell.col === goalCell.col && startCell.row === goalCell.row) {
      const end = this.isWalkableWorld(goal.x, goal.z)
        ? { x: goal.x, z: goal.z }
        : this.cellCenter(goalCell.col, goalCell.row)
      return [end]
    }

    const total = this.blocked.length
    const gScore = new Float32Array(total).fill(Infinity)
    const cameFrom = new Int32Array(total).fill(-1)
    const closed = new Uint8Array(total)
    const heap = new MinHeap()

    const startIndex = startCell.row * this.cols + startCell.col
    const goalIndex = goalCell.row * this.cols + goalCell.col
    gScore[startIndex] = 0
    heap.push(startIndex, this.heuristic(startCell.col, startCell.row, goalCell.col, goalCell.row))

    let expansions = 0
    while (heap.size > 0 && expansions < RULES.nav.maxExpansions) {
      const current = heap.pop()
      if (current === null) break
      if (closed[current]) continue
      closed[current] = 1
      expansions++

      if (current === goalIndex) {
        const cells = this.reconstruct(cameFrom, current)
        return this.finishPath(cells, goal)
      }

      const col = current % this.cols
      const row = Math.floor(current / this.cols)

      for (let dz = -1; dz <= 1; dz++) {
        for (let dx = -1; dx <= 1; dx++) {
          if (dx === 0 && dz === 0) continue
          const nextCol = col + dx
          const nextRow = row + dz
          if (!this.isWalkable(nextCol, nextRow)) continue

          if (dx !== 0 && dz !== 0) {
            if (
              !this.isWalkable(col + dx, row) ||
              !this.isWalkable(col, row + dz)
            ) {
              continue
            }
          }

          const nextIndex = nextRow * this.cols + nextCol
          if (closed[nextIndex]) continue

          const cost = dx !== 0 && dz !== 0 ? SQRT2 : 1
          const tentative = gScore[current] + cost
          if (tentative >= gScore[nextIndex]) continue

          cameFrom[nextIndex] = current
          gScore[nextIndex] = tentative
          heap.push(
            nextIndex,
            tentative + this.heuristic(nextCol, nextRow, goalCell.col, goalCell.row)
          )
        }
      }
    }

    return []
  }

  /** 检查两点是否可直线行走（用于路径拉直与 AI 侧移）。 */
  lineWalkable(a: Vec2, b: Vec2): boolean {
    const distance = Math.hypot(b.x - a.x, b.z - a.z)
    const steps = Math.max(1, Math.ceil(distance / (this.cellSize * 0.5)))
    for (let i = 0; i <= steps; i++) {
      const t = i / steps
      const x = a.x + (b.x - a.x) * t
      const z = a.z + (b.z - a.z) * t
      if (this.collision.blocksCircle(x, z, this.agentRadius)) return false
    }
    return true
  }

  nearestWalkable(x: number, z: number): Vec2 | null {
    const cell = this.nearestCell({ x, z })
    return cell ? this.cellCenter(cell.col, cell.row) : null
  }

  randomWalkable(rng: () => number): Vec2 {
    for (let attempt = 0; attempt < 300; attempt++) {
      const col = Math.floor(rng() * this.cols)
      const row = Math.floor(rng() * this.rows)
      if (this.isWalkable(col, row)) return this.cellCenter(col, row)
    }

    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        if (this.isWalkable(col, row)) return this.cellCenter(col, row)
      }
    }

    return { x: (this.bounds.minX + this.bounds.maxX) / 2, z: (this.bounds.minZ + this.bounds.maxZ) / 2 }
  }

  private nearestCell(point: Vec2): { col: number; row: number } | null {
    const rawCol = Math.floor((point.x - this.bounds.minX) / this.cellSize)
    const rawRow = Math.floor((point.z - this.bounds.minZ) / this.cellSize)

    if (this.isWalkable(rawCol, rawRow)) {
      return { col: rawCol, row: rawRow }
    }

    for (let radius = 1; radius <= 24; radius++) {
      for (let dz = -radius; dz <= radius; dz++) {
        for (let dx = -radius; dx <= radius; dx++) {
          if (Math.abs(dx) !== radius && Math.abs(dz) !== radius) continue
          const col = rawCol + dx
          const row = rawRow + dz
          if (this.isWalkable(col, row)) return { col, row }
        }
      }
    }

    return null
  }

  private reconstruct(cameFrom: Int32Array, current: number): Vec2[] {
    const cells: number[] = []
    let index = current
    while (index !== -1) {
      cells.push(index)
      index = cameFrom[index]
    }
    cells.reverse()

    return cells.map((cellIndex) => {
      const col = cellIndex % this.cols
      const row = Math.floor(cellIndex / this.cols)
      return this.cellCenter(col, row)
    })
  }

  private finishPath(points: Vec2[], goal: Vec2): Vec2[] {
    if (points.length === 0) return []
    const smoothed: Vec2[] = [points[0]]

    let anchor = 0
    while (anchor < points.length - 1) {
      let farthest = anchor + 1
      for (let candidate = points.length - 1; candidate > anchor; candidate--) {
        if (this.lineWalkable(points[anchor], points[candidate])) {
          farthest = candidate
          break
        }
      }
      smoothed.push(points[farthest])
      anchor = farthest
    }

    const last = smoothed[smoothed.length - 1]
    if (
      this.isWalkableWorld(goal.x, goal.z) &&
      this.lineWalkable(last, goal)
    ) {
      smoothed[smoothed.length - 1] = { x: goal.x, z: goal.z }
    }

    return smoothed
  }

  private heuristic(ax: number, az: number, bx: number, bz: number): number {
    const dx = Math.abs(bx - ax)
    const dz = Math.abs(bz - az)
    return Math.max(dx, dz) + (SQRT2 - 1) * Math.min(dx, dz)
  }
}

class MinHeap {
  private indices: number[] = []
  private scores: number[] = []

  get size(): number {
    return this.indices.length
  }

  push(index: number, score: number): void {
    this.indices.push(index)
    this.scores.push(score)
    let child = this.indices.length - 1

    while (child > 0) {
      const parent = (child - 1) >> 1
      if (this.scores[parent] <= this.scores[child]) break
      this.swap(parent, child)
      child = parent
    }
  }

  pop(): number | null {
    if (this.indices.length === 0) return null
    const result = this.indices[0]
    const lastIndex = this.indices.pop()
    const lastScore = this.scores.pop()

    if (this.indices.length > 0 && lastIndex !== undefined && lastScore !== undefined) {
      this.indices[0] = lastIndex
      this.scores[0] = lastScore

      let parent = 0
      while (true) {
        const left = parent * 2 + 1
        const right = left + 1
        let smallest = parent

        if (left < this.indices.length && this.scores[left] < this.scores[smallest]) {
          smallest = left
        }
        if (right < this.indices.length && this.scores[right] < this.scores[smallest]) {
          smallest = right
        }
        if (smallest === parent) break
        this.swap(parent, smallest)
        parent = smallest
      }
    }

    return result
  }

  private swap(a: number, b: number): void {
    const index = this.indices[a]
    this.indices[a] = this.indices[b]
    this.indices[b] = index

    const score = this.scores[a]
    this.scores[a] = this.scores[b]
    this.scores[b] = score
  }
}
