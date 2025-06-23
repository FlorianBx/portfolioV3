import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import { createPinia } from "pinia";
import { routes } from "./routes";
import { useGithubStore } from "@/stores/github";
import "@/assets/css/main.css";


export const createApp = ViteSSG(
  App,
  { routes },
  async ({ app, initialState, onSSRAppRendered, isClient }) => {
    const pinia = createPinia();
    app.use(pinia);

    if (isClient && initialState.pinia) {
      pinia.state.value = initialState.pinia;
    }

    const github = useGithubStore();

    if (import.meta.env.SSR || import.meta.env.DEV) {
      await github.fetchContributions();
      await github.fetchRepos();
      onSSRAppRendered(() => {
        initialState.pinia = pinia.state.value;
      });
    }
  },
);
