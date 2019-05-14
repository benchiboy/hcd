import Vue from 'vue'
import Router from 'vue-router'
import DeviceList from '@/components/DeviceList'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Map from '@/components/Map'
import Analysis from '@/components/Analysis'
import AnalysisA from '@/components/Analysis_A'

import Decision from '@/components/Decision'
import Manage from '@/components/Manage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
			meta: {
				requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
			},
    },
		
		{
			path: '/Home',
			name:'Home',
			component: Home,
			meta: {
				requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
			},
      children: [
        {
          path: 'Map',
          name: 'Map',
          component: Map,
					meta: {
						requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
					},
        },
				{
					path: 'DeviceList',
					name: 'DeviceList',
					component: DeviceList,
					meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
					},
				},
				{
          path: 'Analysis',
          name: 'Analysis',
          component: Analysis,
					meta: {
						requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
					},
					children: [
						{
							path: 'AnalysisA',
							name: 'AnalysisA',
							component: AnalysisA,
							meta: {
								requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
							}
						}
					]
        },
				{
					path: 'Decision',
					name: 'Decision',
					component: Decision,
					meta: {
						requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
					},
				},
				{
					path: 'Manage',
					name: 'Manage',
					component: Manage,
					meta: {
						requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
					},
				}
			]			
		}		
  ]
})
