import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import store from '@/store'
function loginRequired(to, from, next) {
  if (store.state.isLogin) next()
  else next({name: "Login", params: {next:  to.fullPath}})
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile/',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "Profile" */ '../views/Profile.vue'),
    beforeEnter: loginRequired
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/marble/:id',
    name: 'MarbleDetail',
    props: true,
    component: () => import(/* webpackChunkName: "MarbleDetail" */ '../views/marble/MarbleDetail.vue'),
    beforeEnter: loginRequired
  },

  {
    path: '/marble/edit/:id',
    name: 'MarbleEdit',
    props: true,
    component: () => import(/* webpackChunkName: "MarbleEdit" */ '../views/marble/MarbleEdit.vue'),
    beforeEnter: loginRequired
  },

  {
    path: '/marble/create/',
    name: 'MarbleCreate',
    props: true,
    component: () => import(/* webpackChunkName: "MarbleCreate" */ '../views/marble/MarbleEdit.vue'),
    beforeEnter: loginRequired
  },

  {
    path: '/bags',
    name: 'Bags',
    component: () => import(/* webpackChunkName: "Bags" */ '../views/Bags.vue'),
    beforeEnter: loginRequired
  },

  {
    path: '/:catchAll(.*)',
    name: 'FileNotFound',
    component: () => import(/* webpackChunkName: "FileNotFound" */ '../views/FileNotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
