<script setup lang="ts">
import type {PropType} from 'vue'
import * as NuxtContent from '@nuxt/content/dist/runtime/types'
import FormatDate from "@/components/common/FormatDate.vue";


defineProps({
  post: {
    type: Object as PropType<NuxtContent.ParsedContent>,
    required: true
  },
})
</script>



<template>
  <NuxtLink v-if="post && post.published && post._path" :href="post._path" class="flex flex-col h-full group rounded-xl overflow-hidden shadow-lg dark:bg-gray-900/60 cursor-pointer">
    <div class="relative">
      <img class="w-full h-64" :src="post.image"/>
      <div
        class="group-hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 dark:bg-black/40"></div>
    </div>
    <div class="px-6 py-4 flex-grow">
      <h1 class="text-lg inline-block text-black dark:text-white font-bold">
        {{ post.title }}
      </h1>
      <p class="dark:text-gray-300 text-sm mt-1">
        {{ post.description }}
      </p>
    </div>
    <div class="px-6 pb-4 flex flex-row items-center">
      <div class="flex w-full max-h-64 items-center space-x-3">
        <img
          :src="post.avatar"
          class="h-8 w-8 rounded-full"
          alt="Bordered avatar"
        >
        <h1 class="w-full">
          {{ post.author }}
        </h1>
      </div>

      <span class="py-1 text-sm font-regular text-gray-600 mr-1 flex flex-row items-center">
        <FormatDate :date="new Date(post.date)" />
      </span>
    </div>
  </NuxtLink>
</template>
