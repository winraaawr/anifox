import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ViewAnime from '../views/ViewAnime.vue'
import About from '../views/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue')
    },
    {
      path: '/anime/:id',
      name: 'anime',
      component: () => import('../views/ViewAnime.vue')
    }
  ]
})

export default router
