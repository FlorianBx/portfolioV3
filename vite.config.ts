import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import Pages from "vite-plugin-pages";
import Sitemap from "vite-plugin-pages-sitemap";
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // vueDevTools(),
    tailwindcss(),
    Pages({
      dirs: "src/pages",
      extensions: ["vue"],
      onRoutesGenerated: (routes) =>
        Sitemap({
          routes,
          hostname: "https://dapper-nasturtium-49f901.netlify.app/",
        }),
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
