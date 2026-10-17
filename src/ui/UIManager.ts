import type { GameMode, MapSelection, MatchStats, QualityLevel } from '../config/types'
import type { HudState } from '../core/Session'
import type { Input } from '../core/Input'
import type { MatchOutcome } from '../gameplay/events'
import { MAP_SUMMARIES } from '../config/maps'
import { formatTime } from '../utils/math'
import { icon, type IconName } from './icons'
import { mapArt, menuSkyline, roleArt } from './art'
import { MobileControls } from './MobileControls'

export interface UISettings {
  quality: QualityLevel
  muted: boolean
  reducedMotion: boolean
}

export interface UIActions {
  onStart: (mode: GameMode, map: MapSelection) => void
  onRestart: () => void
  onMenu: () => void
  onResume: () => void
  onSettingsChange: (changes: Partial<UISettings>) => void
}

const TUTORIAL_KEY = 'miaomiao.tutorialSeen'

/** 所有 DOM 屏幕的创建与更新。App 只管状态，UI 只管呈现。 */
export class UIManager {
  private readonly root: HTMLElement
  private readonly actions: UIActions
  private readonly input: Input
  private readonly mobile: boolean
  private readonly feedbackLayer: HTMLDivElement
  private readonly toastLayer: HTMLDivElement
  private readonly flashEl: HTMLDivElement
  private readonly heartbeatEl: HTMLDivElement
  private readonly clickPrompt: HTMLDivElement

  private settings: UISettings
  private selectedMode: GameMode = 'hider'
  private selectedMap: MapSelection = 'random'
  private menuEl: HTMLElement | null = null
  private hudEl: HTMLElement | null = null
  private pauseEl: HTMLElement | null = null
  private tutorialEl: HTMLElement | null = null
  private mobileControls: MobileControls | null = null
  private tutorialPage = 0
  private tutorialClose: (() => void) | null = null
  private lastStatusKey = ''
  private lastHint = ''
  private pointerLocked = false
  private promptBlocked = false

  constructor(
    root: HTMLElement,
    actions: UIActions,
    settings: UISettings,
    mobile: boolean,
    input: Input
  ) {
    this.root = root
    this.actions = actions
    this.settings = settings
    this.mobile = mobile
    this.input = input

    this.feedbackLayer = document.createElement('div')
    this.feedbackLayer.innerHTML = `
      <div class="vignette"></div>
      <div class="heartbeat"></div>
      <div class="flash"></div>
    `
    document.body.appendChild(this.feedbackLayer)
    this.flashEl = this.feedbackLayer.querySelector('.flash') as HTMLDivElement
    this.heartbeatEl = this.feedbackLayer.querySelector('.heartbeat') as HTMLDivElement

    this.toastLayer = document.createElement('div')
    this.toastLayer.className = 'toast-layer'
    document.body.appendChild(this.toastLayer)

    this.clickPrompt = document.createElement('div')
    this.clickPrompt.className = 'click-prompt hidden'
    this.clickPrompt.innerHTML = `${icon('eye', 18)} 点击画面锁定鼠标`
    document.body.appendChild(this.clickPrompt)
  }

