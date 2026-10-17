import * as THREE from 'three'
import type { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import type { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import type { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import type { QualityLevel } from '../config/types'

/**
 * 高画质后处理：Bloom + OutputPass。
 * 低/中画质完全不加载 composer，直接渲染。
 */
export class PostFX {
  private composer: EffectComposer | null = null
  private renderPass: RenderPass | null = null
  private bloomPass: UnrealBloomPass | null = null
  private initialising = false
  private enabled = false

  async init(
    renderer: THREE.WebGLRenderer,
    scene: THREE.Scene,
    camera: THREE.Camera,
    quality: QualityLevel,
    width: number,
    height: number,
    pixelRatio: number
  ): Promise<void> {
    if (quality !== 'high' || this.initialising || this.composer) return
    this.initialising = true
    try {
      const [{ EffectComposer: Composer }, { RenderPass: Pass }, { UnrealBloomPass: Bloom }, { OutputPass }] =
        await Promise.all([
          import('three/examples/jsm/postprocessing/EffectComposer.js'),
          import('three/examples/jsm/postprocessing/RenderPass.js'),
          import('three/examples/jsm/postprocessing/UnrealBloomPass.js'),
          import('three/examples/jsm/postprocessing/OutputPass.js')
        ])

      const composer = new Composer(renderer)
      composer.setPixelRatio(pixelRatio)
      composer.setSize(width, height)
      const renderPass = new Pass(scene, camera)
      const bloom = new Bloom(new THREE.Vector2(width, height), 0.34, 0.55, 0.82)
      composer.addPass(renderPass)
      composer.addPass(bloom)
      composer.addPass(new OutputPass())
      this.composer = composer
      this.renderPass = renderPass
      this.bloomPass = bloom
      this.enabled = true
    } catch (error) {
      console.warn('后处理初始化失败，回退到直接渲染', error)
      this.enabled = false
    } finally {
      this.initialising = false
    }
  }

  setSceneCamera(scene: THREE.Scene, camera: THREE.Camera): void {
    if (this.renderPass) {
      this.renderPass.scene = scene
      this.renderPass.camera = camera
    }
  }

  setSize(width: number, height: number, pixelRatio: number): void {
    this.composer?.setPixelRatio(pixelRatio)
    this.composer?.setSize(width, height)
    this.bloomPass?.setSize(width, height)
  }

  render(
    renderer: THREE.WebGLRenderer,
    scene: THREE.Scene,
    camera: THREE.Camera
  ): void {
    if (this.enabled && this.composer) {
      this.setSceneCamera(scene, camera)
      this.composer.render()
      return
    }
    renderer.render(scene, camera)
  }

  get isActive(): boolean {
    return this.enabled
  }

  dispose(): void {
    this.composer?.dispose()
    this.composer = null
    this.renderPass = null
    this.bloomPass = null
    this.enabled = false
  }
}
