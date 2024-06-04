// plugins/breadcrumb.js
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('getBreadcrumbs', (route) => {
    const pathArray = route.path.split('/').filter(p => p)
    const breadcrumbs = pathArray.map((path, index) => {
      return {
        text: path.charAt(0).toUpperCase() + path.slice(1),
        link: '/' + pathArray.slice(0, index + 1).join('/')
      }
    })
    return breadcrumbs
  })
})
