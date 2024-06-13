<template>
  <div class="relative group">
    <div
      :class="{
        'blur-on-hover group-hover:blur-none focus:blur-none transition duration-300 ease-in-out': isSolution,
      }"
    >
      <iframe
        class="mt-4 w-full h-96 border border-gray-700 rounded-md"
        :src="stackBlitzUrl"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
import { computed, watchEffect } from 'vue';

const props = defineProps(['projectId', 'openFile', 'type']);

const isSolution = computed(() => props.type === 'solution');

const stackBlitzUrl = computed(() => {
  return `https://stackblitz.com/edit/stackblitz-starters-${props.projectId}?embed=1&file=${props.openFile}&view=editor`;
});

watchEffect(() => {
  console.log('Props:', props);
  console.log('StackBlitz URL:', stackBlitzUrl.value);
});
</script>

<style scoped>
.blur-on-hover {
  filter: blur(5px);
  transition: filter 0.3s ease;
}

.blur-on-hover:hover,
.blur-on-hover:focus,
.blur-on-hover:active {
  filter: blur(0);
}
</style>
