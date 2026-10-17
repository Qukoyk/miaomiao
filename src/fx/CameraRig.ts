import * as THREE from 'three'
import { RULES } from '../config/rules'
import type { CollisionWorld } from '../scene/CollisionWorld'
import { clamp, damp } from '../utils/math'

/** 第三人称相机：yaw/pitch、阻尼跟随、2D 避障、FOV 与震动。 */
export class CameraRig {
  yaw = 0
  pitch = 0.12

  private readonly camera: THREE.PerspectiveCamera
  private readonly collision: CollisionWorld
  private readonly desired = new THREE.Vector3()
  private readonly lookTarget = new THREE.Vector3()
  private readonly smoothLook = new THREE.Vector3()
  private shake = 0
  private reducedMotion = false
  private initialised = false

  constructor(camera: THREE.PerspectiveCamera, collision: CollisionWorld) {
    this.camera = camera
    this.collision = collision
    this.camera.fov = RULES.camera.normalFov
    this.camera.updateProjectionMatrix()
  }

  setReducedMotion(reduced: boolean): void {
    this.reducedMotion = reduced
  }

  setYaw(yaw: number): void {
    this.yaw = yaw
  }

  applyLook(deltaX: number, deltaY: number): void {
    this.yaw += deltaX * 0.0024
    this.pitch = clamp(
      this.pitch - deltaY * 0.002,
      RULES.camera.pitchMin,
      RULES.camera.pitchMax
    )
  }

  addShake(amount: number): void {
    if (this.reducedMotion) return
    this.shake = Math.min(1.2, this.shake + amount)
  }

  update(
    dt: number,
    targetX: number,
    targetZ: number,
    sprinting: boolean,
    lunging: boolean
  ): void {
    const distance = RULES.camera.distance
    const horizontal = Math.cos(this.pitch) * distance
    const vertical = RULES.camera.height + Math.sin(this.pitch) * distance
    const forwardX = Math.sin(this.yaw)
    const forwardZ = Math.cos(this.yaw)

    let desiredX = targetX - forwardX * horizontal
    let desiredZ = targetZ - forwardZ * horizontal
    let desiredY = vertical

    const hit = this.collision.segmentHit(targetX, targetZ, desiredX, desiredZ, true)
    if (hit !== null) {
      const safe = Math.max(0.2, hit - RULES.camera.collisionPadding / Math.max(0.01, horizontal))
      desiredX = targetX + (desiredX - targetX) * safe
      desiredZ = targetZ + (desiredZ - targetZ) * safe
      desiredY = Math.max(0.8, vertical * Math.max(0.45, safe) + 0.4)
    }

    this.desired.set(desiredX, Math.max(0.65, desiredY), desiredZ)

    if (!this.initialised) {
      this.camera.position.copy(this.desired)
      this.smoothLook.set(targetX, RULES.camera.lookHeight, targetZ)
      this.initialised = true
    } else {
      const follow = 1 - Math.exp(-RULES.camera.damping * dt)
      this.camera.position.lerp(this.desired, follow)
      this.lookTarget.set(targetX, RULES.camera.lookHeight, targetZ)
      this.smoothLook.lerp(this.lookTarget, follow)
    }

    if (this.shake > 0.001 && !this.reducedMotion) {
      this.camera.position.x += (Math.random() - 0.5) * this.shake * 0.22
      this.camera.position.y += (Math.random() - 0.5) * this.shake * 0.16
      this.camera.position.z += (Math.random() - 0.5) * this.shake * 0.22
      this.shake = Math.max(0, this.shake - dt * 3.2)
    }

    this.camera.lookAt(this.smoothLook)

    const targetFov = lunging
      ? RULES.camera.lungeFov
      : sprinting
        ? RULES.camera.sprintFov
        : RULES.camera.normalFov
    const nextFov = damp(this.camera.fov, targetFov, 8, dt)
    if (Math.abs(nextFov - this.camera.fov) > 0.01) {
      this.camera.fov = nextFov
      this.camera.updateProjectionMatrix()
    }
  }

  reset(): void {
    this.yaw = 0
    this.pitch = 0.12
    this.shake = 0
    this.initialised = false
  }
}
