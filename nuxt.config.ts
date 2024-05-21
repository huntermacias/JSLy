export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: [
    '@nuxt-themes/docus',
    '@nuxt-themes/typography',
    '@nuxt-themes/tailwind'
  ],
  devtools: { enabled: true },

  modules: [
    // Remove it if you don't use Plausible analytics
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-config-schema',
  ],

  content: {
    documentDriven: true,
    highlight: {
      theme: {
        dark: 'github-dark',
        default: 'github-light'
      },
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini']
    },
    navigation: {
      fields: ['icon', 'titleTemplate', 'header', 'main', 'aside', 'footer']
    }
  },
  colorMode: {
    classSuffix: '',
    dataValue: 'theme'
  },
  typescript: {
    includeWorkspace: true
  },
})
