import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // GitHub Pages path only for production builds; local dev uses /
  base: command === 'build' ? '/Fran-Sonvico-s-Portfolio/' : '/',
}))
