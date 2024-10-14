// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vesp/nuxt-fontawesome'
  ],
  nitro: {
    prerender: {
      autoSubfolderIndex: false
    }
  },
  fontawesome: {
    icons: {
      solid: ['dollar-sign', 'cog', 'circle', 'check', 'calendar','coffee'],
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
  }
})