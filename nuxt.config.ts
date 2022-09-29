import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
ssr:false,
target:'static',
css:['~/assets/css/styles.css'],
build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  modules:[
    "@pinia/nuxt",
    "@vueuse/nuxt"
  ],
})
