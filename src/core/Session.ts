import * as THREE from 'three'
import { RULES } from '../config/rules'
import type { GameMode, MatchStats, QualityLevel } from '../config/types'
import type { MapConfig } from '../config/maps/types'
import type { HiderRecord, MatchEvent, MatchOutcome } from '../gameplay/events'
import { MatchRules } from '../gameplay/MatchRules'
import { GhostAI } from '../ai/GhostAI'
import { HiderAI } from '../ai/HiderAI'
import { Perception } from '../ai/Perception'
import { Character } from '../entities/Character'
import { PlayerController } from '../entities/PlayerController'
import { CameraRig } from '../fx/CameraRig'
import { Particles } from '../fx/Particles'
import { World } from '../scene/World'
import { DisposalBag, type SharedAssets } from './Disposal'
import type { Input } from './Input'
import { clamp, distance2D } from '../utils/math'
import type { HiderState } from '../config/types'

export type SoundName =
  | 'contact'
  | 'jail'
  | 'rescue'
  | 'eliminate'
  | 'lunge'
  | 'call'
  | 'win'
  | 'lose'
  | 'step'

export interface SessionCallbacks {
  onEnd: (outcome: MatchOutcome, stats: MatchStats, mode: GameMode) => void
  onToast: (message: string, tone?: 'gold' | 'pink') => void
  onFlash?: () => void
  onHeartbeat?: (value: number) => void
  onSound?: (name: SoundName) => void
}

export interface HudHider {
  id: number
  name: string
  state: HiderState
  contactCount: number
  jailCount: number
  isPlayer: boolean
}

export interface HudState {
  mode: GameMode
  countdown: number
  remaining: number
  isGhost: boolean
  playerIsJailed: boolean
  playerIsEliminated: boolean
  playerContactCount: number
  playerJailCount: number
  playerName: string
  hiders: HudHider[]
  stamina: number
  lungeCooldown: number
  ghostProximity: number
  rescueProgress: number
  rescueName: string
  hint: string
  stats: MatchStats
}

export interface SessionOptions {
  mode: GameMode
  map: MapConfig
  quality: QualityLevel
  assets: SharedAssets
  input: Input
  callbacks: SessionCallbacks
}

/**
 * 单局：地图、规则、玩家、AI、相机、粒子的生命周期容器。
 * App 只负责状态切换与渲染；所有玩法推进都在这里。
 */
export class Session {
  readonly mode: GameMode
  readonly map: MapConfig

  private readonly scene = new THREE.Scene()
  private readonly camera: THREE.PerspectiveCamera
  private readonly rules: MatchRules
  private readonly world: World
  private readonly bag = new DisposalBag()
  private readonly input: Input
  private readonly callbacks: SessionCallbacks
  private readonly playerCharacter: Character
  private readonly playerController: PlayerController
  private readonly cameraRig: CameraRig
  private readonly particles: Particles
  private readonly perception = new Perception()
  private readonly ghostAI: GhostAI | null = null
  private readonly hiderAIs: HiderAI[] = []
  private readonly hiderCharacters = new Map<number, Character>()

  private visualTime = 0
  private ended = false
  private outcome: MatchOutcome | null = null
  private noiseTimer = 0
  private rescueNoiseTimer = 0
  private footstepTimer = 0

