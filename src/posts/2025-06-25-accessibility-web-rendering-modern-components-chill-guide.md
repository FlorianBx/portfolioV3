---
title: "Accessibility, Web Rendering & Modern Components: A Chill Guide"
date: 2025-06-25
---

Let’s take a relaxed but passionate tour through three essentials for any frontend dev:

1. **Digital accessibility** (because everyone deserves the web)
2. **Web rendering strategies** (SPA, SSR, SSG – what’s the vibe?)
3. **MCPs (Modular Component Patterns)** (for code you’ll actually love to maintain)

---

## Digital Accessibility

Accessibility is about making interfaces usable for everyone, including folks with disabilities. It’s not just a checkbox—it’s a mindset.

### Why Bother?

- Required for public sector (think: laws, but also karma)
- Great for UX and SEO
- Makes your project genuinely better

### The Basics (WCAG Style)

- **Perceivable**: Can people see/hear it?
- **Operable**: Can you get around with a keyboard? Are controls obvious?
- **Understandable**: Is the language clear? Are errors explained?
- **Robust**: Does it work with assistive tech?

### Real-World Tips

- **Semantic HTML** (`<main>`, `<nav>`, `<button>`, `<label>`, etc.)
- **ARIA attributes** only when you really need them
- **Smooth keyboard navigation** (don’t overdo `tabindex="-1"`)
- **Good contrast** between text and background
- **Visible, logical focus**
- **Explicit labels** for form fields

---

## Web Rendering: SPA, SSR, SSG

### SPA — Single Page Application

- **How it works**: The whole app runs in the browser after one big load.
- **Pros**:
  - Super smooth experience
  - Fewer reloads
- **Cons**:
  - SEO is tricky unless you jump through hoops
  - First load can be slow if you don’t prefetch

### SSR — Server-Side Rendering

- **How it works**: The server sends fresh HTML for every request.
- **Pros**:
  - Content is visible instantly
  - SEO and bots are happy
- **Cons**:
  - Response time depends on the server
  - Less dynamic unless you hydrate on the client

### SSG — Static Site Generation

- **How it works**: HTML pages are built ahead of time.
- **Pros**:
  - Blazing fast in production
  - Awesome for SEO
- **Cons**:
  - Not for dynamic content
  - Need to redeploy for every change

### TL;DR Table

| Strategy | Generation         | Dynamic? | SEO-friendly | Examples                |
| -------- | ------------------ | -------- | ------------ | ----------------------- |
| SPA      | Client-side        | Yes      | No (by default) | Vue, React, Angular     |
| SSR      | On every request   | Yes      | Yes           | Nuxt (SSR), Next.js     |
| SSG      | At build time      | No       | Yes           | Astro, Hugo, Nuxt SSG   |

---

## MCPs — Modular Component Patterns

MCPs are all about building components that are reusable, maintainable, and just plain fun to work with.

### The Goals

- Encourage **composition**
- Keep responsibilities separate
- Make things easy to test and read

### Common Patterns

#### 1. **Presentational vs Container**

- **Presentational**: Pure UI, no business logic
- **Container**: Fetches data, manages state

#### 2. **Slots / Content Projection**

- Inject content into components
- Great for “toolbox” components

#### 3. **Headless Components**

- Only provide logic (state, callbacks)
- UI is up to you
- Example: Headless UI or VueUse

#### 4. **Controlled vs Uncontrolled**

- **Controlled**: Parent manages state
- **Uncontrolled**: Component manages its own state

---

## Conclusion

To build modern, accessible, and effective interfaces:

- **Bake in accessibility from the start**
- **Pick the rendering strategy that fits your project**
- **Structure your components with solid patterns (MCPs)**

Nail these three, and you’ll ship interfaces that are fast, maintainable, and a joy for everyone to use. And hey, you’ll have fun doing it.
