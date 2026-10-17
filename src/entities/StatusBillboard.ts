import * as THREE from 'three'

/** 头顶状态牌：3 颗当前星星 + 3 个累计关押绳结。 */
export class StatusBillboard {
  readonly sprite: THREE.Sprite
  private readonly canvas: HTMLCanvasElement
  private readonly context: CanvasRenderingContext2D
  private readonly texture: THREE.CanvasTexture
  private readonly material: THREE.SpriteMaterial
  private lastContacts = -1
  private lastJails = -1
  private lastHidden = false

  constructor(parent: THREE.Object3D) {
    this.canvas = document.createElement('canvas')
    this.canvas.width = 256
    this.canvas.height = 128
    const context = this.canvas.getContext('2d')
    if (!context) throw new Error('无法创建状态牌画布')
    this.context = context

    this.texture = new THREE.CanvasTexture(this.canvas)
    this.texture.colorSpace = THREE.SRGBColorSpace
    this.material = new THREE.SpriteMaterial({
      map: this.texture,
      transparent: true,
      depthWrite: false,
      fog: false
    })
    this.sprite = new THREE.Sprite(this.material)
    this.sprite.scale.set(0.95, 0.48, 1)
    this.sprite.renderOrder = 5
    parent.add(this.sprite)
  }

  update(contacts: number, jails: number, hidden: boolean): void {
    if (
      contacts === this.lastContacts &&
      jails === this.lastJails &&
      hidden === this.lastHidden
    ) {
      return
    }
    this.lastContacts = contacts
    this.lastJails = jails
    this.lastHidden = hidden
    this.sprite.visible = !hidden
    if (hidden) return
    this.redraw(contacts, jails)
  }

  dispose(): void {
    this.sprite.removeFromParent()
    this.texture.dispose()
    this.material.dispose()
  }

  private redraw(contacts: number, jails: number): void {
    const ctx = this.context
    const width = this.canvas.width
    const height = this.canvas.height
    ctx.clearRect(0, 0, width, height)

    // 奶油色小牌子
    ctx.fillStyle = 'rgba(255,250,240,0.94)'
    roundedRect(ctx, 10, 14, width - 20, height - 32, 32)
    ctx.fill()
    ctx.strokeStyle = 'rgba(43,33,64,0.22)'
    ctx.lineWidth = 5
    roundedRect(ctx, 10, 14, width - 20, height - 32, 32)
    ctx.stroke()

    // 当前星星
    for (let i = 0; i < 3; i++) {
      const x = 54 + i * 48
      const on = i < contacts
      drawStar(ctx, x, 45, 15, on ? '#f6c85f' : 'rgba(43,33,64,0.16)', on)
    }

    // 累计关押绳结
    for (let i = 0; i < 3; i++) {
      const x = 54 + i * 48
      const on = i < jails
      drawKnot(ctx, x, 87, on ? '#ff9ebb' : 'rgba(43,33,64,0.14)')
    }

    this.texture.needsUpdate = true
  }
}

function drawStar(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  radius: number,
  color: string,
  glow: boolean
): void {
  ctx.save()
  if (glow) {
    ctx.shadowColor = 'rgba(246,200,95,0.8)'
    ctx.shadowBlur = 10
  }
  ctx.beginPath()
  for (let i = 0; i < 10; i++) {
    const angle = (i / 10) * Math.PI * 2 - Math.PI / 2
    const r = i % 2 === 0 ? radius : radius * 0.45
    const x = cx + Math.cos(angle) * r
    const y = cy + Math.sin(angle) * r
    if (i === 0) ctx.moveTo(x, y)
    else ctx.lineTo(x, y)
  }
  ctx.closePath()
  ctx.fillStyle = color
  ctx.fill()
  ctx.strokeStyle = 'rgba(43,33,64,0.35)'
  ctx.lineWidth = 2
  ctx.stroke()
  ctx.restore()
}

function drawKnot(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  color: string
): void {
  ctx.save()
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(cx - 13, cy - 7)
  ctx.quadraticCurveTo(cx - 2, cy - 15, cx, cy - 2)
  ctx.quadraticCurveTo(cx + 2, cy - 15, cx + 13, cy - 7)
  ctx.quadraticCurveTo(cx + 4, cy + 6, cx, cy + 12)
  ctx.quadraticCurveTo(cx - 4, cy + 6, cx - 13, cy - 7)
  ctx.closePath()
  ctx.fill()
  ctx.strokeStyle = 'rgba(43,33,64,0.24)'
  ctx.lineWidth = 1.8
  ctx.stroke()
  ctx.restore()
}

function roundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
): void {
  ctx.beginPath()
  ctx.moveTo(x + radius, y)
  ctx.arcTo(x + width, y, x + width, y + height, radius)
  ctx.arcTo(x + width, y + height, x, y + height, radius)
  ctx.arcTo(x, y + height, x, y, radius)
  ctx.arcTo(x, y, x + width, y, radius)
  ctx.closePath()
}
