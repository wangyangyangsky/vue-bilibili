import Vue from 'vue'
import VueRouter from 'vue-router'
import register from '../views/register.vue'
import login from '../views/login.vue'
import userinfo from '../views/userinfo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/userinfo',
    name: 'userinfo',
    component: userinfo
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