  showMenu(): void {
    this.promptBlocked = true
    this.clearRoot()
    this.hideMobileControls()
    this.menuEl = document.createElement('div')
    this.menuEl.className = 'menu-screen'
    this.menuEl.innerHTML = `
      <div class="menu-skyline">${menuSkyline()}</div>
      <div class="menu-shell">
        <header class="brand">
          <div class="brand__eyebrow">${icon('sparkle', 14)} 3D 捉迷藏 ${icon('sparkle', 14)}</div>
          <h1 class="brand__title">苗苗<em>捉迷藏</em></h1>
          <div class="brand__subtitle">1 个鬼 · 5 个逃离者</div>
        </header>

        <div class="paper-card menu-card">
          <section class="menu-section">
            <h2 class="section-heading">
              <span class="section-heading__num">1</span>选择你的角色
              <span class="section-heading__hint">玩家算其中一个</span>
            </h2>
            <div class="role-grid">
              <button type="button" class="role-card role-card--hider" data-role="hider" aria-pressed="true">
                <div class="role-card__art">${roleArt('hider')}</div>
                <div class="role-card__body">
                  <h3 class="role-card__title">当逃离者 <span class="tag">躲好</span></h3>
                  <p class="role-card__desc">躲开鬼，和四位队友一起坚持 5 分钟。被关进关押区也别怕，队友会来救你。</p>
                </div>
                <span class="role-card__check">${icon('check', 16)}</span>
              </button>

              <button type="button" class="role-card role-card--ghost" data-role="ghost" aria-pressed="false">
                <div class="role-card__art">${roleArt('ghost')}</div>
                <div class="role-card__body">
                  <h3 class="role-card__title">当鬼 <span class="tag">追捕</span></h3>
                  <p class="role-card__desc">你是负责追捕的鬼。接触逃离者 3 次，就能把他们关进关押区。</p>
                </div>
                <span class="role-card__check">${icon('check', 16)}</span>
              </button>
            </div>
          </section>

          <section class="menu-section">
            <h2 class="section-heading">
              <span class="section-heading__num">2</span>选择地图
              <span class="section-heading__hint">默认随机</span>
            </h2>
            <div class="map-grid">
              ${MAP_SUMMARIES.map((map) => `
                <button type="button" class="map-card${map.id === this.selectedMap ? ' map-card--selected' : ''}" data-map="${map.id}" aria-pressed="${map.id === this.selectedMap}">
                  <div class="map-card__art">${mapArt(map.id)}</div>
                  <span class="map-card__name">${map.id === 'random' ? icon('dice', 16) : ''}${map.name}</span>
                  <span class="map-card__desc">${map.subtitle}</span>
                  <span class="map-card__check">${icon('check', 15)}</span>
                </button>
              `).join('')}
            </div>
          </section>

          <div class="menu-actions">
            <button type="button" class="btn btn--primary btn--lg" data-action="start">
              ${icon('play', 22)} 开始游戏
            </button>
          </div>

          <div class="menu-footer">
            <div class="control-hints">
              ${this.mobile ? `
                <span>${icon('runner', 16)} 摇杆移动</span>
                <span>${icon('eye', 16)} 右半屏转视角</span>
                <span>${icon('bolt', 16)} 按钮冲刺</span>
              ` : `
                <span><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> 移动</span>
                <span><kbd>Shift</kbd> 冲刺</span>
                <span>${icon('eye', 16)} 鼠标转视角</span>
                <span><kbd>Esc</kbd> 暂停</span>
              `}
            </div>
            <div class="menu-footer__spacer"></div>
            <button type="button" class="btn" data-action="tutorial">${icon('book', 16)} 玩法说明</button>
            <button type="button" class="btn" data-action="mute">${this.mutedIcon()} ${this.settings.muted ? '已静音' : '音效'}</button>
          </div>
        </div>
      </div>
    `
    this.root.appendChild(this.menuEl)
    this.bindMenu()
    this.updateRoleSelection()
  }

  showLoading(mapName: string): void {
    this.promptBlocked = true
    this.clearRoot()
    this.hideMobileControls()
    const loading = document.createElement('div')
    loading.className = 'loading-screen'
    loading.innerHTML = `
      <div class="loading-screen__inner">
        <div class="loading-spinner"><i></i><i></i><i></i></div>
        <p class="loading-screen__map">${mapName}</p>
        <p class="loading-screen__tip">正在点亮路灯、摆好长椅、准备场景……</p>
      </div>
    `
    this.root.appendChild(loading)
  }

