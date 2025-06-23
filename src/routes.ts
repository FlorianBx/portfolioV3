import type { RouteRecordRaw } from 'vue-router'
import HomeView  from '@/pages/HomeView.vue'
import BlogList  from '@/pages/blog/index.vue'
import BlogPost  from '@/pages/blog/[slug].vue'
import MyWorkView from '@/pages/MyWorkView.vue'

export const routes: RouteRecordRaw[] = [
  { path: '/',           component: HomeView },
  { path: '/blog',       component: BlogList },
  { path: '/blog/:slug', component: BlogPost, props: true },
  { path: '/my-work',    component: MyWorkView },
  { path: '/:pathMatch(.*)*', component: HomeView },
]
