// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    '/auth/login/**': { ssr: false },
  },
  modules: [
    '@bg-dev/nuxt-naiveui',
    '@nuxtjs/tailwindcss',
    'nuxt-vercel-analytics',
    // '@nuxtjs/supabase',
    'nuxt-typed-router',
  ],
  naiveui: {
    colorModePreference: 'light',
    iconSize: 18,
    themeConfig: {},
  },
  tailwindcss: {
    exposeConfig: true,
  },
  nitro: {
    preset: 'vercel-edge',
  },

  build: {
  },

  vite: {
  },
})
