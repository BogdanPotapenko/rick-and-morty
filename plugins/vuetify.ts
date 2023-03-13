import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'


export default defineNuxtPlugin(app => {
  const vuetify = createVuetify({
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          colors: {
            primary: '#eeeeee',
            black: '#ffffff'
          },
        },
      },
    },
    defaults: {
      global: {},
      VProgressCircular: {
        indeterminate: true,
        color: 'primary',
        width: 3,
      },
      VTextField: {
        density: "compact",
        variant: "solo"
      },
      VPagination: {
        totalVisible: 7,
        density: 'compact'
      },

    },
  })

  app.vueApp.use(vuetify)
})