  showHud(mode: GameMode, settings: UISettings): void {
    this.settings = settings
    this.promptBlocked = false
    this.clearRoot()
    this.hudEl = document.createElement('div')
    this.hudEl.className = `hud${this.mobile ? ' hud--mobile' : ''}`
    const objective: { icon: IconName; title: string; text: string; color: string } =
      mode === 'hider'
        ? { icon: 'runner', title: '坚持到最后', text: '躲开鬼，坚持 5 分钟', color: '#8fe2ce' }
        : { icon: 'ghost', title: '抓住所有逃离者', text: '把 5 位逃离者关进关押区', color: '#ff9ebb' }
    this.hudEl.innerHTML = `
      <div class="hud__top">
        <div class="hud__objective" style="--objective-color:${objective.color}">
          <span class="hud__objective-icon">${icon(objective.icon, 20)}</span>
          <span class="hud__objective-text">
            <strong>${objective.title}</strong>
            <span>${objective.text}</span>
          </span>
        </div>
        <div class="hud__timer">
          <div class="timer-pill">${icon('clock', 18)} <span data-hud="timer">5:00</span></div>
          <div class="hud__role">${mode === 'hider' ? '逃离者模式' : '鬼模式'}</div>
        </div>
        <div class="hud__status" data-hud="status"></div>
      </div>
      <div class="hud__rescue" data-hud="rescue" hidden>
        <div class="ring" data-hud="rescue-ring" style="--value:0"><span data-hud="rescue-pct">0%</span></div>
        <div class="hud__rescue-body">
          <div class="hud__rescue-title"><span data-hud="rescue-name">救援</span><span data-hud="rescue-time">0.0 / 5.0</span></div>
          <div class="bar"><div class="bar__fill" data-hud="rescue-bar" style="--value:0"></div></div>
        </div>
      </div>
      <div class="hud__hint" data-hud="hint"></div>
      <div class="hud__sprint">
        ${icon(mode === 'hider' ? 'bolt' : 'burst', 16)}
        <div class="bar"><div class="bar__fill" data-hud="sprint-bar" style="--value:1"></div></div>
        <span class="hud__sprint-label" data-hud="sprint-label">${mode === 'hider' ? '体力' : '扑击'}</span>
      </div>
      <div class="countdown-badge" data-hud="countdown" hidden></div>
    `
    this.root.appendChild(this.hudEl)
    this.mobileControls = this.mobile
      ? new MobileControls(this.root, this.input, () => this.onPauseRequested?.())
      : null
    this.setPointerLocked(this.pointerLocked)
  }

  updateHud(state: HudState): void {
    if (!this.hudEl) return
    const timer = this.hudEl.querySelector('[data-hud="timer"]')
    if (timer) timer.textContent = formatTime(state.remaining)
    const timerPill = this.hudEl.querySelector('.timer-pill')
    timerPill?.classList.toggle('timer-pill--urgent', state.remaining <= 30)

    const countdown = this.hudEl.querySelector('[data-hud="countdown"]') as HTMLElement | null
    if (countdown) {
      const show = state.countdown > 0
      countdown.hidden = !show
      if (show) countdown.textContent = String(Math.max(1, Math.ceil(state.countdown)))
    }

    const statusKey =
      JSON.stringify(state.hiders) +
      state.isGhost +
      state.playerContactCount +
      state.playerJailCount +
      state.playerBoost
    if (statusKey !== this.lastStatusKey) {
      this.lastStatusKey = statusKey
      const status = this.hudEl.querySelector('[data-hud="status"]')
      if (status) status.innerHTML = this.statusHtml(state)
    }

    const hint = this.hudEl.querySelector('[data-hud="hint"]') as HTMLElement | null
    if (hint && state.hint !== this.lastHint) {
      this.lastHint = state.hint
      hint.innerHTML = state.hint ? `${icon('sparkle', 16)} ${state.hint}` : ''
      hint.classList.toggle('is-visible', Boolean(state.hint))
    }

    const sprintBar = this.hudEl.querySelector('[data-hud="sprint-bar"]') as HTMLElement | null
    if (sprintBar) {
      const value = state.isGhost
        ? 1 - state.lungeCooldown
        : state.stamina
      sprintBar.style.setProperty('--value', String(value))
      const label = this.hudEl.querySelector('[data-hud="sprint-label"]')
      if (label) label.textContent = state.isGhost ? '扑击' : '体力'
      this.hudEl.querySelector('.hud__sprint')?.classList.toggle('is-empty', value <= 0.02)
    }

    const rescue = this.hudEl.querySelector('[data-hud="rescue"]') as HTMLElement | null
    if (rescue) {
      const show = state.rescueProgress > 0 || state.playerIsJailed
      rescue.hidden = !show
      if (show) {
        const pct = Math.round(state.rescueProgress * 100)
        const ring = rescue.querySelector('[data-hud="rescue-ring"]') as HTMLElement | null
        ring?.style.setProperty('--value', String(state.rescueProgress))
        const pctEl = rescue.querySelector('[data-hud="rescue-pct"]')
        if (pctEl) pctEl.textContent = `${pct}%`
        const name = rescue.querySelector('[data-hud="rescue-name"]')
        if (name) name.textContent = state.playerIsJailed
          ? state.rescueProgress > 0
            ? '正在被救援'
            : '等待救援'
          : `救援 ${state.rescueName}`
        const time = rescue.querySelector('[data-hud="rescue-time"]')
        if (time) time.textContent = `${(state.rescueProgress * 5).toFixed(1)} / 5.0`
        const bar = rescue.querySelector('[data-hud="rescue-bar"]') as HTMLElement | null
        bar?.style.setProperty('--value', String(state.rescueProgress))
      }
    }

    this.heartbeatEl.style.setProperty('--heartbeat', String(state.ghostProximity))
    this.mobileControls?.updateState(state)
  }

