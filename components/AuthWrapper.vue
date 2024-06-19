<template>
    <div class="p-6">
      <div v-if="authenticated">
        <slot />
      </div>
      <div v-else class="auth-container">
        <h1 class="text-2xl font-semibold mb-4">Enter Password</h1>
        <input v-model="password" type="password" placeholder="Password" class="password-input" />
        <button @click="login" class="login-button">Login</button>
        <div v-if="error" class="text-red-500 mt-2">{{ error }}</div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const password = ref('');
  const authenticated = ref(false);
  const error = ref('');
  
  const correctPassword = '123'; // Replace with your desired password
  
  const login = () => {
    if (password.value === correctPassword) {
      authenticated.value = true;
      error.value = '';
    } else {
      error.value = 'Incorrect password. Please try again.';
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 600px;
    margin: auto;
    text-align: center;
  }
  
  .auth-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .password-input {
    @apply p-3 border rounded-lg shadow-sm w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300;
  }
  
  .login-button {
    @apply mt-4 p-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-700 transition duration-200;
  }
  </style>
  