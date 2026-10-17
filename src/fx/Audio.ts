import type { SoundName } from '../core/Session'

export type MusicTheme = 'menu' | 'station' | 'park' | 'manor'

interface ThemeConfig {
  root: number
  scale: number[]
  pattern: number[]
  wave: OscillatorType
  stepSeconds: number
}

const THEMES: Record<MusicTheme, ThemeConfig> = {
  menu: {
    root: 261.63,
    scale: [0, 2, 4, 7, 9, 12, 14, 16],
    pattern: [0, 2, 4, 3, 5, 4, 2, 0, 1, 3, 5, 4, 2, 0, 2, 3, 4, 5, 7, 5, 4, 2, 0, 1, 2, 3, 4, 2, 0, -1, 0, 2],
    wave: 'sine',
    stepSeconds: 0.42
  },
  station: {
    root: 349.23,
    scale: [0, 2, 4, 7, 9, 12, 14, 16],
    pattern: [0, 4, 2, 5, 3, 7, 5, 3, 1, 5, 3, 6, 4, 2, 0, 2, 3, 5, 7, 6, 4, 3, 1, 3, 2, 4, 5, 3, 1, 0, 2, 4],
    wave: 'triangle',
    stepSeconds: 0.44
  },
  park: {
    root: 392,
    scale: [0, 2, 4, 7, 9, 12, 14, 16],
    pattern: [0, 2, 5, 4, 7, 5, 3, 2, 0, 3, 5, 7, 6, 4, 2, 1, 2, 5, 4, 7, 5, 3, 2, 0, 1, 3, 5, 4, 2, 0, 2, 4],
    wave: 'sine',
    stepSeconds: 0.38
  },
  manor: {
    root: 220,
    scale: [0, 3, 5, 7, 10, 12, 15, 17],
    pattern: [0, 2, 4, 3, 1, 4, 2, 0, 3, 5, 4, 2, 1, 3, 0, 2, 4, 3, 5, 4, 2, 1, 3, 0, 2, 4, 3, 1, 0, 2, 1, 3],
    wave: 'sine',
    stepSeconds: 0.48
  }
}

const MUTE_KEY = 'miaomiao.muted'

/**
 * 全部程序化合成：音乐盒旋律、环境音、UI/抓捕/救援音效与心跳。
 * 首次用户手势后创建 AudioContext。
 */
export class AudioManager {
  private ctx: AudioContext | null = null
  private master: GainNode | null = null
  private musicBus: GainNode | null = null
  private sfxBus: GainNode | null = null
  private reverbSend: GainNode | null = null
  private noiseBuffer: AudioBuffer | null = null
  private theme: MusicTheme = 'menu'
  private muted = false
  private volume = 0.78
  private step = 0
  private nextNoteTime = 0
  private musicTimer: number | null = null
  private heartbeat = 0
  private heartbeatTimer = 0
  private started = false

  constructor() {
    try {
      this.muted = localStorage.getItem(MUTE_KEY) === '1'
    } catch {
      this.muted = false
    }
  }

  get isMuted(): boolean {
    return this.muted
  }

  async start(theme: MusicTheme): Promise<void> {
    if (this.started) {
      this.setTheme(theme)
      this.startScheduler()
      await this.ctx?.resume()
      return
    }
    const AudioCtor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
    if (!AudioCtor) return
    const ctx = new AudioCtor()
    this.ctx = ctx
    this.started = true

    const master = ctx.createGain()
    master.gain.value = this.muted ? 0 : this.volume
    master.connect(ctx.destination)
    this.master = master

    const musicBus = ctx.createGain()
    musicBus.gain.value = 0.24
    musicBus.connect(master)
    this.musicBus = musicBus

    const sfxBus = ctx.createGain()
    sfxBus.gain.value = 0.55
    sfxBus.connect(master)
    this.sfxBus = sfxBus

    const convolver = ctx.createConvolver()
    convolver.buffer = this.createImpulse(ctx, 1.9, 2.8)
    const reverbSend = ctx.createGain()
    reverbSend.gain.value = 0.16
    reverbSend.connect(convolver)
    convolver.connect(master)
    this.reverbSend = reverbSend

    this.noiseBuffer = this.createNoise(ctx)
    await ctx.resume()
    this.setTheme(theme)
    this.startScheduler()
  }

