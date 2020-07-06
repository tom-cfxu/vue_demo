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
        component: () => import('@/views/Dashboard/Dashboard.vue'),
        meta: {
          title:"首页",
          tx:1
        }
      },
      {
        path: 'charts',
        name: 'charts',
        component: () => import('@/views/Charts/Charts.vue'),
        meta: {
          title:"趋势图表",
          tx:2
        }
      },
      {
        path: 'alarm',
        name: 'alarm',
        component: () => import('@/views/Alarm/Alarm.vue'),
        meta: {
          title:"报警",
          tx:3
        }
      },
      {
        path: 'usercenter',
        name: 'usercenter',
        component: () => import('@/views/UserCenter/UserCenter.vue'),
        meta: {
          title:"个人中心",
          tx:4
        }
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
