import * as THREE from 'three';
import { distance, random } from '../utils/helpers';

/**
 * Hider - AI 逃离者角色，会逃跑、远离鬼、并积极救援队友
 */
export class Hider {
  private mesh: THREE.Group;
  private scene: THREE.Scene;
  private id: number;
  private world: any;

  // 状态
  private isJailed = false;
  private captureCount = 0;
  private maxCaptures = 3;
  private isEliminated = false;

  // 星星显示
  private stars: THREE.Mesh[] = [];
  private starsGroup: THREE.Group;

  // 移动
  private readonly walkSpeed = 3;
  private readonly runSpeed = 5;
  private targetPosition: THREE.Vector3 | null = null;
  private moveTimer = 0;

  // 寻路改进
  private stuckTimer = 0;
  private lastPosition = new THREE.Vector3();
  private stuckCount = 0;

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

  // 关押位置
  private static jailPosition = new THREE.Vector3(-35, 0, -25);
  private static jailRadius = 4; // 拘留区半径

  constructor(scene: THREE.Scene, world: any, id: number) {
    this.scene = scene;
    this.world = world;
    this.id = id;
    this.starsGroup = new THREE.Group();
    this.mesh = this.createHiderMesh();
    this.createStars();
    this.mesh.add(this.starsGroup);
    this.scene.add(this.mesh);
  }

  private createStars(): void {
    const starShape = new THREE.Shape();
    const outerRadius = 0.15;
    const innerRadius = 0.06;
    const points = 5;

    for (let i = 0; i < points * 2; i++) {
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const angle = (i * Math.PI) / points - Math.PI / 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      if (i === 0) {
        starShape.moveTo(x, y);
      } else {
        starShape.lineTo(x, y);
      }
    }
    starShape.closePath();

    const starGeometry = new THREE.ShapeGeometry(starShape);
    const starMaterial = new THREE.MeshBasicMaterial({
      color: 0xffff00,
      side: THREE.DoubleSide
    });

    for (let i = 0; i < this.maxCaptures; i++) {
      const star = new THREE.Mesh(starGeometry, starMaterial);
      star.position.set((i - 1) * 0.35, 2.0, 0);
      star.visible = false;
      this.stars.push(star);
      this.starsGroup.add(star);
    }
  }

  private updateStarsVisibility(): void {
    for (let i = 0; i < this.stars.length; i++) {
      this.stars[i].visible = i < this.captureCount;
    }
  }

  public updateStarsBillboard(cameraPosition: THREE.Vector3): void {
    this.starsGroup.lookAt(cameraPosition);
  }

