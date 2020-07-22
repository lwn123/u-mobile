import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import Prolist from '@/components/pages/proList'

export default new Router({
  // mode:'history',
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
})
