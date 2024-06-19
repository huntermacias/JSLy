
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  extends: [
    '@nuxt-themes/docus',
  ],
  head: {
    title: 'JSLy',
    meta: [
      { name: 'description', content: 'A comprehensive documentation portal for JavaScript.' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'author', content: 'Hunter Macias' },
      { property: 'og:title', content: 'JSLy' },
      { property: 'og:description', content: 'A comprehensive documentation portal for JavaScript.' },
      { property: 'og:image', content: '/logo3.png' },
      { property: 'og:url', content: 'https://jsly.vercel.app' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'JSLy' },
      { name: 'twitter:description', content: 'A comprehensive documentation portal for JavaScript.' },
      { name: 'twitter:image', content: '/logo3.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },
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
