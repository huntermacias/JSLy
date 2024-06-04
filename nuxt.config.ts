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
  plugins: [
    '~/plugins/breadcrumb.js'
  ],
  // build: {
  //   transpile: [
  //     'vue-breadcrumbs'
  //   ]
  // },
  devtools: { enabled: true },
  css: [
    '@/styles/style.css',
    '@/styles/recursion.css',
    
  ],
  // Custom footer component configuration
  components: {
    global: true,
     dirs: ['~/components']
  },

})