/// <reference types="node" />

// Ensure this file is treated as a module so that module declarations augment existing ones instead of overwriting them.
export {}

declare module '@nuxtjs/supabase' {
  export interface RedirectOptions {
    login: string
    callback: string
    include?: string[]
    exclude?: string[]
    cookieRedirect?: boolean
    saveRedirectToCookie?: boolean
  }

  export interface ModuleOptions {
    url?: string
    key?: string
    serviceKey?: string
    secretKey?: string
    redirect?: boolean
    redirectOptions?: RedirectOptions
    cookieName?: string
    cookiePrefix?: string
    useSsrCookies?: boolean
    cookieOptions?: any
    types?: string | false
    clientOptions?: any
  }

  const _default: any
  export default _default
}

declare module '@nuxt/schema' {
  interface NuxtConfig {
    supabase?: import('@nuxtjs/supabase').ModuleOptions
    image?: any
    googleFonts?: any
    fontawesome?: any
    tailwindcss?: any
    nitro?: any
  }
  interface DefineNuxtConfig {
    (config: NuxtConfig): NuxtConfig
  }
}

declare module 'nuxt/schema' {
  interface NuxtConfig {
    supabase?: import('@nuxtjs/supabase').ModuleOptions
    image?: any
    googleFonts?: any
    fontawesome?: any
    tailwindcss?: any
    nitro?: any
  }
  interface DefineNuxtConfig {
    (config: NuxtConfig): NuxtConfig
  }
}

declare module 'nuxt/config' {
  interface DefineNuxtConfig {
    (config: import('nuxt/schema').NuxtConfig): import('nuxt/schema').NuxtConfig
  }
}
