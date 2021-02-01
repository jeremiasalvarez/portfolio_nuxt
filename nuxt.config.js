export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Jeremias Alvarez',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["@/assets/scss/main.scss"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/buefy
    ['nuxt-buefy', {
      defaultIconPack: 'fa',
      materialDesignIconsHRef: "https://use.fontawesome.com/releases/v5.4.1/css/all.css"
    }],
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'en',
            name: 'ENG'
          },
          {
            code: 'es',
            name: 'ESP'
          }
        ],
        defaultLocale: 'es',
        vueI18n: {
          fallbackLocale: 'es',
          messages: {
            en: {
              welcome: 'Welcome'
            },
            es: {
              welcome: 'Bienvenido'
            }
          }
        }
      }
    ]
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
