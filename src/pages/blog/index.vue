<script setup lang="ts">
import { usePosts } from '@/composables/usePosts'
const posts = usePosts()
</script>
<template>
  <div>
    <h1>Blog</h1>
    <ul>
      <li v-for="post in posts" :key="post.slug">
        <router-link :to="`/blog/${post.slug}`">
          {{ post.frontmatter.title }} • {{ post.frontmatter.date }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
