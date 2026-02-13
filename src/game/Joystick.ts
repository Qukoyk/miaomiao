/**
 * 虚拟摇杆控制 - 用于移动端
 * Virtual Joystick Controller for Mobile
 */

export class Joystick {
  private base: HTMLElement;
  private handle: HTMLElement;
  private joystick: HTMLElement;
  private active = false;
  private pointerId: number | null = null;
  private centerX = 0;
  private centerY = 0;
  private maxRadius = 35; // 摇杆最大移动半径
  private moveX = 0; // -1 to 1
  private moveZ = 0; // -1 to 1 (forward/backward)

  private onMoveCallback: (x: number, z: number) => void;

  constructor(onMoveCallback: (x: number, z: number) => void) {
    this.base = document.getElementById('joystick-base')!;
    this.handle = document.getElementById('joystick-handle')!;
    this.joystick = document.getElementById('joystick')!;
    this.onMoveCallback = onMoveCallback;

    this.setupEventListeners();
  }

  private setupEventListeners(): void {
    // Pointer events for mouse and touch
    this.joystick.addEventListener('pointerdown', this.onPointerDown.bind(this));
    this.joystick.addEventListener('pointermove', this.onPointerMove.bind(this));
    this.joystick.addEventListener('pointerup', this.onPointerUp.bind(this));
    this.joystick.addEventListener('pointercancel', this.onPointerUp.bind(this));

    // Prevent default touch behaviors
    this.joystick.addEventListener('touchstart', (e) => e.preventDefault());
    this.joystick.addEventListener('touchmove', (e) => e.preventDefault());
  }

  private onPointerDown(e: PointerEvent): void {
    this.active = true;
    this.pointerId = e.pointerId;
    this.base.classList.add('active');
    this.joystick.classList.add('active');

    this.updateJoystick(e);
  }

  private onPointerMove(e: PointerEvent): void {
    if (!this.active || e.pointerId !== this.pointerId) return;
    this.updateJoystick(e);
  }

  private onPointerUp(_e: PointerEvent): void {
    this.active = false;
    this.pointerId = null;
    this.base.classList.remove('active');
    this.joystick.classList.remove('active');

    // Reset handle position
    this.handle.style.transform = 'translate(-50%, -50%)';
    this.moveX = 0;
    this.moveZ = 0;
    this.onMoveCallback(0, 0);
  }

  private updateJoystick(e: PointerEvent): void {
    const rect = this.base.getBoundingClientRect();
    this.centerX = rect.left + rect.width / 2;
    this.centerY = rect.top + rect.height / 2;

    let x = e.clientX - this.centerX;
    let y = e.clientY - this.centerY;

    // Limit to max radius
    const distance = Math.sqrt(x * x + y * y);
    if (distance > this.maxRadius) {
      const ratio = this.maxRadius / distance;
      x *= ratio;
      y *= ratio;
    }

    // Update handle visual position
    this.handle.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;

    // Calculate movement values (-1 to 1)
    // y is inverted in screen coordinates (negative = up)
    this.moveX = x / this.maxRadius;
    this.moveZ = -y / this.maxRadius;

    // Apply deadzone for small movements
    const deadzone = 0.15;
    if (Math.abs(this.moveX) < deadzone) this.moveX = 0;
    if (Math.abs(this.moveZ) < deadzone) this.moveZ = 0;

    this.onMoveCallback(this.moveX, this.moveZ);
  }

  /**
   * 获取当前移动输入
   */
  public getInput(): { x: number; z: number } {
    return { x: this.moveX, z: this.moveZ };
  }

  /**
   * 是否激活
   */
  public isActive(): boolean {
    return this.active;
  }
}
