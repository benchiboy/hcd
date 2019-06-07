import Vue from 'vue'
import Router from 'vue-router'
import DeviceList from '@/components/DeviceList'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Map from '@/components/Map'

import Analysis from '@/components/Analysis'
import AnalysisID from '@/components/Analysis_ID'
import AnalysisConfig from '@/components/Analysis_Config'
import AnalysisMonitor from '@/components/Analysis_Monitor'
import AnalysisStatus from '@/components/Analysis_Status'
import AnalysisFact from '@/components/Analysis_Fact'

import Decision from '@/components/Decision'
import Manage from '@/components/Manage'
import Main from '@/components/Main'

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
		path: '/Main',
		name: 'Main',
		component: Main,
				meta: {
					requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
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
		],
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
							path: 'AnalysisID',
							name: 'AnalysisID',
							component: AnalysisID,
							meta: {
								requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
							}
						},
						{
							path: 'AnalysisConfig',
							name: 'AnalysisConfig',
							component: AnalysisConfig,
							meta: {
								requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
							}
						},
						{
							path: 'AnalysisMonitor',
							name: 'AnalysisMonitor',
							component: AnalysisMonitor,
							meta: {
								requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
							}
						},
						{
							path: 'AnalysisStatus',
							name: 'AnalysisStatus',
							component: AnalysisStatus,
							meta: {
								requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
							}
						},
						{
							path: 'AnalysisFact',
							name: 'AnalysisFact',
							component: AnalysisFact,
							meta: {
								requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
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