  setTheme(theme: MusicTheme): void {
    if (this.theme === theme && this.musicTimer !== null) return
    this.theme = theme
    this.step = 0
    if (this.ctx) this.nextNoteTime = this.ctx.currentTime + 0.12
  }

  setMuted(muted: boolean): void {
    this.muted = muted
    try {
      localStorage.setItem(MUTE_KEY, muted ? '1' : '0')
    } catch {
      // 忽略
    }
    if (this.ctx && this.master) {
      this.master.gain.setTargetAtTime(muted ? 0 : this.volume, this.ctx.currentTime, 0.06)
    }
  }

  setPaused(paused: boolean): void {
    if (!this.ctx) return
    if (paused) {
      void this.ctx.suspend()
    } else {
      void this.ctx.resume()
    }
  }

  stopMusic(): void {
    if (this.musicTimer !== null) {
      window.clearInterval(this.musicTimer)
      this.musicTimer = null
    }
  }

  setHeartbeat(value: number): void {
    this.heartbeat = Math.max(0, Math.min(1, value))
  }

  update(dt: number): void {
    if (!this.ctx || this.ctx.state !== 'running' || this.muted) return
    if (this.heartbeat < 0.06) {
      this.heartbeatTimer = 0
      return
    }
    this.heartbeatTimer -= dt
    if (this.heartbeatTimer <= 0) {
      this.heartbeatTimer = 1.25 - this.heartbeat * 0.82
      const now = this.ctx.currentTime
      this.thump(now, 58, 0.16)
      this.thump(now + 0.17, 72, 0.12)
    }
  }

  play(name: SoundName): void {
    if (!this.ctx || !this.sfxBus || this.muted) return
    const now = this.ctx.currentTime + 0.01
    switch (name) {
      case 'contact':
        this.chime(now, 880, 0.14, 0.16, 'triangle')
        this.chime(now + 0.03, 1320, 0.18, 0.12, 'sine')
        this.noise(now, 0.08, 0.08, 900)
        break
      case 'jail':
        this.chime(now, 660, 0.2, 0.14, 'sine')
        this.chime(now + 0.12, 494, 0.24, 0.12, 'sine')
        this.chime(now + 0.24, 330, 0.32, 0.1, 'sine')
        break
      case 'rescue':
        this.chime(now, 523, 0.18, 0.12, 'triangle')
        this.chime(now + 0.1, 659, 0.2, 0.12, 'triangle')
        this.chime(now + 0.2, 784, 0.28, 0.13, 'triangle')
        break
      case 'eliminate':
        this.chime(now, 523, 0.22, 0.11, 'sine')
        this.chime(now + 0.14, 392, 0.28, 0.1, 'sine')
        this.chime(now + 0.28, 262, 0.4, 0.09, 'sine')
        break
      case 'lunge':
        this.noise(now, 0.28, 0.16, 500)
        break
      case 'call':
        this.chime(now, 659, 0.24, 0.13, 'triangle')
        this.chime(now + 0.16, 880, 0.32, 0.11, 'triangle')
        break
      case 'win':
        for (const [index, note] of [523, 659, 784, 1047].entries()) {
          this.chime(now + index * 0.13, note, 0.45, 0.12, 'triangle')
        }
        break
      case 'lose':
        for (const [index, note] of [392, 330, 262].entries()) {
          this.chime(now + index * 0.18, note, 0.5, 0.1, 'sine')
        }
        break
      case 'step':
        this.noise(now, 0.055, 0.045, 280 + Math.random() * 160)
        break
    }
  }

  dispose(): void {
    this.stopMusic()
    void this.ctx?.close()
    this.ctx = null
  }

  private startScheduler(): void {
    if (this.musicTimer !== null) return
    this.musicTimer = window.setInterval(() => this.scheduleMusic(), 120)
  }

