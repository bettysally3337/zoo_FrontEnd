import { createRouter, createWebHistory } from 'vue-router'
import Index from "@/pages/Index.vue"
import LatestNews from '@/pages/LatestNews.vue'
import HomeView from '@/pages/HomeView.vue'
import Facility from '@/pages/Facility.vue'
import facilityRoutes from './facility'
import operatinginfo from '@/components/operatinginfo.vue'

const routes = [
  {
    path:'/',
    name:'Index',
    component:Index
  },
  
  {
    path: '/LatestNews',
    name: 'LatestNews',
    component: LatestNews
  },
  { path: '/ToTheZone', component: HomeView },
  {
    path:'/Facility', 
    name: 'Facility',
    component:Facility
  },
  {
    path:'/OperatingInfo',
    name:"Operating Information",
    component:operatinginfo
  },
  ...facilityRoutes,
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
