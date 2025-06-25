<script setup lang="ts">
import { useHead } from "@unhead/vue"
import Contributions from "@/components/Contributions.vue";
import { useGithubStore } from '@/stores/github';
import heroImage from '@/assets/images/1696890004250.avif'

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
      content: heroImage
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
      content: heroImage 
    },
    {
      name: "twitter:card",
      content: "summary_large_image"
    }
  ]
});

const githubStore = useGithubStore()
</script>

<template>
  <section
    class="flex flex-col lg:flex-row gap-8 xl:gap-32 items-start px-4 sm:px-8 md:px-12 py-10 max-w-screen-xl mx-auto"
    aria-labelledby="section-title-unique"
  >
    <h1 class="sr-only" id="section-title-unique">
      Florian Beaumont – Frontend Developer &amp; Vue.js Specialist
    </h1>

    <h2 class="hidden lg:flex flex-col text-8xl font-bold text-white leading-none mr-5 select-none">
      <span>D</span>
      <span>E</span>
      <span>V</span>
    </h2>

<div class="w-full max-w-2xl xl:mt-0 mt-4">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
    <div class="text-white font-sans text-base leading-normal max-w-md order-2 lg:order-1">
      <p>
        Hi I'm <span class="text-lg font-bold">Florian</span>
        <br /><br />
        I'm a specialized
        <strong class="font-semibold text-white text-lg">Frontend Developer</strong>
        working mostly with
        <span class="text-emerald-400 font-semibold text-2xl">
          VUE.JS
        </span><br /><br />
        I spend my time exploring
        <span class="text-sky-400 text-lg font-bold">
          OPEN SOURCE
        </span>
        <span aria-hidden="true" role="img">🌱</span>, building fun stuff, and always learning something new.<br /><br />
        I also like experimenting with ideas — building tools and libraries
        across different languages, just to see where they lead.<br /><br />
        If you want to chat, come say hi at a
        <span class="text-white text-xl font-bold">
          Vuejs Paris
        </span>
        meetup or
        <a
          href="https://cal.com/fbeaumont/30min"
          target="_blank"
          rel="noopener noreferrer"
          class="text-teal-100 text-lg font-medium underline underline-offset-8 transition-colors hover:text-emerald-300"
        >book a call</a>.
      </p>
    </div>
    <div class="flex justify-center items-center order-1 lg:order-2">
    <img
      class="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full aspect-video lg:aspect-auto object-cover object-[20%_15%] rounded shadow-xl transform grayscale scale-100 rotate-2 lg:scale-x-[-1] hover:rotate-0 transition-all duration-200 cursor-pointer"
      src="@/assets/images/1696890004250.avif"
      width="530"
      height="300"
      alt="Florian Beaumont – Frontend Developer and Vue.js Expert"
      fetchpriority="high"
    />
    </div>
  </div>
  <Contributions :contributions="githubStore.contributions" class="mt-8 sm:mt-10 xl:mt-14 scale-90" />
</div>
  </section>
</template>
