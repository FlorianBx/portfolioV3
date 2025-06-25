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
  <section class="flex flex-col xl:flex-row gap-32" aria-labelledby="section-title-unique">
    <h1 class="sr-only" id="section-title-unique">
      Florian Beaumont – Frontend Developer & Vue.js Specialist
    </h1>
    <h2 class="hidden xl:block text-8xl font-bold text-white">D<br />E<br />V</h2>
    <div class="max-w-4xl mt-12">
      <div class="grid lg:grid-cols-2 gap-8">
        <div class="text-white font-sans text-lg leading-relaxed max-w-xl">
          <p>
            Hi I'm <span class="text-xl font-bold">Florian</span> <br /><br />
            I'm a specialized
            <strong class="font-semibold text-white text-xl"
              >Frontend Developer</strong
            >
            working mostly with
            <span class="text-emerald-400 font-semibold text-4xl">VUE.JS</span
            >.<br /><br />
            I spend my time exploring
            <span class="text-sky-400 text-xl font-bold">OPEN SOURCE</span>
            🌱, building fun stuff, and always learning something new.<br /><br />
            I also like experimenting with ideas — building tools and libraries
            across different languages, just to see where they lead.
            <br /><br />
            If you want to chat, come say hi at a <br />
            <span class="text-white text-2xl font-bold">Vuejs Paris</span>
            meetup or
            <a
              href="https://cal.com/fbeaumont/30min"
              target="_blank"
              class="text-teal-100 text-xl font-medium underline underline-offset-8"
              >book a call</a
            >.
          </p>
        </div>
        <img
          class="transform rotate-6 grayscale scale-75 lg:scale-x-[-1] lg:scale-y-[1] hover:rotate-0 duration-150 cursor-pointer rounded"
          src="@/assets/images/1696890004250.avif"
          width="530"
          height="300"
          alt="Florian Beaumont – Frontend Developer and Vue.js Expert"
        />
      </div>
      <Contributions :contributions="githubStore.contributions" class="mt-24" />
    </div>
  </section>
</template>
