<script setup lang="ts">
import { useHead } from "@unhead/vue";

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
    <header>
      <nav class="pb-8 flex gap-4">
        <RouterLink class="cursor-pointer" to="/">Home</RouterLink>
        <RouterLink class="cursor-pointer" to="/blog">Blog</RouterLink>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
    <footer class="fixed bottom-0 text-center w-full text-white">
      <p>Made with ❤️ by me</p>
    </footer>
</template>
