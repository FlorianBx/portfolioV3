<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { usePosts } from "@/composables/usePosts";
import { useDebounce } from "@vueuse/core";

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
const debouncedPost = useDebounce(post, 400);

function formatDate(date: string): string {
  return date?.toString().slice(4, 15) ?? ''
}

function goBack() {
  router.back();
}
</script>

<template>
  <div class="px-4 sm:px-6 md:px-8 lg:px-16 py-4 max-w-screen-xl mx-auto">
    <button
      @click="goBack"
      class="sticky top-0 z-30 w-full sm:w-auto flex items-center gap-2 text-base sm:text-2xl font-medium mb-8 sm:mb-10 py-3 sm:py-4 px-0 bg-black text-white rounded-md cursor-pointer transition-colors hover:text-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black"
      aria-label="Retour à la liste des articles"
    >
      <span aria-hidden="true">←</span> Back
    </button>
    <div class="flex justify-center">
      <article
        v-if="post && post.frontmatter.title"
        class="w-full max-w-prose lg:max-w-3xl prose prose-sm sm:prose md:prose-lg dark:prose-invert"
      >
        <h1 class="-mx-4 text-2xl sm:text-3xl md:text-4xl font-bold pb-2 break-words">
          {{ post.frontmatter.title }}
        </h1>
        <span class="text-xs bg-white text-black px-2.5 py-1.5 rounded mt-1 xl:mt-0">
          {{ formatDate(post.frontmatter.date) }}
        </span>
        <div class="-mx-4 mt-4 sm:mx-0">
          <div 
            v-html="post.html" 
            class="text-xs sm:text-base"
            :class="{'overflow-x-auto': true, 'min-w-full': true, 'block': true}" 
            style="scrollbar-width: thin;"
          />
        </div>
      </article>
      <p v-else-if="!debouncedPost" class="text-center text-gray-500 italic">Article not found…</p>
    </div>
  </div>
</template>
