<script setup lang="ts">
import { ref, onMounted } from "vue";

interface Repo {
  id: string;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
}

const repos = ref<Repo[]>([]);
const VALID_REPO = [
  "weba11ylab",
  "nvim_config",
  "Rise-of-Knowledges",
  "docker-dev-environment",
  "ng-croissant",
  "my-little-starter",
] as const;
const loading = ref(true);
const error = ref<string | null>(null);

onMounted(async () => {
  try {
    const res = await fetch(
      "https://api.github.com/users/florianbx/repos?per_page=300",
    );
    if (!res.ok) throw new Error(`Erreur: ${res.status}`);
    let data: Repo[] = [];
    const res2 = await fetch(
      "https://api.github.com/users/florianbx/repos?per_page=300&page=2",
    );
    data = [...(await res.json()), ...(await res2.json())];
    console.log(data);
    repos.value = data.filter((repo) =>
      (VALID_REPO as readonly string[]).includes(repo.name),
    );
  } catch (err: any) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <section class="flex gap-32">
    <h1 class="text-8xl font-bold text-white">P<br />R<br />O</h1>
    <div class="max-w-4xl mt-12">
      <div v-if="loading">Chargement…</div>
      <div v-else-if="error">Erreur : {{ error }}</div>
      <div v-else class="grid lg:grid-cols-2 gap-6">
        <div
          v-for="repo in repos"
          :key="repo.id"
          class="border border-stone-400 rounded w-(150px) h-42 hover:bg-emerald-900"
        >
          <a
            class="flex flex-col justify-between p-4 h-full"
            :href="repo.html_url"
            target="_blank"
          >
            <h3 class="text-emerald-300 font-semibold">{{ repo.name }}</h3>
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
