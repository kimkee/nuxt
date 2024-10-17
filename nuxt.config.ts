// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover, user-scalable=no',
      link: [
        { rel: 'manifest', href: '/manifest.json' }
      ]
    }
  },
  modules: ['@nuxtjs/tailwindcss', '@vesp/nuxt-fontawesome', '@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      'Noto+Sans+KR': [200,300,400, 500, 700,900],
      'Roboto': [200,300,400,500, 700,900]
    }
  },
  nitro: {
    prerender: {
      autoSubfolderIndex: false
    }
  },
  css: [
    '~/assets/css/global.css'
  ],
  vite: {
    server: {
      hmr: {
        overlay: false
      }
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: "modern-compiler"
            }
        }
    }
  },
  fontawesome: {
    icons: {
      solid: ['magnifying-glass','dollar-sign','bars','box','house', 'cog', 'circle', 'check', 'calendar','coffee'],
      regular: ['user' ]
    }
  },
  router: {
    options: {
      linkActiveClass: 'active-link',
      linkExactActiveClass: 'active-link'
    }
  }
})


