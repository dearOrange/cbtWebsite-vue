import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import Home from '@/components/home'
import About from '@/components/about'
import Introduce from '@/components/introduce'
import IPdf from '@/components/vpdf'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      redirect:'/main/home',
      children:[
        {path:'/main/home',name:'首页',component: Home},
        {path:'/main/about',name:'关于我们',component: About},
        {path:'/main/introduce',name:'产品与服务',component: Introduce}
      ]
    },{
      path: '/main/vpdf',
      name: 'IPdf',
      component: IPdf
    }
  ]
})
