<script setup lang="ts">
import { usePosts } from '@/composables/usePosts'
import { ref } from 'vue'
import { motion } from 'motion-v'
import { useLetterAnimation } from '@/composables/useLetterAnimation'

const posts = usePosts()
const titleRef = ref()
const { letterStates, getTransition } = useLetterAnimation(titleRef, {
  hoverColor: '#F59E0B',
  glowColor: '#F59E0B',
  maxRotation: 1080,
  maxScale: 3.0,
  maxY: 90,
  maxX: 80,
  resetDelay: 100
})
</script>

<template>
  <section
    class="flex flex-col lg:flex-row gap-4 sm:gap-8 xl:gap-32 items-start px-2 xs:px-4 sm:px-8 md:px-12 py-6 sm:py-10 max-w-screen-xl mx-auto"
    aria-labelledby="section-title-unique"
  >
    <h1 id="section-title-unique" class="sr-only text-2xl">
      Florian Beaumont – Technical Blog &amp; Vue.js Learning
    </h1>

    <h2 ref="titleRef" class="hidden lg:flex flex-col justify-start items-center mr-5 mt-0 pb-0 text-8xl font-bold leading-none select-none">
      <motion.span 
        class="cursor-pointer"
        :animate="letterStates['letter-0-0'] || {}"
        :transition="getTransition()"
      >B</motion.span>
      <motion.span 
        class="cursor-pointer"
        :animate="letterStates['letter-1-0'] || {}"
        :transition="getTransition()"
      >L</motion.span>
      <motion.span 
        class="relative cursor-pointer"
        :animate="letterStates['letter-2-0'] || {}"
        :transition="getTransition()"
      >O
        <motion.span 
          class="absolute top-15 left-11 text-[0.4em] cursor-pointer"
          :animate="letterStates['letter-2-1'] || {}"
          :transition="getTransition()"
        >G</motion.span>
      </motion.span>
    </h2>

    <ul class="w-full max-w-2xl prose prose-li:mb-0 prose-li:mt-0 dark:prose-invert xl:mt-0 mt-4 sm:mt-6">
      <li
        v-for="post in posts"
        :key="post.slug"
        class="py-2 sm:py-3 text-base sm:text-lg md:text-xl rounded"
      >
        <router-link
          :to="`/blog/${post.slug}`"
          class="flex flex-col xl:flex-ro transition-all hover:no-underline xl:items-start justify-between gap-2 xl:gap-4 underline underline-offset-4 sm:underline-offset-6 leading-6 sm:leading-8"
        >
          <span class="font-medium break-words transition-colors hover:text-bold text-sm sm:text-base md:text-lg">{{ post.frontmatter.title }}</span>
        </router-link>
      </li>
    </ul>
  </section>
</template>
