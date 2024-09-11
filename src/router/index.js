import { createRouter, createWebHistory } from 'vue-router'
import LatestNews from '@/views/LatestNews.vue'

const routes = [
  
  {
    path: '/LatestNews',
    name: 'LatestNews',
    component: LatestNews
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
