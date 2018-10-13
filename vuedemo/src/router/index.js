import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ChenHao from '@/components/ChenHao'
import Login from '@/components/Login'
import Register from '@/components/Register'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/chenhao',
      name: 'chenhao',
      meta: {
        requireAuth: true
      },
      component: ChenHao
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})

export default router
