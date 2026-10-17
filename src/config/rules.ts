/**
 * 所有玩法数值的唯一来源。
 * 规则语义由 gameplay/MatchRules.ts 解释，这里只放数值。
 */
export const RULES = {
  matchSeconds: 300,
  countdownSeconds: 3,
  hiderTotal: 5,

  maxContactsPerJail: 3,
  maxJailsPerHider: 3,

  contactDistance: 1.0,
  lungeContactDistance: 1.15,
  contactCooldown: 2.4, // 命中后的擦刀后摇
  ghostHitRecoverySpeed: 0.55,
  hiderHitBoostSeconds: 2.2,
  hiderHitBoostSpeed: 1.5,

  rescueDistance: 1.5,
  rescueSeconds: 5,
  rescueDecayRate: 0.5,
  invulnerableSeconds: 2,

  jailSlots: 5,

  playerHider: {
    walkSpeed: 4.2,
    sprintSpeed: 6.8,
    crouchSpeed: 2.4,
    staminaSeconds: 6,
    staminaRegenPerSecond: 1.6,
    staminaRegenDelay: 0.6
  },

  playerGhost: {
    walkSpeed: 4.4,
    sprintSpeed: 6.8,
    lungeSpeed: 11.5,
    lungeWindup: 0.25,
    lungeDuration: 0.3,
    lungeCooldown: 5,
    lungeStun: 0.45
  },

  aiHider: {
    walkSpeed: 3.8,
    runSpeed: 5.9,
    fleeDistance: 9,
    rescueGhostDistance: 12,
    rescueStopDistance: 1.2,
    thinkInterval: 0.15,
    pathInterval: 0.35,
    maxRescuers: 2
  },

  aiGhost: {
    patrolSpeed: 3.8,
    investigateSpeed: 4.8,
    chaseSpeed: 6.4,
    lungeSpeed: 11.5,
    lungeWindup: 0.35,
    lungeDuration: 0.3,
    lungeCooldown: 6,
    lungeStun: 0.6,
    lungeRangeMin: 2.5,
    lungeRangeMax: 6,
    pathInterval: 0.35,
    jailWatchSeconds: 6
  },

  perception: {
    ghostVisionRange: 22,
    ghostFovRadians: (100 * Math.PI) / 180,
    ghostEyeHeight: 1.55,
    ghostTargetHeight: 1.0,
    hiderVisionRange: 20,
    hiderFovRadians: (120 * Math.PI) / 180,
    hiderDangerRadius: 9,
    memorySeconds: 4,
    searchSeconds: 7,
    terrorRadius: 16,
    hearing: {
      sprint: 16,
      walk: 7,
      rescue: 12,
      call: 25,
      lungeMiss: 18
    }
  },

  camera: {
    distance: 4.8,
    height: 1.5,
    lookHeight: 1.2,
    pitchMin: (-12 * Math.PI) / 180,
    pitchMax: (50 * Math.PI) / 180,
    damping: 12,
    collisionPadding: 0.28,
    sprintFov: 68,
    lungeFov: 80,
    normalFov: 62
  },

  nav: {
    cellSize: 0.5,
    agentRadius: 0.42,
    maxExpansions: 30000,
    pathRequestsPerFrame: 3,
    stuckCheckInterval: 0.6,
    stuckDistance: 0.15,
    sidestepSeconds: 0.5
  },

  ai: {
    repathDistance: 1.1,
    separationRadius: 0.9,
    separationStrength: 1.4
  }
} as const

export type Rules = typeof RULES
