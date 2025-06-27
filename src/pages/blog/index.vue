<script setup lang="ts">
import { usePosts } from '@/composables/usePosts'
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'

const posts = usePosts()
const titleRef = ref()

onMounted(() => {
  const letters = titleRef.value?.children
  if (!letters) return
  
  Array.from(letters).forEach((letter, index) => {
    const el = letter as HTMLElement
    const spans = el.querySelectorAll('span')
    const targets = spans.length > 0 ? Array.from(spans) : [el]
    
    targets.forEach((span, spanIndex) => {
      span.addEventListener('mouseenter', () => {
        const randomRotation = (Math.random() - 0.5) * 1080
        const randomScale = 1.8 + Math.random() * 1.2
        const randomY = -40 - Math.random() * 50
        const randomX = (Math.random() - 0.5) * 80
        
        gsap.to(span, {
          rotation: randomRotation,
          scale: randomScale,
          y: randomY,
          x: randomX,
          color: "#F59E0B",
          textShadow: "0 0 40px #F59E0B, 0 0 80px #F59E0B",
          duration: 1,
          ease: "expo.out",
          transformOrigin: "center center"
        })
      })
      
      span.addEventListener('mouseleave', () => {
        gsap.to(span, {
          rotation: 0,
          scale: 1,
          y: 0,
          x: 0,
          color: "#ffffff",
          textShadow: "none",
          duration: 1.5,
          ease: "elastic.out(1, 0.3)",
          delay: (index + spanIndex) * 0.1
        })
      })
    })
  })
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
      <span class="cursor-pointer">B</span>
      <span class="cursor-pointer">L</span>
      <span class="relative cursor-pointer">O
        <span class="absolute top-15 left-11 text-[0.4em] cursor-pointer">G</span>
      </span>
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
