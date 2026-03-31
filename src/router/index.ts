import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/index.vue'),
    },
    {
      path: '/as-const',
      name: 'as-const',
      component: () => import('@/pages/as-const/index.vue'),
    },
    {
      path: '/mark-raw',
      name: 'markRaw',
      component: () => import('@/pages/markRaw/index.vue'),
    }
  ],
})

export default router
