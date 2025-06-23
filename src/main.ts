// import { createApp } from 'vue'
import { ViteSSG } from 'vite-ssg/single-page'
import { createHead } from '@vueuse/head'
import App from './App.vue'
// import { router } from './routes'

// createApp(App).mount('#app')
export const createApp = ViteSSG(App, ({ app }) => {
  // app.use(router)
  app.use(createHead())
})
