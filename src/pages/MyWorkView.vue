<script setup lang="ts">
import { useHead } from "@unhead/vue";
import { ref } from 'vue'
import { motion } from 'motion-v'
import { useGithubStore } from "@/stores/github";
import { useLetterAnimation } from '@/composables/useLetterAnimation';
import { useCardAnimation } from '@/composables/useCardAnimation';

const titleRef = ref()
const { letterStates, getTransition: getLetterTransition } = useLetterAnimation(titleRef, {
  hoverColor: '#10B981',
  glowColor: '#10B981',
  maxRotation: 900,
  maxScale: 1.5,
  maxY: 70,
  maxX: 60,
  resetDelay: 150
})
const { cardStates, getTransition: getCardTransition } = useCardAnimation()

useHead({
  title: "Projects – Florian Beaumont • Vue.js & Frontend Portfolio",
  meta: [
    {
      name: "description",
      content:
        "Discover the portfolio of Florian Beaumont: frontend projects, open-source code, Vue.js & TypeScript applications, and technical challenges. Explore impactful web projects and code samples."
    },
    {
      name: "keywords",
      content:
        "Florian Beaumont, projects, portfolio, Vue.js developer, TypeScript, frontend, open source, web development, code, Github, web apps"
    },
    {
      property: "og:title",
      content: "Projects – Florian Beaumont • Vue.js & Frontend Portfolio"
    },
    {
      property: "og:description",
      content:
        "Browse Florian Beaumont's best projects in Vue.js, TypeScript, and modern frontend engineering. Open source, technical demos and real-world apps."
    },
    {
      property: "og:url",
      content: "https://florianbeaumont.dev/projects"
    },
    {
      property: "og:image",
      content: "https://florianbeaumont.dev/assets/1696890004250-BeJXtn3X.avif"
    },
    {
      name: "twitter:title",
      content: "Florian Beaumont – Vue.js Projects Portfolio"
    },
    {
      name: "twitter:description",
      content:
        "Vue.js & TypeScript projects by frontend expert Florian Beaumont. Explore code, demos and open source contributions."
    },
    {
      name: "twitter:image",
      content: "https://florianbeaumont.dev/assets/1696890004250-BeJXtn3X.avif"
    },
    {
      name: "twitter:card",
      content: "summary_large_image"
    }
  ]
});

const github = useGithubStore();

</script>

<template>
  <section
    class="flex flex-col lg:flex-row gap-8 xl:gap-32 items-start px-4 sm:px-8 scale-90 md:px-12 md:py-10 max-w-screen-xl mx-auto"
    aria-labelledby="section-title-unique"
  >
    <h1 id="section-title-unique" class="sr-only text-2xl">
      Florian Beaumont – Notable Projects in Vue.js &amp; TypeScript
    </h1>

    <h2 ref="titleRef" class="hidden lg:flex flex-col text-8xl font-bold text-white leading-none mr-5 select-none">
      <motion.span 
        class="cursor-pointer"
        :animate="letterStates['letter-0'] || {}"
        :transition="getLetterTransition()"
      >P</motion.span>
      <motion.span 
        class="cursor-pointer"
        :animate="letterStates['letter-1'] || {}"
        :transition="getLetterTransition()"
      >R</motion.span>
      <motion.span 
        class="cursor-pointer"
        :animate="letterStates['letter-2'] || {}"
        :transition="getLetterTransition()"
      >O</motion.span>
    </h2>

    <div class="w-full max-w-3xl xl:mt-0 mt-6">
      <div v-if="github.loadingRepos" class="text-center py-12">Loading…</div>
      <div v-else-if="github.errorRepos" class="text-red-500 text-center py-12">
        Error: {{ github.errorRepos }}
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          v-for="(repo, index) in github.repos"
          :key="repo.id"
          class="project-card border border-stone-400 rounded bg-black p-0 h-full flex flex-col overflow-hidden relative"
          :animate="cardStates[`card-${index}`] || {}"
          :transition="getCardTransition()"
        >
          <a
            class="flex flex-col justify-between p-5 h-full min-h-[11rem]"
            :href="repo.html_url"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Go to {{ repo.name }} repository on GitHub"
          >
            <h2 class="text-emerald-300 font-semibold text-lg break-words -mt-1 mb-1">{{ repo.name }}</h2>
            <p
              class="line-clamp-3 text-sm text-gray-300 my-2 min-h-[2.8rem]"
              v-if="repo.description"
            >
              {{ repo.description }}
            </p>
            <div class="flex gap-4 text-gray-300 text-xs mt-auto">
              <span>{{ repo.language ?? "Vue" }}</span>
              <span class="flex items-center gap-1">
                <span aria-hidden="true" style="color: transparent; text-shadow: 0 0 0 #aaa">
                  ⭐
                </span> 
                {{ repo.stargazers_count }}
              </span>
            </div>
          </a>
        </motion.div>
      </div>
    </div>
  </section>
</template>
