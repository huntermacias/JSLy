<template>
    <div>
      <h6>
        <span>Comments</span>
      </h6>
    </div>
  </template>
  <script>
  export default {
    mounted() {
      const scriptTag = document.createElement('SCRIPT')
      scriptTag.setAttribute('src', 'https://giscus.app/client.js')
      scriptTag.setAttribute('data-repo', "huntermacias/JSLy")
      scriptTag.setAttribute('data-repo-id', 'R_kgDOL9gECA')
      scriptTag.setAttribute('data-category', 'Announcements')
      scriptTag.setAttribute('data-category-id', 'DIC_kwDOL9gECM4CgLOD')
      scriptTag.setAttribute('data-mapping', 'pathname')
      scriptTag.setAttribute('data-strict', '0')
      scriptTag.setAttribute('data-reactions-enabled', '1')
      scriptTag.setAttribute('data-emit-metadata', '0')
      scriptTag.setAttribute('data-input-position', 'top')
      scriptTag.setAttribute('data-theme', 'noborder_dark')
      scriptTag.setAttribute('data-lang', 'en')
      scriptTag.setAttribute('data-loading', 'lazy')
      scriptTag.setAttribute('crossorigin', 'anonymous')
      scriptTag.setAttribute('async', 'async')
      this.$el.append(scriptTag)
    },
  }
  </script>
  