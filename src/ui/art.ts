import type { MapSelection } from '../config/types'

/** 角色选择卡上的小手绘肖像。 */
export function roleArt(role: 'hider' | 'ghost'): string {
  if (role === 'hider') {
    return `
      <svg viewBox="0 0 100 100" role="img" aria-label="逃离者">
        <defs>
          <linearGradient id="hider-dress" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#9ff0dc"/>
            <stop offset="1" stop-color="#5fc9b3"/>
          </linearGradient>
        </defs>
        <circle cx="50" cy="35" r="23" fill="#ffe4c4" stroke="#2b2140" stroke-width="2"/>
        <path d="M27 33c2-17 13-24 23-24s21 7 23 24c-8-7-15-9-23-9s-15 2-23 9z" fill="#4a3a5e" stroke="#2b2140" stroke-width="2" stroke-linejoin="round"/>
        <path d="M31 28c-5-7-4-13 0-15 4 3 5 8 3 13zM69 28c5-7 4-13 0-15-4 3-5 8-3 13z" fill="#ff9ebb" stroke="#2b2140" stroke-width="2" stroke-linejoin="round"/>
        <circle cx="42" cy="37" r="3.2" fill="#2b2140"/>
        <circle cx="58" cy="37" r="3.2" fill="#2b2140"/>
        <circle cx="43" cy="36" r="1" fill="#fff"/>
        <circle cx="59" cy="36" r="1" fill="#fff"/>
        <ellipse cx="35" cy="44" rx="4" ry="2.6" fill="#ff9ebb" opacity=".65"/>
        <ellipse cx="65" cy="44" rx="4" ry="2.6" fill="#ff9ebb" opacity=".65"/>
        <path d="M45 45c2 3 8 3 10 0" fill="none" stroke="#ef7fa4" stroke-width="2" stroke-linecap="round"/>
        <path d="M35 62c6-5 24-5 30 0l6 22c-14 7-28 7-42 0l6-22z" fill="url(#hider-dress)" stroke="#2b2140" stroke-width="2" stroke-linejoin="round"/>
        <path d="M39 64l-7 12M61 64l7 12" fill="none" stroke="#ffe4c4" stroke-width="6" stroke-linecap="round"/>
        <path d="M41 84v9M59 84v9" fill="none" stroke="#ffe4c4" stroke-width="6" stroke-linecap="round"/>
        <path d="M35 94h11M54 94h11" fill="none" stroke="#4a3a5e" stroke-width="5" stroke-linecap="round"/>
        <path d="M50 65l2.2 4.4 4.8.7-3.5 3.4.8 4.8-4.3-2.3-4.3 2.3.8-4.8-3.5-3.4 4.8-.7L50 65z" fill="#f6c85f" stroke="#2b2140" stroke-width="1.4"/>
        <path d="M22 17l1.4 5.2 5.2 1.4-5.2 1.4-1.4 5.2-1.4-5.2-5.2-1.4 5.2-1.4L22 17z" fill="#fff6e7" opacity=".8"/>
        <path d="M84 62l1.1 4.1 4.1 1.1-4.1 1.1-1.1 4.1-1.1-4.1-4.1-1.1 4.1-1.1L84 62z" fill="#f6c85f" opacity=".9"/>
      </svg>`
  }

  return `
    <svg viewBox="0 0 100 100" role="img" aria-label="鬼">
      <defs>
        <linearGradient id="ghost-dress" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#ffb3c8"/>
          <stop offset="1" stop-color="#ef7fa4"/>
        </linearGradient>
      </defs>
      <ellipse cx="50" cy="55" rx="31" ry="40" fill="#fff" opacity=".14"/>
      <circle cx="50" cy="35" r="23" fill="#ffe7ee" stroke="#2b2140" stroke-width="2"/>
      <path d="M27 33c2-17 13-24 23-24s21 7 23 24c-8-7-15-9-23-9s-15 2-23 9z" fill="#4a3728" stroke="#2b2140" stroke-width="2" stroke-linejoin="round"/>
      <path d="M31 27c-4-7-3-13 1-15 4 3 4 8 2 13zM69 27c4-7 3-13-1-15-4 3-4 8-2 13z" fill="#ffc4d6" stroke="#2b2140" stroke-width="2" stroke-linejoin="round"/>
      <circle cx="42" cy="37" r="3.2" fill="#2b2140"/>
      <circle cx="58" cy="37" r="3.2" fill="#2b2140"/>
      <circle cx="43" cy="36" r="1" fill="#fff"/>
      <circle cx="59" cy="36" r="1" fill="#fff"/>
      <ellipse cx="35" cy="44" rx="4" ry="2.6" fill="#ff9ebb" opacity=".65"/>
      <ellipse cx="65" cy="44" rx="4" ry="2.6" fill="#ff9ebb" opacity=".65"/>
      <path d="M45 45c2 3 8 3 10 0" fill="none" stroke="#ef7fa4" stroke-width="2" stroke-linecap="round"/>
      <path d="M35 62c6-5 24-5 30 0l6 22c-14 7-28 7-42 0l6-22z" fill="url(#ghost-dress)" stroke="#2b2140" stroke-width="2" stroke-linejoin="round"/>
      <path d="M39 64l-7 12M61 64l7 12" fill="none" stroke="#ffe7ee" stroke-width="6" stroke-linecap="round"/>
      <path d="M41 84v9M59 84v9" fill="none" stroke="#ffe7ee" stroke-width="6" stroke-linecap="round"/>
      <path d="M35 94h11M54 94h11" fill="none" stroke="#4a3728" stroke-width="5" stroke-linecap="round"/>
      <path d="M22 17l1.4 5.2 5.2 1.4-5.2 1.4-1.4 5.2-1.4-5.2-5.2-1.4 5.2-1.4L22 17z" fill="#fff6e7" opacity=".8"/>
      <path d="M84 62l1.1 4.1 4.1 1.1-4.1 1.1-1.1 4.1-1.1-4.1-4.1-1.1 4.1-1.1L84 62z" fill="#f6c85f" opacity=".9"/>
    </svg>`
}

