<script setup lang="ts">
import { useHead } from "@unhead/vue"
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Contributions from "@/components/Contributions.vue";
import { useGithubStore } from '@/stores/github';

gsap.registerPlugin(ScrollTrigger);

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

const sectionRef = ref()
const titleRef = ref()
const textRef = ref()
const imageRef = ref()

onMounted(() => {
  const handleMouseMove = (e: MouseEvent) => {
    const imageRect = imageRef.value?.getBoundingClientRect()
    if (!imageRect) return
    
    const imageCenterX = imageRect.left + imageRect.width / 2
    const imageCenterY = imageRect.top + imageRect.height / 2
    
    const distance = Math.sqrt(
      Math.pow(e.clientX - imageCenterX, 2) + Math.pow(e.clientY - imageCenterY, 2)
    )
    
    const attractionZone = 350
    const maxAttraction = 80
    
    if (distance < attractionZone) {
      const strength = Math.max(0, 1 - distance / attractionZone)
      const deltaX = (e.clientX - imageCenterX) * strength * 0.3
      const deltaY = (e.clientY - imageCenterY) * strength * 0.3
      
      gsap.to(imageRef.value, {
        x: Math.min(Math.max(deltaX, -maxAttraction), maxAttraction),
        y: Math.min(Math.max(deltaY, -maxAttraction), maxAttraction),
        duration: 0.4,
        ease: "power2.out"
      })
    } else {
      gsap.to(imageRef.value, {
        x: 0,
        y: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.6)"
      })
    }
  }
  
  const handleMouseLeave = () => {
    gsap.to(imageRef.value, {
      x: 0,
      y: 0,
      duration: 1.2,
      ease: "power3.out"
    })
  }
  
  const letters = titleRef.value?.children
  if (!letters) return
  
  Array.from(letters).forEach((letter, index) => {
    const el = letter as HTMLElement
    el.addEventListener('mouseenter', () => {
      const randomRotation = (Math.random() - 0.5) * 720
      const randomScale = 1.2 + Math.random() * 0.8
      const randomY = -20 - Math.random() * 30
      
      gsap.to(el, {
        rotation: randomRotation,
        scale: randomScale,
        y: randomY,
        color: "#2DD4BF",
        textShadow: "0 0 20px #2DD4BF, 0 0 40px #2DD4BF",
        duration: 0.6,
        ease: "back.out(2)",
        transformOrigin: "center center"
      })
    })
    
    el.addEventListener('mouseleave', () => {
      gsap.to(el, {
        rotation: 0,
        scale: 1,
        y: 0,
        color: "#ffffff",
        textShadow: "none",
        duration: 1,
        ease: "elastic.out(1, 0.5)",
        delay: index * 0.1
      })
    })
  })
  
  document.addEventListener('mousemove', handleMouseMove)
  sectionRef.value?.addEventListener('mouseleave', handleMouseLeave)
})
</script>

<template>
  <section
    ref="sectionRef"
    class="flex flex-col lg:flex-row gap-8 xl:gap-32 items-start px-4 sm:px-8 md:px-12 py-10 max-w-screen-xl mx-auto"
    aria-labelledby="section-title-unique"
  >
    <h1 class="sr-only text-2xl" id="section-title-unique">
      Florian Beaumont – Frontend Developer &amp; Vue.js Specialist
    </h1>

    <h2 ref="titleRef" class="hidden lg:flex flex-col text-8xl font-bold text-white leading-none mr-5 select-none">
      <span class="hover:text-emerald-400 transition-colors duration-300">D</span>
      <span class="hover:text-emerald-400 transition-colors duration-300">E</span>
      <span class="hover:text-emerald-400 transition-colors duration-300">V</span>
    </h2>

<div class="w-full max-w-2xl xl:mt-0 mt-4">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
    <div ref="textRef" class="text-white font-sans text-base leading-normal max-w-md order-2 lg:order-1">
      <p>
        Hi I'm <span class="text-lg font-bold">Florian</span>
        <br /><br />
        I'm a specialized
        <strong class="font-semibold text-white text-lg">Frontend Developer</strong>
        working mostly with
        <span class="text-emerald-400 font-semibold text-2xl hover-glow cursor-pointer">
          VUE.JS
        </span><br /><br />
        I spend my time exploring
        <span class="text-sky-400 text-lg font-bold hover-glow cursor-pointer">
          OPEN SOURCE
        </span>
        <span aria-hidden="true" role="img">🌱</span>, building fun stuff, and always learning something new.<br /><br />
        I also like experimenting with ideas — building tools and libraries
        across different languages, just to see where they lead.<br /><br />
        If you want to chat, come say hi at a
        <span class="text-white text-xl font-bold hover-glow cursor-pointer">
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
        ref="imageRef"
        src="/images/medium-avatar.avif"
        srcset="
          /images/small-avatar.avif 320w,
          /images/medium-avatar.avif 530w
        "
        sizes="(max-width: 640px) 320px, 530px"
        width="530"
        height="300"
        alt="Florian Beaumont – Frontend Developer and Vue.js Expert"
        class="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full lg:scale-x-[-1] aspect-video lg:aspect-auto object-cover object-[20%_15%] rounded shadow-xl grayscale rotate-3 rounded cursor-pointer"
        fetchpriority="high"
      />
    </div>
  </div>
  <Contributions :contributions="githubStore.contributions" class="mt-8 sm:mt-10 xl:mt-14" />
</div>
  </section>
</template>
