<script setup lang="ts">
import { usePosts } from '@/composables/usePosts'
const posts = usePosts()

function formatDate(date: string): string {
  return date?.toString().slice(0, 15) ?? ''
}
</script>

<template>
  <section class="flex gap-8" aria-labelledby="section-title-unique">
    <h1 id="section-title-unique" class="hidden xl:block pb-8 text-8xl font-bold">B<br>L<br>O<br>G</h1>
    <ul class="px-6 mt-12">
      <li class="list-disc py-2" v-for="post in posts" :key="post.slug">
        <router-link :to="`/blog/${post.slug}`">
          {{ post.frontmatter.title }} • {{ formatDate(post.frontmatter.date) }}
        </router-link>
      </li>
    </ul>
  </section>
</template>