  constructor(options: SessionOptions) {
    this.mode = options.mode
    this.map = options.map
    this.input = options.input
    this.callbacks = options.callbacks

    this.world = new World(this.scene, this.map, options.quality, options.assets, this.bag)

    this.camera = new THREE.PerspectiveCamera(
      RULES.camera.normalFov,
      window.innerWidth / Math.max(1, window.innerHeight),
      0.1,
      190
    )
    this.scene.add(this.camera)
    const cameraFill = new THREE.PointLight(0xffe9d6, 0.58, 12, 2)
    cameraFill.position.set(0, 0.4, 1.2)
    cameraFill.castShadow = false
    this.camera.add(cameraFill)

    this.rules = new MatchRules({
      mode: this.mode,
      hiderSpawns: this.map.spawns.hiders,
      names:
        this.mode === 'hider'
          ? ['苗苗', '队友 1', '队友 2', '队友 3', '队友 4']
          : ['逃离者 1', '逃离者 2', '逃离者 3', '逃离者 4', '逃离者 5']
    })

    if (this.mode === 'hider') {
      const record = this.rules.hiders[0]
      this.playerCharacter = new Character(options.assets, 'hider', 0, 0, record)
      this.playerCharacter.setPosition(this.map.spawns.hiders[0].x, this.map.spawns.hiders[0].z)
    } else {
      this.playerCharacter = new Character(options.assets, 'ghost', -1, 0, null)
      this.playerCharacter.setPosition(this.map.spawns.ghost.x, this.map.spawns.ghost.z)
    }
    this.scene.add(this.playerCharacter.model.group)

    this.cameraRig = new CameraRig(this.camera, this.world.collision)
    const initialYaw = this.mode === 'ghost' && this.map.id === 'park' ? 0 : Math.PI
    this.cameraRig.setYaw(initialYaw)
    this.playerCharacter.setFacingYaw(initialYaw)
    this.playerController = new PlayerController(
      this.world,
      this.playerCharacter,
      this.cameraRig,
      this.input,
      this.mode === 'ghost'
    )
    this.playerController.onCall = () => {
      this.ghostAI?.addNoise(
        this.playerCharacter.x,
        this.playerCharacter.z,
        RULES.perception.hearing.call,
        'call'
      )
      this.callbacks.onSound?.('call')
      this.callbacks.onToast('你向队友呼救了！', 'pink')
    }

    if (this.mode === 'hider') {
      this.ghostAI = new GhostAI(options.assets, this.world)
      this.scene.add(this.ghostAI.character.model.group)
      this.hiderCharacters.set(0, this.playerCharacter)

      for (let i = 1; i < this.rules.hiders.length; i++) {
        const record = this.rules.hiders[i]
        const ai = new HiderAI(options.assets, this.world, record)
        ai.character.setPosition(this.map.spawns.hiders[i].x, this.map.spawns.hiders[i].z)
        this.hiderAIs.push(ai)
        this.hiderCharacters.set(record.id, ai.character)
        this.scene.add(ai.character.model.group)
      }
    } else {
      for (let i = 0; i < this.rules.hiders.length; i++) {
        const record = this.rules.hiders[i]
        const ai = new HiderAI(options.assets, this.world, record)
        ai.character.setPosition(this.map.spawns.hiders[i].x, this.map.spawns.hiders[i].z)
        this.hiderAIs.push(ai)
        this.hiderCharacters.set(record.id, ai.character)
        this.scene.add(ai.character.model.group)
      }
    }

    this.particles = new Particles(this.scene, options.assets, options.quality === 'low' ? 90 : 150)
    this.cameraRig.setReducedMotion(
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )
  }

  get isEnded(): boolean {
    return this.ended
  }

  get currentOutcome(): MatchOutcome | null {
    return this.outcome
  }

  getScene(): THREE.Scene {
    return this.scene
  }

  getCamera(): THREE.PerspectiveCamera {
    return this.camera
  }

  getRules(): MatchRules {
    return this.rules
  }

  getWorld(): World {
    return this.world
  }

  getPlayerController(): PlayerController {
    return this.playerController
  }

  getPlayerCharacter(): Character {
    return this.playerCharacter
  }

  getGhostPosition(): { x: number; z: number; yaw: number } | null {
    if (!this.ghostAI) return null
    return {
      x: this.ghostAI.x,
      z: this.ghostAI.z,
      yaw: this.ghostAI.character.facingYaw
    }
  }

  teleportGhost(x: number, z: number): void {
    this.ghostAI?.setPosition(x, z)
  }

  setCameraYaw(yaw: number): void {
    this.cameraRig.setYaw(yaw)
  }

  getCameraLook(): { yaw: number; pitch: number } {
    return { yaw: this.cameraRig.yaw, pitch: this.cameraRig.pitch }
  }

  applyLookDelta(dx: number, dy: number): void {
    this.cameraRig.applyLook(dx, dy)
  }

  getAIStates(): Array<{
    id: number
    state: string
    crouching: boolean
    hasPath: boolean
    target: { x: number; z: number } | null
    x: number
    z: number
  }> {
    return this.hiderAIs.map((ai) => ({
      id: ai.record.id,
      state: ai.currentState,
      crouching: ai.isCrouching,
      hasPath: ai.hasPath,
      target: ai.pathTarget,
      x: ai.x,
      z: ai.z
    }))
  }

  resize(width: number, height: number): void {
    this.camera.aspect = width / Math.max(1, height)
    this.camera.updateProjectionMatrix()
  }

