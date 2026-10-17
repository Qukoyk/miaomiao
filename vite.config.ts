import { defineConfig } from 'vite'

export default defineConfig(({ command }) => {
  const lifecycle = process.env.npm_lifecycle_event
  const isPreview = lifecycle === 'preview' || lifecycle === 'start'
  return {
    base: process.env.VITE_BASE ?? (command === 'build' || isPreview ? '/miaomiao/' : '/'),
    server: {
      port: 5173,
      open: true
    },
    build: {
      target: 'esnext',
      cssMinify: 'light'
    }
  }
})
