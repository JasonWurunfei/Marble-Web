import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "Profile" */ '../views/Profile.vue')
  },

  {
    path: '/marble/:id',
    name: 'MarbleDetail',
    props: true,
    component: () => import(/* webpackChunkName: "MarbleDetail" */ '../views/marble/MarbleDetail.vue')
  },

  {
    path: '/marble/edit/:id',
    name: 'MarbleEdit',
    props: true,
    component: () => import(/* webpackChunkName: "MarbleEdit" */ '../views/marble/MarbleEdit.vue')
  },

  {
    path: '/marble/create/',
    name: 'MarbleCreate',
    props: true,
    component: () => import(/* webpackChunkName: "MarbleCreate" */ '../views/marble/MarbleEdit.vue')
  },

  {
    path: '/bags',
    name: 'Bags',
    component: () => import(/* webpackChunkName: "Bags" */ '../views/Bags.vue')
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
