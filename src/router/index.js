import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ViewAnime from '../views/ViewAnime.vue'
import About from '../views/About.vue'

const router = createRouter({
  mode: 'history',
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ComingSoon.vue')
    },
    {
      path: '/anime/:id',
      name: 'anime',
      component: () => import('../views/ViewAnime.vue')
    },
    {
      path: '/anime/popular',
      name: 'popular-anime',
      component: () => import('../views/ViewPopular.vue')
    },
    {
      path: '/anime/top-airing',
      name: 'airing-anime',
      component: () => import('../views/ViewAiring.vue')
    },
    {
      path: '/anime/upcoming',
      name: 'upcoming-anime',
      component: () => import('../views/ViewUpcoming.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'page-not-found-404',
      component: () => import('../components/PageNotFound404.vue')
    }
  ]
})

export default router