  setPointerLocked(locked: boolean): void {
    this.pointerLocked = locked
    if (this.mobile) return
    this.clickPrompt.classList.toggle('hidden', locked || !this.hudEl || this.promptBlocked)
  }

  showPause(_mode: GameMode): void {
    if (this.pauseEl) return
    this.promptBlocked = true
    this.clickPrompt.classList.add('hidden')
    this.pauseEl = document.createElement('div')
    this.pauseEl.className = 'overlay-screen pause-screen'
    this.pauseEl.innerHTML = `
      <div class="paper-card pause-card">
        <h2 class="pause-card__title">暂停</h2>
        <p class="pause-card__subtitle">游戏已暂停。</p>
        <div class="pause-actions">
          <button type="button" class="btn btn--primary" data-action="resume">${icon('play', 18)} 继续游戏</button>
          <button type="button" class="btn" data-action="tutorial">${icon('book', 18)} 玩法说明</button>
          <button type="button" class="btn btn--danger" data-action="menu">${icon('home', 18)} 返回菜单</button>
        </div>
        <hr class="rule" />
        <div class="settings-row">
          <span>音效</span>
          <button type="button" class="switch ${this.settings.muted ? '' : 'is-on'}" data-action="mute" aria-label="切换音效"></button>
        </div>
        <div class="settings-row">
          <span>画质 <small style="color:var(--ink-faint);font-weight:600">（下局生效）</small></span>
          <span class="segmented" data-action="quality">
            ${(['high', 'medium', 'low'] as QualityLevel[]).map((quality) => `
              <button type="button" data-quality="${quality}" class="${this.settings.quality === quality ? 'is-active' : ''}">${qualityLabel(quality)}</button>
            `).join('')}
          </span>
        </div>
        <p class="pause-card__subtitle" style="margin-top:18px;margin-bottom:0">
          ${this.mobile ? '摇杆移动，右半屏转视角。' : 'WASD 移动 · Shift 冲刺 · 鼠标转视角 · Esc 暂停'}
        </p>
      </div>
    `
    this.root.appendChild(this.pauseEl)
    this.bindPause()
  }

  hidePause(): void {
    this.pauseEl?.remove()
    this.pauseEl = null
    this.promptBlocked = false
    this.setPointerLocked(this.pointerLocked)
  }

  showResult(outcome: MatchOutcome, stats: MatchStats, _mode: GameMode): void {
    this.hidePause()
    this.promptBlocked = true
    this.clickPrompt.classList.add('hidden')
    this.hideMobileControls()
    this.toastLayer.innerHTML = ''
    const win = outcome === 'hider-win' || outcome === 'ghost-win'
    const copy = resultCopy(outcome, stats)
    const result = document.createElement('div')
    result.className = `overlay-screen result-screen ${win ? 'result-screen--win' : 'result-screen--lose'}`
    result.innerHTML = `
      <div class="paper-card result-card ${win ? 'result-card--win' : 'result-card--lose'}">
        ${win ? confettiHtml() : ''}
        <div class="result-card__emblem">${icon(win ? 'crown' : 'heart', 46)}</div>
        <h2 class="result-card__title">${copy.title}</h2>
        <p class="result-card__message">${copy.message}</p>
        <div class="result-stats">
          <div class="stat"><span class="stat__value">${formatTime(stats.elapsed)}</span><span class="stat__label">坚持时间</span></div>
          <div class="stat"><span class="stat__value">${stats.jails}</span><span class="stat__label">关押次数</span></div>
          <div class="stat"><span class="stat__value">${stats.rescues}</span><span class="stat__label">成功救援</span></div>
          <div class="stat"><span class="stat__value">${stats.eliminated}</span><span class="stat__label">出局人数</span></div>
        </div>
        <div class="result-card__actions">
          <button type="button" class="btn btn--primary" data-action="restart">${icon('restart', 18)} 再来一局</button>
          <button type="button" class="btn" data-action="menu">${icon('home', 18)} 返回菜单</button>
        </div>
      </div>
    `
    this.root.appendChild(result)
    result.querySelector('[data-action="restart"]')?.addEventListener('click', () => {
      result.remove()
      this.actions.onRestart()
    })
    result.querySelector('[data-action="menu"]')?.addEventListener('click', () => {
      result.remove()
      this.actions.onMenu()
    })
  }

