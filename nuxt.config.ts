// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'manifest', href: '/manifest.json' }
      ]
    }
  },
  modules: ['@nuxtjs/tailwindcss', '@vesp/nuxt-fontawesome'],
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
  }
})


