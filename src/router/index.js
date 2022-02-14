import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/step-1',
      name: 'step1',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../step-1/StepOne.vue')
    },
    {
      path: '/sample',
      name: 'sample',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SampleHeadless.vue')
    },
    {
      path: '/ex-1',
      name: 'ex-1',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../exercises/ex-1/ex-1.vue')
    },
    {
      path: '/ex-2',
      name: 'ex-2',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../exercises/ex-2/ex-2.vue')
    },
    {
      path: '/ex-1-sol-comp',
      name: 'ex-1-sol-comp',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../exercises/ex-1/ex-1-solutions/ex-1-computed/ex-1.vue')
    },
    {
      path: '/ex-1-sol-map',
      name: 'ex-1-sol-map',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../exercises/ex-1/ex-1-solutions/ex-1-map/ex-1.vue')
    },
    {
      path: '/ex-1-sol-mark',
      name: 'ex-1-sol-mark',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../exercises/ex-1/ex-1-solutions/ex-1-mark-raw/ex-1.vue')
    },
    {
      path: '/demo-0',
      name: 'demo-0',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../demo-0/ws-0.vue')
    },
    {
      path: '/demo-1',
      name: 'demo-1',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../demo-1/ws-1.vue')
    }
  ]
})

export default router
