<script setup lang="ts">
import { useGithubStore } from "@/stores/github";

const github = useGithubStore();
</script>

<template>
  <section class="flex gap-32" aria-labelledby="section-title-unique">
    <h1 id="section-title-unique" class="text-8xl font-bold text-white">P<br />R<br />O</h1>
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
