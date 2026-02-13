/**
 * Utility functions for the game
 * 工具函数
 */

/**
 * Clamp a value between min and max
 * 将值限制在 min 和 max 之间
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

/**
 * Generate a random number between min and max
 * 生成 min 和 max 之间的随机数
 */
export function random(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

/**
 * Generate a random integer between min and max (inclusive)
 * 生成 min 和 max 之间的随机整数（包含边界）
 */
export function randomInt(min: number, max: number): number {
  return Math.floor(random(min, max + 1));
}

/**
 * Calculate distance between two 3D points
 * 计算两个 3D 点之间的距离
 */
export function distance(
  x1: number, y1: number, z1: number,
  x2: number, y2: number, z2: number
): number {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dz = z2 - z1;
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

/**
 * Linear interpolation
 * 线性插值
 */
export function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * t;
}

/**
 * Convert seconds to time string (MM:SS)
 * 将秒数转换为时间字符串 (MM:SS)
 */
export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Check if a point is inside a box
 * 检查点是否在盒子内部
 */
export function isInsideBox(
  px: number, py: number, pz: number,
  bx: number, by: number, bz: number,
  bw: number, bh: number, bd: number
): boolean {
  return (
    px >= bx - bw / 2 && px <= bx + bw / 2 &&
    py >= by && py <= by + bh &&
    pz >= bz - bd / 2 && pz <= bz + bd / 2
  );
}

/**
 * Normalize angle to -PI to PI range
 * 将角度标准化到 -PI 到 PI 范围
 */
export function normalizeAngle(angle: number): number {
  while (angle > Math.PI) angle -= Math.PI * 2;
  while (angle < -Math.PI) angle += Math.PI * 2;
  return angle;
}

/**
 * Check if target is in the field of view
 * 检查目标是否在视野范围内
 */
export function isInFieldOfView(
  viewerX: number, viewerY: number, viewerZ: number,
  viewerAngleY: number,
  targetX: number, targetY: number, targetZ: number,
  fovRadians: number = Math.PI / 3, // 60 degrees
  maxDistance: number = 15
): boolean {
  // Check distance first
  const dist = distance(viewerX, viewerY, viewerZ, targetX, targetY, targetZ);
  if (dist > maxDistance) return false;

  // Calculate angle to target
  const dx = targetX - viewerX;
  const dz = targetZ - viewerZ;
  const angleToTarget = Math.atan2(dx, dz);
  const angleDiff = Math.abs(normalizeAngle(angleToTarget - viewerAngleY));

  return angleDiff <= fovRadians / 2;
}
