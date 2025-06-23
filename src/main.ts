import { ViteSSG } from 'vite-ssg/single-page'
import App from './App.vue'
import { router } from './routes'

export const createApp = ViteSSG(App, ({ app }) => {
  app.use(router)
})
