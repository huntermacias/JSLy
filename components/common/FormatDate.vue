<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  date: {
    type: Date,
    required: true
  },
});

const formattedDate = computed(() => {
  const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' };
  return new Intl.DateTimeFormat('en-US', options).format(props.date);
});
</script>

<template>
  <time :title="props.date.toDateString()" class="whitespace-nowrap text-xs font-semibold text-gray-700 dark:text-gray-300">
    {{ formattedDate }}
  </time>
</template>

<style scoped>
time {
  @apply transition duration-300 ease-in-out;
}
</style>
