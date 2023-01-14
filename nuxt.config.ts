import { defineConfig } from 'vite';

const siteName = '808 Event - Hawaii - From Your Ohana';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      siteName,
    }
  },
  app: {
    head: {
      title: siteName,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // import sass variables
          // https://stackoverflow.com/questions/71540998/how-to-use-global-sass-variables-in-my-nuxt-3-components
          additionalData: '@import "@/assets/scss/lib.scss";',
        },
      },
    },
  },
  // https://github.com/balmjs/balm-ui/issues/121
  alias: {
    'balm-ui-plus': 'balm-ui/dist/balm-ui-plus.esm.js',
  },
  css: ['balm-ui/dist/balm-ui.css', '~/assets/css/main.css'],
  hooks: {
    'vite:extendConfig': (config, { isClient }) => {
      if (isClient) {
        config.resolve.alias.vue = 'vue/dist/vue.esm-bundler.js';
      }
    }
  },
  ssr: false,
})