  showTutorial(onClose?: () => void): void {
    this.tutorialClose = onClose ?? null
    this.tutorialPage = 0
    this.tutorialEl?.remove()
    this.tutorialEl = document.createElement('div')
    this.tutorialEl.className = 'overlay-screen tutorial-screen'
    this.root.appendChild(this.tutorialEl)
    this.renderTutorial()
  }

  maybeShowTutorial(): void {
    try {
      if (localStorage.getItem(TUTORIAL_KEY) === '1') return
    } catch {
      return
    }
    this.showTutorial(() => this.markTutorialSeen())
  }

  setSettings(settings: UISettings): void {
    this.settings = settings
    const muteButton = this.menuEl?.querySelector('[data-action="mute"]')
    if (muteButton) {
      muteButton.innerHTML = `${this.mutedIcon()} ${settings.muted ? '已静音' : '音效'}`
    }
  }

  toast(message: string, tone: 'gold' | 'pink' = 'gold'): void {
    while (this.toastLayer.children.length >= 3) {
      this.toastLayer.firstElementChild?.remove()
    }
    const toast = document.createElement('div')
    toast.className = `toast toast--${tone}`
    toast.textContent = message
    this.toastLayer.appendChild(toast)
    window.setTimeout(() => toast.remove(), 2600)
  }

  flash(): void {
    this.flashEl.classList.remove('is-active')
    void this.flashEl.offsetWidth
    this.flashEl.classList.add('is-active')
  }

  dispose(): void {
    this.feedbackLayer.remove()
    this.toastLayer.remove()
    this.clickPrompt.remove()
    this.clearRoot()
  }

  private bindMenu(): void {
    if (!this.menuEl) return
    this.menuEl.querySelectorAll<HTMLElement>('.role-card').forEach((card) => {
      card.addEventListener('click', () => {
        this.selectedMode = card.dataset.role === 'ghost' ? 'ghost' : 'hider'
        this.updateRoleSelection()
      })
    })
    this.menuEl.querySelectorAll<HTMLElement>('.map-card').forEach((card) => {
      card.addEventListener('click', () => {
        this.selectedMap = (card.dataset.map as MapSelection) ?? 'random'
        this.menuEl?.querySelectorAll('.map-card').forEach((item) => {
          const selected = item === card
          item.classList.toggle('map-card--selected', selected)
          item.setAttribute('aria-pressed', String(selected))
        })
      })
    })
    this.menuEl.querySelector('[data-action="start"]')?.addEventListener('click', () => {
      this.actions.onStart(this.selectedMode, this.selectedMap)
    })
    this.menuEl.querySelector('[data-action="tutorial"]')?.addEventListener('click', () => {
      this.showTutorial()
    })
    this.menuEl.querySelector('[data-action="mute"]')?.addEventListener('click', () => {
      this.actions.onSettingsChange({ muted: !this.settings.muted })
    })
  }

