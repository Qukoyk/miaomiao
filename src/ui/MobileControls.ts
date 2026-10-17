import type { Input } from '../core/Input'
import type { HudState } from '../core/Session'
import { icon } from './icons'

/** 移动端：左下摇杆、右下冲刺/扑击/呼救、右上暂停。 */
export class MobileControls {
  private readonly root: HTMLDivElement
  private readonly input: Input
  private readonly onPause: () => void
  private readonly joystick: HTMLDivElement
  private readonly handle: HTMLDivElement
  private readonly actionBtn: HTMLButtonElement
  private joystickPointer: number | null = null
  private joystickActive = false
  private currentAction: 'lunge' | 'call' | null = null

  constructor(parent: HTMLElement, input: Input, onPause: () => void) {
    this.input = input
    this.onPause = onPause

    this.root = document.createElement('div')
    this.root.className = 'mobile-controls'
    this.root.innerHTML = `
      <div class="joystick" data-joystick>
        <div class="joystick__handle" data-handle></div>
      </div>
      <div class="action-cluster">
        <button type="button" class="action-btn action-btn--sprint" data-sprint aria-label="冲刺">
          ${icon('bolt', 28)}
          <span class="action-btn__label">冲刺</span>
        </button>
        <button type="button" class="action-btn action-btn--lunge" data-action hidden aria-label="扑击">
          ${icon('burst', 28)}
          <span class="action-btn__label">扑击</span>
        </button>
      </div>
      <div class="mobile-top-actions">
        <button type="button" class="icon-btn" data-pause aria-label="暂停">${icon('pause', 22)}</button>
      </div>
    `
    parent.appendChild(this.root)

    this.joystick = this.root.querySelector('[data-joystick]') as HTMLDivElement
    this.handle = this.root.querySelector('[data-handle]') as HTMLDivElement
    this.actionBtn = this.root.querySelector('[data-action]') as HTMLButtonElement

    this.bindJoystick()
    this.bindSprint()
    this.bindAction()
    this.root.querySelector('[data-pause]')?.addEventListener('click', () => this.onPause())
  }

  updateState(state: HudState): void {
    const nextAction: 'lunge' | 'call' | null = state.isGhost
      ? 'lunge'
      : state.playerIsJailed
        ? 'call'
        : null
    if (nextAction === this.currentAction) return
    this.currentAction = nextAction
    this.actionBtn.hidden = nextAction === null
    this.actionBtn.classList.toggle('action-btn--lunge', nextAction === 'lunge')
    this.actionBtn.classList.toggle('action-btn--call', nextAction === 'call')
    if (nextAction === 'lunge') {
      this.actionBtn.innerHTML = `${icon('burst', 28)}<span class="action-btn__label">扑击</span>`
      this.actionBtn.setAttribute('aria-label', '扑击')
    } else if (nextAction === 'call') {
      this.actionBtn.innerHTML = `${icon('call', 28)}<span class="action-btn__label">呼救</span>`
      this.actionBtn.setAttribute('aria-label', '呼救')
    }
  }

  dispose(): void {
    this.input.setMobileMove(0, 0, false)
    this.input.setMobileSprint(false)
    this.root.remove()
  }

  private bindJoystick(): void {
    this.joystick.addEventListener('pointerdown', (event) => {
      event.preventDefault()
      this.joystickActive = true
      this.joystickPointer = event.pointerId
      this.joystick.classList.add('is-active')
      this.joystick.setPointerCapture(event.pointerId)
      this.updateJoystick(event)
    })

    this.joystick.addEventListener('pointermove', (event) => {
      if (!this.joystickActive || event.pointerId !== this.joystickPointer) return
      event.preventDefault()
      this.updateJoystick(event)
    })

    const end = (event: PointerEvent): void => {
      if (event.pointerId !== this.joystickPointer) return
      this.joystickActive = false
      this.joystickPointer = null
      this.joystick.classList.remove('is-active')
      this.handle.style.transform = 'translate(-50%, -50%)'
      this.input.setMobileMove(0, 0, false)
    }
    this.joystick.addEventListener('pointerup', end)
    this.joystick.addEventListener('pointercancel', end)
    this.joystick.addEventListener('lostpointercapture', end)
  }

  private updateJoystick(event: PointerEvent): void {
    const rect = this.joystick.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    let dx = event.clientX - centerX
    let dy = event.clientY - centerY
    const maxRadius = rect.width * 0.33
    const distance = Math.hypot(dx, dy)
    if (distance > maxRadius) {
      dx = (dx / distance) * maxRadius
      dy = (dy / distance) * maxRadius
    }
    this.handle.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`

    let x = dx / maxRadius
    let z = -dy / maxRadius
    if (Math.abs(x) < 0.14) x = 0
    if (Math.abs(z) < 0.14) z = 0
    this.input.setMobileMove(x, z, true)
  }

  private bindSprint(): void {
    const button = this.root.querySelector('[data-sprint]') as HTMLButtonElement
    const start = (event: PointerEvent): void => {
      event.preventDefault()
      button.classList.add('is-active')
      button.setPointerCapture(event.pointerId)
      this.input.setMobileSprint(true)
    }
    const end = (): void => {
      button.classList.remove('is-active')
      this.input.setMobileSprint(false)
    }
    button.addEventListener('pointerdown', start)
    button.addEventListener('pointerup', end)
    button.addEventListener('pointercancel', end)
    button.addEventListener('lostpointercapture', end)
  }

  private bindAction(): void {
    const start = (event: PointerEvent): void => {
      event.preventDefault()
      this.actionBtn.classList.add('is-active')
      this.actionBtn.setPointerCapture(event.pointerId)
      if (this.currentAction) this.input.triggerAction(this.currentAction)
    }
    const end = (): void => {
      this.actionBtn.classList.remove('is-active')
    }
    this.actionBtn.addEventListener('pointerdown', start)
    this.actionBtn.addEventListener('pointerup', end)
    this.actionBtn.addEventListener('pointercancel', end)
    this.actionBtn.addEventListener('lostpointercapture', end)
  }
}
