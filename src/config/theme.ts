/**
 * 游戏美术 token。
 * Three.js 使用数值色；CSS 使用 styles/tokens.css。
 */
export const COLORS = {
  nightTop: 0x221a3e,
  nightHorizon: 0x5b4b86,
  nightDeep: 0x17112b,
  fog: 0x3b3059,
  moon: 0xfff2c9,
  warmLight: 0xffd08a,
  cream: 0xfff6e7,
  paper: 0xfffaf0,
  ink: 0x2b2140,
  inkSoft: 0x5c4c73,
  pink: 0xff9ebb,
  pinkDeep: 0xef7fa4,
  mint: 0x8fe2ce,
  lavender: 0xb8a7f2,
  plum: 0x6e4c8e,
  gold: 0xf6c85f,
  goldDeep: 0xd9a83c,
  leaf: 0x6fbf9a,
  leafDeep: 0x4e9a7a,
  coral: 0xff8a80,
  sky: 0x8fd3ff,
  wood: 0x9a6b4f,
  woodDark: 0x6e4a37,
  stone: 0x9a8fae,
  stoneDark: 0x6d6380,
  glass: 0xbfe8f5,
  shadow: 0x2b2140
} as const

export const HIDER_PALETTES = [
  {
    name: '莓粉',
    shirt: 0xff8fb3,
    accent: 0xffccdc,
    hair: 0x5a3a4e,
    accessory: 'bow' as const
  },
  {
    name: '薄荷',
    shirt: 0x7fd8c4,
    accent: 0xcdf8e9,
    hair: 0x3f4a3a,
    accessory: 'beret' as const
  },
  {
    name: '蓝铃',
    shirt: 0x8fb8ff,
    accent: 0xd6e4ff,
    hair: 0x3a3f5a,
    accessory: 'scarf' as const
  },
  {
    name: '杏橙',
    shirt: 0xffb37f,
    accent: 0xffe0c8,
    hair: 0x6a4630,
    accessory: 'backpack' as const
  },
  {
    name: '丁香',
    shirt: 0xc3a7ff,
    accent: 0xe6d8ff,
    hair: 0x4a3a5e,
    accessory: 'headband' as const
  }
] as const

export const GHOST_PALETTE = {
  skin: 0xffe4e1,
  dress: 0xff8fb3,
  dressLight: 0xffc4d6,
  accent: 0xffc4d6,
  hair: 0x4a3728
} as const

/** 地图各自的天空与氛围预设。 */
export interface SkyPreset {
  top: number
  horizon: number
  fog: number
  moon: number
  ambientSky: number
  ambientGround: number
  ambientIntensity: number
  moonIntensity: number
  warmIntensity: number
}

export const SKY_PRESETS = {
  station: {
    top: 0x221a3e,
    horizon: 0x8a6a9e,
    fog: 0x4a3b6b,
    moon: 0xfff2c9,
    ambientSky: 0xd9cbff,
    ambientGround: 0x7a668e,
    ambientIntensity: 1.08,
    moonIntensity: 2.15,
    warmIntensity: 1.55
  },
  park: {
    top: 0x1d1840,
    horizon: 0x7d5aa8,
    fog: 0x453a70,
    moon: 0xffe9b8,
    ambientSky: 0xe2c8ff,
    ambientGround: 0x7e68a0,
    ambientIntensity: 1.12,
    moonIntensity: 2.2,
    warmIntensity: 1.8
  },
  manor: {
    top: 0x1a1636,
    horizon: 0x6e5b8e,
    fog: 0x3c3560,
    moon: 0xf6e7ff,
    ambientSky: 0xd2c8f0,
    ambientGround: 0x6a5e84,
    ambientIntensity: 1.05,
    moonIntensity: 2.05,
    warmIntensity: 1.6
  }
} as const satisfies Record<string, SkyPreset>

export const UI_FONT_STACK =
  '"PingFang SC", "Microsoft YaHei", "Noto Sans CJK SC", "Source Han Sans SC", "Hiragino Sans GB", "YouYuan", system-ui, sans-serif'