  private createHiderMesh(): THREE.Group {
    const group = new THREE.Group();

    const colors = [0x4169e1, 0x32cd32, 0xffd700, 0xff6347, 0x9370db];
    const shirtColor = colors[this.id % colors.length];
    const skinColor = 0xffe4c4;
    const pantsColor = 0x2f4f4f;

    const headGeometry = new THREE.SphereGeometry(0.25, 16, 16);
    const headMaterial = new THREE.MeshStandardMaterial({ color: skinColor, roughness: 0.8 });
    this.bodyParts.head = new THREE.Mesh(headGeometry, headMaterial);
    this.bodyParts.head.position.y = 1.3;
    this.bodyParts.head.castShadow = true;
    group.add(this.bodyParts.head);

    const hairColors = [0x2f1f1f, 0x8b4513, 0xffd700, 0xa0522d];
    const hairGeometry = new THREE.SphereGeometry(0.27, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2);
    const hairMaterial = new THREE.MeshStandardMaterial({
      color: hairColors[this.id % hairColors.length], roughness: 0.9
    });
    const hair = new THREE.Mesh(hairGeometry, hairMaterial);
    hair.position.y = 1.35;
    hair.castShadow = true;
    group.add(hair);

    const eyeGeometry = new THREE.SphereGeometry(0.04, 8, 8);
    const eyeMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 });
    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.08, 1.32, 0.22);
    group.add(leftEye);
    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.08, 1.32, 0.22);
    group.add(rightEye);

    const bodyGeometry = new THREE.CapsuleGeometry(0.2, 0.4, 4, 8);
    const bodyMaterial = new THREE.MeshStandardMaterial({ color: shirtColor, roughness: 0.7 });
    this.bodyParts.body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    this.bodyParts.body.position.y = 0.85;
    this.bodyParts.body.castShadow = true;
    group.add(this.bodyParts.body);

    const armGeometry = new THREE.CapsuleGeometry(0.06, 0.25, 4, 8);
    const armMaterial = new THREE.MeshStandardMaterial({ color: skinColor, roughness: 0.8 });
    this.bodyParts.leftArm = new THREE.Mesh(armGeometry, armMaterial);
    this.bodyParts.leftArm.position.set(-0.25, 0.9, 0);
    this.bodyParts.leftArm.castShadow = true;
    group.add(this.bodyParts.leftArm);
    this.bodyParts.rightArm = new THREE.Mesh(armGeometry, armMaterial);
    this.bodyParts.rightArm.position.set(0.25, 0.9, 0);
    this.bodyParts.rightArm.castShadow = true;
    group.add(this.bodyParts.rightArm);

    const legGeometry = new THREE.CapsuleGeometry(0.08, 0.3, 4, 8);
    const legMaterial = new THREE.MeshStandardMaterial({ color: pantsColor, roughness: 0.8 });
    this.bodyParts.leftLeg = new THREE.Mesh(legGeometry, legMaterial);
    this.bodyParts.leftLeg.position.set(-0.1, 0.3, 0);
    this.bodyParts.leftLeg.castShadow = true;
    group.add(this.bodyParts.leftLeg);
    this.bodyParts.rightLeg = new THREE.Mesh(legGeometry, legMaterial);
    this.bodyParts.rightLeg.position.set(0.1, 0.3, 0);
    this.bodyParts.rightLeg.castShadow = true;
    group.add(this.bodyParts.rightLeg);

    const shoeGeometry = new THREE.BoxGeometry(0.12, 0.08, 0.18);
    const shoeMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 });
    const leftShoe = new THREE.Mesh(shoeGeometry, shoeMaterial);
    leftShoe.position.set(-0.1, 0.04, 0.02);
    group.add(leftShoe);
    const rightShoe = new THREE.Mesh(shoeGeometry, shoeMaterial);
    rightShoe.position.set(0.1, 0.04, 0.02);
    group.add(rightShoe);

    return group;
  }

  /**
   * 更新逃离者行为
   * @param delta 时间增量
   * @param ghostPosition 鬼的位置
   * @param jailedHiders 被关押的队友列表（用于救援）
   */
  public update(delta: number, ghostPosition: THREE.Vector3, jailedHiders: Hider[] = []): void {
    if (this.isEliminated) return;

    this.animationTime += delta;

    if (this.isJailed) {
      // 被关押时不能移动
      this.animateIdle();
      return;
    }

    // 检测是否卡住
    this.checkStuck(delta);

    // 优先级：救援 > 逃跑 > 随机移动
    const distToGhost = distance(
      this.mesh.position.x, this.mesh.position.y, this.mesh.position.z,
      ghostPosition.x, ghostPosition.y, ghostPosition.z
    );

    // 检查是否有需要救援的队友
    const hasJailedTeammate = jailedHiders.length > 0;

    if (hasJailedTeammate && distToGhost > 8) {
      // 有队友被关押且鬼不在附近，去救援（移动到被关押队友身边）
      this.moveToRescueTarget(delta, jailedHiders);
    } else if (distToGhost < 12) {
      // 鬼在附近，逃跑
      this.fleeFromGhost(ghostPosition, delta);
    } else {
      // 随机移动
      this.moveTimer -= delta;
      if (this.moveTimer <= 0) {
        this.pickNewRandomTarget();
        this.moveTimer = random(2, 5);
      }
      this.moveToTarget(delta);
    }
  }

  /**
   * 检测是否卡住，如果卡住则尝试新方向
   */
  private checkStuck(delta: number): void {
    this.stuckTimer += delta;

    if (this.stuckTimer >= 0.5) {
      const moved = distance(
        this.lastPosition.x, this.lastPosition.y, this.lastPosition.z,
        this.mesh.position.x, this.mesh.position.y, this.mesh.position.z
      );

      if (moved < 0.2) {
        this.stuckCount++;
        if (this.stuckCount >= 2) {
          // 卡住了，选择新的随机方向
          this.targetPosition = null;
          this.stuckCount = 0;
        }
      } else {
        this.stuckCount = 0;
      }

      this.lastPosition.copy(this.mesh.position);
      this.stuckTimer = 0;
    }
  }

  /**
   * 移动到被关押队友身边进行救援
   */
  private moveToRescueTarget(delta: number, jailedHiders: Hider[]): void {
    // 找到最近的被关押队友
    let closestJailed: Hider | null = null;
    let closestDist = Infinity;

    for (const jailed of jailedHiders) {
      const jailedPos = jailed.getPosition();
      const dist = distance(
        this.mesh.position.x, this.mesh.position.y, this.mesh.position.z,
        jailedPos.x, jailedPos.y, jailedPos.z
      );
      if (dist < closestDist) {
        closestDist = dist;
        closestJailed = jailed;
      }
    }

    if (!closestJailed) {
      this.animateIdle();
      return;
    }

    const targetPos = closestJailed.getPosition();
    const dx = targetPos.x - this.mesh.position.x;
    const dz = targetPos.z - this.mesh.position.z;
    const dist = Math.sqrt(dx * dx + dz * dz);

    // 如果已经触碰到了，停下等待救援完成
    if (dist < 1.5) {
      this.animateIdle();
      return;
    }

    const normalizedDx = dx / dist;
    const normalizedDz = dz / dist;

    const speed = this.runSpeed * delta;
    const newX = this.mesh.position.x + normalizedDx * speed;
    const newZ = this.mesh.position.z + normalizedDz * speed;

    // 尝试移动，如果被阻挡则尝试绕行
    if (!this.world.checkCollision(new THREE.Vector3(newX, 0.9, this.mesh.position.z), 0.4)) {
      this.mesh.position.x = newX;
    } else {
      // 尝试左右绕行
      this.trySidestep(delta, normalizedDx, normalizedDz);
    }

    if (!this.world.checkCollision(new THREE.Vector3(this.mesh.position.x, 0.9, newZ), 0.4)) {
      this.mesh.position.z = newZ;
    }

    this.mesh.rotation.y = Math.atan2(normalizedDx, normalizedDz);
    this.animateRunning();
  }

  /**
   * 尝试侧向移动绕过障碍
   */
  private trySidestep(delta: number, forwardX: number, forwardZ: number): void {
    // 计算左右方向
    const leftX = -forwardZ;
    const leftZ = forwardX;

    const speed = this.walkSpeed * delta;

    // 尝试左边
    const leftNewX = this.mesh.position.x + leftX * speed;
    const leftNewZ = this.mesh.position.z + leftZ * speed;
    if (!this.world.checkCollision(new THREE.Vector3(leftNewX, 0.9, leftNewZ), 0.4)) {
      this.mesh.position.x = leftNewX;
      this.mesh.position.z = leftNewZ;
      return;
    }

    // 尝试右边
    const rightNewX = this.mesh.position.x - leftX * speed;
    const rightNewZ = this.mesh.position.z - leftZ * speed;
    if (!this.world.checkCollision(new THREE.Vector3(rightNewX, 0.9, rightNewZ), 0.4)) {
      this.mesh.position.x = rightNewX;
      this.mesh.position.z = rightNewZ;
    }
  }

  private fleeFromGhost(ghostPosition: THREE.Vector3, delta: number): void {
    const dx = this.mesh.position.x - ghostPosition.x;
    const dz = this.mesh.position.z - ghostPosition.z;
    const length = Math.sqrt(dx * dx + dz * dz);

    if (length > 0) {
      const normalizedDx = dx / length;
      const normalizedDz = dz / length;

      // 添加随机性避免直线逃跑
      const randomAngle = random(-0.5, 0.5);
      const cos = Math.cos(randomAngle);
      const sin = Math.sin(randomAngle);
      let fleeX = normalizedDx * cos - normalizedDz * sin;
      let fleeZ = normalizedDx * sin + normalizedDz * cos;

      const speed = this.runSpeed * delta;
      let newX = this.mesh.position.x + fleeX * speed;
      let newZ = this.mesh.position.z + fleeZ * speed;

      // 碰撞检测，如果被阻挡则尝试绕行
      let canMoveX = !this.world.checkCollision(new THREE.Vector3(newX, 0.9, this.mesh.position.z), 0.4);
      let canMoveZ = !this.world.checkCollision(new THREE.Vector3(this.mesh.position.x, 0.9, newZ), 0.4);

      if (!canMoveX && !canMoveZ) {
        // 两个方向都被阻挡，尝试侧向
        this.trySidestep(delta, fleeX, fleeZ);
      } else {
        if (canMoveX) this.mesh.position.x = newX;
        if (canMoveZ) this.mesh.position.z = newZ;
      }

      this.mesh.rotation.y = Math.atan2(fleeX, fleeZ);
      this.animateRunning();
    }
  }

  private pickNewRandomTarget(): void {
    const x = random(-35, 35);
    const z = random(-25, 25);
    this.targetPosition = new THREE.Vector3(x, 0, z);
  }

  private moveToTarget(delta: number): void {
    if (!this.targetPosition) {
      this.animateIdle();
      return;
    }

    const dx = this.targetPosition.x - this.mesh.position.x;
    const dz = this.targetPosition.z - this.mesh.position.z;
    const dist = Math.sqrt(dx * dx + dz * dz);

    if (dist < 1) {
      this.targetPosition = null;
      this.animateIdle();
      return;
    }

    const normalizedDx = dx / dist;
    const normalizedDz = dz / dist;

    const speed = this.walkSpeed * delta;
    const newX = this.mesh.position.x + normalizedDx * speed;
    const newZ = this.mesh.position.z + normalizedDz * speed;

    if (!this.world.checkCollision(new THREE.Vector3(newX, 0.9, this.mesh.position.z), 0.4)) {
      this.mesh.position.x = newX;
    }
    if (!this.world.checkCollision(new THREE.Vector3(this.mesh.position.x, 0.9, newZ), 0.4)) {
      this.mesh.position.z = newZ;
    }

    this.mesh.rotation.y = Math.atan2(normalizedDx, normalizedDz);
    this.animateWalking();
  }

  private animateRunning(): void {
    const cycle = Math.sin(this.animationTime * 12);
    if (this.bodyParts.leftArm) this.bodyParts.leftArm.rotation.x = cycle * 0.6;
    if (this.bodyParts.rightArm) this.bodyParts.rightArm.rotation.x = -cycle * 0.6;
    if (this.bodyParts.leftLeg) this.bodyParts.leftLeg.rotation.x = -cycle * 0.7;
    if (this.bodyParts.rightLeg) this.bodyParts.rightLeg.rotation.x = cycle * 0.7;
    if (this.bodyParts.head) this.bodyParts.head.position.y = 1.3 + Math.abs(cycle) * 0.05;
  }

  private animateWalking(): void {
    const cycle = Math.sin(this.animationTime * 8);
    if (this.bodyParts.leftArm) this.bodyParts.leftArm.rotation.x = cycle * 0.3;
    if (this.bodyParts.rightArm) this.bodyParts.rightArm.rotation.x = -cycle * 0.3;
    if (this.bodyParts.leftLeg) this.bodyParts.leftLeg.rotation.x = -cycle * 0.4;
    if (this.bodyParts.rightLeg) this.bodyParts.rightLeg.rotation.x = cycle * 0.4;
    if (this.bodyParts.head) this.bodyParts.head.position.y = 1.3 + Math.abs(cycle) * 0.02;
  }

  private animateIdle(): void {
    if (this.bodyParts.head) {
      this.bodyParts.head.position.y = 1.3 + Math.sin(this.animationTime * 2) * 0.01;
    }
    if (this.bodyParts.leftArm) this.bodyParts.leftArm.rotation.x = 0;
    if (this.bodyParts.rightArm) this.bodyParts.rightArm.rotation.x = 0;
    if (this.bodyParts.leftLeg) this.bodyParts.leftLeg.rotation.x = 0;
    if (this.bodyParts.rightLeg) this.bodyParts.rightLeg.rotation.x = 0;
  }

  public onGhostContact(): boolean {
    if (this.isJailed || this.isEliminated) return false;
    this.captureCount++;
    this.updateStarsVisibility();

    if (this.captureCount >= this.maxCaptures) {
      this.isJailed = true;
      this.moveToJail();
      return true;
    }
    return false;
  }

  private moveToJail(): void {
    this.mesh.position.copy(Hider.jailPosition);
    this.mesh.position.x += random(-2, 2);
    this.mesh.position.z += random(-2, 2);

    this.mesh.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const material = child.material as THREE.MeshStandardMaterial;
        material.transparent = true;
        material.opacity = 0.6;
      }
    });
  }

  public rescue(): void {
    if (!this.isJailed) return;
    this.isJailed = false;
    this.captureCount = 0;
    this.updateStarsVisibility();

    this.mesh.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const material = child.material as THREE.MeshStandardMaterial;
        material.transparent = false;
        material.opacity = 1;
      }
    });

    this.mesh.position.x = random(-30, 30);
    this.mesh.position.z = random(-20, 20);
  }

  public eliminate(): void {
    this.isEliminated = true;
    this.mesh.visible = false;
  }

  public getPosition(): THREE.Vector3 {
    return this.mesh.position.clone();
  }

  public getIsJailed(): boolean {
    return this.isJailed;
  }

  public getIsEliminated(): boolean {
    return this.isEliminated;
  }

  public getCaptureCount(): number {
    return this.captureCount;
  }

  public static getJailPosition(): THREE.Vector3 {
    return Hider.jailPosition.clone();
  }

  public static getJailRadius(): number {
    return Hider.jailRadius;
  }

  public setPosition(x: number, z: number): void {
    this.mesh.position.set(x, 0, z);
  }

  public reset(): void {
    this.isJailed = false;
    this.captureCount = 0;
    this.isEliminated = false;
    this.mesh.visible = true;
    this.targetPosition = null;
    this.stuckCount = 0;
    this.updateStarsVisibility();

    this.mesh.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const material = child.material as THREE.MeshStandardMaterial;
        material.transparent = false;
        material.opacity = 1;
      }
    });
  }

  public remove(): void {
    this.scene.remove(this.mesh);
  }
}
