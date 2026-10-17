import type { Vec2 } from '../config/types'

export const TAU = Math.PI * 2

export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value))
}

export function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * t
}

/** 与帧率无关的指数阻尼。 */
export function damp(current: number, target: number, lambda: number, dt: number): number {
  return lerp(current, target, 1 - Math.exp(-lambda * dt))
}

export function smoothstep(edge0: number, edge1: number, x: number): number {
  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1)
  return t * t * (3 - 2 * t)
}

export function normalizeAngle(angle: number): number {
  let a = angle % TAU
  if (a > Math.PI) a -= TAU
  if (a < -Math.PI) a += TAU
  return a
}

export function angleDifference(a: number, b: number): number {
  return normalizeAngle(a - b)
}

export function distance2D(ax: number, az: number, bx: number, bz: number): number {
  return Math.hypot(bx - ax, bz - az)
}

export function distanceSq2D(ax: number, az: number, bx: number, bz: number): number {
  const dx = bx - ax
  const dz = bz - az
  return dx * dx + dz * dz
}

export function length2D(x: number, z: number): number {
  return Math.hypot(x, z)
}

export function normalize2D(x: number, z: number): Vec2 {
  const length = Math.hypot(x, z)
  if (length < 1e-6) return { x: 0, z: 0 }
  return { x: x / length, z: z / length }
}

export function randomRange(min: number, max: number): number {
  return min + Math.random() * (max - min)
}

export function randomInt(min: number, max: number): number {
  return Math.floor(randomRange(min, max + 1))
}

export function formatTime(seconds: number): string {
  const safe = Math.max(0, Math.ceil(seconds))
  const minutes = Math.floor(safe / 60)
  const secs = safe % 60
  return `${minutes}:${secs.toString().padStart(2, '0')}`
}

export function moveTowards(current: number, target: number, maxDelta: number): number {
  if (Math.abs(target - current) <= maxDelta) return target
  return current + Math.sign(target - current) * maxDelta
}

export function approachAngle(current: number, target: number, maxDelta: number): number {
  const diff = angleDifference(target, current)
  if (Math.abs(diff) <= maxDelta) return normalizeAngle(target)
  return normalizeAngle(current + Math.sign(diff) * maxDelta)
}

export function pointSegmentDistanceSq(
  px: number,
  pz: number,
  ax: number,
  az: number,
  bx: number,
  bz: number
): number {
  const abx = bx - ax
  const abz = bz - az
  const lengthSq = abx * abx + abz * abz
  if (lengthSq < 1e-8) return distanceSq2D(px, pz, ax, az)
  const t = clamp(((px - ax) * abx + (pz - az) * abz) / lengthSq, 0, 1)
  return distanceSq2D(px, pz, ax + abx * t, az + abz * t)
}

export type { Vec2 }
