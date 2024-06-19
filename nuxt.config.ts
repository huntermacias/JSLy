
export default defineNuxtConfig({
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
