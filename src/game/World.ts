import * as THREE from 'three';

/**
 * World - Builds the train station / dock environment
 * World - 构建火车站/码头环境
 */
export class World {
  private scene: THREE.Scene;
  private obstacles: THREE.Box3[] = [];
  private hidingSpots: THREE.Vector3[] = [];

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.buildWorld();
  }

  private buildWorld(): void {
    this.createGround();
    this.createWalls();
    this.createPillars();
    this.createBoxes();
    this.createBenches();
    this.createLights();
    this.createDecorations();
  }

  private createGround(): void {
    // Main platform floor / 主站台地面
    const floorGeometry = new THREE.PlaneGeometry(80, 60);
    const floorMaterial = new THREE.MeshStandardMaterial({
      color: 0x4a4a4a,
      roughness: 0.8,
      metalness: 0.2
    });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    this.scene.add(floor);

    // Platform edge stripes / 站台边缘条纹
    const stripeGeometry = new THREE.PlaneGeometry(80, 1);
    const stripeMaterial = new THREE.MeshStandardMaterial({
      color: 0xffcc00,
      roughness: 0.6
    });
    const stripe1 = new THREE.Mesh(stripeGeometry, stripeMaterial);
    stripe1.rotation.x = -Math.PI / 2;
    stripe1.position.set(0, 0.01, 29);
    this.scene.add(stripe1);

    const stripe2 = stripe1.clone();
    stripe2.position.set(0, 0.01, -29);
    this.scene.add(stripe2);
  }

  private createWalls(): void {
    const wallMaterial = new THREE.MeshStandardMaterial({
      color: 0x5c5c5c,
      roughness: 0.7
    });

    // Back wall / 后墙
    const backWall = new THREE.Mesh(
      new THREE.BoxGeometry(80, 8, 1),
      wallMaterial
    );
    backWall.position.set(0, 4, -30);
    backWall.castShadow = true;
    backWall.receiveShadow = true;
    this.scene.add(backWall);
    this.obstacles.push(new THREE.Box3().setFromObject(backWall));

    // Side walls / 侧墙
    const sideWall1 = new THREE.Mesh(
      new THREE.BoxGeometry(1, 8, 60),
      wallMaterial
    );
    sideWall1.position.set(-40, 4, 0);
    sideWall1.castShadow = true;
    this.scene.add(sideWall1);
    this.obstacles.push(new THREE.Box3().setFromObject(sideWall1));

    const sideWall2 = sideWall1.clone();
    sideWall2.position.set(40, 4, 0);
    this.scene.add(sideWall2);
    this.obstacles.push(new THREE.Box3().setFromObject(sideWall2));

    // Front partial walls with openings / 前方部分墙壁（有开口）
    const frontWall1 = new THREE.Mesh(
      new THREE.BoxGeometry(30, 8, 1),
      wallMaterial
    );
    frontWall1.position.set(-25, 4, 30);
    frontWall1.castShadow = true;
    this.scene.add(frontWall1);
    this.obstacles.push(new THREE.Box3().setFromObject(frontWall1));

    const frontWall2 = frontWall1.clone();
    frontWall2.position.set(25, 4, 30);
    this.scene.add(frontWall2);
    this.obstacles.push(new THREE.Box3().setFromObject(frontWall2));
  }

  private createPillars(): void {
    const pillarMaterial = new THREE.MeshStandardMaterial({
      color: 0x6a6a6a,
      roughness: 0.5,
      metalness: 0.3
    });

    // Create rows of pillars / 创建柱子行
    const pillarPositions = [
      // Left row / 左侧行
      [-30, -20, -10, 0, 10, 20],
      // Right row / 右侧行
      [30, -20, -10, 0, 10, 20]
    ];

    pillarPositions.forEach((zPositions, idx) => {
      const x = idx === 0 ? -30 : 30;
      zPositions.forEach(z => {
        const pillar = new THREE.Mesh(
          new THREE.CylinderGeometry(0.8, 0.8, 8, 16),
          pillarMaterial
        );
        pillar.position.set(x, 4, z);
        pillar.castShadow = true;
        pillar.receiveShadow = true;
        this.scene.add(pillar);

        // Add pillar collision / 添加柱子碰撞
        const pillarBox = new THREE.Box3().setFromCenterAndSize(
          new THREE.Vector3(x, 4, z),
          new THREE.Vector3(1.6, 8, 1.6)
        );
        this.obstacles.push(pillarBox);
      });
    });

    // Center pillars / 中间柱子
    [0].forEach(x => {
      [-15, 15].forEach(z => {
        const pillar = new THREE.Mesh(
          new THREE.CylinderGeometry(0.8, 0.8, 8, 16),
          pillarMaterial
        );
        pillar.position.set(x, 4, z);
        pillar.castShadow = true;
        this.scene.add(pillar);

        const pillarBox = new THREE.Box3().setFromCenterAndSize(
          new THREE.Vector3(x, 4, z),
          new THREE.Vector3(1.6, 8, 1.6)
        );
        this.obstacles.push(pillarBox);
      });
    });
  }

  private createBoxes(): void {
    const boxMaterial = new THREE.MeshStandardMaterial({
      color: 0x8b6914,
      roughness: 0.9
    });

    // Cargo box configurations / 货物箱配置
    const boxConfigs = [
      { pos: [-20, 1.5, 15], size: [3, 3, 3] },
      { pos: [-22, 1, 18], size: [2, 2, 2] },
      { pos: [-18, 1, 12], size: [2, 2, 2] },
      { pos: [20, 1.5, -15], size: [3, 3, 3] },
      { pos: [18, 1, -12], size: [2, 2, 2] },
      { pos: [22, 1, -18], size: [2, 2, 2] },
      { pos: [-15, 1, -20], size: [4, 2, 2] },
      { pos: [15, 1, 20], size: [4, 2, 2] },
      { pos: [5, 1.5, -5], size: [3, 3, 2] },
      { pos: [-5, 1.5, 5], size: [3, 3, 2] },
    ];

    boxConfigs.forEach(config => {
      const box = new THREE.Mesh(
        new THREE.BoxGeometry(config.size[0], config.size[1], config.size[2]),
        boxMaterial.clone()
      );
      (box.material as THREE.MeshStandardMaterial).color.setHex(
        Math.random() > 0.5 ? 0x8b6914 : 0x5c4a1f
      );
      box.position.set(config.pos[0], config.pos[1], config.pos[2]);
      box.castShadow = true;
      box.receiveShadow = true;
      this.scene.add(box);
      this.obstacles.push(new THREE.Box3().setFromObject(box));

      // Add hiding spots behind boxes / 在箱子后面添加躲藏点
      this.hidingSpots.push(new THREE.Vector3(
        config.pos[0] + config.size[0] / 2 + 1,
        0,
        config.pos[2]
      ));
      this.hidingSpots.push(new THREE.Vector3(
        config.pos[0] - config.size[0] / 2 - 1,
        0,
        config.pos[2]
      ));
    });
  }

  private createBenches(): void {
    const benchMaterial = new THREE.MeshStandardMaterial({
      color: 0x4a3728,
      roughness: 0.8
    });

    const metalMaterial = new THREE.MeshStandardMaterial({
      color: 0x333333,
      roughness: 0.4,
      metalness: 0.6
    });

    // Bench positions / 长椅位置
    const benchPositions = [
      [-10, 0, 25],
      [10, 0, 25],
      [-10, 0, -25],
      [10, 0, -25],
    ];

    benchPositions.forEach(pos => {
      // Bench seat / 座位
      const seat = new THREE.Mesh(
        new THREE.BoxGeometry(3, 0.2, 0.8),
        benchMaterial
      );
      seat.position.set(pos[0], pos[1] + 0.6, pos[2]);
      seat.castShadow = true;
      this.scene.add(seat);

      // Bench legs / 腿
      [-1.2, 1.2].forEach(xOffset => {
        const leg = new THREE.Mesh(
          new THREE.BoxGeometry(0.1, 0.5, 0.6),
          metalMaterial
        );
        leg.position.set(pos[0] + xOffset, pos[1] + 0.25, pos[2]);
        leg.castShadow = true;
        this.scene.add(leg);
      });

      // Add bench collision / 添加长椅碰撞
      const benchBox = new THREE.Box3().setFromCenterAndSize(
        new THREE.Vector3(pos[0], pos[1] + 0.4, pos[2]),
        new THREE.Vector3(3.2, 0.8, 1)
      );
      this.obstacles.push(benchBox);

      // Bench is a good hiding spot / 长椅附近是好的躲藏点
      this.hidingSpots.push(new THREE.Vector3(pos[0], 0, pos[2] + 2));
    });
  }

  private createLights(): void {
    // Ambient light / 环境光
    const ambientLight = new THREE.AmbientLight(0x404050, 0.4);
    this.scene.add(ambientLight);

    // Main ceiling lights / 主要顶灯
    const lightPositions = [
      [-20, 7, 0],
      [0, 7, 0],
      [20, 7, 0],
      [-20, 7, 15],
      [0, 7, 15],
      [20, 7, 15],
      [-20, 7, -15],
      [0, 7, -15],
      [20, 7, -15],
    ];

    lightPositions.forEach(pos => {
      const light = new THREE.PointLight(0xffffee, 0.8, 20);
      light.position.set(pos[0], pos[1], pos[2]);
      light.castShadow = true;
      light.shadow.mapSize.width = 512;
      light.shadow.mapSize.height = 512;
      this.scene.add(light);

      // Light fixture / 灯具
      const fixture = new THREE.Mesh(
        new THREE.CylinderGeometry(0.3, 0.5, 0.3, 8),
        new THREE.MeshStandardMaterial({
          color: 0x888888,
          emissive: 0xffffcc,
          emissiveIntensity: 0.5
        })
      );
      fixture.position.set(pos[0], pos[1] + 0.15, pos[2]);
      this.scene.add(fixture);
    });

    // Directional light for shadows / 用于阴影的方向光
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.3);
    dirLight.position.set(10, 15, 10);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    dirLight.shadow.camera.near = 0.5;
    dirLight.shadow.camera.far = 50;
    dirLight.shadow.camera.left = -50;
    dirLight.shadow.camera.right = 50;
    dirLight.shadow.camera.top = 50;
    dirLight.shadow.camera.bottom = -50;
    this.scene.add(dirLight);
  }

  private createDecorations(): void {
    // Add some platform signs / 添加一些站台标志
    const signMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a5f7a,
      roughness: 0.3
    });

    // Exit signs / 出口标志
    const signGeometry = new THREE.BoxGeometry(2, 1, 0.1);
    const exitSign1 = new THREE.Mesh(signGeometry, signMaterial);
    exitSign1.position.set(-35, 6, -29);
    this.scene.add(exitSign1);

    const exitSign2 = exitSign1.clone();
    exitSign2.position.set(35, 6, -29);
    this.scene.add(exitSign2);

    // 关押区域 - 左上角
    this.createJailArea();

    // Add more hiding spots near walls / 在墙边添加更多躲藏点
    for (let x = -35; x <= 35; x += 10) {
      this.hidingSpots.push(new THREE.Vector3(x, 0, -28));
    }
  }

  private createJailArea(): void {
    // 关押区域位置
    const jailX = -35;
    const jailZ = -25;

    // 关押区域地面标记
    const jailFloorGeometry = new THREE.PlaneGeometry(8, 6);
    const jailFloorMaterial = new THREE.MeshStandardMaterial({
      color: 0x8b0000,
      roughness: 0.5,
      transparent: true,
      opacity: 0.7
    });
    const jailFloor = new THREE.Mesh(jailFloorGeometry, jailFloorMaterial);
    jailFloor.rotation.x = -Math.PI / 2;
    jailFloor.position.set(jailX, 0.02, jailZ);
    this.scene.add(jailFloor);

    // 关押区域围栏
    const fenceMaterial = new THREE.MeshStandardMaterial({
      color: 0x444444,
      roughness: 0.6,
      metalness: 0.3
    });

    // 围栏柱子
    const pillarGeometry = new THREE.CylinderGeometry(0.1, 0.1, 2, 8);
    const pillarPositions = [
      [jailX - 4, jailZ - 3],
      [jailX - 4, jailZ + 3],
      [jailX + 4, jailZ - 3],
      [jailX + 4, jailZ + 3],
    ];

    pillarPositions.forEach(pos => {
      const pillar = new THREE.Mesh(pillarGeometry, fenceMaterial);
      pillar.position.set(pos[0], 1, pos[1]);
      pillar.castShadow = true;
      this.scene.add(pillar);
    });

    // 围栏横杆
    const railGeometry = new THREE.CylinderGeometry(0.05, 0.05, 6, 8);
    const sideRailGeometry = new THREE.CylinderGeometry(0.05, 0.05, 8, 8);

    // 左右围栏
    [-4, 4].forEach(offset => {
      const rail = new THREE.Mesh(railGeometry, fenceMaterial);
      rail.rotation.x = Math.PI / 2;
      rail.position.set(jailX + offset, 1, jailZ);
      this.scene.add(rail);

      const railBottom = new THREE.Mesh(railGeometry, fenceMaterial);
      railBottom.rotation.x = Math.PI / 2;
      railBottom.position.set(jailX + offset, 0.5, jailZ);
      this.scene.add(railBottom);
    });

    // 后围栏
    const backRail = new THREE.Mesh(sideRailGeometry, fenceMaterial);
    backRail.rotation.z = Math.PI / 2;
    backRail.position.set(jailX, 1, jailZ - 3);
    this.scene.add(backRail);

    const backRailBottom = new THREE.Mesh(sideRailGeometry, fenceMaterial);
    backRailBottom.rotation.z = Math.PI / 2;
    backRailBottom.position.set(jailX, 0.5, jailZ - 3);
    this.scene.add(backRailBottom);

    // 关押标志
    const jailSignGeometry = new THREE.BoxGeometry(2, 0.5, 0.1);
    const jailSignMaterial = new THREE.MeshStandardMaterial({
      color: 0xff0000,
      emissive: 0x440000,
      roughness: 0.3
    });
    const jailSign = new THREE.Mesh(jailSignGeometry, jailSignMaterial);
    jailSign.position.set(jailX, 2.5, jailZ - 3);
    this.scene.add(jailSign);
  }

  public getObstacles(): THREE.Box3[] {
    return this.obstacles;
  }

  public getHidingSpots(): THREE.Vector3[] {
    return this.hidingSpots;
  }

  /**
   * Check if a position collides with any obstacle
   * 检查位置是否与任何障碍物碰撞
   */
  public checkCollision(position: THREE.Vector3, radius: number = 0.5): boolean {
    const playerBox = new THREE.Box3().setFromCenterAndSize(
      position,
      new THREE.Vector3(radius * 2, 2, radius * 2)
    );

    for (const obstacle of this.obstacles) {
      if (playerBox.intersectsBox(obstacle)) {
        return true;
      }
    }

    // Check world bounds / 检查世界边界
    if (Math.abs(position.x) > 39 || Math.abs(position.z) > 29) {
      return true;
    }

    return false;
  }

  /**
   * Get a random hiding spot
   * 获取随机躲藏点
   */
  public getRandomHidingSpot(): THREE.Vector3 {
    const spot = this.hidingSpots[Math.floor(Math.random() * this.hidingSpots.length)];
    return spot.clone();
  }
}
