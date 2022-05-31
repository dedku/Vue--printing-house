import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Wydawnictwo from '../views/Wydawnictwo.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {title: `Poligrafia Łowicz - Strona główna`}
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import(/* webpackChunkName: Uslugi */ '../views/Uslugi.vue')
  },
  {
    path: '/wydawnictwo',
    name: 'Wydawnictwo',
    component: Wydawnictwo
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
        return {
          el: to.hash,
          behavior: 'smooth',
          top:65,
        }
    } else {
      return { top: 0 }
  }
}
})

export default router
