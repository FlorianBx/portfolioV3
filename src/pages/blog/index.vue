<script setup lang="ts">
import { usePosts } from '@/composables/usePosts'
const posts = usePosts()
</script>

<template>
  <section
    class="flex flex-col lg:flex-row gap-8 xl:gap-32 items-start px-4 sm:px-8 scale-90 md:px-12 py-10 max-w-screen-xl mx-auto"
    aria-labelledby="section-title-unique"
  >
    <h1 id="section-title-unique" class="sr-only text-2xl">
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
        class="py-3 text-lg md:text-xl rounded"
      >
        <router-link
          :to="`/blog/${post.slug}`"
          class="flex flex-col xl:flex-ro transition-all hover:no-underline xl:items-start justify-between gap-2 xl:gap-4 underline underline-offset-6 leading-8"
        >
          <span class="font-medium break-words transition-colors hover:text-bold">{{ post.frontmatter.title }}</span>
        </router-link>
      </li>
    </ul>
  </section>
</template>
