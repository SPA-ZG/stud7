import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // ** 7. Routing  **
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // ** 11.b Lazy ucitavanje dijela stranice **
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      // ** 7.b Dinamicko usmjeravanje s 404 stranicom ** Ruta za hvatanje svih nepostojećih
      // URL-ova i preusmjeravanje na 404 stranicu.
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router
