<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { usePosts } from "@/composables/usePosts";

interface Frontmatter {
  title: string;
  date: string; 
}

interface Post {
 slug: string;
  frontmatter: Frontmatter; 
  html: string; 
}

const route = useRoute();
const router = useRouter();
const all = usePosts();
const post = computed<Post | undefined>(() => all.find((p) => p.slug === route.params.slug));

function goBack() {
  router.back();
}
</script>

<template>
  <div>
    <button @click="goBack" class="mb-6 py-2 bg-black rounded cursor-pointer">
      ← Retour
    </button>
    <article v-if="post && post.frontmatter.title">
      <h1 class="text-6xl pb-8">{{ post.frontmatter.title }}</h1>
      <div v-html="post.html" class="markdown-body prose" />
    </article>
    <p v-else>Article not found…</p>
  </div>
</template>
