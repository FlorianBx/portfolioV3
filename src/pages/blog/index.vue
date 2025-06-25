<script setup lang="ts">
import { usePosts } from '@/composables/usePosts'
const posts = usePosts()

function formatDate(date: string): string {
  return date?.toString().slice(4, 15) ?? ''
}
</script>

<template>
  <section
    class="flex flex-col lg:flex-row gap-8 xl:gap-32 items-start px-4 sm:px-8 scale-90 md:px-12 py-10 max-w-screen-xl mx-auto"
    aria-labelledby="section-title-unique"
  >
    <h1 id="section-title-unique" class="sr-only">
      Florian Beaumont – Technical Blog &amp; Vue.js Learning
    </h1>

    <h2 class="hidden lg:flex flex-col justify-start items-center mr-5 mt-0 pb-0 text-8xl font-bold leading-none select-none">
      <span>B</span>
      <span>L</span>
      <span class="relative">O
      <span class="absolute top-15 left-11 text-[0.4em]">G</span>
      </span>
    </h2>

    <ul class="w-full max-w-2xl prose prose-li:mb-0 prose-li:mt-0 dark:prose-invert xl:mt-0 mt-6">
      <li
        v-for="post in posts"
        :key="post.slug"
        class="py-3 text-lg md:text-xl transition-colors hover:bg-gray-50 dark:hover:bg-gray-900 rounded"
      >
        <router-link
          :to="`/blog/${post.slug}`"
          class="flex flex-col xl:flex-row xl:items-center justify-between gap-2 xl:gap-4 underline underline-offset-4"
        >
          <span class="font-medium break-words">{{ post.frontmatter.title }}</span>
          <span class="text-xs bg-white text-black px-2.5 py-1.5 rounded self-start xl:self-auto mt-1 xl:mt-0">
            {{ formatDate(post.frontmatter.date) }}
          </span>
        </router-link>
      </li>
    </ul>
  </section>
</template>