  private bindPause(): void {
    if (!this.pauseEl) return
    this.pauseEl.querySelector('[data-action="resume"]')?.addEventListener('click', () => {
      this.actions.onResume()
    })
    this.pauseEl.querySelector('[data-action="menu"]')?.addEventListener('click', () => {
      this.actions.onMenu()
    })
    this.pauseEl.querySelector('[data-action="tutorial"]')?.addEventListener('click', () => {
      this.showTutorial()
    })
    this.pauseEl.querySelector('[data-action="mute"]')?.addEventListener('click', (event) => {
      const button = event.currentTarget as HTMLElement
      const nextMuted = !button.classList.contains('is-on')
      button.classList.toggle('is-on', !nextMuted)
      this.actions.onSettingsChange({ muted: nextMuted })
    })
    this.pauseEl.querySelectorAll<HTMLElement>('[data-quality]').forEach((button) => {
      button.addEventListener('click', () => {
        const quality = button.dataset.quality as QualityLevel
        this.pauseEl?.querySelectorAll('[data-quality]').forEach((item) => {
          item.classList.toggle('is-active', item === button)
        })
        this.actions.onSettingsChange({ quality })
      })
    })
  }

  private updateRoleSelection(): void {
    this.menuEl?.querySelectorAll<HTMLElement>('.role-card').forEach((card) => {
      const selected = card.dataset.role === this.selectedMode
      card.classList.toggle('role-card--selected', selected)
      card.setAttribute('aria-pressed', String(selected))
    })
  }

  private statusHtml(state: HudState): string {
    if (state.isGhost) {
      return `
        <div class="status-pill">
          <span class="status-pill__label">逃离者</span>
          <span class="hider-chips">
            ${state.hiders.map((hider) => `
              <span class="hider-chip hider-chip--${hider.state === 'jailed' ? 'jailed' : hider.state === 'eliminated' ? 'eliminated' : 'free'}" title="${hider.name}">
                ${hider.id + 1}
                <span class="hider-chip__dots">
                  ${[0, 1, 2].map((dot) => `<i class="${dot < hider.contactCount ? 'is-on' : ''}"></i>`).join('')}
                </span>
              </span>
            `).join('')}
          </span>
        </div>
      `
    }

    const stars = [0, 1, 2]
      .map((index) => icon('star', 15).replace('<svg ', `<svg class="${index < state.playerContactCount ? 'is-on' : ''}" `))
      .join('')
    const knots = [0, 1, 2]
      .map((index) => icon('knot', 14).replace('<svg ', `<svg class="${index < state.playerJailCount ? 'is-on' : ''}" `))
      .join('')
    return `
      <div class="status-pill" title="当前被抓次数">
        <span class="status-pill__label">星星</span>
        <span class="stars">${stars}</span>
      </div>
      <div class="status-pill" title="累计被关押次数">
        <span class="status-pill__label">关押</span>
        <span class="knots">${knots}</span>
      </div>
      ${state.playerBoost ? '<div class="status-pill" title="受击后短暂加速"><span class="status-pill__label">加速</span></div>' : ''}
    `
  }

  private renderTutorial(): void {
    if (!this.tutorialEl) return
    const pages = tutorialPages()
    const page = pages[this.tutorialPage]
    this.tutorialEl.innerHTML = `
      <div class="paper-card tutorial-card">
        <div class="tutorial-header">
          <h2>怎么玩</h2>
          <button type="button" class="icon-btn" data-action="close" aria-label="关闭">${icon('close', 20)}</button>
        </div>
        <div class="tutorial-pages">
          <div class="tutorial-page">
            <div class="tutorial-page__art" style="--page-accent:${page.accent}">${icon(page.icon, 68)}</div>
            <div>
              <h3>${page.title}</h3>
              <p>${page.body}</p>
            </div>
          </div>
        </div>
        <div class="tutorial-dots">
          ${pages.map((_, index) => `<i class="${index === this.tutorialPage ? 'is-on' : ''}"></i>`).join('')}
        </div>
        <div class="tutorial-actions">
          <button type="button" class="btn btn--sm" data-action="prev" ${this.tutorialPage === 0 ? 'disabled' : ''}>${icon('arrowLeft', 16)} 上一步</button>
          ${this.tutorialPage === pages.length - 1
            ? `<button type="button" class="btn btn--primary btn--sm" data-action="done">知道啦 ${icon('check', 16)}</button>`
            : `<button type="button" class="btn btn--primary btn--sm" data-action="next">下一步 ${icon('chevronRight', 16)}</button>`}
        </div>
      </div>
    `
    this.tutorialEl.querySelector('[data-action="close"]')?.addEventListener('click', () => this.closeTutorial())
    this.tutorialEl.querySelector('[data-action="prev"]')?.addEventListener('click', () => {
      this.tutorialPage = Math.max(0, this.tutorialPage - 1)
      this.renderTutorial()
    })
    this.tutorialEl.querySelector('[data-action="next"]')?.addEventListener('click', () => {
      this.tutorialPage = Math.min(pages.length - 1, this.tutorialPage + 1)
      this.renderTutorial()
    })
    this.tutorialEl.querySelector('[data-action="done"]')?.addEventListener('click', () => this.closeTutorial())
  }

