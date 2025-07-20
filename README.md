# Modern Vue.js Portfolio

A high-performance, statically generated portfolio and blog built with Vue 3, TypeScript, and modern web technologies. Optimized for Core Web Vitals and SEO.

<img width="1920" height="1080" alt="new" src="https://github.com/user-attachments/assets/a9bb38f2-9166-408c-a76a-e9e4509585e7" />


## 🚀 Tech Stack

### Core Technologies
- **Vue 3** - Composition API with TypeScript for type safety
- **Vite** - Ultra-fast build tool with Hot Module Replacement
- **vite-ssg** - Static Site Generation for optimal performance
- **TailwindCSS v4** - Utility-first CSS framework with modern features
- **Motion-v** - Lightweight animation library (migrated from GSAP)
- **Pinia** - State management for Vue 3

### Development Tools
- **TypeScript** - Type safety and enhanced developer experience
- **Vue TSC** - TypeScript compiler for Vue single-file components
- **ESLint + Prettier** - Code quality and formatting
- **Vue DevTools** - Enhanced debugging capabilities

### Build Optimizations
- **Beasties** - Critical CSS inlining
- **Compression** - Gzip/Brotli compression for assets
- **Code Splitting** - Automatic bundle optimization
- **Source Maps** - Production debugging support

## 🏗️ Static Site Generation (SSG)

This portfolio leverages **vite-ssg** for Static Site Generation, providing several key benefits:

### Why SSG?
- **Lightning-fast loading** - Pre-rendered HTML eliminates runtime rendering delays
- **SEO optimization** - Search engines can easily crawl pre-rendered content
- **CDN-friendly** - Static files can be cached globally for instant access
- **Zero JavaScript required** - Content is accessible even with JS disabled

### SSG Configuration
- **Pre-rendering**: All routes are generated at build time
- **Dynamic routing**: Blog posts use file-based routing (`/blog/:slug`)
- **GitHub integration**: Contribution data and repositories are fetched during build
- **Sitemap generation**: Automatic XML sitemap creation for better SEO

## 📊 Core Web Vitals Performance

This portfolio is optimized for Google's Core Web Vitals metrics:

### Performance Optimizations
- **Static Site Generation** - Pre-rendered HTML for instant loading
- **Critical CSS inlining** - Above-the-fold styles load immediately
- **Image optimization** - AVIF format with multiple sizes
- **Code splitting** - Only load necessary JavaScript
- **Compression** - Gzip/Brotli for reduced file sizes
- **Lazy loading** - Deferred loading of non-critical resources

<img width="1243" height="937" alt="Screenshot 2025-07-20 at 8 12 00 PM" src="https://github.com/user-attachments/assets/7e5ffcf6-1a85-413e-bdb6-786c2a19c029" />


## 🎨 Features

### Blog System
- **Markdown-based** - Write posts in Markdown with frontmatter
- **Table of contents** - Auto-generated navigation
- **Anchor links** - Deep linking to headings

### Modern UX
- **Smooth animations** - Motion-v powered transitions
- **Responsive design** - Mobile-first approach
- **Dark mode ready** - TailwindCSS v4 theming support
- **Accessibility** - WCAG 2.1 compliant

## 📁 Project Structure

```
src/
├── components/     # Reusable Vue components
├── composables/    # Composition API logic
├── pages/          # File-based routing
├── posts/          # Markdown blog posts
├── stores/         # Pinia state management
└── types/          # TypeScript type definitions
```

### Key Files
- `vite.config.ts` - Build configuration and plugins
- `src/routes.ts` - Manual route definitions
- `src/composables/usePosts.ts` - Blog post processing
- `scripts/generate-sitemap.mjs` - SEO sitemap generation

## 🔧 Configuration

### SSG Options
```typescript
// vite.config.ts
ssgOptions: {
  criticalCSS: false, // Handled by vite-plugin-beasties
}
```

### TailwindCSS v4
Latest version with modern features and improved performance. Configuration in `src/assets/css/main.css`.

### Motion-v Animation
Lightweight alternative to GSAP, configured in `src/composables/useMotionConfig.ts`.
