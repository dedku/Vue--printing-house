import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Uslugi from '../views/Uslugi.vue'
import Wydawnictwo from '../views/Wydawnictwo.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {title: `Poligrafia Łowicz - Strona główna`}
  },
  {
    path: '/uslugi',
    name: 'Usługi',
    component: Uslugi
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
      }
  }
})

export default router
