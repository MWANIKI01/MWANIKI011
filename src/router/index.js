// Composables
import { createRouter, createWebHistory } from 'vue-router'
import SignupForm from '@/views/SignupForm.vue'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import( '@/views/Home.vue'),
      }, 
      {
        path: '/SignupForm',
        name: 'SignupForm',
        component: () => import( '@/views/SignupForm.vue'),
      },   
      {
        path: '/loginForm',
        name: 'loginForm',
        component: () => import( '@/views/loginForm.vue'),
      },      
      {
        path: '/Navmenu',
        name: 'Navmenu',
        component: () => import( '@/views/Navmenu.vue'),
      },   
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
