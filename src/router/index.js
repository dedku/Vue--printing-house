import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {title: `Poligrafia Łowicz - Strona główna`}
  },
  {
    path: '/wydawnictwo',
    name: 'Wydawnictwo',
    component: () => import(/* webpackChunkName: Uslugi */ '../views/Wydawnictwo.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            el: to.hash,
            behavior: 'smooth',
            top:65,
          })
        }, 800);
      })
    } else {
      return { top: 0 }
  }
}
})

export default router
