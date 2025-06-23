<script setup lang="ts">
import { useHead } from "@unhead/vue";
import ArticleIcon from "@/components/ArticleIcon.vue";
import HomeIcon from "@/components/HomeIcon.vue";
import GithubIcon from "@/components/GithubIcon.vue";
import LinkedinIcon from "@/components/LinkedinIcon.vue";
import MyWorkIcon from "@/components/MyWorkIcon.vue";

useHead({
  title:
    "Florian Beaumont Frontend Developer – Vue 3 Specialist & Open Source Contributor",
  meta: [
    {
      name: "description",
      content:
        "Hi! I’m a freelance frontend developer specialized in Vue 3. I build performant web interfaces and contribute to open source projects.",
    },
    {
      property: "og:title",
      content: "Frontend Developer – Vue 3 Expert",
    },
    {
      property: "og:description",
      content:
        "Freelance developer focused on modern frontend development with Vue 3, TypeScript and open-source contributions.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://ton-site.netlify.app/",
    },
  ],
});
</script>

<template>
  <div class="p-4 bg-black text-white h-screen">
    <header class="flex justify-end">
      <a href="#main" class="skip-link">Skip to main content</a>
      <nav class="pb-8 flex gap-4">
        <RouterLink
          class="cursor-pointer hover:text-emerald-300"
          to="/"
          active-class="text-emerald-400"
          exact-active-class="text-emerald-400"
        >
          <HomeIcon aria-hidden="true" focusable="false" />
          <span class="sr-only">to the home</span>
        </RouterLink>
        <RouterLink
          class="cursor-pointer"
          to="/blog"
          active-class="text-emerald-400"
          exact-active-class="text-emerald-400"
        >
          <ArticleIcon aria-hidden="true" focusable="false" />
          <span class="sr-only">to the blog</span>
        </RouterLink>
        <RouterLink
          class="cursor-pointer"
          to="/my-work"
          active-class="text-emerald-400"
          exact-active-class="text-emerald-400"
        >
          <MyWorkIcon aria-hidden="true" focusable="false" />
          <span class="sr-only">to my work</span>
        </RouterLink>
        <a
          class="cursor-pointer"
          href="https://github.com/FlorianBx"
          target="_blank"
        >
          <GithubIcon aria-hidden="true" focusable="false" />
          <span class="sr-only">to my Github</span>
        </a>
        <a
          class="cursor-pointer"
          href="https://www.linkedin.com/in/florianbeaumont"
          target="_blank"
        >
          <LinkedinIcon aria-hidden="true" focusable="false" />
          <span class="sr-only">to my Linkedin</span>
        </a>
      </nav>
    </header>
    <main id="main">
      <Transition name="page" mode="out-in" appear>
        <router-view />
      </Transition>
    </main>
  </div>
  <footer
    aria-label="Footer – author credit"
    class="fixed bottom-4 w-full text-center"
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
  transition: top 0.3s ease;
}

.skip-link:focus {
  top: 0;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateX(-40px);
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
  transform: translateX(20px);
}
</style>
