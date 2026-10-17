import type { GameMode, MapId, MapSelection, MatchStats, QualityLevel } from '../config/types'
import { MAPS, resolveMap } from '../config/maps'
import { mulberry32 } from '../utils/rng'
import type { MatchOutcome } from '../gameplay/events'
import { AudioManager } from '../fx/Audio'
import { UIManager, type UISettings } from '../ui/UIManager'
import { SharedAssets } from './Disposal'
import { Input } from './Input'
import { getPreferredQuality, isMobileDevice, prefersReducedMotion, savePreferredQuality } from './Quality'
import { RenderSystem } from './RenderSystem'
import { Session, type SessionCallbacks } from './Session'

type AppState = 'menu' | 'loading' | 'playing' | 'paused' | 'result'

/** 应用状态机、渲染循环与 UI/音频/输入的协调者。 */
export class App {
  private readonly canvas: HTMLCanvasElement
  private readonly assets = new SharedAssets()
  private readonly renderer: RenderSystem
  private readonly input: Input
  private readonly audio = new AudioManager()
  private readonly ui: UIManager
  private settings: UISettings
  private quality: QualityLevel

  private session: Session | null = null
  private state: AppState = 'menu'
  private lastMode: GameMode = 'hider'
  private lastMapSelection: MapSelection = 'random'
  private lastTime = performance.now()
  private hudTimer = 0
  private timeScale = 1
  private readonly debugEnabled: boolean
  private readonly debugMap: MapId | null
  private readonly debugMode: GameMode | null

