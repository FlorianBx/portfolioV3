import generateSitemap from "vite-plugin-pages-sitemap";
import { resolve } from "node:path";
import { readdirSync } from "node:fs";
import { join } from "node:path";

const postsDir = join(process.cwd(), "src", "posts");
const postFiles = readdirSync(postsDir)
  .filter((f) => f.endsWith(".md"))
  .map((f) => f.replace(/\.md$/, ""));

const routes = [
  "/",
  "/blog",
  "/my-work",
  ...postFiles.map((slug) => `/blog/${slug}`),
];

generateSitemap({
  routes,
  hostname: "https://florianbeaumont.dev",
  outDir: resolve("dist"),
});
