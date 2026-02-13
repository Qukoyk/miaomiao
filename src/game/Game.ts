import * as THREE from 'three';
import { Player } from './Player';
import { Ghost } from './Ghost';
import { Hider } from './Hider';
import { World } from './World';
import { distance, formatTime } from '../utils/helpers';

/**
 * 游戏模式
 */
export enum GameMode {
  HIDER,  // 玩家是逃离者，躲避AI鬼
  GHOST   // 玩家是鬼，追捕AI逃离者
}

/**
 * 游戏状态
 */
export enum GameState {
  MENU,
  PLAYING,
  GAME_OVER
}

/**
 * Game - 游戏主控制器
 */
export class Game {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private world: World;
  private player: Player;
  private ghost: Ghost | null = null;
  private hiders: Hider[] = [];

  private mode: GameMode = GameMode.HIDER;
  private state: GameState = GameState.MENU;

  // 计时
  private clock: THREE.Clock;
  private gameTime = 300;
  private timeRemaining = this.gameTime;

  // UI 元素
  private hudElement: HTMLElement;
  private timeDisplay: HTMLElement;
  private hidersStatus: HTMLElement;
  private hidersCount: HTMLElement;
  private gameOverElement: HTMLElement;
  private resultTitle: HTMLElement;
  private resultMessage: HTMLElement;
  private menuElement: HTMLElement;
  private clickPrompt: HTMLElement;
  private captureProgress: HTMLElement;
  private captureCount: HTMLElement;
  private rescueProgress: HTMLElement;
  private rescueCount: HTMLElement;
  private jailStatus: HTMLElement;
  private jailCount: HTMLElement;

  // 逃离者模式 - 固定5个逃离者
  private totalHiders = 5;
  private playerCaptureCount = 0;
  private maxPlayerCaptures = 3;
  private playerIsJailed = false;

  // 救援 - 5秒
  private rescueTime = 0;
  private rescueRequired = 5;

  // 玩家接触冷却 - 1秒
  private playerContactCooldown = 0;

