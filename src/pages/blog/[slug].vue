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
  <div class="px-8">
    <button @click="goBack" class="text-2xl mb-10 py-4 bg-black rounded cursor-pointer">
      ← Retour
    </button>
    <article class="prose dark:prose-invert min-w-4xl" v-if="post && post.frontmatter.title">
      <h1 class="text-4xl pb-0">{{ post.frontmatter.title }}</h1>
      <div v-html="post.html" class="markdown-body" />
    </article>
    <p v-else>Article not found…</p>
  </div>
</template>
