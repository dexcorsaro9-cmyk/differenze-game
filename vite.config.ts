import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/differenze-game/',
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Per-language clue dictionaries are imported dynamically and must stay in
          // their own async chunks; forcing them into game-i18n would put all three
          // languages back into the initial download.
          if (/[\\/]src[\\/]i18n[\\/]clues[\\/](en|es)[\\/]/.test(id)) {
            return undefined;
          }
          if (/[\\/]src[\\/]i18n[\\/]/.test(id)) {
            return 'game-i18n';
          }
          if (/[\\/]src[\\/]data[\\/]/.test(id)) {
            return 'game-data';
          }
          if (/[\\/]node_modules[\\/](lucide-react|canvas-confetti)/.test(id)) {
            return 'vendor-ui';
          }
          if (/[\\/]node_modules[\\/](react|react-dom)/.test(id)) {
            return 'vendor-react';
          }
        },
      },
    },
  },
})

