// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@vesp/nuxt-fontawesome', '@vite-pwa/nuxt'],
  nitro: {
    prerender: {
      autoSubfolderIndex: false
    }
  },
  css: [
    '~/assets/css/global.css'
  ],
  fontawesome: {
    icons: {
      solid: ['magnifying-glass','dollar-sign','box','house', 'cog', 'circle', 'check', 'calendar','coffee'],
      regular: ['user' ]
    }
  },
  vite: {
    css: {
        preprocessorOptions: {
            scss: {
                api: "modern-compiler"
            }
        }
    }
  },
  pwa: {
    manifest: {
      "name": "VUE FIREBASE",
      "short_name": "VUE FIREBASE",
      "icons": [
          {
            "src": "./img/favicon.ico",
            "sizes": "32x32",
            "type": "image/x-icon"
          },
          {
            "src": "./img/icon_app.png",
            "type": "image/png",
            "sizes": "512x512"
          }
        ],
      "start_url": "./",
      "display": "standalone",
      "background_color": "#1d2736",
      "theme_color": "#1d2736"
  },
    workbox: {
      /* Workbox 설정 예시 */
      runtimeCaching: [
        {
          urlPattern: '/*',
          handler: 'NetworkFirst',
          options: {
            cacheName: 'my-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 300
            }
          }
        }
      ]
    }
  }
})


