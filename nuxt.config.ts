import { Link } from './.nuxt/components.d';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
   postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head:{
      title: 'Sifat',
      meta: [
        {name: 'description', content: 'Everything about next 3'}
      ],
      Link: [
        { rel:'stylesheet', href: 'https://fonts.googleapis.com/icon?family=material+icons' }
      ]
    }
  }
})
