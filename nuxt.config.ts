// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@bg-dev/nuxt-naiveui',
  ],
  naiveui: {
    colorModePreference: 'light',
    iconSize: 18,
    themeConfig: {},
  },
  nitro: {
    preset: 'vercel-edge',
  },

  build: {
  },

  vite: {
  },
})
