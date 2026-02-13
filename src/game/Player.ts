import * as THREE from 'three';
// @ts-ignore
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
import { World } from './World';
import { Joystick } from './Joystick';

/**
 * Player - 第三人称玩家控制器
 */
export class Player {
  private camera: THREE.PerspectiveCamera;
  private controls: PointerLockControls;
  private world: World;
  private mesh: THREE.Group;
  private joystick: Joystick | null = null;

  // 移动状态
  private moveForward = false;
  private moveBackward = false;
  private moveLeft = false;
  private moveRight = false;
  private isSprinting = false;

  // 移动参数
  private readonly walkSpeed = 4;
  private readonly sprintSpeed = 7;
  private readonly playerHeight = 1.7;
  private readonly playerRadius = 0.4;

  // 第三人称相机参数
  private readonly cameraDistance = 5;
  private readonly cameraHeight = 3;
  private cameraYaw = 0;

  // 动画
  private animationTime = 0;
  private bodyParts: {
    head: THREE.Mesh | null;
    body: THREE.Mesh | null;
    leftArm: THREE.Mesh | null;
    rightArm: THREE.Mesh | null;
    leftLeg: THREE.Mesh | null;
    rightLeg: THREE.Mesh | null;
  } = { head: null, body: null, leftArm: null, rightArm: null, leftLeg: null, rightLeg: null };

  // 移动端触摸控制
  private isMobile = false;
  private lastTouchX = 0;

  constructor(camera: THREE.PerspectiveCamera, world: World, scene: THREE.Scene, isGhost: boolean = false) {
    this.camera = camera;
    this.world = world;
    this.mesh = this.createPlayerMesh(isGhost);
    scene.add(this.mesh);

    // 使用 PointerLockControls 但我们会覆盖相机位置
    this.controls = new PointerLockControls(camera, document.body);

    // 检测是否为移动端
    this.isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // 如果是移动端，初始化虚拟摇杆
    if (this.isMobile) {
      this.joystick = new Joystick((x, z) => {
        this.moveForward = z < -0.3;
        this.moveBackward = z > 0.3;
        this.moveLeft = x < -0.3;
        this.moveRight = x > 0.3;
        // 修正：z 轴标决定前后方向
        this.moveForward = z < -0.3;
        this.moveBackward = z > 0.3;
      });
    }

    this.setupEventListeners();
  }

