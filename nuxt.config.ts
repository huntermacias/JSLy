// import hljs from 'highlight.js/lib/core'
// import javascript from 'highlight.js/lib/languages/javascript'

// // Register languages with highlight.js
// hljs.registerLanguage('javascript', javascript)

export default defineNuxtConfig({
  // pageViews: {
  //   credentialsFile: './credentials.json',   
   
  // },
  modules: ['@nuxt/content'],
  
  extends: [
    '@nuxt-themes/docus',
  ],
  content: {
    markdown: {
      remarkPlugins: ['remark-emoji'],
      rehypePlugins: [],
    },
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
        sepia: 'monokai'
      }
    },
  },
  // plugins: [
    // '~/plugins/breadcrumb.js',
    // '~/plugins/sidebar.ts',
    // '~/plugins/highlight.ts' 
  // ],
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
