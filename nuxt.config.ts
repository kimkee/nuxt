// https://nuxt.com/docs/api/configuration/nuxt-config
import dayjs from "dayjs";

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  ssr: true,
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover, user-scalable=no',
      meta: [
        { name: 'theme-color', content: '#1f2937' }
      ],
      link: [
        { rel: 'manifest', href: '/manifest.json' },
        { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' }
      ]
    },
    buildAssetsDir: `_nuxt/${dayjs().format('YYYY-MM-DD-HH-mm-ss')}/`,
  },
  runtimeConfig: {
    public: {
      TITLE: process.env.TITLE,  // 공개 환경 변수로 설정
      SUPABASE_URL: process.env.SUPABASE_URL,  // 공개 환경 변수로 설정
      SUPABASE_KEY: process.env.SUPABASE_KEY,  // 공개 환경 변수로 설정
      SITE_URL: process.env.SITE_URL,  // 공개 환경 변수로 설정
    },
  },
  supabase: {
    // Options
    redirectOptions: {
      login: '/login',
      callback: '/callback',
      include: ['/user'],
      exclude: [],
      cookieRedirect: true,
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@vesp/nuxt-fontawesome', '@nuxtjs/google-fonts', '@nuxtjs/supabase', '@nuxt/image'],
  image: {
    domains: ['avfgnkfopixyabmqqrqv.supabase.co'],
  },
  plugins: ['~/plugins/ui.js'],
  googleFonts: {
    families: {
      'Noto+Sans+KR': [100,300,400, 500, 700,900],
      'Roboto': [100,300,400,500, 700,900]
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
      solid: ['angle-left','chevron-right','arrow-left','paper-plane','pen','calendar-days','clock','comment','comments','right-to-bracket','envelope','user','sun','moon','magnifying-glass','dollar-sign','bars','box','house', 'cog', 'circle', 'check', 'calendar','coffee'],
      regular: ['user','comments' ],
      brands: ['github', 'google', 'kickstarter-k', 'twitter']
    }
  },
  router: {
    options: {
      linkActiveClass: 'active-link',
      linkExactActiveClass: 'active-link'
    }
  }
})