  update(dt: number): void {
    if (this.ended) return
    const step = dt
    this.visualTime += step

    this.rules.tick(step)

    this.playerController.update(step, this.visualTime)

    const ghostX = this.mode === 'ghost' ? this.playerCharacter.x : this.ghostAI?.x ?? 0
    const ghostZ = this.mode === 'ghost' ? this.playerCharacter.z : this.ghostAI?.z ?? 0
    const rescueAssignments = this.assignRescueTargets()

    for (const ai of this.hiderAIs) {
      const ghostVisible = this.perception.canHiderSeeGhost(
        ai.x,
        ai.z,
        ai.character.facingYaw,
        ghostX,
        ghostZ,
        this.world.collision
      )
      const ghostBusy =
        this.ghostAI !== null &&
        this.ghostAI.chasingId !== -1 &&
        this.ghostAI.chasingId !== ai.record.id
      ai.update(step, this.visualTime, {
        ghostX,
        ghostZ,
        ghostVisible,
        ghostBusy,
        rescueTarget: rescueAssignments.get(ai.record.id) ?? null
      })
    }

    if (this.ghostAI) {
      this.ghostAI.update(step, this.visualTime, this.buildGhostTargets())
    }

    this.rules.updateRescue(step)
    this.resolveContacts()
    this.emitMovementNoise(step)
    this.emitFootsteps(step)
    this.processEvents()

    this.particles.update(step)
    this.world.update(step, this.visualTime)

    this.callbacks.onHeartbeat?.(this.getGhostProximity())
  }

  getHudState(): HudState {
    const player = this.rules.playerHider
    const rescue = this.getRescueInfo()
    return {
      mode: this.mode,
      countdown: this.rules.countdown,
      remaining: this.rules.remaining,
      isGhost: this.mode === 'ghost',
      playerIsJailed: player?.state === 'jailed',
      playerIsEliminated: player?.state === 'eliminated',
      playerContactCount: player?.contactCount ?? 0,
      playerJailCount: player?.jailCount ?? 0,
      playerName: player?.name ?? '鬼',
      hiders: this.rules.hiders.map((hider) => ({
        id: hider.id,
        name: hider.name,
        state: hider.state,
        contactCount: hider.contactCount,
        jailCount: hider.jailCount,
        isPlayer: hider.isPlayer
      })),
      stamina: this.playerController.staminaRatio,
      lungeCooldown: this.playerController.lungeCooldownRatio,
      ghostProximity: this.getGhostProximity(),
      rescueProgress: rescue.progress,
      rescueName: rescue.name,
      hint: this.getHint(),
      stats: { ...this.rules.stats }
    }
  }

  dispose(): void {
    this.ghostAI?.dispose()
    for (const ai of this.hiderAIs) ai.dispose()
    this.playerCharacter.dispose()
    this.particles.dispose()
    this.world.dispose()
    this.bag.dispose()
    this.scene.clear()
  }

  private buildGhostTargets() {
    const targets: Array<{ character: Character; crouching: boolean; hidden: boolean }> = []
    for (const record of this.rules.hiders) {
      const character = this.hiderCharacters.get(record.id)
      if (!character) continue
      const isPlayer = record.id === 0 && this.mode === 'hider'
      const crouching = isPlayer ? this.playerController.isCrouching : this.findHiderAI(record.id)?.isCrouching ?? false
      const hidden = crouching && this.nearHidingSpot(character.x, character.z)
      targets.push({ character, crouching, hidden })
    }
    return targets
  }

  private assignRescueTargets(): Map<number, { x: number; z: number; id: number }> {
    const assignments = new Map<number, { x: number; z: number; id: number }>()
    const jailed = this.rules.hiders.filter((hider) => hider.state === 'jailed')
    if (jailed.length === 0) return assignments

    const rescuerCounts = new Map<number, number>()
    const freeAIs = this.hiderAIs.filter((ai) => ai.record.state === 'free')
    const player = this.rules.playerHider
    let guardianAssigned = false

    for (const ai of freeAIs) {
      let target: HiderRecord | null = null
      if (player?.state === 'jailed' && !guardianAssigned) {
        target = player
        guardianAssigned = true
      } else {
        let bestDistance = Infinity
        for (const jailedRecord of jailed) {
          if ((rescuerCounts.get(jailedRecord.id) ?? 0) >= 2) continue
          const distance = distance2D(ai.x, ai.z, jailedRecord.x, jailedRecord.z)
          if (distance < bestDistance) {
            bestDistance = distance
            target = jailedRecord
          }
        }
      }

      if (target) {
        assignments.set(ai.record.id, { x: target.x, z: target.z, id: target.id })
        rescuerCounts.set(target.id, (rescuerCounts.get(target.id) ?? 0) + 1)
      }
    }

    return assignments
  }

