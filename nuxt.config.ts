export default defineNuxtConfig({

  content: {
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: 'github-light',
        // Theme used if `html.dark`
        dark: 'github-dark',
        // Theme used if `html.sepia`
        sepia: 'monokai'
      }
    }
    
  },
  // https://github.com/nuxt-themes/docus
  extends: [
    '@nuxt-themes/docus',
  ],
  modules: [
    'nuxt-pageviews'
  ],
  devtools: { enabled: true },
  css: [
    '@/styles/style.css',
    
  ],
  // Custom footer component configuration
  components: {
    global: true,
     dirs: ['~/components']
  },

})