  private closeTutorial(): void {
    this.markTutorialSeen()
    this.tutorialEl?.remove()
    this.tutorialEl = null
    const close = this.tutorialClose
    this.tutorialClose = null
    close?.()
  }

  private markTutorialSeen(): void {
    try {
      localStorage.setItem(TUTORIAL_KEY, '1')
    } catch {
      // 忽略
    }
  }

  onPauseRequested: (() => void) | null = null

  private mutedIcon(): string {
    return this.settings.muted ? icon('volumeOff', 16) : icon('volume', 16)
  }

  private hideMobileControls(): void {
    this.mobileControls?.dispose()
    this.mobileControls = null
  }

  private clearRoot(): void {
    this.hideMobileControls()
    this.root.innerHTML = ''
    this.menuEl = null
    this.hudEl = null
    this.pauseEl = null
    this.tutorialEl = null
    this.clickPrompt.classList.add('hidden')
    this.lastStatusKey = ''
    this.lastHint = ''
  }
}

function qualityLabel(quality: QualityLevel): string {
  return quality === 'high' ? '高' : quality === 'medium' ? '中' : '低'
}

function resultCopy(
  outcome: MatchOutcome,
  stats: MatchStats
): { title: string; message: string } {
  if (outcome === 'hider-win') {
    return { title: '成功逃脱！', message: '时间到，你成功坚持了 5 分钟。' }
  }
  if (outcome === 'hider-lose') {
    return { title: '这次被抓住了……', message: '别灰心，下一次一定能躲得更好。' }
  }
  if (outcome === 'ghost-win') {
    return { title: '全部抓住了！', message: `你把 ${stats.jails + stats.eliminated} 位逃离者关进了关押区。` }
  }
  return { title: '时间到！', message: `你抓住了 ${stats.jails + stats.eliminated} / 5 位逃离者，下一次会更快。` }
}

function confettiHtml(): string {
  const colors = ['#f6c85f', '#ff9ebb', '#8fe2ce', '#b8a7f2', '#fff6e7']
  let html = '<div class="confetti">'
  for (let i = 0; i < 28; i++) {
    const left = Math.round(Math.random() * 100)
    const drift = Math.round((Math.random() - 0.5) * 140)
    const delay = (Math.random() * 1.8).toFixed(2)
    const duration = (2.6 + Math.random() * 1.8).toFixed(2)
    html += `<i style="left:${left}%;--confetti-color:${colors[i % colors.length]};--confetti-drift:${drift}px;--confetti-delay:${delay}s;--confetti-duration:${duration}s"></i>`
  }
  html += '</div>'
  return html
}

function tutorialPages(): Array<{ icon: 'runner' | 'heart' | 'map'; title: string; body: string; accent: string }> {
  return [
    {
      icon: 'runner',
      title: '移动与视角',
      body: '电脑端用 WASD 移动、Shift 冲刺、鼠标转动视角；手机端用左下摇杆移动，右半屏滑动看四周。前进永远是朝镜头看向的方向。',
      accent: '#8fe2ce'
    },
    {
      icon: 'heart',
      title: '星星、关押与救援',
      body: '被鬼碰到 3 次会关进关押区，头顶的星星就是当前被抓次数。自由的逃离者碰到被关押者 5 秒就能救出；累计被关押 3 次才会出局。',
      accent: '#ff9ebb'
    },
    {
      icon: 'map',
      title: '角色与地图',
      body: '每局固定 1 个鬼和 5 个逃离者。三张地图分别是火车站、游乐园和庄园，默认随机。躲进灌木、行李或摊位后蹲下，会更难被发现。',
      accent: '#f6c85f'
    }
  ]
}
