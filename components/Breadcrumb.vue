<!-- components/Breadcrumb.vue -->
<template>
    <nav class="breadcrumb">
      <ul>
        <li v-for="(breadcrumb, index) in breadcrumbs" :key="index">
          <NuxtLink :to="breadcrumb.link">{{ breadcrumb.text }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </template>

  
  
  <script setup>
  defineProps({
    breadcrumbs: {
      type: Array,
      required: true
    }
  })
  </script>
  
  <style scoped>
  .breadcrumb {
    padding: 10px 20px;
    font-size: 14px;
    background-color: #755555;
    border-bottom: 1px solid #ddd;
  }
  
  .breadcrumb ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .breadcrumb li {
    margin-right: 10px;
  }
  
  .breadcrumb li::after {
    content: '>';
    margin-left: 10px;
  }
  
  .breadcrumb li:last-child::after {
    content: '';
  }
  </style>
  