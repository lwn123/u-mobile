import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import Prolist from '@/components/pages/proList'

const router = new Router({
  mode:'history',
  routes: [
    {
      path: '/index',
      component: () => import('@/components/pages/index'),
      children: [
        {
          path: '/indexCon',
          component: () => import('@/components/views/indexViews/indexCon')
        }, {
          path: '/prolist',
          component: Prolist
        }, {
          path: '/shopCar',
          component: () => import('@/components/pages/shopcar')
        }, {
          path: '/main',
          component: () => import('@/components/pages/main')
        }, {
          path: '',
          redirect: '/indexCon'
        }
      ]
    }, {
      path:'/login',
      component:() => import('@/components/pages/login')
    },{
      path: '/prodetail',
      component: () => import('@/components/pages/prodetail')
    }
    , {
      path: '/classify',
      component: () => import('@/components/pages/classify')
    }, {
      path: '/order',
      component: () => import('@/components/pages/pro-order')
    },
    {
      path: '*',
      redirect: '/index'
    }

  ]
});
//导航守卫钩子
router.beforeEach((to,from,next) => {
  //如果跳转的页面是登录页 ，就继续
  if (to.path == '/login') {
    next()
    return
  }
  //如果缓存没数据，就重新登录
  if(!sessionStorage.getItem('userInfo')){
    next('/login')
  }
  //如果你的缓存有值 你就可以继续
  next()
})


export default router;