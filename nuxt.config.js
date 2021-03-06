export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ui-analytics',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // loading
  loading: '~/components/loading.vue',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@fortawesome/fontawesome-svg-core/styles.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/fontawesome.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/fontawesome', { component: 'fontAwesome', suffix: true }],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/auth'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Auth
  auth: {
    redirect: {
      home: '/projects',
      logout: '/log-in',
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/auth/login',
            method: 'post',
            propertyName: 'token',
          },
          logout: false,
          user: { url: '/api/auth/user', method: 'get', propertyName: 'user' },
        },
        // tokenRequired: true,
        // tokenType: 'bearer'
      },
    },
  },

  // Axios
  axios: {
    baseURL: 'http://192.168.11.252:5000/',
  },

  // router
  // router: {
  //   middleware: ['user_auth'],
  // },

  purgeCSS: {
    whitelistPatterns: [/svg.*/, /fa.*/],
  },
}
