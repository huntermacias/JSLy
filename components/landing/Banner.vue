<script setup lang="ts">
defineProps({
  badgeText: {
    type: String,
    default: undefined,
  },
  text: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    default: undefined,
  },
  linkText: {
    type: String,
    default: 'Check it out!',
  },
});
</script>

<template>
  <div class="relative bg-gradient-to-r from-emerald-600/30 to-indigo-600 dark:bg-gradient-to-r dark:from-pickled-bluewood-800 dark:to-gray-950 hidden lg:flex items-center justify-center py-4 px-6 text-lg text-white rounded-md shadow-lg">
    <span v-if="badgeText" class="mr-4 rounded-full bg-white text-blue-600 dark:text-indigo-500 px-4 py-1 text-sm font-bold">
      {{ badgeText }}
    </span>
    <span class="font-medium">
      {{ text }}
    </span>
    <NuxtLink v-if="link" :href="link" target="_blank" class="ml-4 text-white underline font-semibold hover:text-blue-200 transition duration-300">
      {{ linkText }}
    </NuxtLink>
  </div>
</template>


