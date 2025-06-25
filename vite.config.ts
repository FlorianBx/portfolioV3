import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import Pages from "vite-plugin-pages";
import generateSitemap from 'vite-plugin-pages-sitemap'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    tailwindcss(),

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
     onRoutesGenerated: async routes => {
        await generateSitemap({
        routes,
        hostname: "https://florianbeaumont.dev",
      })
      }
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    sourcemap: true,
  },
});
