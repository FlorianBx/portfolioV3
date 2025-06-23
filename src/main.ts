import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import { createPinia } from "pinia";
import { routes } from "./routes";
import { useGithubStore } from "@/stores/github";
import "../public/assets/css/main.css";

export const createApp = ViteSSG(
  App,
  { routes },
  async ({ app, initialState, onSSRAppRendered }) => {
    const pinia = createPinia();
    app.use(pinia);

    const github = useGithubStore(pinia);

    console.log(import.meta.env.SSR);
    if (import.meta.env.SSR || import.meta.env.DEV) {
      await github.fetchContributions();
      await github.fetchRepos();
      if (import.meta.env.SSR) {
        onSSRAppRendered(() => {
          initialState.pinia = pinia.state.value;
        });
      }
    } else {
      if (initialState.pinia) {
        pinia.state.value = initialState.pinia;
      }
    }
  },
);
