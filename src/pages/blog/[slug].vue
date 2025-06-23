<script setup lang="ts">
import { useRoute } from 'vue-router'
import { usePosts } from '@/composables/usePosts'

const route = useRoute()
const all = usePosts()
const post = all.find(p => p.slug === route.params.slug)
</script>

<template>
  <article v-if="post">
    <h1 class="text-6xl pb-8">{{ post.frontmatter.title }}</h1>
    <div v-html="post.html" class="markdown-body" />
  </article>
  <p v-else>Article not found…</p>
</template>

