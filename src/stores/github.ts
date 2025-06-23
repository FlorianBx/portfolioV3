import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { ContributionWeek } from '@/types/github'


export interface Repo {
  id: string
  name: string
  description: string
  html_url: string
  stargazers_count: number
  language: string
}

export const useGithubStore = defineStore('github', () => {
  const contributions = ref<ContributionWeek[]>([])
  const loadingContributions = ref(false)
  const errorContributions = ref<string | null>(null)

  const repos = ref<Repo[]>([])
  const loadingRepos = ref(false)
  const errorRepos = ref<string | null>(null)

  async function fetchContributions() {
    loadingContributions.value = true
    errorContributions.value = null
    try {
      const response = await fetch('https://github-contributions-api.jogruber.de/v4/florianbx')
      contributions.value = (await response.json()).contributions
    } catch (err: unknown) {
      if (err instanceof Error) {
        errorContributions.value = err.message
      }
    } finally {
      loadingContributions.value = false
    }
  }

  async function fetchRepos() {
    loadingRepos.value = true
    errorRepos.value = null
    try {
      const res1 = await fetch('https://api.github.com/users/florianbx/repos?per_page=300')
      const res2 = await fetch('https://api.github.com/users/florianbx/repos?per_page=300&page=2')
      let data: Repo[] = [...(await res1.json()), ...(await res2.json())]
      const VALID_REPO = [
        "weba11ylab",
        "nvim_config",
        "Rise-of-Knowledges",
        "docker-dev-environment",
        "ng-croissant",
        "my-little-starter",
      ]
      repos.value = data.filter(repo => VALID_REPO.includes(repo.name))
    } catch (err: unknown) {
      if (err instanceof Error) {
        errorRepos.value = err.message
      }
    } finally {
      loadingRepos.value = false
    }
  }

  return {
    contributions,
    loadingContributions,
    errorContributions,
    repos,
    loadingRepos,
    errorRepos,
    fetchContributions,
    fetchRepos
  }
})
