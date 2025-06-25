<script setup lang="ts">
import { useHead } from "@unhead/vue";
import { useGithubStore } from "@/stores/github";

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
  <section class="flex gap-32" aria-labelledby="section-title-unique">
    <h1 id="section-title-unique" class="sr-only">Florian Beaumont – Notable Projects in Vue.js & TypeScript</h1>
    <h2 class="hidden xl:block text-8xl font-bold text-white">P<br />R<br />O</h2>
    <div class="max-w-4xl mt-12">
      <div v-if="github.loadingRepos">Chargement…</div>
      <div v-else-if="github.errorRepos">Erreur : {{ github.errorRepos }}</div>
      <div v-else class="grid lg:grid-cols-2 gap-6">
        <div
          v-for="repo in github.repos"
          :key="repo.id"
          class="border border-stone-400 rounded w-(150px) h-42 bg-black hover:bg-emerald-900"
        >
          <a
            class="flex flex-col justify-between p-4 h-full"
            :href="repo.html_url"
            target="_blank"
          >
            <h2 class="text-emerald-300 font-semibold">{{ repo.name }}</h2>
            <p class="line-clamp-3 text-sm my-2">{{ repo.description }}</p>
            <div class="flex gap-4">
              {{ repo.language ?? "Vue" }}
              <div>
                <span style="color: transparent; text-shadow: 0 0 0 #aaa">
                  ⭐
                </span>
                {{ repo.stargazers_count }}
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
