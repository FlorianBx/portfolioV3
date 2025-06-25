---
title: "Static Site Generation with Native Vue 3: Fast, Fun & Framework-Free"
date: 2025-06-24
---

Want all the SSG (Static Site Generation) perks—speed, SEO, simplicity—without a heavy framework like Nuxt? You can totally do it with **plain Vue 3** and **Vite**. Here’s how, from one web enthusiast to another.

---

## What’s SSG, Anyway?

**Static Site Generation** means your HTML pages are pre-rendered at build time, not on every request (like SSR).

✅ Perks:
- Lightning-fast load times
- No server needed
- SEO loves it
- Easy deployment (GitHub Pages, Netlify, etc.)

---

## The Goal

Build a Vue 3 setup that lets you:
1. Write pages as Vue components (`.vue`)
2. Turn them into static HTML with Vite
3. Deploy a full, ready-to-go site

---

## 1. Start a Vue 3 Project

```bash
npm create vite@latest vue-ssg -- --template vue-ts
cd vue-ssg
npm install
```

---

## 2. Make Some Pages

Picture a simple structure:

```
src/
  pages/
    index.vue
    about.vue
```

Each page is just a regular Vue component.

**src/pages/index.vue**:

```vue
<script setup lang="ts">
</script>

<template>
  <h1>Home</h1>
  <p>Welcome to our static site built with Vue!</p>
</template>
```

---

## 3. The Magic Generator File

At your project root, add:

**generate.ts**:

```ts
import fs from 'fs'
import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import path from 'path'

const pages = [
  { file: 'index', title: 'Home' },
  { file: 'about', title: 'About' },
]

for (const page of pages) {
  const { default: PageComponent } = await import(`./src/pages/${page.file}.vue`)
  const app = createSSRApp(PageComponent)

  const html = await renderToString(app)

  const pageHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${page.title}</title>
</head>
<body>
  <div id="app">${html}</div>
</body>
</html>
  `.trim()

  fs.mkdirSync('dist', { recursive: true })
  fs.writeFileSync(path.resolve(`dist/${page.file}.html`), pageHtml)
}
```

---

## 4. Build & Generate

Add to `package.json`:

```json
"scripts": {
  "build": "vite build",
  "generate": "ts-node generate.ts"
}
```

Then run:

```bash
npm run build     # bundle JS with Vite
npm run generate  # spit out static HTML files
```

You’ll find all your `.html` in `/dist`.

---

## 5. Deploy It

Your `/dist` folder has:

* Static HTML
* Vite-bundled assets (`assets/`)

➡️ Deploy it anywhere static (Netlify, Vercel, GitHub Pages, etc.)

---

## Limitations

* No automatic dynamic routing (unlike Nuxt)
* No hydration/interactivity after render (unless you wire it up)
* You’ll need to code your own generation logic

---

## Bonus: Level Up

Add your own:

* Custom router (hash mode)
* Shared layout for every page
* Markdown/JSON data fetching at build time

---

## Conclusion

With native Vue 3, you can do **lightweight, fast, 100% custom SSG**. Perfect for:

* Portfolio sites or docs
* Prototypes or SEO tests
* When Nuxt feels like overkill

And honestly? It’s pretty fun to build your own static site engine from scratch. Give it a try!
