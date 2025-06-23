import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import BlogList from '@/pages/blog/index.vue'
import BlogPost from '@/pages/blog/[slug].vue'

const routes = [
  { path: '/', component: App.vue },
  { path: '/blog', component: BlogList },
  { path: '/blog/:slug', component: BlogPost, props: true },
  // { path: '/:pathMatch(.*)*', redirect: '/blog' }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
