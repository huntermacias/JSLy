<template>
    <div>
      <component :is="icon" class="inline-block mr-2"></component>
      <span v-html="formattedTitle"></span>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  
  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    highlightedWord: {
      type: String,
      required: true,
    },
    highlightClass: {
      type: String,
      default: 'bg-yellow-200 text-yellow-800 font-bold',
    },
  });
  
  const formattedTitle = computed(() => {
    const regex = new RegExp(`(${props.highlightedWord})`, 'gi');
    return props.title.replace(regex, `<span class="${props.highlightClass}">$1</span>`);
  });
  </script>
  
  <style scoped>
  /* Add any additional styling if needed */
  </style>
  