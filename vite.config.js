import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      srcDir: 'public', // التأكد من أن service-worker.js يتم جلبه من public/
      filename: 'service-worker.js', // اسم ملف الـ service worker في public/
      strategies: 'injectManifest',
      manifest: {
        name: 'SEA Detaling',
        short_name: 'SEA',
        description: 'Install SEA website as mobile app',
        theme_color: '#1A78F2',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: '/logo.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/logo.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      devOptions: {
        enabled: true, // لتجربة PWA في وضع التطوير
      }
    })
  ]
});