/** 地图选择卡的小插画。 */
export function mapArt(id: MapSelection): string {
  if (id === 'random') {
    return `
      <svg viewBox="0 0 160 100" role="img" aria-label="随机地图">
        <defs>
          <linearGradient id="rand-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#4a3b6b"/>
            <stop offset="1" stop-color="#221a3e"/>
          </linearGradient>
        </defs>
        <rect width="160" height="100" fill="url(#rand-sky)"/>
        <circle cx="80" cy="52" r="28" fill="#f6c85f" opacity=".16"/>
        <path d="M80 20l6.2 19.4 20.3 1.5-15.8 12.7 5.1 19.6L80 62.6 64.2 73.2l5.1-19.6-15.8-12.7 20.3-1.5L80 20z" fill="#f6c85f" stroke="#fff6e7" stroke-width="2"/>
        <path d="M36 28l2 7.4 7.4 2-7.4 2-2 7.4-2-7.4-7.4-2 7.4-2 2-7.4z" fill="#fff6e7" opacity=".8"/>
        <path d="M124 62l1.6 5.8 5.8 1.6-5.8 1.6-1.6 5.8-1.6-5.8-5.8-1.6 5.8-1.6 1.6-5.8z" fill="#8fe2ce" opacity=".85"/>
      </svg>`
  }

  if (id === 'station') {
    return `
      <svg viewBox="0 0 160 100" role="img" aria-label="童话火车站">
        <defs>
          <linearGradient id="station-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#6d5a92"/>
            <stop offset="1" stop-color="#2e2452"/>
          </linearGradient>
        </defs>
        <rect width="160" height="100" fill="url(#station-sky)"/>
        <circle cx="126" cy="22" r="12" fill="#fff2c9" opacity=".95"/>
        <circle cx="126" cy="22" r="19" fill="#fff2c9" opacity=".14"/>
        <rect y="72" width="160" height="28" fill="#8f84a6"/>
        <rect y="70" width="160" height="5" fill="#ffd08a"/>
        <rect x="16" y="48" width="92" height="25" rx="5" fill="#8fb8ff" stroke="#2b2140" stroke-width="2"/>
        <rect x="22" y="52" width="12" height="8" rx="2" fill="#ffe8b8"/>
        <rect x="39" y="52" width="12" height="8" rx="2" fill="#ffe8b8"/>
        <rect x="56" y="52" width="12" height="8" rx="2" fill="#ffe8b8"/>
        <rect x="73" y="52" width="12" height="8" rx="2" fill="#ffe8b8"/>
        <rect x="90" y="52" width="12" height="8" rx="2" fill="#ffe8b8"/>
        <rect x="16" y="66" width="92" height="6" fill="#6e4c8e"/>
        <circle cx="32" cy="75" r="6" fill="#2b2140"/>
        <circle cx="91" cy="75" r="6" fill="#2b2140"/>
        <rect x="120" y="35" width="22" height="38" fill="#fff6e7" stroke="#2b2140" stroke-width="2"/>
        <path d="M117 35h28l-14-11-14 11z" fill="#6e4c8e"/>
        <circle cx="131" cy="49" r="7" fill="#fff6e7" stroke="#2b2140" stroke-width="2"/>
        <path d="M131 44v5l3 2" stroke="#2b2140" stroke-width="1.6" fill="none" stroke-linecap="round"/>
        <rect x="126" y="63" width="10" height="10" fill="#ffe8b8"/>
        <path d="M8 28l1.4 5 5 1.4-5 1.4-1.4 5-1.4-5-5-1.4 5-1.4 1.4-5z" fill="#fff6e7" opacity=".85"/>
      </svg>`
  }

  if (id === 'park') {
    return `
      <svg viewBox="0 0 160 100" role="img" aria-label="月光游乐园">
        <defs>
          <linearGradient id="park-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#5b4b86"/>
            <stop offset="1" stop-color="#221a3e"/>
          </linearGradient>
        </defs>
        <rect width="160" height="100" fill="url(#park-sky)"/>
        <circle cx="30" cy="20" r="10" fill="#fff2c9" opacity=".95"/>
        <circle cx="30" cy="20" r="17" fill="#fff2c9" opacity=".16"/>
        <circle cx="110" cy="34" r="24" fill="none" stroke="#f6c85f" stroke-width="2.5"/>
        <circle cx="110" cy="34" r="16" fill="none" stroke="#fff6e7" stroke-width="1.5" opacity=".6"/>
        <g stroke="#fff6e7" stroke-width="1.6" opacity=".8">
          <path d="M110 10v48M86 34h48M93 17l34 34M127 17l-34 34"/>
        </g>
        <circle cx="110" cy="10" r="3.5" fill="#ff9ebb"/>
        <circle cx="134" cy="34" r="3.5" fill="#8fe2ce"/>
        <circle cx="110" cy="58" r="3.5" fill="#f6c85f"/>
        <circle cx="86" cy="34" r="3.5" fill="#b8a7f2"/>
        <rect y="78" width="160" height="22" fill="#6fbf9a"/>
        <path d="M0 80c20-12 36-12 56 0 18 10 32 10 48 0 20-12 36-12 56 0v20H0V80z" fill="#4e9a7a"/>
        <path d="M54 82c0-10 7-18 16-18s16 8 16 18" fill="#ff9ebb" stroke="#2b2140" stroke-width="2"/>
        <path d="M62 82V70M78 82V70M58 66h24" stroke="#fff6e7" stroke-width="2" stroke-linecap="round"/>
        <circle cx="70" cy="62" r="2.5" fill="#f6c85f"/>
        <circle cx="30" cy="54" r="6" fill="#ff9ebb" stroke="#2b2140" stroke-width="1.5"/>
        <path d="M30 60v8" stroke="#fff6e7" stroke-width="1.5"/>
        <circle cx="44" cy="48" r="5" fill="#8fe2ce" stroke="#2b2140" stroke-width="1.5"/>
        <path d="M44 53v10" stroke="#fff6e7" stroke-width="1.5"/>
      </svg>`
  }

  return `
    <svg viewBox="0 0 160 100" role="img" aria-label="庄园">
      <defs>
        <linearGradient id="manor-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#5f4f83"/>
          <stop offset="1" stop-color="#241c42"/>
        </linearGradient>
      </defs>
      <rect width="160" height="100" fill="url(#manor-sky)"/>
      <circle cx="130" cy="20" r="11" fill="#f6e7ff" opacity=".95"/>
      <circle cx="130" cy="20" r="18" fill="#f6e7ff" opacity=".14"/>
      <rect y="76" width="160" height="24" fill="#7fa88a"/>
      <path d="M20 76V42l18-13 18 13v34H20z" fill="#fff6e7" stroke="#2b2140" stroke-width="2"/>
      <path d="M14 43L38 22l24 21" fill="#4a2f66" stroke="#2b2140" stroke-width="2" stroke-linejoin="round"/>
      <rect x="31" y="54" width="8" height="10" fill="#ffe8b8"/>
      <rect x="45" y="54" width="8" height="10" fill="#ffe8b8"/>
      <rect x="33" y="66" width="12" height="10" fill="#6e4c8e"/>
      <rect x="76" y="52" width="34" height="24" fill="#bfe8f5" opacity=".65" stroke="#fff6e7" stroke-width="2"/>
      <path d="M76 52l17-12 17 12" fill="none" stroke="#fff6e7" stroke-width="2"/>
      <path d="M90 76V64h8v12" fill="#6fbf9a"/>
      <path d="M120 76V58l10-8 10 8v18h-20z" fill="#fff6e7" stroke="#2b2140" stroke-width="2"/>
      <path d="M116 59l14-12 14 12" fill="#4a2f66" stroke="#2b2140" stroke-width="2"/>
      <circle cx="60" cy="70" r="4" fill="#ff9ebb"/>
      <circle cx="68" cy="72" r="3" fill="#fff6e7"/>
      <circle cx="112" cy="70" r="4" fill="#ff9ebb"/>
      <path d="M18 16l1.4 5 5 1.4-5 1.4-1.4 5-1.4-5-5-1.4 5-1.4 1.4-5z" fill="#fff6e7" opacity=".85"/>
      <path d="M92 20l1.1 4 4 1.1-4 1.1-1.1 4-1.1-4-4-1.1 4-1.1 1.1-4z" fill="#f6c85f" opacity=".9"/>
    </svg>`
}

