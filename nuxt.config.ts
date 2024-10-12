// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vite-pwa/nuxt'
  ],
  pwa: {
    manifest: {
      name: 'Nuxton',
      short_name: 'NuxtPWA',
      description: 'This is my awesome Nuxt PWA!',
      theme_color: '#ffffff',
      background_color: '#000000',
      display: 'standalone',
      start_url: '/',
      icons: [
        {
          src: '/img/icon_app.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    workbox: {
      runtimeCaching: [
        {
          urlPattern: 'https://nuxtom.pages.dev/.*',
          handler: 'NetworkFirst',
          method: 'GET'
        }
      ]
    },
    devOptions: {
      enabled: true
    }
  }
})