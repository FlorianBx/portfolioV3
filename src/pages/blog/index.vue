<script setup lang="ts">
import { usePosts } from '@/composables/usePosts'
const posts = usePosts()

function formatDate(date: string): string {
  return date?.toString().slice(4, 15) ?? ''
}
</script>

<template>
  <section class="flex gap-8 prose dark:prose-invert" aria-labelledby="section-title-unique">
    <h1 id="section-title-unique" class="sr-only">Florian Beaumont – Technical Blog & Vue.js Learning</h1>
    <h2 class="hidden xl:block pb-8 mt-0 text-8xl font-bold">B<br>L<br>O<br>G</h2>
    <ul class="px-6 mt-12 xl:min-w-4xl">
      <li class="list-disc py-2 text-xl underline-offset-6" v-for="post in posts" :key="post.slug">
        <router-link :to="`/blog/${post.slug}`" class="flex justify-between gap-4">
          {{ post.frontmatter.title }}<br>
          <span class="hidden xl:block text-xs bg-white text-black px-2.5 py-1.5 rounded no-underline">{{ formatDate(post.frontmatter.date) }}</span>
        </router-link>
      </li>
    </ul>
  </section>
</template>
