import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Cart from '@/components/Cart/Cart'
import Find from '@/components/Find/Find'
import My from '@/components/My/My'

import NewsList from '../components/News/NewsList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/find',
      name: 'find',
      component: Find
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
    {
      path: '/news/list',
      name: 'news.list',
      component: NewsList
    }
  ]
})
