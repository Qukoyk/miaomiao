import * as THREE from 'three'
import type { QualityLevel } from '../config/types'
import { PostFX } from '../fx/PostFX'

/** 共享渲染器：只创建一次，Session 切换时复用。 */
export class RenderSystem {
  readonly renderer: THREE.WebGLRenderer
  readonly postFX = new PostFX()

  private quality: QualityLevel
  private width = 1
  private height = 1
  private postFXRequested = false

  constructor(canvas: HTMLCanvasElement, quality: QualityLevel) {
    this.quality = quality
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: quality !== 'low',
      powerPreference: 'high-performance'
    })
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping
    this.renderer.toneMappingExposure = 1.22
    this.renderer.outputColorSpace = THREE.SRGBColorSpace
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.applyPixelRatio()
  }

  setQuality(quality: QualityLevel): void {
    if (this.quality === quality) return
    this.quality = quality
    this.applyPixelRatio()
    this.postFXRequested = false
    if (quality !== 'high') this.postFX.dispose()
  }

  resize(width: number, height: number): void {
    this.width = Math.max(1, width)
    this.height = Math.max(1, height)
    this.applyPixelRatio()
  }

  render(scene: THREE.Scene, camera: THREE.Camera): void {
    if (this.quality === 'high') {
      if (!this.postFXRequested) {
        this.postFXRequested = true
        void this.postFX.init(
          this.renderer,
          scene,
          camera,
          this.quality,
          this.width,
          this.height,
          this.renderer.getPixelRatio()
        )
      }
      if (this.postFX.isActive) {
        this.postFX.render(this.renderer, scene, camera)
        return
      }
    }
    this.renderer.render(scene, camera)
  }

  dispose(): void {
    this.postFX.dispose()
    this.renderer.dispose()
  }

  private applyPixelRatio(): void {
    const maxRatio =
      this.quality === 'high' ? 2 : this.quality === 'medium' ? 1.5 : 1
    const ratio = Math.min(window.devicePixelRatio || 1, maxRatio)
    this.renderer.setPixelRatio(ratio)
    this.renderer.setSize(this.width, this.height, false)
    this.postFX.setSize(this.width, this.height, ratio)
  }
}
