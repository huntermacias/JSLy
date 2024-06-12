import { defineNuxtPlugin } from '#app'
import Title from '@/components/Title.vue'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('Title', Title)
})
