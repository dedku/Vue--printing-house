import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index'

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
    component: () => import(/* webpackChunkName: Wydawnictwo */ '../views/Wydawnictwo.vue')
  },
  {
    path: '/blog/:slug',
    name: 'Blog',
    component: () => import(/* webpackChunkName: Uslugi */ '../views/Blog.vue'),
    beforeEnter: (to) => {
      const slug = to.params.slug
      const blogs = store.state.dataItems.blogs
      const exists = blogs.some((blog)=> blog.slug === slug)

      if (!exists) {
        return {
          name: 'NotFound',
          query: to.query,
          hash: to.hash
        }
      }
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: NotFound */ '../views/NotFound.vue')
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
