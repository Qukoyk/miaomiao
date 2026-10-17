import * as THREE from 'three'
import type { SharedAssets } from '../core/Disposal'

export type ParticleType = 'star' | 'heart' | 'bubble' | 'spark'

interface Particle {
  sprite: THREE.Sprite
  velocity: THREE.Vector3
  life: number
  maxLife: number
  baseScale: number
  gravity: number
}

/** 池化 Sprite 粒子，避免每帧创建对象。 */
export class Particles {
  readonly group = new THREE.Group()
  private readonly assets: SharedAssets
  private readonly materials = new Map<string, THREE.SpriteMaterial>()
  private readonly particles: Particle[] = []
  private cursor = 0

  constructor(scene: THREE.Scene, assets: SharedAssets, count = 140) {
    this.assets = assets
    scene.add(this.group)
    for (let i = 0; i < count; i++) {
      const sprite = new THREE.Sprite(this.getMaterial('spark', 0xffffff))
      sprite.visible = false
      this.group.add(sprite)
      this.particles.push({
        sprite,
        velocity: new THREE.Vector3(),
        life: 0,
        maxLife: 1,
        baseScale: 1,
        gravity: 0
      })
    }
  }

  burst(
    x: number,
    y: number,
    z: number,
    color: number,
    type: ParticleType,
    count = 10,
    options: { speed?: number; size?: number; life?: number; gravity?: number; spread?: number } = {}
  ): void {
    const speed = options.speed ?? 2.4
    const size = options.size ?? 0.22
    const life = options.life ?? 0.8
    const gravity = options.gravity ?? 0.8
    const spread = options.spread ?? Math.PI * 2

    for (let i = 0; i < count; i++) {
      const particle = this.particles[this.cursor % this.particles.length]
      this.cursor++
      const angle = Math.random() * spread
      const elevation = Math.random() * Math.PI * 0.5
      const velocity = speed * (0.55 + Math.random() * 0.7)
      particle.velocity.set(
        Math.cos(angle) * Math.cos(elevation) * velocity,
        Math.sin(elevation) * velocity,
        Math.sin(angle) * Math.cos(elevation) * velocity
      )
      const maxLife = life * (0.7 + Math.random() * 0.6)
      particle.life = maxLife
      particle.maxLife = maxLife
      particle.baseScale = size * (0.7 + Math.random() * 0.6)
      particle.gravity = gravity
      particle.sprite.position.set(x, y, z)
      particle.sprite.material = this.getMaterial(type, color)
      particle.sprite.visible = true
      particle.sprite.scale.setScalar(particle.baseScale)
    }
  }

  update(dt: number): void {
    for (const particle of this.particles) {
      if (particle.life <= 0) continue
      particle.life -= dt
      if (particle.life <= 0) {
        particle.sprite.visible = false
        continue
      }
      particle.velocity.y -= particle.gravity * dt
      particle.sprite.position.addScaledVector(particle.velocity, dt)
      const ratio = particle.life / particle.maxLife
      particle.sprite.scale.setScalar(particle.baseScale * Math.max(0.05, ratio))
    }
  }

  dispose(): void {
    this.group.removeFromParent()
    for (const material of this.materials.values()) material.dispose()
    this.materials.clear()
    this.particles.length = 0
  }

  private getMaterial(type: ParticleType, color: number): THREE.SpriteMaterial {
    const key = `${type}:${color}`
    const existing = this.materials.get(key)
    if (existing) return existing

    const texture = this.assets.getCanvasTexture(`particle-${type}`, 64, 64, (ctx, width, height) => {
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = '#ffffff'
      if (type === 'star') {
        ctx.beginPath()
        for (let i = 0; i < 10; i++) {
          const angle = (i / 10) * Math.PI * 2 - Math.PI / 2
          const radius = i % 2 === 0 ? width * 0.42 : width * 0.18
          const x = width / 2 + Math.cos(angle) * radius
          const y = height / 2 + Math.sin(angle) * radius
          if (i === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.closePath()
        ctx.fill()
      } else if (type === 'heart') {
        ctx.beginPath()
        ctx.moveTo(width / 2, height * 0.82)
        ctx.bezierCurveTo(width * 0.08, height * 0.52, width * 0.18, height * 0.16, width / 2, height * 0.36)
        ctx.bezierCurveTo(width * 0.82, height * 0.16, width * 0.92, height * 0.52, width / 2, height * 0.82)
        ctx.fill()
      } else if (type === 'bubble') {
        ctx.beginPath()
        ctx.arc(width / 2, height / 2, width * 0.34, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalCompositeOperation = 'destination-out'
        ctx.beginPath()
        ctx.arc(width / 2, height / 2, width * 0.22, 0, Math.PI * 2)
        ctx.fill()
      } else {
        const gradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width / 2)
        gradient.addColorStop(0, 'rgba(255,255,255,1)')
        gradient.addColorStop(0.4, 'rgba(255,255,255,0.6)')
        gradient.addColorStop(1, 'rgba(255,255,255,0)')
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, width, height)
      }
    })

    const material = new THREE.SpriteMaterial({
      map: texture,
      color,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      blending: type === 'bubble' || type === 'heart' ? THREE.NormalBlending : THREE.AdditiveBlending
    })
    this.materials.set(key, material)
    return material
  }
}
