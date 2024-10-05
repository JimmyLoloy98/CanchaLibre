import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Activa el uso de "polling" si hay problemas en entornos como Docker o WSL
    },
    hmr: true, // Habilita el Hot Module Replacement
  },
})
