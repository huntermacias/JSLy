import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'

// Register languages with highlight.js
hljs.registerLanguage('javascript', javascript)

export default defineNuxtConfig({
  extends: [
    '@nuxt-themes/docus',
  ],
  content: {
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: 'github-light',
        // Theme used if `html.dark`
        dark: 'dracula',
        // Theme used if `html.sepia`
        sepia: 'monokai'
      }
    },
  },
  plugins: [
    '~/plugins/breadcrumb.js',
    '~/plugins/sidebar.ts',
    '~/plugins/highlight.ts' 
  ],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    '@/styles/style.css',
    '@/styles/recursion.css',
  ],
  components: {
    global: true,
    dirs: ['~/components']
  },
})
