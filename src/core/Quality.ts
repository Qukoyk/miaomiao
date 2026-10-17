import type { QualityLevel } from '../config/types'

const STORAGE_KEY = 'miaomiao.quality'

export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false
  const params = new URLSearchParams(window.location.search)
  if (params.get('mobile') === '1') return true
  if (params.get('mobile') === '0') return false
  const coarse = window.matchMedia('(pointer: coarse)').matches
  return coarse || (navigator.maxTouchPoints > 0 && window.innerWidth < 1100)
}

export function detectQuality(): QualityLevel {
  if (isMobileDevice()) return 'low'
  const cores = navigator.hardwareConcurrency || 4
  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 4
  if (cores <= 4 || memory <= 4) return 'medium'
  return 'high'
}

export function getPreferredQuality(): QualityLevel {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'high' || stored === 'medium' || stored === 'low') return stored
  } catch {
    // 隐私模式下忽略
  }
  return detectQuality()
}

export function savePreferredQuality(quality: QualityLevel): void {
  try {
    localStorage.setItem(STORAGE_KEY, quality)
  } catch {
    // 忽略
  }
}

export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
