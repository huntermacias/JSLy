<script setup>
import BlogCard from "~/components/blog/BlogCard.vue";

const contentQuery = await queryContent('blog/posts').sort(
  { date: -1, }
).find()
useSeoMeta({
  title: 'My Amazing Site',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://ui.aceternity.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1441974231531-c6227db76b6e%3Fq%3D80%26w%3D2560%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&w=1080&q=75',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="relative">
    <Ellipsis right="0" width="85%" blur="150px" />
    <LandingBanner
      badge-text="Release v0.01.3"
      text="Discover the latest updates in JSLy."
      link="https://jsly.vercel.app"
      link-text="Explore Now →"
    />
  </div>
  <div class="relative min-h-screen">
    <section class="BlogContainer relative py-16">
      <div class="container mx-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div class="mb-16 text-center">
          <h2 class="text-5xl font-extrabold text-gray-800 md:text-7xl dark:text-white transition duration-300">
            Latest Insights
          </h2>
          <p class="lg:mx-auto lg:w-7/12 text-gray-600 dark:text-gray-300 text-2xl transition duration-300 mt-4">
            Stay updated with the latest news and trends from Hunter's world of tech and beyond.
          </p>
        </div>
        <div class="grid gap-8 sm:grid-cols-2 xl:grid-cols-3 mx-4 pb-12">
          <Ellipsis left="0" width="80rem" top="50rem" blur="150px" />
          <BlogCard
            v-for="post in contentQuery"
            :post="post"
            :key="post._id"
            class="transform transition duration-500 hover:scale-105 hover:shadow-lg"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.BlogContainer {
  @apply mx-auto max-w-7xl;
}

.Ellipsis {
  @apply absolute inset-0 z-0 opacity-50;
}

.LandingBanner {
  @apply z-10;
}

h2 {
  @apply transition duration-300;
}

p {
  @apply transition duration-300 mt-4;
}

.BlogCard {
  @apply transform transition duration-500 hover:scale-105 hover:shadow-lg;
}

body.dark .text-gray-800 {
  @apply text-white;
}

body.dark .text-gray-600 {
  @apply text-gray-300;
}

body.dark .bg-gray-50 {
  @apply bg-gray-900;
}

body.dark .bg-gray-100 {
  @apply bg-gray-800;
}
</style>
