import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  app: {
    baseURL: '/rick-and-morty/'
  },
  ssr: false,
  css: ['vuetify/lib/styles/main.sass'],
  modules: [
    async (_, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => {
        config.plugins.push(vuetify())
      })
    }, '@nuxtjs/apollo', '@nuxtjs/tailwindcss', '@nuxt/image-edge'],

  build: {
    transpile: ['vuetify', '@apollo/client'],
  },
  vite: {
    define: {
      'process.env.DEBUG': 'false',
    },
  },
  image: {
    // Options
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://rickandmortyapi.com/graphql'
      }
    },
  },
  components: [
    '~/components',
    { path: '~/components/layouts' },
    { path: '~/components/domains' },
  ],
})
