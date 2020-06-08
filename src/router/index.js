import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '../store'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import('../views/Registration.vue'),
  },
  {
    path: '/task-list',
    name: 'task-list',
    component: () => import('../views/TaskList.vue'),
    beforeEnter: (_to, _from, next) => {
      next(store.state.user ? true : '/')
    }
  },
  {
    path: '*',
    name: 'not-found',
    component: () => import('../views/NotFound.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