/** 菜单底部的长卷剪影。 */
export function menuSkyline(): string {
  return `
    <svg viewBox="0 0 1200 220" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <path d="M0 190c80-8 110-52 180-50 60 2 74 30 126 26 62-5 82-48 150-46 70 2 88 44 156 44 72 0 90-40 158-40 70 0 92 40 162 38 66-2 84-42 150-40 64 2 82 38 118 40v58H0v-30z" fill="currentColor" opacity=".55"/>
      <g fill="currentColor">
        <rect x="112" y="126" width="64" height="66" rx="5"/>
        <path d="M104 126h80l-40-26-40 26z"/>
        <rect x="136" y="148" width="16" height="24" rx="3"/>
        <circle cx="966" cy="130" r="42" fill="none" stroke="currentColor" stroke-width="7"/>
        <circle cx="966" cy="130" r="24" fill="none" stroke="currentColor" stroke-width="4"/>
        <path d="M966 88v84M924 130h84M936 100l60 60M996 100l-60 60" stroke="currentColor" stroke-width="4"/>
        <path d="M930 172l-18 34M1002 172l18 34" stroke="currentColor" stroke-width="7" stroke-linecap="round"/>
        <rect x="512" y="118" width="100" height="74" rx="8"/>
        <path d="M504 118h116l-58-34-58 34z"/>
        <rect x="536" y="140" width="18" height="26" rx="3" fill="#17112b" opacity=".35"/>
        <rect x="570" y="140" width="18" height="26" rx="3" fill="#17112b" opacity=".35"/>
        <path d="M760 192V130l26-20 26 20v62h-52z"/>
        <path d="M748 132l38-30 38 30" fill="none" stroke="currentColor" stroke-width="7"/>
        <rect x="280" y="150" width="46" height="42" rx="4"/>
        <rect x="1060" y="152" width="54" height="40" rx="5"/>
        <rect x="1068" y="160" width="10" height="12" rx="2" fill="#17112b" opacity=".35"/>
        <rect x="1086" y="160" width="10" height="12" rx="2" fill="#17112b" opacity=".35"/>
        <circle cx="380" cy="170" r="18"/>
        <rect x="374" y="182" width="12" height="24"/>
        <circle cx="840" cy="174" r="14"/>
        <rect x="836" y="184" width="8" height="22"/>
      </g>
      <g fill="#fff6e7" opacity=".55">
        <circle cx="160" cy="60" r="2"/>
        <circle cx="360" cy="40" r="1.6"/>
        <circle cx="520" cy="72" r="2.2"/>
        <circle cx="700" cy="38" r="1.5"/>
        <circle cx="860" cy="64" r="2"/>
        <circle cx="1040" cy="44" r="1.7"/>
        <circle cx="1120" cy="90" r="1.4"/>
      </g>
    </svg>`
}
