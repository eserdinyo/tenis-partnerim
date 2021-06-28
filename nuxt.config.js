import { createSitemapRoutes } from './utils/createSitemapRoutes'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Tenis Partnerim',
    htmlAttrs: {
      lang: 'tr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Seviyenize uygun tenis partnerleri bulun!',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'Tenis Partneri, Tenis Kortları',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }],
  },

  publicRuntimeConfig: {
    siteURL: process.env.SITE_URL || 'https://www.tenispartnerim.com',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/vue-splide', ssr: false }, '~/plugins/mixins.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    [
      'nuxt-i18n',
      {
        // Only load the translations that the app uses
        lazy: true,
        // Directory that contains translations files
        langDir: 'lang/',
        detectBrowserLanguage: {
          useCookie: true,
          alwaysRedirect: true,
        },
      },
    ],
    '@nuxtjs/sitemap',
  ],
  i18n: {
    locales: [
      {
        code: 'tr',
        file: 'tr.js',
        name: 'TR',
      },
      {
        code: 'en',
        file: 'en.js',
        name: 'EN',
      },
    ],
    defaultLocale: 'tr',
  },
  sitemap: {
    hostname: 'https://www.tenispartnerim.com/',
    gzip: true,
    routes: createSitemapRoutes,
  },
  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
