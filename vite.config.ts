import { defineConfig } from 'vite'

export default defineConfig({
  base: '/miaomiao/',
  server: {
    port: 5173,
    open: true
  },
  build: {
    target: 'esnext',
    cssMinify: 'light'
  }
})
