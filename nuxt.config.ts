export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: [
    '@nuxt-themes/docus',
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
