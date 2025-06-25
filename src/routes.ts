import type { RouteRecordRaw } from 'vue-router'
import HomeView  from '@/pages/HomeView.vue'

export const routes: RouteRecordRaw[] = [
  { path: '/',           component: HomeView },
  { path: '/blog',       component: () => import ('@/pages/blog/index.vue') },
  { path: '/blog/:slug', component: () => import('@/pages/blog/[slug].vue'), props: true },
  { path: '/my-work',    component: () => import('@/pages/MyWorkView.vue') },
  { path: '/:pathMatch(.*)*', component: HomeView },
]