  constructor() {
    this.canvas = document.getElementById('game-canvas') as HTMLCanvasElement
    const uiRoot = document.getElementById('ui-root') as HTMLElement
    if (!this.canvas || !uiRoot) throw new Error('缺少游戏画布或 UI 容器')

    const params = new URLSearchParams(window.location.search)
    this.debugEnabled = params.get('debug') === '1'
    this.timeScale = Math.max(0.1, Number(params.get('timeScale') ?? '1') || 1)
    const mapParam = params.get('map')
    this.debugMap = mapParam && mapParam in MAPS ? (mapParam as MapId) : null
    const modeParam = params.get('mode')
    this.debugMode = modeParam === 'ghost' || modeParam === 'hider' ? modeParam : null

    this.quality = getPreferredQuality()
    this.settings = {
      quality: this.quality,
      muted: this.audio.isMuted,
      reducedMotion: prefersReducedMotion()
    }

    this.renderer = new RenderSystem(this.canvas, this.quality)
    this.renderer.resize(window.innerWidth, window.innerHeight)
    this.input = new Input(this.canvas)
    this.ui = new UIManager(uiRoot, {
      onStart: (mode, map) => {
        void this.startGame(mode, map)
      },
      onRestart: () => {
        void this.startGame(this.lastMode, this.lastMapSelection)
      },
      onMenu: () => this.returnToMenu(),
      onResume: () => this.resume(),
      onSettingsChange: (changes) => this.changeSettings(changes)
    }, this.settings, isMobileDevice(), this.input)
    this.ui.onPauseRequested = () => this.togglePause()
    this.input.onLockChange = (locked) => this.ui.setPointerLocked(locked)
    this.input.setEnabled(false)

    this.ui.showMenu()
    this.ui.maybeShowTutorial()

    window.addEventListener('resize', () => this.onResize())
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && this.state === 'playing') this.togglePause()
    })
    window.addEventListener('beforeunload', () => this.dispose())

    if (this.debugEnabled) this.exposeDebug()
    if (this.debugEnabled && params.get('autostart') === '1') {
      void this.startGame(this.debugMode ?? 'hider', this.debugMap ?? 'random')
    }

    this.lastTime = performance.now()
    requestAnimationFrame(this.loop)
  }

  private loop = (now: number): void => {
    requestAnimationFrame(this.loop)
    const dt = Math.min(0.05, Math.max(0, (now - this.lastTime) / 1000))
    this.lastTime = now

    if (this.input.consumePressed('pause') && (this.state === 'playing' || this.state === 'paused')) {
      this.togglePause()
    }

    if (this.state === 'playing' && this.session) {
      this.session.update(dt * this.timeScale)
      this.renderer.render(this.session.getScene(), this.session.getCamera())
      this.hudTimer -= dt
      if (this.hudTimer <= 0) {
        this.hudTimer = 0.1
        this.ui.updateHud(this.session.getHudState())
      }
      this.audio.update(dt)
    } else if ((this.state === 'paused' || this.state === 'result') && this.session) {
      this.renderer.render(this.session.getScene(), this.session.getCamera())
    }
  }

  private async startGame(mode: GameMode, mapSelection: MapSelection): Promise<void> {
    if (this.state === 'loading') return
    this.disposeSession()
    this.lastMode = mode
    this.lastMapSelection = mapSelection
    this.state = 'loading'
    this.input.setEnabled(false)
    this.input.reset()
    if (!this.input.isTouchDevice) this.input.lock()

    const selected: MapSelection = this.debugEnabled && this.debugMap ? this.debugMap : mapSelection
    const params = new URLSearchParams(window.location.search)
    const seedParam = params.get('seed')
    const seed = seedParam ? Number(seedParam) : (Date.now() ^ (Math.random() * 0xffffffff)) >>> 0
    const map = resolveMap(selected, mulberry32((seed >>> 0) || 1))

    this.ui.showLoading(map.name)
    void this.audio.start(map.id)
    this.audio.setPaused(false)

    await new Promise((resolve) => window.setTimeout(resolve, 140))
    if (this.state !== 'loading') return

    const callbacks: SessionCallbacks = {
      onEnd: (outcome, stats, endMode) => this.handleEnd(outcome, stats, endMode),
      onToast: (message, tone) => this.ui.toast(message, tone),
      onFlash: () => this.ui.flash(),
      onHeartbeat: (value) => this.audio.setHeartbeat(value),
      onSound: (name) => this.audio.play(name)
    }

    this.session = new Session({
      mode,
      map,
      quality: this.quality,
      assets: this.assets,
      input: this.input,
      callbacks
    })
    this.session.resize(window.innerWidth, window.innerHeight)
    this.state = 'playing'
    this.hudTimer = 0
    this.input.setEnabled(true)
    this.ui.showHud(mode, this.settings)
    this.ui.setPointerLocked(this.input.isLocked)
    this.ui.toast(`本局地图：${map.name}`, 'gold')
    this.lastTime = performance.now()
  }

  private handleEnd(outcome: MatchOutcome, stats: MatchStats, mode: GameMode): void {
    if (this.state === 'result') return
    this.state = 'result'
    this.input.setEnabled(false)
    this.input.unlock()
    this.audio.stopMusic()
    this.audio.setPaused(false)
    this.audio.setHeartbeat(0)
    this.ui.showResult(outcome, stats, mode)
  }

  private togglePause(): void {
    if (this.state === 'playing') {
      this.state = 'paused'
      this.input.setEnabled(false)
      this.input.reset()
      this.input.unlock()
      this.audio.setPaused(true)
      this.ui.showPause(this.lastMode)
    } else if (this.state === 'paused') {
      this.resume()
    }
  }

  private resume(): void {
    if (this.state !== 'paused') return
    this.state = 'playing'
    this.ui.hidePause()
    this.input.setEnabled(true)
    this.input.reset()
    this.audio.setPaused(false)
    if (!this.input.isTouchDevice) this.input.lock()
    this.lastTime = performance.now()
  }

  private returnToMenu(): void {
    this.disposeSession()
    this.state = 'menu'
    this.input.setEnabled(false)
    this.input.unlock()
    this.input.reset()
    this.audio.setPaused(false)
    this.audio.stopMusic()
    void this.audio.start('menu')
    this.ui.showMenu()
  }

  private changeSettings(changes: Partial<UISettings>): void {
    this.settings = { ...this.settings, ...changes }
    this.ui.setSettings(this.settings)

    if (changes.muted !== undefined) {
      this.audio.setMuted(changes.muted)
    }
    if (changes.quality && changes.quality !== this.quality) {
      this.quality = changes.quality
      savePreferredQuality(changes.quality)
      this.renderer.setQuality(changes.quality)
      if (this.state === 'playing' || this.state === 'paused') {
        this.ui.toast('画质设置已保存，下一局生效', 'gold')
      }
    }
  }

  private onResize(): void {
    this.renderer.resize(window.innerWidth, window.innerHeight)
    this.session?.resize(window.innerWidth, window.innerHeight)
  }

  private disposeSession(): void {
    this.session?.dispose()
    this.session = null
  }

  private dispose(): void {
    this.disposeSession()
    this.input.dispose()
    this.audio.dispose()
    this.renderer.dispose()
    this.assets.dispose()
    this.ui.dispose()
  }

  private exposeDebug(): void {
    const target = window as unknown as { __mm?: Record<string, unknown> }
    target.__mm = {
      getState: () => this.state,
      getSession: () => this.session,
      getHud: () => this.session?.getHudState() ?? null,
      getPlayer: () => {
        const character = this.session?.getPlayerCharacter()
        return character ? { x: character.x, z: character.z } : null
      },
      getHiders: () =>
        this.session?.getRules().hiders.map((hider) => ({
          id: hider.id,
          x: hider.x,
          z: hider.z,
          state: hider.state,
          contactCount: hider.contactCount,
          jailCount: hider.jailCount
        })) ?? [],
      getGhost: () => this.session?.getGhostPosition() ?? null,
      getAIStates: () => this.session?.getAIStates() ?? [],
      getRendererInfo: () => ({
        calls: this.renderer.renderer.info.render.calls,
        triangles: this.renderer.renderer.info.render.triangles,
        geometries: this.renderer.renderer.info.memory.geometries,
        textures: this.renderer.renderer.info.memory.textures
      }),
      teleportGhost: (x: number, z: number) => this.session?.teleportGhost(x, z),
      setCameraYaw: (yaw: number) => this.session?.setCameraYaw(yaw),
      forceRescue: (id: number) => {
        this.session?.getRules().forceRescue(id)
      },
      start: (mode: GameMode, map: MapSelection) => {
        void this.startGame(mode, map)
      },
      teleport: (x: number, z: number) => {
        this.session?.getPlayerCharacter().setPosition(x, z)
      },
      forceContact: (id: number) => {
        const rules = this.session?.getRules()
        if (!rules) return
        const hider = rules.hiders[id]
        if (!hider) return
        rules.contactCooldown = 0
        hider.invulnerableUntil = 0
        rules.tryContact(id, this.lastMode === 'ghost')
      },
      setTime: (seconds: number) => {
        const rules = this.session?.getRules()
        if (rules) rules.elapsed = seconds
      },
      step: (dt: number) => {
        this.session?.update(dt)
      },
      pause: () => this.togglePause(),
      menu: () => this.returnToMenu()
    }
  }
}
