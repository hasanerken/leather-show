// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  routeRules: {
    '/home/**': { prerender: true },
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

  modules: [
    '@bg-dev/nuxt-naiveui',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
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

  build: {
  },

  // nitro: {
  //   preset: 'firebase',
  // },
  vite: {
  },

  plugins: ['~/plugins/vue-query.ts'],
})
