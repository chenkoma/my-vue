import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import UserList from '@/components/UserList'
import Tools from '../components/Tools'
import Login from '../view/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/list',
      name: 'UserList',
      component: UserList
    },
    {
      path: '/tools',
      name: 'Tools',
      component: Tools
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
