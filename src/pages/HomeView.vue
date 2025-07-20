<script setup lang="ts">
import { useHead } from "@unhead/vue"
import { ref } from 'vue'
import { motion } from 'motion-v'
import Contributions from "@/components/Contributions.vue";
import { useGithubStore } from '@/stores/github';
import { useLetterAnimation } from '@/composables/useLetterAnimation';


useHead({
  title: "Florian Beaumont – Frontend Developer • Vue.js & TypeScript Specialist",
  meta: [
    {
      name: "description",
      content: "Florian Beaumont is a frontend developer specializing in modern Vue.js and TypeScript. Discover open-source projects, talks, technical tutorials, and web performance insights."
    },
    {
      name: "keywords",
      content: "Florian Beaumont, Vue.js developer, TypeScript expert, frontend, open source, web performance, technical blog, freelance developer"
    },
    {
      property: "og:title",
      content: "Florian Beaumont – Expert in Vue.js and TypeScript"
    },
    {
      property: "og:description",
      content: "Explore projects, articles, and resources by Florian Beaumont, a specialist in modern frontend technologies with a passion for Vue.js and open source."
    },
    {
      property: "og:url",
      content: "https://florianbeaumont.dev/"
    },
    {
      property: "og:image",
      content: "https://florianbeaumont.dev/images/small-avatar.avif"
    },
    {
      name: "twitter:title",
      content: "Florian Beaumont – Vue.js & Frontend Professional"
    },
    {
      name: "twitter:description",
      content: "Freelance frontend engineer focused on state-of-the-art web development with Vue.js and TypeScript. Read blog posts, check talks, and see open source contributions."
    },
    {
      name: "twitter:image",
      content: "https://florianbeaumont.dev/images/small-avatar.avif"
    },
    {
      name: "twitter:card",
      content: "summary_large_image"
    }
  ]
});

const githubStore = useGithubStore()

const titleRef = ref()
const { letterStates, getTransition } = useLetterAnimation(titleRef, {
  hoverColor: '#2DD4BF',
  glowColor: '#2DD4BF',
  maxRotation: 720,
  maxScale: 0.8,
  maxY: 50,
  resetDelay: 100
})
</script>

<template>
  <section
    ref="sectionRef"
    class="flex flex-col justify-start px-4 sm:px-8 md:px-12 lg:px-16 py-8 max-w-7xl mx-auto relative"
    aria-labelledby="section-title-unique"
  >
    <h1 class="sr-only text-2xl" id="section-title-unique">
      Florian Beaumont – Frontend Developer &amp; Vue.js Specialist
    </h1>

    <div class="text-center">
      <div class="block md:hidden mb-6">
        <img
          src="/images/medium-avatar.avif"
          srcset="
          /images/small-avatar.avif 320w,
          /images/medium-avatar.avif 530w
          "
          sizes="80px"
          width="80"
          height="80"
          alt="Florian Beaumont"
          class="w-26 h-26 sm:w-20 sm:h-20 grayscale rounded-full object-cover border-2 border-emerald-400/30 mx-auto"
          fetchpriority="high"
        />
      </div>
      
      <p class="bg-slate-800 inline-block px-4 rounded-full py-2 text-emerald-300 text-xs sm:text-xs font-medium mb-6 tracking-wide sm:tracking-wider">
        Vue.js & Open Source Enthusiast
      </p>

      <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
        Building Cool<span class="text-emerald-400"> Stuff</span><br />
        With Passion
      </h2>

      <p class="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2 sm:px-0">
        Hi, I'm <motion.span 
          :animate="{ y: [0, -12, 0, -15, 0, -10, 0], scale: [1, 2.05, 1, 1.03, 3, 1.02, 1], rotate: [0, 10, -12, -360, 10, -3] }"
          :transition="{ duration: 1.2, delay: 0.5, easing: [0.25, 0.46, 0.45, 0.94] }"
          class="px-1 font-bold text-white inline-block"
        >Florian</motion.span> 👋 - a frontend developer passionate about Vue.js and open source.
        I spend my time building fun stuff, exploring new technologies, and co-organizing
        Vue.js Paris meetups. Let's create something amazing together!
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sm:mb-16">
        <a 
          href="https://cal.com/fbeaumont/30min"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 hover:scale-105 transform w-full sm:w-auto max-w-xs"
        >
          Book Now →
        </a>
        <RouterLink 
          to="/my-work"
          class="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 w-full sm:w-auto max-w-xs"
        >
          My Work
        </RouterLink>
      </div>
    </div>

    <div class="mt pt sm:pt- md:pt-">
      <Contributions :contributions="githubStore.contributions" />
    </div>
  </section>
</template>
