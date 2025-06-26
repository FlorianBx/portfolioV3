<script setup lang="ts">
import { useHead } from "@unhead/vue";
import ArticleIcon from "@/components/ArticleIcon.vue";
import HomeIcon from "@/components/HomeIcon.vue";
import GithubIcon from "@/components/GithubIcon.vue";
import LinkedinIcon from "@/components/LinkedinIcon.vue";
import MyWorkIcon from "@/components/MyWorkIcon.vue";
import { computed, onMounted, ref } from "vue";
import { gsap } from 'gsap';

useHead({
  title: "Florian Beaumont – Frontend Developer, Vue 3 & TypeScript Specialist",
  meta: [
    {
      name: "description",
      content:
        "Florian Beaumont is a freelance frontend developer specializing in Vue.js 3 and TypeScript. Building modern web apps, giving tech talks, and sharing open-source resources.",
    },
    {
      property: "og:site_name",
      content: "Florian Beaumont | Frontend Developer",
    },
    {
      property: "og:title",
      content: "Florian Beaumont – Vue 3 & TypeScript Specialist",
    },
    {
      property: "og:description",
      content:
        "Florian Beaumont is a freelance frontend developer and educator focusing on Vue.js 3, TypeScript, and modern web performance.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://florianbeaumont.dev/" },
    {
      property: "og:image",
      content: "https://florianbeaumont.dev/images/small-avatar.avif",
    },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "Florian Beaumont – Vue.js Expert & Frontend Trainer",
    },
    {
      name: "twitter:description",
      content:
        "Freelance Vue 3 developer. Projects, talks, open-source and technical content by Florian Beaumont.",
    },
    {
      name: "twitter:image",
      content: "https://florianbeaumont.dev/images/small-avatar.avif",
    },
    { name: "twitter:creator", content: "@florianbeaumont" },
  ],
  link: [{ rel: "canonical", href: "https://florianbeaumont.dev/" }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "https://florianbeaumont.dev/#person",
        name: "Florian Beaumont",
        url: "https://florianbeaumont.dev/",
        image: "https://florianbeaumont.dev/images/small-avatar.avif",
        jobTitle: "Frontend Developer",
        worksFor: {
          "@type": "Organization",
          name: "Freelance",
        },
        sameAs: [
          "https://github.com/florianbx",
          "https://twitter.com/florianbx",
          "https://linkedin.com/in/florianbeaumont",
          "https://bsky.app/profile/did:plc:fcxpk2natbmzqzpgyljre4hx",
        ],
        knowsAbout: [
          "Vue.js",
          "TypeScript",
          "Frontend",
          "Web Performance",
          "Open Source",
        ],
      }),
    },
  ],
});

const hasMounted = ref(false);

onMounted(() => {
  hasMounted.value = true;
  
  const orbs = document.querySelectorAll('.bg-orb');
  
  gsap.set(orbs, { transformOrigin: "center center" });
  
  gsap.to(orbs[0], {
    rotation: 360,
    duration: 50,
    repeat: -1,
    ease: "none"
  });
  
  gsap.to(orbs[1], {
    rotation: -360,
    duration: 40,
    repeat: -1,
    ease: "none"
  });
  
  gsap.to(orbs[2], {
    rotation: 360,
    duration: 60,
    repeat: -1,
    ease: "none"
  });
  
  const handleMouseMove = (e: MouseEvent) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    
    gsap.to(orbs[0], {
      x: x * 60,
      y: y * 60,
      scale: 1 + Math.abs(x) * 0.2,
      duration: 1.5,
      ease: "power3.out"
    });
    
    gsap.to(orbs[1], {
      x: x * 40,
      y: y * 40,
      scale: 1 + Math.abs(y) * 0.15,
      duration: 1.8,
      ease: "power3.out"
    });
    
    gsap.to(orbs[2], {
      x: x * 50,
      y: y * 50,
      scale: 1 + Math.abs(x + y) * 0.1,
      duration: 1.6,
      ease: "power3.out"
    });
  };
  
  document.addEventListener('mousemove', handleMouseMove);
});