  private resolveContacts(): void {
    if (this.mode === 'hider' && this.ghostAI) {
      const reach = this.ghostAI.isLunging
        ? RULES.lungeContactDistance
        : RULES.contactDistance
      for (const record of this.rules.hiders) {
        if (!this.rules.canContact(record.id)) continue
        const character = this.hiderCharacters.get(record.id)
        if (!character) continue
        if (distance2D(this.ghostAI.x, this.ghostAI.z, character.x, character.z) > reach) {
          continue
        }
        const event = this.rules.tryContact(record.id, false)
        if (event) {
          this.ghostAI.notifyHit()
          this.onContactVisual(record.isPlayer)
          break
        }
      }
      return
    }

    const reach = this.playerController.isLunging
      ? RULES.lungeContactDistance
      : RULES.contactDistance
    for (const ai of this.hiderAIs) {
      const record = ai.record
      if (!this.rules.canContact(record.id)) continue
      if (distance2D(this.playerCharacter.x, this.playerCharacter.z, ai.x, ai.z) > reach) {
        continue
      }
      const event = this.rules.tryContact(record.id, true)
      if (event) {
        this.onContactVisual(false)
        break
      }
    }
  }

  private onContactVisual(playerInvolved: boolean): void {
    this.cameraRig.addShake(playerInvolved ? 0.5 : 0.18)
    if (playerInvolved) {
      this.callbacks.onFlash?.()
      this.callbacks.onHeartbeat?.(1)
    }
    this.callbacks.onSound?.('contact')
  }

  private processEvents(): void {
    const events = this.rules.drainEvents()
    for (const event of events) {
      this.handleEvent(event)
    }
  }

  private handleEvent(event: MatchEvent): void {
    if (event.type === 'contact') {
      const character = this.hiderCharacters.get(event.hiderId)
      if (character) {
        this.particles.burst(character.x, 1.5, character.z, 0xf6c85f, 'star', 8, {
          speed: 2.1,
          size: 0.2,
          life: 0.65
        })
      }
      return
    }

    if (event.type === 'jailed') {
      const record = this.rules.hiders.find((hider) => hider.id === event.hiderId)
      const character = this.hiderCharacters.get(event.hiderId)
      const slot = this.map.jail.slots[event.slot % this.map.jail.slots.length]
      if (record && character) {
        character.setPosition(slot.x, slot.z)
        character.playHit()
        this.particles.burst(slot.x, 1.1, slot.z, 0xff9ebb, 'bubble', 12, {
          speed: 1.6,
          size: 0.26,
          life: 1.1,
          gravity: -0.1
        })
        this.callbacks.onSound?.('jail')
        if (record.isPlayer) {
          this.callbacks.onFlash?.()
          this.cameraRig.addShake(0.6)
          this.callbacks.onToast('被关进关押区了！等待队友来救你', 'pink')
          this.playerController.resetTransient()
        } else {
          this.callbacks.onToast(`${record.name} 被关押了`, 'pink')
        }
      }
      this.ghostAI?.notifyJail(this.map.jail.center.x, this.map.jail.center.z)
      return
    }

    if (event.type === 'rescued') {
      const record = this.rules.hiders.find((hider) => hider.id === event.hiderId)
      const character = this.hiderCharacters.get(event.hiderId)
      if (record && character) {
        const release = this.map.jail.releasePoint
        character.setPosition(release.x, release.z)
        this.particles.burst(release.x, 1.2, release.z, 0x8fe2ce, 'heart', 14, {
          speed: 1.9,
          size: 0.22,
          life: 1.0,
          gravity: -0.15
        })
        this.callbacks.onSound?.('rescue')
        if (record.isPlayer) {
          this.playerController.resetTransient()
          this.callbacks.onToast('你被救出来了！', 'gold')
        } else {
          this.callbacks.onToast(`${record.name} 被救出来了`, 'gold')
        }
      }
      return
    }

    if (event.type === 'eliminated') {
      const record = this.rules.hiders.find((hider) => hider.id === event.hiderId)
      const character = this.hiderCharacters.get(event.hiderId)
      if (record && character) {
        this.particles.burst(character.x, 1.4, character.z, 0xb8a7f2, 'star', 16, {
          speed: 2.4,
          size: 0.24,
          life: 1.1,
          gravity: 0.2
        })
        this.callbacks.onSound?.('eliminate')
        if (record.isPlayer) {
          this.callbacks.onFlash?.()
          this.callbacks.onToast('你出局了……', 'pink')
        } else {
          this.callbacks.onToast(`${record.name} 出局了`, 'pink')
        }
      }
      return
    }

    if (event.type === 'match-end') {
      this.ended = true
      this.outcome = event.outcome
      this.callbacks.onSound?.(
        event.outcome === 'hider-win' || event.outcome === 'ghost-win' ? 'win' : 'lose'
      )
      this.callbacks.onEnd(event.outcome, { ...this.rules.stats }, event.mode)
    }
  }

