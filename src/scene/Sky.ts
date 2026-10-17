import * as THREE from 'three'
import type { SkyPreset } from '../config/theme'
import type { QualityLevel } from '../config/types'
import type { SharedAssets } from '../core/Disposal'
import { mulberry32 } from '../utils/rng'

/** 渐变天穹、星星、月亮与缓慢漂移的云。 */
export class Sky {
  readonly group = new THREE.Group()
  private readonly clouds: THREE.Sprite[] = []
  private readonly cloudSpeeds: number[] = []
  private readonly stars: THREE.Points
  private readonly starMaterial: THREE.PointsMaterial
  private readonly moon: THREE.Sprite
  private readonly skyGeometry: THREE.SphereGeometry
  private readonly skyMaterial: THREE.ShaderMaterial
  private readonly starGeometry: THREE.BufferGeometry
  private readonly hillMaterial: THREE.MeshBasicMaterial

  constructor(assets: SharedAssets, preset: SkyPreset, quality: QualityLevel) {
    const skyGeometry = new THREE.SphereGeometry(150, 32, 20)
    this.skyGeometry = skyGeometry
    const skyMaterial = new THREE.ShaderMaterial({
      uniforms: {
        topColor: { value: new THREE.Color(preset.top) },
        horizonColor: { value: new THREE.Color(preset.horizon) }
      },
      vertexShader: `
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 topColor;
        uniform vec3 horizonColor;
        varying vec3 vWorldPosition;
        void main() {
          float h = normalize(vWorldPosition).y;
          float t = smoothstep(-0.08, 0.62, h);
          vec3 color = mix(horizonColor, topColor, t);
          gl_FragColor = vec4(color, 1.0);
        }
      `,
      side: THREE.BackSide,
      depthWrite: false,
      fog: false
    })
    this.skyMaterial = skyMaterial
    const sky = new THREE.Mesh(skyGeometry, skyMaterial)
    this.group.add(sky)

    const starCount = quality === 'high' ? 420 : quality === 'medium' ? 260 : 160
    const starPositions = new Float32Array(starCount * 3)
    const rng = mulberry32(0x51a7)
    for (let i = 0; i < starCount; i++) {
      const theta = rng() * Math.PI * 2
      const y = 0.12 + rng() * 0.88
      const radius = Math.sqrt(Math.max(0, 1 - y * y))
      const distance = 118 + rng() * 8
      starPositions[i * 3] = Math.cos(theta) * radius * distance
      starPositions[i * 3 + 1] = y * distance
      starPositions[i * 3 + 2] = Math.sin(theta) * radius * distance
    }
    const starGeometry = new THREE.BufferGeometry()
    this.starGeometry = starGeometry
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3))
    this.starMaterial = new THREE.PointsMaterial({
      color: preset.moon,
      size: quality === 'high' ? 1.35 : 1.15,
      sizeAttenuation: false,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      fog: false
    })
    this.stars = new THREE.Points(starGeometry, this.starMaterial)
    this.group.add(this.stars)

    const moonTexture = assets.getCanvasTexture('moon-sprite', 192, 192, (ctx, width, height) => {
      const gradient = ctx.createRadialGradient(width / 2, height / 2, width * 0.08, width / 2, height / 2, width * 0.5)
      gradient.addColorStop(0, 'rgba(255,250,225,1)')
      gradient.addColorStop(0.55, 'rgba(255,242,201,0.95)')
      gradient.addColorStop(1, 'rgba(255,242,201,0)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)
      ctx.fillStyle = 'rgba(226,206,170,0.35)'
      for (const [x, y, r] of [
        [0.42, 0.4, 0.045],
        [0.58, 0.52, 0.035],
        [0.47, 0.62, 0.03]
      ]) {
        ctx.beginPath()
        ctx.arc(width * x, height * y, width * r, 0, Math.PI * 2)
        ctx.fill()
      }
    })
    this.moon = new THREE.Sprite(assets.getSpriteMaterial(0xffffff, { opacity: 0.95, blending: THREE.NormalBlending }))
    this.moon.material.map = moonTexture
    this.moon.material.needsUpdate = true
    this.moon.position.set(54, 48, -78)
    this.moon.scale.setScalar(quality === 'high' ? 18 : 15)
    this.group.add(this.moon)

    const moonGlow = new THREE.Sprite(assets.getSpriteMaterial(preset.moon, { opacity: 0.2 }))
    moonGlow.material.map = assets.getCanvasTexture('glow-soft', 128, 128, (ctx, width, height) => {
      const gradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width / 2)
      gradient.addColorStop(0, 'rgba(255,255,255,1)')
      gradient.addColorStop(0.35, 'rgba(255,255,255,0.55)')
      gradient.addColorStop(1, 'rgba(255,255,255,0)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)
    })
    moonGlow.material.needsUpdate = true
    moonGlow.position.copy(this.moon.position)
    moonGlow.scale.setScalar(50)
    this.group.add(moonGlow)

    const cloudTexture = assets.getCanvasTexture('cloud-soft', 256, 128, (ctx, width, height) => {
      const gradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width / 2)
      gradient.addColorStop(0, 'rgba(255,255,255,0.62)')
      gradient.addColorStop(0.55, 'rgba(255,255,255,0.24)')
      gradient.addColorStop(1, 'rgba(255,255,255,0)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)
    })
    const cloudCount = quality === 'high' ? 5 : 3
    for (let i = 0; i < cloudCount; i++) {
      const sprite = new THREE.Sprite(assets.getSpriteMaterial(i % 2 === 0 ? 0xd9ccff : 0xffd9e6, { opacity: 0.16, blending: THREE.NormalBlending }))
      sprite.material.map = cloudTexture
      sprite.material.needsUpdate = true
      sprite.position.set(-60 + i * 28, 38 + (i % 3) * 8, -55 - (i % 2) * 12)
      sprite.scale.set(36 + (i % 3) * 8, 10 + (i % 2) * 3, 1)
      this.clouds.push(sprite)
      this.cloudSpeeds.push(0.25 + i * 0.06)
      this.group.add(sprite)
    }

    // 远处的低矮山丘剪影，增加空间层次
    const hillMaterial = new THREE.MeshBasicMaterial({
      color: 0x2a2145,
      transparent: true,
      opacity: 0.5,
      fog: false,
      depthWrite: false
    })
    this.hillMaterial = hillMaterial
    const hillGeometry = assets.getGeometry('hill', () => new THREE.SphereGeometry(1, 12, 8))
    for (let i = 0; i < 7; i++) {
      const angle = (i / 7) * Math.PI * 2
      const hill = new THREE.Mesh(hillGeometry, hillMaterial)
      hill.position.set(Math.cos(angle) * 82, -3, Math.sin(angle) * 82)
      hill.scale.set(20 + (i % 3) * 7, 7 + (i % 2) * 3, 12)
      this.group.add(hill)
    }
  }

  dispose(): void {
    this.group.removeFromParent()
    this.skyGeometry.dispose()
    this.skyMaterial.dispose()
    this.starGeometry.dispose()
    this.starMaterial.dispose()
    this.hillMaterial.dispose()
  }

  update(dt: number, elapsed: number): void {
    this.starMaterial.opacity = 0.72 + Math.sin(elapsed * 0.55) * 0.12
    for (let i = 0; i < this.clouds.length; i++) {
      const cloud = this.clouds[i]
      cloud.position.x += this.cloudSpeeds[i] * dt
      if (cloud.position.x > 80) cloud.position.x = -80
    }
    this.moon.position.y = 48 + Math.sin(elapsed * 0.16) * 0.6
  }
}
