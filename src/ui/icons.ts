export type IconName =
  | 'star'
  | 'knot'
  | 'clock'
  | 'runner'
  | 'ghost'
  | 'play'
  | 'pause'
  | 'map'
  | 'dice'
  | 'volume'
  | 'volumeOff'
  | 'arrowLeft'
  | 'check'
  | 'close'
  | 'gear'
  | 'book'
  | 'bolt'
  | 'call'
  | 'burst'
  | 'crown'
  | 'home'
  | 'restart'
  | 'chevronRight'
  | 'heart'
  | 'sparkle'
  | 'users'
  | 'eye'

const ICONS: Record<IconName, string> = {
  star: '<path d="M12 3.4l2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.6 9.5l5.8-.8L12 3.4z" fill="currentColor" stroke="currentColor" stroke-width="1.1" stroke-linejoin="round"/>',
  knot: '<path d="M4.2 8.2c2.4-2.5 5.1-2.3 7.8.4 2.7-2.7 5.4-2.9 7.8-.4-1.7 2.4-2.3 4.4-.8 6.4-2.4 2.4-5 2.3-7-.5-2 2.8-4.6 2.9-7 .5 1.5-2 0.9-4-.8-6.4z" fill="currentColor" stroke="currentColor" stroke-width="1" stroke-linejoin="round"/>',
  clock: '<circle cx="12" cy="12" r="8.4" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 7.2v5.1l3.4 2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  runner: '<circle cx="14.2" cy="4.8" r="2.1" fill="currentColor"/><path d="M12.8 8.2l-2.4 3.1 2.5 2.1-1.5 4.2M11.4 10.2l4.1 1.4 1.8 3.2M10.4 11.3l-3.2 1.2" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>',
  ghost: '<path d="M5.2 19.5V10a6.8 6.8 0 0 1 13.6 0v9.5l-2.3-1.7-2.2 1.7-2.3-1.7-2.2 1.7-2.3-1.7-2.3 1.7z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="9.5" cy="10.2" r="1" fill="currentColor"/><circle cx="14.5" cy="10.2" r="1" fill="currentColor"/>',
  play: '<path d="M8.2 5.6l10 6.4-10 6.4V5.6z" fill="currentColor"/>',
  pause: '<rect x="7" y="5.4" width="3.4" height="13.2" rx="1.2" fill="currentColor"/><rect x="13.6" y="5.4" width="3.4" height="13.2" rx="1.2" fill="currentColor"/>',
  map: '<path d="M3.8 5.8l5.2-1.7 6 2 5.2-1.7v14.4l-5.2 1.7-6-2-5.2 1.7V5.8z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M9 4.1v14.4M15 6.1v14.4" fill="none" stroke="currentColor" stroke-width="1.5"/>',
  dice: '<rect x="4" y="4" width="16" height="16" rx="4" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="8.6" cy="8.6" r="1.2" fill="currentColor"/><circle cx="15.4" cy="8.6" r="1.2" fill="currentColor"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/><circle cx="8.6" cy="15.4" r="1.2" fill="currentColor"/><circle cx="15.4" cy="15.4" r="1.2" fill="currentColor"/>',
  volume: '<path d="M4.2 9.4h3.4l4.2-3.5v12.2L7.6 14.6H4.2V9.4z" fill="currentColor"/><path d="M15 8.2c1.6 1.8 1.6 5.8 0 7.6M17.8 5.6c3.1 3.4 3.1 9.4 0 12.8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  volumeOff: '<path d="M4.2 9.4h3.4l4.2-3.5v12.2L7.6 14.6H4.2V9.4z" fill="currentColor"/><path d="M15.2 9.2l5.6 5.6M20.8 9.2l-5.6 5.6" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/>',
  arrowLeft: '<path d="M19 12H5.4M11 5.4L4.4 12l6.6 6.6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  check: '<path d="M4.8 12.4l4.7 4.7 9.7-10.2" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>',
  close: '<path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>',
  gear: '<circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 3.4v2.2M12 18.4v2.2M3.4 12h2.2M18.4 12h2.2M5.9 5.9l1.6 1.6M16.5 16.5l1.6 1.6M18.1 5.9l-1.6 1.6M7.5 16.5l-1.6 1.6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  book: '<path d="M4.2 5.2c2.8-.9 5.2-.5 7.8 1.1 2.6-1.6 5-2 7.8-1.1v13.2c-2.8-.9-5.2-.5-7.8 1.1-2.6-1.6-5-2-7.8-1.1V5.2z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M12 6.3v13.2" fill="none" stroke="currentColor" stroke-width="1.5"/>',
  bolt: '<path d="M13.4 2.6L4.8 13.8h6l-1.2 7.6 8.8-11.6h-6.2l1.2-7.2z" fill="currentColor"/>',
  call: '<path d="M4.4 9.2l4.8-4.8 2.4 2.4-2 2 3.6 3.6 2-2 2.4 2.4-4.8 4.8c-2.4-1-4.4-2.2-6-3.8s-2.8-3.6-3.6-6l1.2-1.2z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M15.6 4.6c1.8.8 3 2 3.8 3.8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  burst: '<path d="M12 3.2l1.6 5.4 5.2-2.4-2.4 5.2 5.4 1.6-5.4 1.6 2.4 5.2-5.2-2.4L12 20.8l-1.6-5.4-5.2 2.4 2.4-5.2-5.4-1.6 5.4-1.6-2.4-5.2 5.2 2.4L12 3.2z" fill="currentColor"/>',
  crown: '<path d="M3.6 7.6l4.2 3.2L12 5l4.2 5.8 4.2-3.2-1.6 10.2H5.2L3.6 7.6z" fill="currentColor"/><circle cx="12" cy="4" r="1.2" fill="currentColor"/>',
  home: '<path d="M4 11.2L12 4l8 7.2V20h-5.6v-5.4H9.6V20H4v-8.8z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
  restart: '<path d="M5.2 8.2A7.6 7.6 0 1 1 4.4 14" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/><path d="M4.4 4.6v4.2h4.2" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>',
  chevronRight: '<path d="M9 5.4l6.6 6.6L9 18.6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',
  heart: '<path d="M12 20.2S3.8 15.2 3.8 9.4c0-3 3.8-4.7 6.2-2.2L12 9.1l2-1.9c2.4-2.5 6.2-.8 6.2 2.2 0 5.8-8.2 10.8-8.2 10.8z" fill="currentColor"/>',
  sparkle: '<path d="M12 3.2l1.4 5.2 5.2 1.4-5.2 1.4-1.4 5.2-1.4-5.2-5.2-1.4 5.2-1.4L12 3.2z" fill="currentColor"/><path d="M18.6 15.2l.7 2.5 2.5.7-2.5.7-.7 2.5-.7-2.5-2.5-.7 2.5-.7.7-2.5z" fill="currentColor"/>',
  users: '<circle cx="9" cy="8.4" r="2.6" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M3.8 19.2c0-3 2.3-5.2 5.2-5.2s5.2 2.2 5.2 5.2" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M15.2 6.4a2.4 2.4 0 0 1 0 4.4M17.4 14.4c1.8.6 3 2.2 3 4.2" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
  eye: '<path d="M2.8 12s3.4-5.6 9.2-5.6S21.2 12 21.2 12s-3.4 5.6-9.2 5.6S2.8 12 2.8 12z" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="12" r="2.4" fill="currentColor"/>'
}

export function icon(name: IconName, size = 24): string {
  return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" aria-hidden="true">${ICONS[name]}</svg>`
}