  private emitMovementNoise(dt: number): void {
    if (!this.ghostAI) return
    this.noiseTimer -= dt
    if (this.playerController.isMoving && this.noiseTimer <= 0) {
      const sprinting = this.playerController.isSprinting
      const radius = sprinting
        ? RULES.perception.hearing.sprint
        : RULES.perception.hearing.walk
      this.ghostAI.addNoise(
        this.playerCharacter.x,
        this.playerCharacter.z,
        radius,
        sprinting ? 'sprint' : 'walk'
      )
      this.noiseTimer = sprinting ? 0.45 : 0.75
    }

    this.rescueNoiseTimer -= dt
    if (this.rescueNoiseTimer <= 0) {
      for (const record of this.rules.hiders) {
        if (record.state !== 'jailed' || record.rescueProgress <= 0) continue
        this.ghostAI.addNoise(record.x, record.z, RULES.perception.hearing.rescue, 'rescue')
        this.rescueNoiseTimer = 0.8
        break
      }
    }
  }

  private emitFootsteps(dt: number): void {
    if (!this.playerController.isMoving || this.playerCharacter.isJailed) {
      this.footstepTimer = 0
      return
    }
    this.footstepTimer -= dt
    if (this.footstepTimer > 0) return
    const sprinting = this.playerController.isSprinting
    this.footstepTimer = sprinting ? 0.22 : 0.36
    this.particles.burst(
      this.playerCharacter.x + (Math.random() - 0.5) * 0.25,
      0.08,
      this.playerCharacter.z + (Math.random() - 0.5) * 0.25,
      0xe6d9c8,
      'bubble',
      sprinting ? 4 : 2,
      { speed: 0.45, size: 0.13, life: 0.4, gravity: 0.25 }
    )
    this.callbacks.onSound?.('step')
  }

  private getGhostProximity(): number {
    if (this.mode === 'ghost' || !this.ghostAI) return 0
    const distance = distance2D(
      this.playerCharacter.x,
      this.playerCharacter.z,
      this.ghostAI.x,
      this.ghostAI.z
    )
    return clamp(1 - distance / RULES.perception.terrorRadius, 0, 1)
  }

  private getHint(): string {
    if (this.rules.countdown > 0) return '准备……'
    if (this.rules.playerHider?.state === 'eliminated') return ''
    if (this.rules.playerHider?.state === 'jailed') {
      if (this.rules.playerHider.rescueProgress > 0) return '队友正在救你，坚持住'
      return this.input.isTouchDevice ? '点击呼救按钮向队友求助' : '按 F 向队友呼救'
    }

    if (this.mode === 'ghost') {
      if (this.playerController.lungeCooldownRatio <= 0) {
        return this.input.isTouchDevice ? '点击右下角扑击按钮' : '空格 / 扑击按钮：扑击'
      }
      return ''
    }

    const rescue = this.getRescueInfo()
    if (rescue.progress > 0) return '保持触碰 5 秒即可救援'
    if (this.nearHidingSpot(this.playerCharacter.x, this.playerCharacter.z)) {
      return this.input.isTouchDevice ? '站定片刻可以蹲下藏好' : '按住 C 蹲下藏好'
    }
    if (this.getGhostProximity() > 0.55) return '鬼就在附近，快跑！'
    return ''
  }

  private getRescueInfo(): { progress: number; name: string } {
    const player = this.rules.playerHider
    if (player?.state === 'jailed') {
      return {
        progress: clamp(player.rescueProgress / RULES.rescueSeconds, 0, 1),
        name: player.name
      }
    }

    let best: HiderRecord | null = null
    let bestDistance = Infinity
    for (const record of this.rules.hiders) {
      if (record.state !== 'jailed') continue
      const distance = distance2D(
        this.playerCharacter.x,
        this.playerCharacter.z,
        record.x,
        record.z
      )
      if (distance < bestDistance && distance < 2.6) {
        bestDistance = distance
        best = record
      }
    }
    if (!best) return { progress: 0, name: '' }
    return {
      progress: clamp(best.rescueProgress / RULES.rescueSeconds, 0, 1),
      name: best.name
    }
  }

  private nearHidingSpot(x: number, z: number): boolean {
    for (const spot of this.world.hidingSpots) {
      if (distance2D(x, z, spot.x, spot.z) < 1.5) return true
    }
    return false
  }

  private findHiderAI(id: number): HiderAI | undefined {
    return this.hiderAIs.find((ai) => ai.record.id === id)
  }
}
