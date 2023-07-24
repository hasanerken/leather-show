// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    '/auth/login/': { ssr: false },
  },
  runtimeConfig: {
    public: {
      supabase: {
        url: 'https://ewnawqxvstvxofhxqrif.supabase.co',
        key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV3bmF3cXh2c3R2eG9maHhxcmlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAxNDUwODEsImV4cCI6MjAwNTcyMTA4MX0.cknPzzf7kLKYSHv8uAWOwXBCHuL3McHgeVdCzk2jfbk',
      },
    },
  },
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],
  modules: [
    '@bg-dev/nuxt-naiveui',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
    'nuxt-typed-router',
    '@hebilicious/vue-query-nuxt',
  ],
  naiveui: {
    colorModePreference: 'light',
    iconSize: 18,
    themeConfig: {},
  },
  tailwindcss: {
    exposeConfig: true,
  },
  build: {
  },
  // nitro: {
  //   preset: 'firebase',
  // },
  vite: {
  },
  server: {
    host: '0.0.0.0',
    // eslint-disable-next-line n/prefer-global/process
    port: process.env.PORT || 3000,
  },
})