  private scheduleMusic(): void {
    if (!this.ctx || !this.musicBus) return
    const config = THEMES[this.theme]
    const horizon = this.ctx.currentTime + 0.45
    while (this.nextNoteTime < horizon) {
      this.scheduleStep(config, this.step, this.nextNoteTime)
      this.nextNoteTime += config.stepSeconds
      this.step = (this.step + 1) % config.pattern.length
    }
  }

  private scheduleStep(config: ThemeConfig, step: number, time: number): void {
    if (!this.musicBus) return
    const note = config.pattern[step]
    if (note >= 0) {
      const semitone = config.scale[note % config.scale.length]
      const octave = Math.floor(note / config.scale.length) * 12
      const frequency = config.root * Math.pow(2, (semitone + octave) / 12)
      this.chime(time, frequency, config.stepSeconds * 1.6, 0.055, config.wave, this.musicBus, true)
    }

    if (step % 8 === 0) {
      const bass = config.root / 2
      this.chime(time, bass, config.stepSeconds * 6, 0.05, 'sine', this.musicBus, true)
    }

    if (step % 16 === 0) {
      const chord = [0, 4, 7]
      for (const semitone of chord) {
        this.chime(
          time,
          config.root * Math.pow(2, semitone / 12),
          config.stepSeconds * 10,
          0.022,
          'sine',
          this.musicBus,
          true
        )
      }
    }
  }

  private chime(
    time: number,
    frequency: number,
    duration: number,
    gainValue: number,
    type: OscillatorType,
    destination?: AudioNode,
    reverb = false
  ): void {
    if (!this.ctx || !this.sfxBus || !this.musicBus) return
    const destinationNode = destination ?? this.sfxBus
    const osc = this.ctx.createOscillator()
    osc.type = type
    osc.frequency.setValueAtTime(frequency, time)
    const env = this.ctx.createGain()
    env.gain.setValueAtTime(0, time)
    env.gain.linearRampToValueAtTime(gainValue, time + 0.015)
    env.gain.exponentialRampToValueAtTime(0.0001, time + duration)
    osc.connect(env)
    env.connect(destinationNode)
    if (reverb && this.reverbSend) env.connect(this.reverbSend)
    osc.start(time)
    osc.stop(time + duration + 0.05)
  }

  private thump(time: number, frequency: number, duration: number): void {
    if (!this.ctx || !this.sfxBus) return
    const osc = this.ctx.createOscillator()
    osc.type = 'sine'
    osc.frequency.setValueAtTime(frequency, time)
    const env = this.ctx.createGain()
    env.gain.setValueAtTime(0, time)
    env.gain.linearRampToValueAtTime(0.18, time + 0.015)
    env.gain.exponentialRampToValueAtTime(0.0001, time + duration)
    osc.connect(env)
    env.connect(this.sfxBus)
    osc.start(time)
    osc.stop(time + duration + 0.02)
  }

  private noise(time: number, duration: number, gainValue: number, frequency: number): void {
    if (!this.ctx || !this.sfxBus || !this.noiseBuffer) return
    const source = this.ctx.createBufferSource()
    source.buffer = this.noiseBuffer
    const filter = this.ctx.createBiquadFilter()
    filter.type = 'bandpass'
    filter.frequency.value = frequency
    filter.Q.value = 0.8
    const env = this.ctx.createGain()
    env.gain.setValueAtTime(gainValue, time)
    env.gain.exponentialRampToValueAtTime(0.0001, time + duration)
    source.connect(filter)
    filter.connect(env)
    env.connect(this.sfxBus)
    source.start(time)
    source.stop(time + duration + 0.03)
  }

  private createNoise(ctx: AudioContext): AudioBuffer {
    const buffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.6), ctx.sampleRate)
    const data = buffer.getChannelData(0)
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1
    return buffer
  }

  private createImpulse(ctx: AudioContext, duration: number, decay: number): AudioBuffer {
    const length = Math.floor(ctx.sampleRate * duration)
    const buffer = ctx.createBuffer(2, length, ctx.sampleRate)
    for (let channel = 0; channel < 2; channel++) {
      const data = buffer.getChannelData(channel)
      for (let i = 0; i < length; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, decay)
      }
    }
    return buffer
  }
}
