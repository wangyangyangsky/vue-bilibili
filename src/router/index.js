import Vue from 'vue'
import VueRouter from 'vue-router'
import register from '../views/register.vue'
import login from '../views/login.vue'
import userinfo from '../views/userinfo.vue'
import edit from '../views/edit.vue'
import home from '../views/Home.vue'
import download from '../views/download.vue'
import article from '../views/article.vue'

import { Toast } from 'vant'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
    meta: {
      keepAlive: true
    }
  },
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
    component: userinfo,
    // 界面需要有权限验证
    meta: {
      istoken: true
    }
  },
  {
    path: '/edit',
    name: 'edit',
    component: edit,
    meta: {
      istoken: true
    }
  },
  {
    path: '/download',
    name: 'download',
    component: download
  },
  {
    path: '/article/:id',
    name: 'article',
    component: article
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (!localStorage.getItem('id') && !localStorage.getItem('token') && to.meta.istoken) {
    router.push('/login')
    Toast.fail('请重新登录')
    return
  }
  next()
})

export default router
