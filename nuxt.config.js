export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Chong Xian Goh - Multi-hyphenate Software Engineers',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Hi, I am Chong Xian. Full stack developers, product managers, certified scrum master, ui ux enthusiast.',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Chong Xian Goh - Multi-hyphenate Software Engineers',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
        'Hi, I am Chong Xian. Full stack developers, product managers, certified scrum master, ui ux enthusiast.',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },

      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.chongxian.dev/',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'share.jpg',
      },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '627' },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/site.webmanifest' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',

    'nuxt-vite',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
