import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // <--- ISSO É O QUE FAZ FUNCIONAR NO WINDOWS
    },
    host: true, // Necessário para o Docker
    strictPort: true,
    port: 5173, 
  }
})