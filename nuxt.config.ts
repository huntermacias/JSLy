export default defineNuxtConfig({
  ssr: true,
  modules: ['@nuxt/content'],
  extends: [
    '@nuxt-themes/docus',
  ],
  head: {
    title: 'JSLy',
    meta: [
      { name: 'description', content: 'Welcome to JSLy.' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'author', content: 'Hunter Macias' },
      { property: 'og:title', content: 'JSLy' },
      { property: 'og:description', content: 'JSLy Documentation' },
      { property: 'og:image', content: '/logo3.png' },
      { property: 'og:url', content: 'https://jsly.vercel.app' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'JSLy' },
      { name: 'twitter:description', content: 'JSLy: Your Only JavaScript Resource' },
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
      },
      langs: ['java', 'javascript', 'typescript', 'html', 'css', 'bash', 'json', 'yaml', 'toml', 'sql', 'mermaid']
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