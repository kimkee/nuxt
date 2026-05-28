// https://nuxt.com/docs/api/configuration/nuxt-config
/// <reference path="./global.d.ts" />
import { defineNuxtConfig } from "nuxt/config";
import dayjs from "dayjs";
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2026-05-27',
  future: {
    compatibilityVersion: 4,
  },
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
        { rel: 'manifest', href: `${process.env.SITE_URL}/manifest.json` },
        { rel: 'icon', type: 'image/x-icon', href: `${process.env.SITE_URL}/img/favicon.ico` }
      ]
    },
    buildAssetsDir: process.env.NODE_ENV === 'production' ? `_nuxt/${dayjs().format('YYYY-MM-DD-hh-mm-ss')}/` : '_nuxt/',
    // pageTransition:{ name: 'page', mode:'out-in'},
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
    types: false,
    redirectOptions: {
      login: '/login',
      callback: '/callback',
      include: ['/user'],
      exclude: [],
      saveRedirectToCookie: true,
    },
  },
  modules: ['@vesp/nuxt-fontawesome', '@nuxtjs/google-fonts', '@nuxtjs/supabase', '@nuxt/image'],
  image: {
    domains: ['avfgnkfopixyabmqqrqv.supabase.co'],
  },
  plugins: ['~/plugins/ui.js', { src: '~/plugins/google-tag-manager.client.js', mode: 'client' }],
  googleFonts: {
    families: {
      'Noto+Sans+KR': [100, 300, 400, 500, 700, 900],
      'Roboto': [100, 300, 400, 500, 700, 900]
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
    plugins: [
      tailwindcss()
    ],
    server: {
      hmr: {
        overlay: false
      }
    },
    optimizeDeps: {
      include: [
        '@fortawesome/free-brands-svg-icons',
        '@fortawesome/free-regular-svg-icons',
        '@fortawesome/free-solid-svg-icons'
      ]
    }
  },
  fontawesome: {
    icons: {
      solid: ['font', 'power-off', 'angle-left', 'chevron-right', 'arrow-left', 'paper-plane', 'pen', 'calendar-days', 'clock', 'comment', 'comments', 'right-to-bracket', 'envelope', 'user', 'sun', 'moon', 'magnifying-glass', 'dollar-sign', 'bars', 'box', 'house', 'cog', 'circle', 'check', 'calendar', 'coffee'],
      regular: ['user', 'comments'],
      brands: ['facebook', 'github', 'google', 'kickstarter-k', 'twitter', 'kakao-talk']
    }
  },
  router: {
    options: {
      linkActiveClass: 'active-link',
      linkExactActiveClass: 'active-link'
    }
  }
})