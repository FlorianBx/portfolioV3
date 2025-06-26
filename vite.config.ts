import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import vueDevTools from "vite-plugin-vue-devtools";
import Pages from "vite-plugin-pages";
import tailwindcss from "@tailwindcss/vite";
import { compression } from 'vite-plugin-compression2'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    tailwindcss(),
    compression(),
    Pages({
      dirs: "src/pages",
      extensions: ["vue"],
      extendRoute(route) {
        route.meta = {
          sitemap: {
            lastmod: new Date().toISOString(),
          },
        };
        return route;
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    sourcemap: true,
    cssCodeSplit: true,
  },
});