  constructor() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x1a1a2e);
    this.scene.fog = new THREE.Fog(0x1a1a2e, 30, 60);

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
    this.renderer = new THREE.WebGLRenderer({
      canvas: document.getElementById('game-canvas') as HTMLCanvasElement,
      antialias: true
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.world = new World(this.scene);
    this.player = new Player(this.camera, this.world, this.scene, false);
    this.clock = new THREE.Clock();

    // 获取 UI 元素
    this.hudElement = document.getElementById('hud')!;
    this.timeDisplay = document.getElementById('time-display')!;
    this.hidersStatus = document.getElementById('hiders-status')!;
    this.hidersCount = document.getElementById('hiders-count')!;
    this.gameOverElement = document.getElementById('game-over')!;
    this.resultTitle = document.getElementById('result-title')!;
    this.resultMessage = document.getElementById('result-message')!;
    this.menuElement = document.getElementById('menu')!;
    this.clickPrompt = document.getElementById('click-prompt')!;
    this.captureProgress = document.getElementById('capture-progress')!;
    this.captureCount = document.getElementById('capture-count')!;
    this.rescueProgress = document.getElementById('rescue-progress')!;
    this.rescueCount = document.getElementById('rescue-count')!;
    this.jailStatus = document.getElementById('jail-status')!;
    this.jailCount = document.getElementById('jail-count')!;

    this.setupEventListeners();
  }

  private setupEventListeners(): void {
    window.addEventListener('resize', () => this.onWindowResize());

    document.getElementById('btn-hider')!.addEventListener('click', () => {
      this.startGame(GameMode.HIDER);
    });

    document.getElementById('btn-ghost')!.addEventListener('click', () => {
      this.startGame(GameMode.GHOST);
    });

    document.getElementById('btn-restart')!.addEventListener('click', () => {
      this.restartGame();
    });

    document.getElementById('btn-menu')!.addEventListener('click', () => {
      this.returnToMenu();
    });

    document.getElementById('btn-mobile-menu')!.addEventListener('click', () => {
      this.returnToMenu();
    });

    // 点击开始游戏 - 移动端直接开始，桌面端需要锁定鼠标
    document.addEventListener('click', () => {
      if (this.state === GameState.PLAYING) {
        const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (!isMobile && !this.player.isLocked()) {
          this.player.lock();
        }
      }
    });

    // 按 Esc 键返回菜单
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.state === GameState.PLAYING) {
        this.returnToMenu();
      }
    });
  }

  private onWindowResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  private startGame(mode: GameMode): void {
    this.mode = mode;
    this.state = GameState.PLAYING;
    this.timeRemaining = this.gameTime;
    this.playerCaptureCount = 0;
    this.playerIsJailed = false;
    this.rescueTime = 0;
    this.playerContactCooldown = 0;

    // 清理旧对象
    if (this.ghost) {
      this.ghost.remove();
      this.ghost = null;
    }
    this.hiders.forEach(h => h.remove());
    this.hiders = [];

    const oldPlayerMesh = this.player.getMesh();
    this.scene.remove(oldPlayerMesh);

    this.player = new Player(this.camera, this.world, this.scene, mode === GameMode.GHOST);

    this.menuElement.classList.add('hidden');
    this.gameOverElement.classList.add('hidden');
    this.hudElement.classList.remove('hidden');
    this.clickPrompt.classList.remove('hidden');

    if (mode === GameMode.HIDER) {
      this.setupHiderMode();
    } else {
      this.setupGhostMode();
    }

    this.clock.start();
  }

  private setupHiderMode(): void {
    this.player.setPosition(0, 0, 25);

    this.captureProgress.classList.remove('hidden');
    this.updateCaptureCount();
    this.rescueProgress.classList.remove('hidden');

    this.hidersStatus.classList.add('hidden');
    this.jailStatus.classList.add('hidden');

    // 创建 AI 鬼
    this.ghost = new Ghost(this.scene, this.world);
    this.ghost.setPosition(0, -20);

    // 创建 4 个 AI 逃离者（队友），加上玩家 = 5个逃离者
    for (let i = 0; i < this.totalHiders - 1; i++) {
      const hider = new Hider(this.scene, this.world, i);
      hider.setPosition(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 40
      );
      this.hiders.push(hider);
    }
  }

  private setupGhostMode(): void {
    this.player.setPosition(0, 0, 0);

    this.hidersStatus.classList.remove('hidden');
    this.jailStatus.classList.remove('hidden');
    this.updateHidersCount();
    this.updateJailCount();

    this.captureProgress.classList.add('hidden');
    this.rescueProgress.classList.add('hidden');

    // 创建 5 个 AI 逃离者
    for (let i = 0; i < this.totalHiders; i++) {
      const hider = new Hider(this.scene, this.world, i);
      hider.setPosition(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 40
      );
      this.hiders.push(hider);
    }
  }

  private restartGame(): void {
    this.startGame(this.mode);
  }

  private returnToMenu(): void {
    this.state = GameState.MENU;

    if (this.ghost) {
      this.ghost.remove();
      this.ghost = null;
    }
    this.hiders.forEach(h => h.remove());
    this.hiders = [];

    this.menuElement.classList.remove('hidden');
    this.hudElement.classList.add('hidden');
    this.gameOverElement.classList.add('hidden');
    this.clickPrompt.classList.add('hidden');

    this.player.unlock();
    this.player.reset();
  }

  private endGame(won: boolean): void {
    this.state = GameState.GAME_OVER;
    this.player.unlock();

    this.gameOverElement.classList.remove('hidden');
    this.gameOverElement.classList.toggle('win', won);
    this.gameOverElement.classList.toggle('lose', !won);

    if (won) {
      if (this.mode === GameMode.HIDER) {
        this.resultTitle.textContent = '🎉 成功逃脱！';
        this.resultMessage.textContent = '你成功躲藏了 5 分钟！';
      } else {
        this.resultTitle.textContent = '🎉 全部抓获！';
        const captured = this.hiders.filter(h => h.getIsJailed() || h.getIsEliminated()).length;
        this.resultMessage.textContent = `你抓住了 ${captured}/${this.totalHiders} 个逃离者！`;
      }
    } else {
      if (this.mode === GameMode.HIDER) {
        this.resultTitle.textContent = '😢 被关押了！';
        this.resultMessage.textContent = '你被抓住并被关押了！';
      } else {
        this.resultTitle.textContent = '⏰ 时间到！';
        const captured = this.hiders.filter(h => h.getIsJailed() || h.getIsEliminated()).length;
        this.resultMessage.textContent = `你抓住了 ${captured}/${this.totalHiders} 个逃离者。`;
      }
    }
  }

  private updateCaptureCount(): void {
    this.captureCount.textContent = `${this.playerCaptureCount}/${this.maxPlayerCaptures}`;
  }

  private updateHidersCount(): void {
    const captured = this.hiders.filter(h => h.getIsJailed() || h.getIsEliminated()).length;
    this.hidersCount.textContent = `${captured}/${this.totalHiders}`;
  }

  private updateJailCount(): void {
    const jailed = this.hiders.filter(h => h.getIsJailed()).length;
    this.jailCount.textContent = jailed.toString();
  }

  private updateRescueProgress(): void {
    this.rescueCount.textContent = `${this.rescueTime.toFixed(1)}/${this.rescueRequired}`;
  }

  public update(): void {
    const delta = this.clock.getDelta();

    if (this.state !== GameState.PLAYING) return;

    // 更新接触冷却
    this.playerContactCooldown = Math.max(0, this.playerContactCooldown - delta);

    // 更新计时器
    this.timeRemaining -= delta;
    this.timeDisplay.textContent = formatTime(Math.max(0, this.timeRemaining));

    if (this.mode === GameMode.HIDER) {
      this.updateHiderMode(delta);
    } else {
      this.updateGhostMode(delta);
    }

    // 检查超时
    if (this.timeRemaining <= 0) {
      if (this.mode === GameMode.HIDER) {
        this.endGame(!this.playerIsJailed);
      } else {
        const allCaptured = this.hiders.every(h => h.getIsJailed() || h.getIsEliminated());
        this.endGame(allCaptured);
      }
    }
  }

  // 玩家救援计时器（逃离者模式下玩家救援AI队友）
  private playerRescueTimer = 0;
  private playerRescueTarget: Hider | null = null;

  private updateHiderMode(delta: number): void {
    if (!this.ghost) return;

    const playerPos = this.player.getPosition();
    const ghostPos = this.ghost.getPosition();
    const jailPos = Hider.getJailPosition();

    // 获取被关押的队友列表
    const jailedHiders = this.hiders.filter(h => h.getIsJailed());

    // 更新 AI 逃离者（传入被关押队友信息用于救援）
    this.hiders.forEach(hider => {
      hider.update(delta, ghostPos, jailedHiders);
    });

    // 玩家被关押时的处理
    if (this.playerIsJailed) {
      // 限制玩家在拘留区内
      this.constrainPlayerToJail(delta);

      // 检查 AI 队友是否触碰玩家来救援（需要实际身体接触）
      const touchDistance = 1.5;
      let isTouchingPlayer = false;
      for (const hider of this.hiders) {
        if (hider.getIsJailed() || hider.getIsEliminated()) continue;

        const hiderPos = hider.getPosition();
        const dist = distance(playerPos.x, playerPos.y, playerPos.z, hiderPos.x, hiderPos.y, hiderPos.z);

        if (dist < touchDistance) {
          isTouchingPlayer = true;
          break;
        }
      }

      if (isTouchingPlayer) {
        this.rescueTime += delta;
        this.updateRescueProgress();

        if (this.rescueTime >= this.rescueRequired) {
          // 被救援
          this.playerIsJailed = false;
          this.playerCaptureCount = 0;
          this.rescueTime = 0;
          this.updateCaptureCount();
          this.player.setPosition(0, 0, 25);
        }
      } else {
        this.rescueTime = Math.max(0, this.rescueTime - delta * 0.5);
        this.updateRescueProgress();
      }

      // 更新鬼（鬼追 AI 逃离者）
      this.ghost.update(delta, playerPos, this.hiders);
      return;
    }

    // 玩家未被关押，正常更新
    this.player.update(delta);

    // 更新鬼
    const contactedHider = this.ghost.update(delta, playerPos, this.hiders);

    // 处理 AI 逃离者被接触
    if (contactedHider) {
      contactedHider.onGhostContact();
    }

    // 检查玩家是否被鬼接触（1秒冷却）
    const distToGhost = distance(playerPos.x, playerPos.y, playerPos.z, ghostPos.x, ghostPos.y, ghostPos.z);

    if (distToGhost < 1.0 && this.playerContactCooldown <= 0) {
      this.playerCaptureCount++;
      this.playerContactCooldown = 1.0; // 1秒冷却
      this.updateCaptureCount();

      if (this.playerCaptureCount >= this.maxPlayerCaptures) {
        // 玩家被关押
        this.playerIsJailed = true;
        this.player.setPosition(jailPos.x, 0, jailPos.z);
        this.rescueTime = 0;
        this.updateRescueProgress();
      }
    }

    // 玩家救援被关押的AI队友（触碰5秒）
    this.checkPlayerRescue(delta, playerPos, jailedHiders);

    // AI 救援 AI 队友
    this.checkAIRescue(delta);
  }

  /**
   * 检查玩家是否在救援被关押的AI队友
   */
  private checkPlayerRescue(delta: number, playerPos: THREE.Vector3, jailedHiders: Hider[]): void {
    const touchDistance = 1.5;

    // 找到玩家最近触碰的被关押队友
    let closestJailed: Hider | null = null;
    let closestDist = Infinity;

    for (const jailed of jailedHiders) {
      const jailedPos = jailed.getPosition();
      const dist = distance(playerPos.x, playerPos.y, playerPos.z, jailedPos.x, jailedPos.y, jailedPos.z);

      if (dist < touchDistance && dist < closestDist) {
        closestDist = dist;
        closestJailed = jailed;
      }
    }

    if (closestJailed) {
      // 正在触碰被关押者
      if (this.playerRescueTarget === closestJailed) {
        // 继续救援同一个人
        this.playerRescueTimer += delta;
      } else {
        // 救援新的人，重置计时
        this.playerRescueTarget = closestJailed;
        this.playerRescueTimer = delta;
      }

      // 更新救援进度显示
      this.rescueTime = this.playerRescueTimer;
      this.updateRescueProgress();

      if (this.playerRescueTimer >= this.rescueRequired) {
        // 救援成功
        closestJailed.rescue();
        this.playerRescueTimer = 0;
        this.playerRescueTarget = null;
        this.rescueTime = 0;
        this.updateRescueProgress();
      }
    } else {
      // 没有触碰，缓慢衰减计时
      if (this.playerRescueTimer > 0) {
        this.playerRescueTimer = Math.max(0, this.playerRescueTimer - delta * 0.5);
        this.rescueTime = this.playerRescueTimer;
        this.updateRescueProgress();
      }
      if (this.playerRescueTimer === 0) {
        this.playerRescueTarget = null;
      }
    }
  }

  /**
   * 限制被关押的玩家在拘留区内
   */
  private constrainPlayerToJail(_delta: number): void {
    const jailPos = Hider.getJailPosition();
    const jailRadius = Hider.getJailRadius();
    const playerPos = this.player.getPosition();

    // 计算玩家到拘留区中心的距离
    const dx = playerPos.x - jailPos.x;
    const dz = playerPos.z - jailPos.z;
    const dist = Math.sqrt(dx * dx + dz * dz);

    // 如果玩家在拘留区外，强制移回
    if (dist > jailRadius) {
      const angle = Math.atan2(dz, dx);
      const newX = jailPos.x + Math.cos(angle) * (jailRadius - 0.5);
      const newZ = jailPos.z + Math.sin(angle) * (jailRadius - 0.5);
      this.player.setPosition(newX, 0, newZ);
    }
  }

  private updateGhostMode(delta: number): void {
    const playerPos = this.player.getPosition();
    const jailPos = Hider.getJailPosition();
    const jailRadius = Hider.getJailRadius();

    // 玩家正常移动
    this.player.update(delta);

    // 获取被关押的队友
    const jailedHiders = this.hiders.filter(h => h.getIsJailed());

    // 更新 AI 逃离者
    this.hiders.forEach(hider => {
      if (hider.getIsJailed() || hider.getIsEliminated()) return;
      hider.update(delta, playerPos, jailedHiders);
    });

    // 检查玩家（鬼）是否接触逃离者（1秒冷却）
    if (this.playerContactCooldown <= 0) {
      for (const hider of this.hiders) {
        if (hider.getIsJailed() || hider.getIsEliminated()) continue;

        const hiderPos = hider.getPosition();
        const dist = distance(playerPos.x, playerPos.y, playerPos.z, hiderPos.x, hiderPos.y, hiderPos.z);

        if (dist < 1.0) {
          const jailed = hider.onGhostContact();
          this.playerContactCooldown = 1.0;

          if (jailed) {
            this.updateHidersCount();
            this.updateJailCount();
          }
          break;
        }
      }
    }

    // 检查 AI 逃离者是否救援队友（在拘留区停留5秒）
    for (const hider of this.hiders) {
      if (hider.getIsJailed() || hider.getIsEliminated()) continue;

      const hiderPos = hider.getPosition();
      const distToJail = distance(hiderPos.x, hiderPos.y, hiderPos.z, jailPos.x, jailPos.y, jailPos.z);

      if (distToJail < jailRadius) {
        // 在拘留区内，检查是否有被关押的队友
        for (const jailed of this.hiders) {
          if (jailed.getIsJailed()) {
            // 救援需要5秒，这里简化为到达后立即开始计时
            // 实际上救援逻辑在 Hider.update 中处理
            break;
          }
        }
      }
    }

    // 检查 AI 在拘留区内的救援
    this.checkAIRescue(delta);

    // 检查胜利条件
    const allCaptured = this.hiders.every(h => h.getIsJailed() || h.getIsEliminated());
    if (allCaptured) {
      this.endGame(true);
    }
  }

  /**
   * AI 逃离者救援逻辑 - 需要触碰被关押者5秒
   */
  private rescueTimers: Map<number, number> = new Map();

  private checkAIRescue(delta: number): void {
    const touchDistance = 1.5; // 触碰距离

    // 找出所有被关押的逃生者
    const jailedHiders = this.hiders.filter(h => h.getIsJailed());

    if (jailedHiders.length === 0) {
      this.rescueTimers.clear();
      return;
    }

    // 找出所有自由的逃生者
    const freeHiders = this.hiders.filter(h => !h.getIsJailed() && !h.getIsEliminated());

    if (freeHiders.length === 0) {
      // 没有自由的人，所有计时器衰减
      for (const [key, timer] of this.rescueTimers) {
        const newTimer = Math.max(0, timer - delta * 0.5);
        if (newTimer === 0) {
          this.rescueTimers.delete(key);
        } else {
          this.rescueTimers.set(key, newTimer);
        }
      }
      return;
    }

    // 对于每个被关押者，检查是否有自由AI在触碰
    for (const jailedHider of jailedHiders) {
      const jailedPos = jailedHider.getPosition();
      // 使用被关押者的唯一ID作为key
      const timerKey = this.hiders.indexOf(jailedHider);

      // 检查是否有任何自由AI在触碰这个被关押者
      let isBeingTouched = false;
      for (const freeHider of freeHiders) {
        const freePos = freeHider.getPosition();
        const dist = distance(freePos.x, freePos.y, freePos.z, jailedPos.x, jailedPos.y, jailedPos.z);

        if (dist < touchDistance) {
          isBeingTouched = true;
          break; // 只要有一个人在触碰就够了
        }
      }

      const currentTimer = this.rescueTimers.get(timerKey) || 0;

      if (isBeingTouched) {
        const newTimer = currentTimer + delta;

        if (newTimer >= this.rescueRequired) {
          // 救援成功
          jailedHider.rescue();
          this.updateJailCount();
          this.rescueTimers.delete(timerKey);
        } else {
          this.rescueTimers.set(timerKey, newTimer);
        }
      } else if (currentTimer > 0) {
        // 没有触碰，缓慢衰减
        const newTimer = Math.max(0, currentTimer - delta * 0.5);
        if (newTimer === 0) {
          this.rescueTimers.delete(timerKey);
        } else {
          this.rescueTimers.set(timerKey, newTimer);
        }
      }
    }
  }

  public render(): void {
    const cameraPos = this.camera.position;
    this.hiders.forEach(hider => {
      hider.updateStarsBillboard(cameraPos);
    });
    this.renderer.render(this.scene, this.camera);
  }

  public getState(): GameState {
    return this.state;
  }
}
