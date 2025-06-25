<script setup lang="ts">
import { useHead } from "@unhead/vue";
import ArticleIcon from "@/components/ArticleIcon.vue";
import HomeIcon from "@/components/HomeIcon.vue";
import GithubIcon from "@/components/GithubIcon.vue";
import LinkedinIcon from "@/components/LinkedinIcon.vue";
import MyWorkIcon from "@/components/MyWorkIcon.vue";

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
      content: "https://florianbeaumont.dev/images/small-avatar.avif"
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
      content: "https://florianbeaumont.dev/images/small-avatar.avif"
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
          "https://bsky.app/profile/did:plc:fcxpk2natbmzqzpgyljre4hx"
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
</script>

<template>
  <div class="bg-black text-white min-h-screen">
    <div class="p-4 min-h-(--screen-minus-nav)">
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
            class="cursor-pointer hover:text-emerald-300"
            to="/my-work"
            active-class="text-emerald-400"
            exact-active-class="text-emerald-400"
          >
            <MyWorkIcon aria-hidden="true" focusable="false" />
            <span class="sr-only">to my work</span>
          </RouterLink>
          <RouterLink
            class="cursor-pointer hover:text-emerald-300"
            to="/blog"
            active-class="text-emerald-400"
          >
            <ArticleIcon aria-hidden="true" focusable="false" />
            <span class="sr-only">to the blog</span>
          </RouterLink>
          <a
            class="cursor-pointer hover:text-emerald-300"
            href="https://www.linkedin.com/in/florianbeaumont"
            target="_blank"
          >
            <LinkedinIcon aria-hidden="true" focusable="false" />
            <span class="sr-only">to my Linkedin</span>
          </a>
          <a
            class="cursor-pointer hover:text-emerald-300 m-0.5"
            href="https://github.com/FlorianBx"
            target="_blank"
          >
            <GithubIcon aria-hidden="true" focusable="false" />
            <span class="sr-only">to my Github</span>
          </a>
        </nav>
      </header>
      <main id="main">
        <router-view v-slot="{ Component }">
          <transition name="page" mode="out-in" appear>
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
  transition: top 0.3s ease;
}

.skip-link:focus {
  top: 0;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.15s ease-in-out;
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