const transitionAppear = computed(() => hasMounted.value);
const transitionPage = computed(() => "page");
</script>

<template>
  <div class="bg-black text-white min-h-screen relative overflow-hidden">
    <!-- Background effects container -->
    <div class="fixed inset-0 pointer-events-none">
      <!-- Subtle texture overlay -->
      <div class="absolute inset-0 opacity-30 bg-noise"></div>
      
      <!-- Animated light orbs with parallax -->
      <div class="bg-orb absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-float-slow transition-transform duration-100 ease-out orb-emerald-1"></div>
      <div class="bg-orb absolute top-3/4 right-1/4 w-64 h-64 rounded-full blur-2xl animate-float-delayed transition-transform duration-150 ease-out orb-teal-1"></div>
      <div class="bg-orb absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full blur-3xl animate-float-reverse transition-transform duration-200 ease-out orb-emerald-2"></div>
    </div>
    <div class="p-4 min-h-(--screen-minus-nav)">
      <header class="flex justify-end">
        <a href="#main" class="skip-link">Skip to main content</a>
        <nav class="pb-8 flex gap-4">
          <RouterLink
            class="nav-link group"
            to="/"
            active-class="text-emerald-400"
            exact-active-class="text-emerald-400"
          >
            <div class="nav-icon-wrapper">
              <HomeIcon aria-hidden="true" focusable="false" />
            </div>
            <span class="sr-only">to the home</span>
          </RouterLink>
          <RouterLink
            class="nav-link group"
            to="/my-work"
            active-class="text-emerald-400"
            exact-active-class="text-emerald-400"
          >
            <div class="nav-icon-wrapper">
              <MyWorkIcon aria-hidden="true" focusable="false" />
            </div>
            <span class="sr-only">to my work</span>
          </RouterLink>
          <RouterLink
            class="nav-link group"
            to="/blog"
            active-class="text-emerald-400"
          >
            <div class="nav-icon-wrapper">
              <ArticleIcon aria-hidden="true" focusable="false" />
            </div>
            <span class="sr-only">to the blog</span>
          </RouterLink>
          <a
            class="nav-link group"
            href="https://www.linkedin.com/in/florianbeaumont"
            target="_blank"
          >
            <div class="nav-icon-wrapper">
              <LinkedinIcon aria-hidden="true" focusable="false" />
            </div>
            <span class="sr-only">to my Linkedin</span>
          </a>
          <a
            class="nav-link group m-0.5"
            href="https://github.com/FlorianBx"
            target="_blank"
          >
            <div class="nav-icon-wrapper">
              <GithubIcon aria-hidden="true" focusable="false" />
            </div>
            <span class="sr-only">to my Github</span>
          </a>
        </nav>
      </header>
      <main id="main">
        <router-view v-slot="{ Component }">
          <transition
            :name="transitionPage"
            mode="out-in"
            :appear="transitionAppear"
          >
            <KeepAlive>
              <component :is="Component" />
            </KeepAlive>
          </transition>
        </router-view>
      </main>
    </div>
    <footer
      aria-label="Footer – author credit"
      class="relative bottom-4 mt-8 w-full text-center"
    >
      <p class="text-xs">
        <span aria-hidden="true" class="text-stone-300">
          Made with
          <span style="color: transparent; text-shadow: 0 0 0 #aaa">❤️</span>
          by me
        </span>
        <span class="sr-only">Made with love by Florian Beaumont</span>
      </p>
    </footer>
  </div>
</template>

<style scoped>
.skip-link {
  position: absolute;
  top: -3rem;
  left: 0;
  background-color: #000;
  color: #fff;
  padding: 0.5rem 1rem;
  z-index: 1000;
  text-decoration: none;
  font-size: 0.875rem;
  transition: all 0.3s ease;
}

.skip-link:focus {
  top: 0;
}

.page-enter-active {
  transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.page-leave-active {
  transition: all 0.15s cubic-bezier(0.55, 0.06, 0.68, 0.19);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.page-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
