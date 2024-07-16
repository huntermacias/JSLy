<template>
  <div class="link-preview-wrapper">
    <a
      :href="href"
      @mouseover="showPreview"
      @mouseleave="hidePreview"
      ref="link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <slot></slot>
    </a>
    <div
      v-if="visible"
      class="link-preview"
      :style="{ top: `${position.top}px`, left: `${position.left}px` }"
    >
      <img :src="image" alt="Preview Image" v-if="image" />
      <div class="link-preview-content">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      visible: false,
      position: { top: 0, left: 0 },
    };
  },
  methods: {
    showPreview(event) {
      this.visible = true;
      const linkRect = this.$refs.link.getBoundingClientRect();
      this.position = {
        top: linkRect.top + window.scrollY + linkRect.height,
        left: linkRect.left + window.scrollX,
      };
    },
    hidePreview() {
      this.visible = false;
    },
  },
};
</script>

<style>
.link-preview-wrapper {
  position: relative;
}

.link-preview {
  position: absolute;
  z-index: 1000;
  border: 1px solid #ddd;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  width: 250px;
}

.link-preview img {
  width: 100%;
  height: auto;
}

.link-preview-content {
  padding: 10px;
}

.link-preview-content h3 {
  margin: 0;
  font-size: 16px;
}

.link-preview-content p {
  margin: 0;
  color: #555;
}
</style>
