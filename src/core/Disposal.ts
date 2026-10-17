import * as THREE from 'three'

export interface MaterialOptions {
  roughness?: number
  metalness?: number
  emissive?: number
  emissiveIntensity?: number
  transparent?: boolean
  opacity?: number
  side?: THREE.Side
  flatShading?: boolean
  depthWrite?: boolean
}

/** 应用级共享资源：同一份几何/材质/程序化纹理只创建一次。 */
export class SharedAssets {
  private geometries = new Map<string, THREE.BufferGeometry>()
  private materials = new Map<string, THREE.MeshStandardMaterial>()
  private basicMaterials = new Map<string, THREE.MeshBasicMaterial>()
  private textures = new Map<string, THREE.CanvasTexture>()
  private spriteMaterials = new Map<string, THREE.SpriteMaterial>()
  private textureMaterials = new Map<string, THREE.MeshBasicMaterial>()

  getGeometry<T extends THREE.BufferGeometry>(key: string, factory: () => T): T {
    const existing = this.geometries.get(key)
    if (existing) return existing as T
    const geometry = factory()
    this.geometries.set(key, geometry)
    return geometry
  }

  getMaterial(color: number, options: MaterialOptions = {}): THREE.MeshStandardMaterial {
    const key = [
      color,
      options.roughness ?? 0.75,
      options.metalness ?? 0.04,
      options.emissive ?? 0,
      options.emissiveIntensity ?? 1,
      options.transparent ? 1 : 0,
      options.opacity ?? 1,
      options.side ?? THREE.FrontSide,
      options.flatShading ? 1 : 0,
      options.depthWrite === false ? 0 : 1
    ].join(':')

    const existing = this.materials.get(key)
    if (existing) return existing

    const material = new THREE.MeshStandardMaterial({
      color,
      roughness: options.roughness ?? 0.75,
      metalness: options.metalness ?? 0.04,
      emissive: options.emissive ?? 0x000000,
      emissiveIntensity: options.emissiveIntensity ?? 1,
      transparent: options.transparent ?? false,
      opacity: options.opacity ?? 1,
      side: options.side ?? THREE.FrontSide,
      flatShading: options.flatShading ?? false,
      depthWrite: options.depthWrite ?? true
    })
    this.materials.set(key, material)
    return material
  }

  getBasicMaterial(
    color: number,
    options: { transparent?: boolean; opacity?: number; side?: THREE.Side; depthWrite?: boolean } = {}
  ): THREE.MeshBasicMaterial {
    const key = [
      color,
      options.transparent ? 1 : 0,
      options.opacity ?? 1,
      options.side ?? THREE.FrontSide,
      options.depthWrite === false ? 0 : 1
    ].join(':')

    const existing = this.basicMaterials.get(key)
    if (existing) return existing

    const material = new THREE.MeshBasicMaterial({
      color,
      transparent: options.transparent ?? false,
      opacity: options.opacity ?? 1,
      side: options.side ?? THREE.FrontSide,
      depthWrite: options.depthWrite ?? true
    })
    this.basicMaterials.set(key, material)
    return material
  }

  getSpriteMaterial(
    color: number,
    options: { opacity?: number; blending?: THREE.Blending; depthWrite?: boolean } = {}
  ): THREE.SpriteMaterial {
    const key = [
      color,
      options.opacity ?? 0.8,
      options.blending ?? THREE.AdditiveBlending,
      options.depthWrite === false ? 0 : 1
    ].join(':')

    const existing = this.spriteMaterials.get(key)
    if (existing) return existing

    const material = new THREE.SpriteMaterial({
      color,
      transparent: true,
      opacity: options.opacity ?? 0.8,
      blending: options.blending ?? THREE.AdditiveBlending,
      depthWrite: options.depthWrite ?? false,
      fog: false
    })
    this.spriteMaterials.set(key, material)
    return material
  }

  getBasicTextureMaterial(
    texture: THREE.Texture,
    options: { transparent?: boolean; side?: THREE.Side; depthWrite?: boolean } = {}
  ): THREE.MeshBasicMaterial {
    const key = [
      texture.uuid,
      options.transparent ? 1 : 0,
      options.side ?? THREE.FrontSide,
      options.depthWrite === false ? 0 : 1
    ].join(':')

    const existing = this.textureMaterials.get(key)
    if (existing) return existing

    const material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: options.transparent ?? false,
      side: options.side ?? THREE.FrontSide,
      depthWrite: options.depthWrite ?? true
    })
    this.textureMaterials.set(key, material)
    return material
  }

  getCanvasTexture(
    key: string,
    width: number,
    height: number,
    draw: (context: CanvasRenderingContext2D, width: number, height: number) => void
  ): THREE.CanvasTexture {
    const existing = this.textures.get(key)
    if (existing) return existing

    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const context = canvas.getContext('2d')
    if (!context) throw new Error('无法创建 CanvasTexture 上下文')
    draw(context, width, height)

    const texture = new THREE.CanvasTexture(canvas)
    texture.colorSpace = THREE.SRGBColorSpace
    texture.anisotropy = 4
    texture.needsUpdate = true
    this.textures.set(key, texture)
    return texture
  }

  dispose(): void {
    for (const geometry of this.geometries.values()) geometry.dispose()
    for (const material of this.materials.values()) material.dispose()
    for (const material of this.basicMaterials.values()) material.dispose()
    for (const material of this.spriteMaterials.values()) material.dispose()
    for (const material of this.textureMaterials.values()) material.dispose()
    for (const texture of this.textures.values()) texture.dispose()
    this.geometries.clear()
    this.materials.clear()
    this.basicMaterials.clear()
    this.spriteMaterials.clear()
    this.textureMaterials.clear()
    this.textures.clear()
  }
}

/** 单局独有资源（动态创建的几何/材质/纹理）的释放袋。 */
export class DisposalBag {
  private items: Array<{ dispose: () => void }> = []

  track<T extends { dispose: () => void }>(item: T): T {
    this.items.push(item)
    return item
  }

  dispose(): void {
    for (const item of this.items) item.dispose()
    this.items = []
  }
}
