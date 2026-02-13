import * as THREE from 'three';
import { World } from './World';
import { Hider } from './Hider';
import { distance } from '../utils/helpers';

/**
 * Ghost - 可爱的女生鬼角色（AI控制）
 */
export class Ghost {
  private mesh: THREE.Group;
  private world: World;
  private scene: THREE.Scene;

  // AI 状态
  private patrolPoints: THREE.Vector3[] = [];
  private currentPatrolIndex = 0;

  // 移动 - 鬼比逃离者快
  private readonly walkSpeed = 4;
  private readonly chaseSpeed = 6;
  private currentAngle = 0;

  // 接触冷却 - 改为1秒
  private contactCooldown = 0;
  private readonly cooldownTime = 1.0;

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

  constructor(scene: THREE.Scene, world: World) {
    this.scene = scene;
    this.world = world;
    this.mesh = this.createGhostMesh();
    this.scene.add(this.mesh);
    this.setupPatrolPoints();
  }

  private createGhostMesh(): THREE.Group {
    const group = new THREE.Group();

    const skinColor = 0xffe4e1;
    const dressColor = 0xff69b4;
    const hairColor = 0x4a3728;

    // 头部
    const headGeometry = new THREE.SphereGeometry(0.35, 16, 16);
    const headMaterial = new THREE.MeshStandardMaterial({ color: skinColor, roughness: 0.8 });
    this.bodyParts.head = new THREE.Mesh(headGeometry, headMaterial);
    this.bodyParts.head.position.y = 1.5;
    this.bodyParts.head.castShadow = true;
    group.add(this.bodyParts.head);

    // 头发
    const hairGeometry = new THREE.SphereGeometry(0.38, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2);
    const hairMaterial = new THREE.MeshStandardMaterial({ color: hairColor, roughness: 0.9 });
    const hair = new THREE.Mesh(hairGeometry, hairMaterial);
    hair.position.y = 1.55;
    hair.castShadow = true;
    group.add(hair);

    // 刘海
    const bangsGeometry = new THREE.BoxGeometry(0.5, 0.15, 0.2);
    const bangs = new THREE.Mesh(bangsGeometry, hairMaterial);
    bangs.position.set(0, 1.55, 0.25);
    group.add(bangs);

    // 眼睛
    const eyeGeometry = new THREE.SphereGeometry(0.06, 8, 8);
    const eyeMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 });
    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.12, 1.52, 0.3);
    group.add(leftEye);
    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.12, 1.52, 0.3);
    group.add(rightEye);

    // 腮红
    const blushGeometry = new THREE.CircleGeometry(0.06, 8);
    const blushMaterial = new THREE.MeshStandardMaterial({ color: 0xff9999, transparent: true, opacity: 0.6 });
    const leftBlush = new THREE.Mesh(blushGeometry, blushMaterial);
    leftBlush.position.set(-0.2, 1.45, 0.32);
    group.add(leftBlush);
    const rightBlush = new THREE.Mesh(blushGeometry, blushMaterial);
    rightBlush.position.set(0.2, 1.45, 0.32);
    group.add(rightBlush);

    // 微笑
    const smileGeometry = new THREE.TorusGeometry(0.08, 0.02, 8, 16, Math.PI);
    const smileMaterial = new THREE.MeshStandardMaterial({ color: 0xcc6666 });
    const smile = new THREE.Mesh(smileGeometry, smileMaterial);
    smile.position.set(0, 1.4, 0.32);
    smile.rotation.x = Math.PI;
    group.add(smile);

    // 身体/裙子
    const bodyGeometry = new THREE.CylinderGeometry(0.2, 0.35, 0.7, 16);
    const bodyMaterial = new THREE.MeshStandardMaterial({ color: dressColor, roughness: 0.7 });
    this.bodyParts.body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    this.bodyParts.body.position.y = 0.95;
    this.bodyParts.body.castShadow = true;
    group.add(this.bodyParts.body);

    // 手臂
    const armGeometry = new THREE.CapsuleGeometry(0.08, 0.3, 4, 8);
    const armMaterial = new THREE.MeshStandardMaterial({ color: skinColor, roughness: 0.8 });
    this.bodyParts.leftArm = new THREE.Mesh(armGeometry, armMaterial);
    this.bodyParts.leftArm.position.set(-0.3, 1.1, 0);
    this.bodyParts.leftArm.rotation.z = 0.3;
    this.bodyParts.leftArm.castShadow = true;
    group.add(this.bodyParts.leftArm);
    this.bodyParts.rightArm = new THREE.Mesh(armGeometry, armMaterial);
    this.bodyParts.rightArm.position.set(0.3, 1.1, 0);
    this.bodyParts.rightArm.rotation.z = -0.3;
    this.bodyParts.rightArm.castShadow = true;
    group.add(this.bodyParts.rightArm);

    // 腿
    const legGeometry = new THREE.CapsuleGeometry(0.08, 0.25, 4, 8);
    this.bodyParts.leftLeg = new THREE.Mesh(legGeometry, armMaterial);
    this.bodyParts.leftLeg.position.set(-0.12, 0.35, 0);
    this.bodyParts.leftLeg.castShadow = true;
    group.add(this.bodyParts.leftLeg);
    this.bodyParts.rightLeg = new THREE.Mesh(legGeometry, armMaterial);
    this.bodyParts.rightLeg.position.set(0.12, 0.35, 0);
    this.bodyParts.rightLeg.castShadow = true;
    group.add(this.bodyParts.rightLeg);

    // 鞋子
    const shoeGeometry = new THREE.BoxGeometry(0.15, 0.1, 0.2);
    const shoeMaterial = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.5 });
    const leftShoe = new THREE.Mesh(shoeGeometry, shoeMaterial);
    leftShoe.position.set(-0.12, 0.05, 0.03);
    leftShoe.castShadow = true;
    group.add(leftShoe);
    const rightShoe = new THREE.Mesh(shoeGeometry, shoeMaterial);
    rightShoe.position.set(0.12, 0.05, 0.03);
    rightShoe.castShadow = true;
    group.add(rightShoe);

    return group;
  }

  private setupPatrolPoints(): void {
    this.patrolPoints = [
      new THREE.Vector3(0, 0, 20),
      new THREE.Vector3(20, 0, 15),
      new THREE.Vector3(25, 0, 0),
      new THREE.Vector3(20, 0, -15),
      new THREE.Vector3(0, 0, -20),
      new THREE.Vector3(-20, 0, -15),
      new THREE.Vector3(-25, 0, 0),
      new THREE.Vector3(-20, 0, 15),
    ];
  }

  /**
   * 更新鬼的行为
   */
  public update(delta: number, _playerPosition: THREE.Vector3, hiders: Hider[]): Hider | null {
    this.animationTime += delta;
    this.contactCooldown = Math.max(0, this.contactCooldown - delta);

    this.animate();

    // 检测是否卡住
    this.checkStuck(delta);

    // 找最近的未被关押的逃离者
    let closestHider: Hider | null = null;
    let closestDist = Infinity;

    for (const hider of hiders) {
      if (hider.getIsJailed() || hider.getIsEliminated()) continue;

      const hiderPos = hider.getPosition();
      const dist = distance(
        this.mesh.position.x, this.mesh.position.y, this.mesh.position.z,
        hiderPos.x, hiderPos.y, hiderPos.z
      );

      if (dist < closestDist) {
        closestDist = dist;
        closestHider = hider;
      }
    }

    if (closestHider && closestDist < 25) {
      this.chaseTarget(closestHider.getPosition(), delta);
    } else {
      this.patrol(delta);
    }

    // 检查接触 - 冷却时间1秒
    if (this.contactCooldown <= 0) {
      for (const hider of hiders) {
        if (hider.getIsJailed() || hider.getIsEliminated()) continue;

        const hiderPos = hider.getPosition();
        const dist = distance(
          this.mesh.position.x, this.mesh.position.y, this.mesh.position.z,
          hiderPos.x, hiderPos.y, hiderPos.z
        );

        if (dist < 1.0) {
          this.contactCooldown = this.cooldownTime;
          return hider;
        }
      }
    }

    return null;
  }

  /**
   * 检测是否卡住
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
          // 卡住了，跳到下一个巡逻点或随机位置
          this.currentPatrolIndex = (this.currentPatrolIndex + 1) % this.patrolPoints.length;
          this.stuckCount = 0;
        }
      } else {
        this.stuckCount = 0;
      }

      this.lastPosition.copy(this.mesh.position);
      this.stuckTimer = 0;
    }
  }

  private animate(): void {
    if (this.bodyParts.head) {
      this.bodyParts.head.position.y = 1.5 + Math.sin(this.animationTime * 3) * 0.02;
    }

    const walkCycle = Math.sin(this.animationTime * 8);
    if (this.bodyParts.leftArm) this.bodyParts.leftArm.rotation.x = walkCycle * 0.3;
    if (this.bodyParts.rightArm) this.bodyParts.rightArm.rotation.x = -walkCycle * 0.3;
    if (this.bodyParts.leftLeg) this.bodyParts.leftLeg.rotation.x = -walkCycle * 0.4;
    if (this.bodyParts.rightLeg) this.bodyParts.rightLeg.rotation.x = walkCycle * 0.4;
  }

  private chaseTarget(targetPosition: THREE.Vector3, delta: number): void {
    const ghostPos = this.mesh.position;
    let dx = targetPosition.x - ghostPos.x;
    let dz = targetPosition.z - ghostPos.z;
    const length = Math.sqrt(dx * dx + dz * dz);

    if (length > 0) {
      dx /= length;
      dz /= length;

      const speed = this.chaseSpeed * delta;
      let newX = ghostPos.x + dx * speed;
      let newZ = ghostPos.z + dz * speed;

      // 尝试移动，如果被阻挡则尝试绕行
      let canMoveX = !this.world.checkCollision(new THREE.Vector3(newX, 0.9, ghostPos.z), 0.4);
      let canMoveZ = !this.world.checkCollision(new THREE.Vector3(ghostPos.x, 0.9, newZ), 0.4);

      if (!canMoveX && !canMoveZ) {
        // 尝试侧向绕行
        const leftX = -dz;
        const leftZ = dx;
        const sideSpeed = this.walkSpeed * delta;

        const leftNewX = ghostPos.x + leftX * sideSpeed;
        const leftNewZ = ghostPos.z + leftZ * sideSpeed;
        const rightNewX = ghostPos.x - leftX * sideSpeed;
        const rightNewZ = ghostPos.z - leftZ * sideSpeed;

        if (!this.world.checkCollision(new THREE.Vector3(leftNewX, 0.9, leftNewZ), 0.4)) {
          this.mesh.position.x = leftNewX;
          this.mesh.position.z = leftNewZ;
        } else if (!this.world.checkCollision(new THREE.Vector3(rightNewX, 0.9, rightNewZ), 0.4)) {
          this.mesh.position.x = rightNewX;
          this.mesh.position.z = rightNewZ;
        }
      } else {
        if (canMoveX) this.mesh.position.x = newX;
        if (canMoveZ) this.mesh.position.z = newZ;
      }

      this.currentAngle = Math.atan2(dx, dz);
      this.mesh.rotation.y = this.currentAngle;
    }
  }

  private patrol(delta: number): void {
    if (this.patrolPoints.length === 0) return;

    const targetPoint = this.patrolPoints[this.currentPatrolIndex];
    const ghostPos = this.mesh.position;

    let dx = targetPoint.x - ghostPos.x;
    let dz = targetPoint.z - ghostPos.z;
    const distToTarget = Math.sqrt(dx * dx + dz * dz);

    if (distToTarget < 1) {
      this.currentPatrolIndex = (this.currentPatrolIndex + 1) % this.patrolPoints.length;
      return;
    }

    dx /= distToTarget;
    dz /= distToTarget;

    const speed = this.walkSpeed * delta;
    const newX = ghostPos.x + dx * speed;
    const newZ = ghostPos.z + dz * speed;

    if (!this.world.checkCollision(new THREE.Vector3(newX, 0.9, ghostPos.z), 0.4)) {
      this.mesh.position.x = newX;
    }
    if (!this.world.checkCollision(new THREE.Vector3(ghostPos.x, 0.9, newZ), 0.4)) {
      this.mesh.position.z = newZ;
    }

    this.currentAngle = Math.atan2(dx, dz);
    this.mesh.rotation.y = this.currentAngle;
  }

  public setPosition(x: number, z: number): void {
    this.mesh.position.set(x, 0, z);
  }

  public getPosition(): THREE.Vector3 {
    return this.mesh.position.clone();
  }

  public reset(): void {
    this.currentPatrolIndex = 0;
    this.contactCooldown = 0;
    this.stuckCount = 0;
    this.setPosition(0, 20);
  }

  public remove(): void {
    this.scene.remove(this.mesh);
  }
}
