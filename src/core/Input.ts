import { clamp } from '../utils/math'
import { isMobileDevice } from './Quality'

export type PressedAction = 'lunge' | 'call' | 'interact' | 'pause'

/**
 * 全局输入。只在 App 构造时创建一次，单局不重复注册监听器。
 * 桌面端负责键鼠与 Pointer Lock；移动端视角触摸在这里处理，
 * 摇杆/按钮通过 setMobile* / triggerAction 注入。
 */
export class Input {
  readonly isTouchDevice: boolean
  enabled = false
  onLockChange: ((locked: boolean) => void) | null = null

  private readonly canvas: HTMLCanvasElement
  private readonly abort = new AbortController()
  private readonly keys = new Set<string>()
  private readonly pressed = new Set<PressedAction>()
  private readonly joystick = { x: 0, z: 0, active: false }
  private mobileSprint = false
  private lookX = 0
  private lookY = 0
  private locked = false
  private cameraTouchId: number | null = null
  private cameraTouchX = 0
  private cameraTouchY = 0
  private skipMouseMoves = 0

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.isTouchDevice = isMobileDevice()
    this.bind()
  }

  setEnabled(enabled: boolean): void {
    this.enabled = enabled
    if (!enabled) this.reset()
  }

  reset(): void {
    this.keys.clear()
    this.pressed.clear()
    this.joystick.x = 0
    this.joystick.z = 0
    this.joystick.active = false
    this.mobileSprint = false
    this.lookX = 0
    this.lookY = 0
    this.cameraTouchId = null
  }

  get isLocked(): boolean {
    return this.locked
  }

  lock(): void {
    if (this.isTouchDevice) return
    void this.canvas.requestPointerLock?.()
  }

  unlock(): void {
    if (document.pointerLockElement) document.exitPointerLock()
  }

  getMoveInput(): { x: number; z: number } {
    let x = 0
    let z = 0

    if (this.joystick.active) {
      x = this.joystick.x
      z = this.joystick.z
    } else {
      if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) z += 1
      if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) z -= 1
      if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) x -= 1
      if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) x += 1
    }

    const length = Math.hypot(x, z)
    if (length > 1) {
      x /= length
      z /= length
    }
    return { x, z }
  }

  get sprinting(): boolean {
    return this.mobileSprint || this.keys.has('ShiftLeft') || this.keys.has('ShiftRight')
  }

  get crouching(): boolean {
    return this.keys.has('KeyC')
  }

  consumeLookDelta(): { x: number; y: number } {
    const result = { x: this.lookX, y: this.lookY }
    this.lookX = 0
    this.lookY = 0
    return result
  }

  consumePressed(action: PressedAction): boolean {
    if (!this.pressed.has(action)) return false
    this.pressed.delete(action)
    return true
  }

  setMobileMove(x: number, z: number, active: boolean): void {
    this.joystick.x = clamp(x, -1, 1)
    this.joystick.z = clamp(z, -1, 1)
    this.joystick.active = active
  }

  setMobileSprint(active: boolean): void {
    this.mobileSprint = active
  }

  triggerAction(action: PressedAction): void {
    this.pressed.add(action)
  }

  dispose(): void {
    this.abort.abort()
  }

  private bind(): void {
    const signal = this.abort.signal

    window.addEventListener(
      'keydown',
      (event) => {
        if (event.code === 'Escape') {
          this.pressed.add('pause')
          return
        }
        if (!this.enabled) return
        if (event.code === 'Space' || event.code === 'KeyJ') {
          event.preventDefault()
          if (!event.repeat) this.pressed.add('lunge')
          return
        }
        if (event.code === 'KeyF') {
          if (!event.repeat) this.pressed.add('call')
          return
        }
        if (event.code === 'KeyE') {
          if (!event.repeat) this.pressed.add('interact')
          return
        }
        if (
          event.code === 'ArrowUp' ||
          event.code === 'ArrowDown' ||
          event.code === 'ArrowLeft' ||
          event.code === 'ArrowRight'
        ) {
          event.preventDefault()
        }
        this.keys.add(event.code)
      },
      { signal }
    )

    window.addEventListener(
      'keyup',
      (event) => {
        this.keys.delete(event.code)
      },
      { signal }
    )

    window.addEventListener(
      'blur',
      () => {
        this.keys.clear()
        this.mobileSprint = false
      },
      { signal }
    )

    this.canvas.addEventListener(
      'click',
      () => {
        if (this.enabled && !this.isTouchDevice) this.lock()
      },
      { signal }
    )

    document.addEventListener(
      'pointerlockchange',
      () => {
        this.locked = document.pointerLockElement === this.canvas
        this.lookX = 0
        this.lookY = 0
        this.skipMouseMoves = this.locked ? 2 : 0
        this.onLockChange?.(this.locked)
      },
      { signal }
    )

    document.addEventListener(
      'mousemove',
      (event) => {
        if (!this.locked || !this.enabled) return
        if (this.skipMouseMoves > 0) {
          this.skipMouseMoves--
          return
        }
        this.lookX += event.movementX
        this.lookY += event.movementY
      },
      { signal }
    )

    document.addEventListener(
      'touchstart',
      (event) => {
        if (!this.enabled || !this.isTouchDevice) return
        for (const touch of event.changedTouches) {
          if (this.cameraTouchId !== null) break
          if (touch.clientX < window.innerWidth / 2) continue
          if (isUiTarget(event.target)) continue
          this.cameraTouchId = touch.identifier
          this.cameraTouchX = touch.clientX
          this.cameraTouchY = touch.clientY
        }
      },
      { signal, passive: true }
    )

    document.addEventListener(
      'touchmove',
      (event) => {
        if (this.cameraTouchId === null) return
        for (const touch of event.changedTouches) {
          if (touch.identifier !== this.cameraTouchId) continue
          event.preventDefault()
          this.lookX += touch.clientX - this.cameraTouchX
          this.lookY += touch.clientY - this.cameraTouchY
          this.cameraTouchX = touch.clientX
          this.cameraTouchY = touch.clientY
        }
      },
      { signal, passive: false }
    )

    const endTouch = (event: TouchEvent): void => {
      if (this.cameraTouchId === null) return
      for (const touch of event.changedTouches) {
        if (touch.identifier === this.cameraTouchId) {
          this.cameraTouchId = null
          break
        }
      }
    }
    document.addEventListener('touchend', endTouch, { signal, passive: true })
    document.addEventListener('touchcancel', endTouch, { signal, passive: true })

    document.addEventListener(
      'visibilitychange',
      () => {
        if (document.hidden) {
          this.keys.clear()
          this.mobileSprint = false
        }
      },
      { signal }
    )
  }
}

function isUiTarget(target: EventTarget | null): boolean {
  if (!(target instanceof Element)) return false
  return Boolean(target.closest('.mobile-controls, .hud button, .overlay-screen, .menu-screen'))
}
