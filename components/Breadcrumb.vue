<template>
  <nav aria-label="breadcrumb" class="p-4 hidden lg:block fixed top-2 z-50 md:left-[70px] bg-inherit text-xs">
    <ol class="flex space-x-2 md:space-x-4 text-gray-600 dark:text-gray-300">
      <li v-for="(link, index) in links" :key="index" class="flex items-center">
        <RouterLink 
          v-if="link.to" 
          :to="link.to" 
          class="flex items-center text-blue-600 dark:text-emerald-400 hover:text-blue-800 dark:hover:text-blue-600 transition-colors duration-200"
        >
          <component :is="link.icon" class="h-5 w-5 dark:text-gray-400 text-gray-700 mr-1" />
          <span>{{ link.label }}</span>
        </RouterLink>
        <span 
          v-else 
          class="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-600 transition-colors duration-200 font-semibold bg-gray-200 dark:bg-gray-700 py-1 rounded-md"
        >
          <component :is="link.icon" class="h-5 w-5 dark:text-gray-400 text-gray-700 mr-1" />
          <span>{{ link.label }}</span>
        </span>
        <span v-if="index < links.length - 1" class=" text-gray-400 dark:text-gray-500 ml-3 font-extrabold">|</span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { HomeIcon, CodeBracketIcon } from '@heroicons/vue/24/solid';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const links = computed(() => {
  const pathArray = route.path.split('/').filter(p => p);

  const pathLinks = pathArray.map((path, index) => {
    return {
      label: path,
      to: '/' + pathArray.slice(0, index + 1).join('/'),
      icon: CodeBracketIcon // Default icon, should be overwritten by passed props
    };
  });

  return [{ label: 'Home', to: '/', icon: HomeIcon }, ...pathLinks];
});
</script>
ç