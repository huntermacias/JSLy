<template>
    <label class="checkbox-container">
      <input type="checkbox" :checked="isChecked" @change="handleChange" />
      <span class="checkmark"></span>
      <span class="icon"><slot name="icon"></slot></span>
      <slot></slot>
    </label>
  </template>
  
  <script>
  export default {
    props: {
      id: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        isChecked: false
      };
    },
    mounted() {
      const savedState = localStorage.getItem(this.id);
      if (savedState !== null) {
        this.isChecked = JSON.parse(savedState);
      }
    },
    methods: {
      handleChange() {
        this.isChecked = !this.isChecked;
        localStorage.setItem(this.id, this.isChecked);
      }
    }
  };
  </script>