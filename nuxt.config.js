import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  /* Configuración de SEO Global | Luis Reyes */
  head: {
    titleTemplate: '%s | Aryy',
    title: 'Sitio oficial',
    htmlAttrs: {
      lang: 'mx-es',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Encuentra un especialista médico en tu ciudad! Consulta opiniones de pacientes, pregunta a los expertos en salud y agenda cita ahora por Internet.' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [  "~assets/fonts/font.css",
  "~assets/scss/_variables.scss",
],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
      baseURL: 'https://app.aryymd.com', 
   /*    baseURL: 'http://127.0.0.1:8000', */

    proxyHeaders: false,
    credential: false,
    header:{
      Accept: 'aplication/json',
      'Content-Type': 'application/json',
    /*   "Authorization": 'Bearer ' + $localStorage.getItem("token")  */
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false, /* Desabilitamos el modo dark, posteriomente se realiza la configuración | Luis Reyes */
      themes: {
            light: {
        primary: '#7900ff',
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
        
      },
      dark: {
        primary: '#9966ff',
        card: '#4f565f'
      },
      },
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}

