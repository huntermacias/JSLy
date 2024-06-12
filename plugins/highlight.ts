import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'

hljs.registerLanguage('javascript', javascript)

export default defineNuxtPlugin(() => {
  return {
    provide: {
      hljs
    }
  }
})
