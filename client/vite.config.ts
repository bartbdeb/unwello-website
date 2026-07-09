import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Frontend dev server on 5173; proxy API calls to the Express backend on 3001
// so the browser only ever talks to one origin and no keys touch the client.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
})