  private createPlayerMesh(isGhost: boolean): THREE.Group {
    const group = new THREE.Group();

    // 根据角色类型选择颜色
    const skinColor = isGhost ? 0xffe4e1 : 0xffe4c4;
    const shirtColor = isGhost ? 0xff69b4 : 0x4169e1;
    const pantsColor = isGhost ? 0xff69b4 : 0x2f4f4f;
    const hairColor = isGhost ? 0x4a3728 : 0x2f1f1f;

    // 头部
    const headGeometry = new THREE.SphereGeometry(0.3, 16, 16);
    const headMaterial = new THREE.MeshStandardMaterial({
      color: skinColor,
      roughness: 0.8
    });
    this.bodyParts.head = new THREE.Mesh(headGeometry, headMaterial);
    this.bodyParts.head.position.y = 1.5;
    this.bodyParts.head.castShadow = true;
    group.add(this.bodyParts.head);

    // 头发
    const hairGeometry = new THREE.SphereGeometry(0.33, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2);
    const hairMaterial = new THREE.MeshStandardMaterial({
      color: hairColor,
      roughness: 0.9
    });
    const hair = new THREE.Mesh(hairGeometry, hairMaterial);
    hair.position.y = 1.55;
    hair.castShadow = true;
    group.add(hair);

    // 眼睛
    const eyeGeometry = new THREE.SphereGeometry(0.05, 8, 8);
    const eyeMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 });

    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.1, 1.52, 0.25);
    group.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.1, 1.52, 0.25);
    group.add(rightEye);

    // 身体
    const bodyGeometry = isGhost
      ? new THREE.CylinderGeometry(0.2, 0.35, 0.7, 16) // 裙子
      : new THREE.CapsuleGeometry(0.2, 0.4, 4, 8); // 普通身体
    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: shirtColor,
      roughness: 0.7
    });
    this.bodyParts.body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    this.bodyParts.body.position.y = isGhost ? 0.95 : 0.9;
    this.bodyParts.body.castShadow = true;
    group.add(this.bodyParts.body);

    // 手臂
    const armGeometry = new THREE.CapsuleGeometry(0.07, 0.25, 4, 8);
    const armMaterial = new THREE.MeshStandardMaterial({
      color: skinColor,
      roughness: 0.8
    });

    this.bodyParts.leftArm = new THREE.Mesh(armGeometry, armMaterial);
    this.bodyParts.leftArm.position.set(-0.28, 1.05, 0);
    this.bodyParts.leftArm.castShadow = true;
    group.add(this.bodyParts.leftArm);

    this.bodyParts.rightArm = new THREE.Mesh(armGeometry, armMaterial);
    this.bodyParts.rightArm.position.set(0.28, 1.05, 0);
    this.bodyParts.rightArm.castShadow = true;
    group.add(this.bodyParts.rightArm);

    // 腿
    const legGeometry = new THREE.CapsuleGeometry(0.08, 0.25, 4, 8);
    const legMaterial = new THREE.MeshStandardMaterial({
      color: isGhost ? skinColor : pantsColor,
      roughness: 0.8
    });

    this.bodyParts.leftLeg = new THREE.Mesh(legGeometry, legMaterial);
    this.bodyParts.leftLeg.position.set(-0.1, 0.35, 0);
    this.bodyParts.leftLeg.castShadow = true;
    group.add(this.bodyParts.leftLeg);

    this.bodyParts.rightLeg = new THREE.Mesh(legGeometry, legMaterial);
    this.bodyParts.rightLeg.position.set(0.1, 0.35, 0);
    this.bodyParts.rightLeg.castShadow = true;
    group.add(this.bodyParts.rightLeg);

    // 鞋子
    const shoeGeometry = new THREE.BoxGeometry(0.14, 0.08, 0.2);
    const shoeMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 });

    const leftShoe = new THREE.Mesh(shoeGeometry, shoeMaterial);
    leftShoe.position.set(-0.1, 0.04, 0.03);
    group.add(leftShoe);

    const rightShoe = new THREE.Mesh(shoeGeometry, shoeMaterial);
    rightShoe.position.set(0.1, 0.04, 0.03);
    group.add(rightShoe);

    return group;
  }

  private setupEventListeners(): void {
    document.addEventListener('keydown', (e) => this.onKeyDown(e));
    document.addEventListener('keyup', (e) => this.onKeyUp(e));

    // 移动端冲刺按钮
    const sprintBtn = document.getElementById('btn-sprint');
    if (sprintBtn) {
      sprintBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        this.isSprinting = true;
      });
      sprintBtn.addEventListener('touchend', (e) => {
        e.preventDefault();
        this.isSprinting = false;
      });
    }

    this.controls.addEventListener('lock', () => {
      const prompt = document.getElementById('click-prompt');
      if (prompt) prompt.classList.add('hidden');
    });

    this.controls.addEventListener('unlock', () => {
      const prompt = document.getElementById('click-prompt');
      if (prompt) prompt.classList.remove('hidden');
    });

    // 监听鼠标移动来旋转角色
    document.addEventListener('mousemove', (e) => {
      if (!this.controls.isLocked) return;
      this.cameraYaw -= e.movementX * 0.002;
    });

    // 移动端：触摸滑动控制视角
    if (this.isMobile) {
      document.addEventListener('touchstart', (e) => this.onTouchStart(e), { passive: false });
      document.addEventListener('touchmove', (e) => this.onTouchMove(e), { passive: false });
      document.addEventListener('touchend', (e) => this.onTouchEnd(e), { passive: false });
    }
  }

  private onTouchStart(e: TouchEvent): void {
    // 只处理屏幕右侧的触摸（用于视角控制）
    for (const touch of e.changedTouches) {
      if (touch.clientX > window.innerWidth / 2) {
        this.lastTouchX = touch.clientX;
      }
    }
  }

  private onTouchMove(e: TouchEvent): void {
    // 只处理屏幕右侧的触摸（用于视角控制）
    for (const touch of e.changedTouches) {
      if (touch.clientX > window.innerWidth / 2) {
        e.preventDefault(); // 防止滚动
        const deltaX = touch.clientX - this.lastTouchX;

        // 更新视角
        this.cameraYaw -= deltaX * 0.005;

        this.lastTouchX = touch.clientX;
      }
    }
  }

  private onTouchEnd(e: TouchEvent): void {
    // 只处理屏幕右侧的触摸结束
    for (const touch of e.changedTouches) {
      if (touch.clientX > window.innerWidth / 2) {
        this.lastTouchX = 0;
      }
    }
  }

  private onKeyDown(event: KeyboardEvent): void {
    if (!this.controls.isLocked && !this.isMobile) return;

    switch (event.code) {
      case 'KeyW':
      case 'ArrowUp':
        this.moveForward = true;
        break;
      case 'KeyS':
      case 'ArrowDown':
        this.moveBackward = true;
        break;
      case 'KeyA':
      case 'ArrowLeft':
        this.moveLeft = true;
        break;
      case 'KeyD':
      case 'ArrowRight':
        this.moveRight = true;
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
        this.isSprinting = true;
        break;
    }
  }

  private onKeyUp(event: KeyboardEvent): void {
    switch (event.code) {
      case 'KeyW':
      case 'ArrowUp':
        this.moveForward = false;
        break;
      case 'KeyS':
      case 'ArrowDown':
        this.moveBackward = false;
        break;
      case 'KeyA':
      case 'ArrowLeft':
        this.moveLeft = false;
        break;
      case 'KeyD':
      case 'ArrowRight':
        this.moveRight = false;
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
        this.isSprinting = false;
        break;
    }
  }

  public update(delta: number): void {
    // 移动端不需要检查 isLocked
    if (!this.isMobile && !this.controls.isLocked) {
      // 即使未锁定也要更新相机位置
      this.updateCameraPosition();
      return;
    }

    this.animationTime += delta;

    const speed = (this.isSprinting ? this.sprintSpeed : this.walkSpeed) * delta;

    // 计算移动方向 - 优先使用摇杆输入
    let moveX = 0;
    let moveZ = 0;

    if (this.joystick && this.joystick.isActive()) {
      const input = this.joystick.getInput();
      moveX = input.x;
      moveZ = input.z;
    } else {
      // 键盘输入
      if (this.moveForward) moveZ -= 1;
      if (this.moveBackward) moveZ += 1;
      if (this.moveLeft) moveX -= 1;
      if (this.moveRight) moveX += 1;
    }

    if (moveX !== 0 || moveZ !== 0) {
      // 根据相机朝向计算实际移动方向
      const sin = Math.sin(this.cameraYaw);
      const cos = Math.cos(this.cameraYaw);
      // 摇杆向上（moveZ < 0）应该朝镜头方向前进
      // 相机前向向量: (-sin, -cos)，右向向量: (cos, -sin)
      // 世界移动 = 前向 * (-moveZ) + 右向 * moveX
      const worldMoveX = -moveZ * sin + moveX * cos;
      const worldMoveZ = -moveZ * cos - moveX * sin;

      // 归一化
      const length = Math.sqrt(worldMoveX * worldMoveX + worldMoveZ * worldMoveZ);
      const normalizedX = worldMoveX / length;
      const normalizedZ = worldMoveZ / length;

      // 尝试移动
      const newX = this.mesh.position.x + normalizedX * speed;
      const newZ = this.mesh.position.z + normalizedZ * speed;

      // 碰撞检测
      let canMoveX = true;
      let canMoveZ = true;

      if (this.world.checkCollision(new THREE.Vector3(newX, this.playerHeight / 2, this.mesh.position.z), this.playerRadius)) {
        canMoveX = false;
      }
      if (this.world.checkCollision(new THREE.Vector3(this.mesh.position.x, this.playerHeight / 2, newZ), this.playerRadius)) {
        canMoveZ = false;
      }

      if (canMoveX) this.mesh.position.x = newX;
      if (canMoveZ) this.mesh.position.z = newZ;

      // 面向移动方向
      this.mesh.rotation.y = Math.atan2(normalizedX, normalizedZ);

      // 行走动画
      this.animateWalking(true);
    } else {
      this.animateWalking(false);
    }

    // 更新相机位置
    this.updateCameraPosition();
  }

  private animateWalking(isMoving: boolean): void {
    if (isMoving) {
      const walkCycle = Math.sin(this.animationTime * 10);

      if (this.bodyParts.leftArm && this.bodyParts.rightArm) {
        this.bodyParts.leftArm.rotation.x = walkCycle * 0.4;
        this.bodyParts.rightArm.rotation.x = -walkCycle * 0.4;
      }

      if (this.bodyParts.leftLeg && this.bodyParts.rightLeg) {
        this.bodyParts.leftLeg.rotation.x = -walkCycle * 0.5;
        this.bodyParts.rightLeg.rotation.x = walkCycle * 0.5;
      }

      if (this.bodyParts.head) {
        this.bodyParts.head.position.y = 1.5 + Math.abs(walkCycle) * 0.03;
      }
    } else {
      // 恢复待机姿势
      if (this.bodyParts.leftArm) this.bodyParts.leftArm.rotation.x = 0;
      if (this.bodyParts.rightArm) this.bodyParts.rightArm.rotation.x = 0;
      if (this.bodyParts.leftLeg) this.bodyParts.leftLeg.rotation.x = 0;
      if (this.bodyParts.rightLeg) this.bodyParts.rightLeg.rotation.x = 0;

      // 待机呼吸动画
      if (this.bodyParts.head) {
        this.bodyParts.head.position.y = 1.5 + Math.sin(this.animationTime * 2) * 0.02;
      }
    }
  }

  private updateCameraPosition(): void {
    // 第三人称相机跟随
    const cameraX = this.mesh.position.x - Math.sin(this.cameraYaw) * this.cameraDistance;
    const cameraZ = this.mesh.position.z - Math.cos(this.cameraYaw) * this.cameraDistance;
    const cameraY = this.mesh.position.y + this.cameraHeight;

    this.camera.position.set(cameraX, cameraY, cameraZ);
    this.camera.lookAt(
      this.mesh.position.x,
      this.mesh.position.y + 1,
      this.mesh.position.z
    );
  }

  public getPosition(): THREE.Vector3 {
    return this.mesh.position.clone();
  }

  public getMesh(): THREE.Group {
    return this.mesh;
  }

  public getYaw(): number {
    return this.cameraYaw;
  }

  public isLocked(): boolean {
    return this.controls.isLocked;
  }

  public lock(): void {
    this.controls.lock();
  }

  public unlock(): void {
    this.controls.unlock();
  }

  public setPosition(x: number, y: number, z: number): void {
    this.mesh.position.set(x, y, z);
    this.updateCameraPosition();
  }

  public getControls(): PointerLockControls {
    return this.controls;
  }

  public reset(): void {
    this.moveForward = false;
    this.moveBackward = false;
    this.moveLeft = false;
    this.moveRight = false;
    this.isSprinting = false;
    this.cameraYaw = 0;
  }
}
