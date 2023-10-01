import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  server: {
    // open: './index.html',
    open: './',
    port: 3000,
  },
  css: {
    devSourcemap: true, 
  },
})

