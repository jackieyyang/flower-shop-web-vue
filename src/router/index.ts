import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '@/views/index/IndexView.vue'
import LoginView from '@/views/user/LoginView.vue'
import { Navigation } from '@/utils/nagivation'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/exception/404/index.vue'),
    }
  ],
})

Navigation.init(router)

export default router
