import * as THREE from 'three'
import type { SkyPreset } from '../config/theme'
import type { QualityLevel, Vec2 } from '../config/types'

/** 分档灯光：只有一盏方向光投影，其余点光只负责氛围。 */
export class Lighting {
  readonly group = new THREE.Group()
  private readonly pointLights: THREE.PointLight[] = []
  private readonly phases: number[] = []

  constructor(
    preset: SkyPreset,
    quality: QualityLevel,
    lampPositions: Vec2[],
    jailCenter: Vec2
  ) {
    const hemi = new THREE.HemisphereLight(
      preset.ambientSky,
      preset.ambientGround,
      preset.ambientIntensity
    )
    this.group.add(hemi)

    const moon = new THREE.DirectionalLight(preset.moon, preset.moonIntensity)
    moon.position.set(34, 52, 26)
    moon.target.position.set(0, 0, 0)
    moon.castShadow = true
    const shadowSize = quality === 'high' ? 2048 : 1024
    moon.shadow.mapSize.set(shadowSize, shadowSize)
    moon.shadow.camera.near = 1
    moon.shadow.camera.far = 120
    moon.shadow.camera.left = -55
    moon.shadow.camera.right = 55
    moon.shadow.camera.top = 55
    moon.shadow.camera.bottom = -55
    moon.shadow.bias = -0.0004
    moon.shadow.normalBias = 0.035
    this.group.add(moon)
    this.group.add(moon.target)

    // 来自镜头一侧的暖色补光，保证角色背面和前景可读。
    const fill = new THREE.DirectionalLight(0xffe6d8, 0.72)
    fill.position.set(-18, 22, 30)
    fill.target.position.set(0, 0, 0)
    fill.castShadow = false
    this.group.add(fill)
    this.group.add(fill.target)

    const maxLights = quality === 'high' ? 6 : quality === 'medium' ? 3 : 2
    const chosen = pickSpread(lampPositions, maxLights)
    for (let i = 0; i < chosen.length; i++) {
      const point = chosen[i]
      const light = new THREE.PointLight(0xffd08a, 1.15, 15, 2)
      light.position.set(point.x, 3.1, point.z)
      light.castShadow = false
      this.pointLights.push(light)
      this.phases.push(i * 1.7 + point.x * 0.11)
      this.group.add(light)
    }

    const jailGlow = new THREE.PointLight(0xffb8d0, 0.9, 18, 2)
    jailGlow.position.set(jailCenter.x, 3.2, jailCenter.z)
    jailGlow.castShadow = false
    this.pointLights.push(jailGlow)
    this.phases.push(0.4)
    this.group.add(jailGlow)

    const centerGlow = new THREE.PointLight(0xb8a7f2, 0.55, 34, 2)
    centerGlow.position.set(0, 7, 0)
    centerGlow.castShadow = false
    this.group.add(centerGlow)
  }

  update(elapsed: number): void {
    for (let i = 0; i < this.pointLights.length; i++) {
      const phase = this.phases[i]
      this.pointLights[i].intensity =
        (i === this.pointLights.length - 1 ? 0.9 : 1.15) +
        Math.sin(elapsed * 1.7 + phase) * 0.06
    }
  }
}

function pickSpread(points: Vec2[], count: number): Vec2[] {
  if (points.length <= count) return points
  const result: Vec2[] = []
  const step = points.length / count
  for (let i = 0; i < count; i++) {
    result.push(points[Math.floor(i * step)])
  }
  return result
}
