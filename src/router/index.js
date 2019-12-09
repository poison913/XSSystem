import Vue from 'vue'
import Router from 'vue-router' 

import Login from "../view/Login"
import Layout from "../view/layout"


Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',//首页 
      redirect:  {
        name: 'mappage'
      }, 
    },
    {
      // 登录页
      path: '/login',
      name: 'Login',
      component: Login
    } ,
    {
      path: '/Map',//综合地图
      component: Layout, 
      name: 'map' ,
      redirect: '/Map',
      children: [{
        path: '',
        name: 'mappage', 
        component: () => import('@/view/map/index') , 
        meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        }
      }]
    },
    {
      path: '/water',// 
      component: Layout, 
      name: '水文气象模块' ,
      redirect: '/water',
      children: [{
        path: 'rainstation',
        name: '雨量站分布', 
        component: () => import('@/view/page/404') , 
        meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        }
      },{
        path: 'scene',
        name: '气象站分布', 
        component: () => import('@/view/page/404') , 
        meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        }
      },{
        path: 'rain',
        name: '降雨统计分析', 
        component: () => import('@/view/page/404') , 
        meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        }
      }]
    },
    {
      path: '/Env',// 
      component: Layout, 
      name: '环境信息' ,
      redirect: '/Env',
      children: [{
        path: 'source',
        name: '工业源分布', 
        component: () => import('@/view/page/404') , 
        meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        }
      },{
        path: 'factory',
        name: '污水处理厂分布', 
        component: () => import('@/view/page/404') , 
        meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        }
      },{
        path: 'riverData',
        name: '河流及闸口环境监测数据', 
        component: () => import('@/view/page/404') , 
        meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        }
      },{
        path: 'redtide',
        name: '赤潮监测点位数据', 
        component: () => import('@/view/page/404') , 
        meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        }
      },{
        path: 'analysis',
        name: '环境数据分析', 
        component: () => import('@/view/page/404') , 
        meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        }
      }]
    },
    {
      path: '/modal',// 
      component: Layout, 
      name: '区域环境模型库' ,
      redirect: '/modal',
      children: [{
        path: 'pollute',
        name: '污染负荷计算模型', 
        component: () => import('@/view/page/404') , 
        meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        }
      },{
        path: 'hydrology',
        name: '分布式水文模型', 
        component: () => import('@/view/page/404') , 
        meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        }
      },{
        path: 'force',
        name: '水动力水质模型', 
        component: () => import('@/view/page/404') , 
        meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        }
      },{
        path: 'capacity',
        name: '水环境容量模型', 
        component: () => import('@/view/page/404') , 
        meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        }
      },{
        path: 'disposal',
        name: '排污-控污-水质响应情景分析模型', 
        component: () => import('@/view/page/404') , 
        meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        }
      }]
    },
    {
      path: '/seadata',// 
      component: Layout, 
      name: '入海总量控制项目库' ,
      redirect: '/modal',
      children: [{
        path: 'nitrogen',
        name: '入海总氮控制项目库清单', 
        component: () => import('@/view/page/404') , 
        meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        }
      },{
        path: 'performance',
        name: '项目环境绩效核算模型', 
        component: () => import('@/view/page/404') , 
        meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        }
      },{
        path: 'show',
        name: '挂图作战展示系统', 
        component: () => import('@/view/page/404') , 
        meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        }
      },{
        path: 'feedback',
        name: '项目跟踪反馈系统', 
        component: () => import('@/view/page/404') , 
        meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        }
      } ]
    },{
      path: '/manage',
      component: Layout, 
      name: 'manage' ,
      redirect: '/manage',
      children: [{
        path: '',
        name: 'manage', 
        component: () => import('@/view/page/404') , 
        meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        }
      }]
    },
  ]
})
