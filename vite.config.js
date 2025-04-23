import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
    VitePWA({
      filename: 'service-worker.js',    // ends up at /service-worker.js
      registerType: 'autoUpdate',       // injects register() into your app
      scope: '/',                       // root scope (good for Netlify)
      devOptions: { enabled: false }    // keep SW off during vite dev server
    })
  ],
  base: '/',      
})
