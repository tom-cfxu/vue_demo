import Vue from 'vue'
import VueRouter from 'vue-router'
// import Layout from '../views/Layout/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/Login.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Layout/Layout.vue'),
    children: [
      {
        path: '/',
        redirect: 'dashboard'
      },
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/Dashboard/Dashboard.vue')
      },
    ]
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
