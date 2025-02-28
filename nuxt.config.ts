// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxtjs/device'
  ],

  css: ['~/assets/css/main.css'],
   colorMode: {
    preference: 'dark',
  },
  future: {
    compatibilityVersion: 4
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },
  nitro: {
    firebase: {
      gen: 2
    }
  },
  compatibilityDate: '2024-11-27'
})