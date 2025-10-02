import { createRouter, createWebHistory } from 'vue-router'

import IndexView from '@/views/IndexView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: IndexView
    },
    {
      path: '/terms-of-service',
      name: 'terms-of-service',
      component: () => import('@/views/Terms.vue')
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: () => import('@/views/Privacy.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition; // Restore previous scroll position on back/forward
    } else {
      return { top: 0, left: 0 }; // Scroll to top for new navigations
    }
  },
})

export default router
