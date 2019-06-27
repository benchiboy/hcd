import Vue from 'vue'
import Router from 'vue-router'
import DeviceList from '@/components/DeviceList'
import DeviceDetail from '@/components/DeviceDetail'
import DeviceDetail_Info from '@/components/DeviceDetail_Info'
import DeviceDetail_Config from '@/components/DeviceDetail_Config'
import DeviceDetail_Version from '@/components/DeviceDetail_Version'
import DeviceDetail_Chip from '@/components/DeviceDetail_Chip'
import DeviceDetail_ChkResult from '@/components/DeviceDetail_ChkResult'
import DeviceDetail_RunLog from '@/components/DeviceDetail_RunLog'

import DeviceMap from '@/components/DeviceMap'
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
import MainInfo from '@/components/MainInfo'

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
						path: 'DeviceMap',
						name: 'DeviceMap',
						component: DeviceMap,
								meta: {
									requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
								},
					},
					{
						path: 'DeviceList',
						name: 'DeviceList',
						component: DeviceList,
						meta: {
									requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
						},
					},
					{
						path: 'DeviceDetail',
						name: 'DeviceDetail',
						component: DeviceDetail,
						meta: {
									requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
						},
							children: [
								{
									path: 'DeviceDetail_Info',
									name: 'DeviceDetail_Info',
									component: DeviceDetail_Info,
											meta: {
												requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
											},
							},
							{
									path: 'DeviceDetail_Config',
									name: 'DeviceDetail_Config',
									component: DeviceDetail_Config,
											meta: {
												requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
											},
							},
							{
									path: 'DeviceDetail_Chip',
									name: 'DeviceDetail_Chip',
									component: DeviceDetail_Chip,
											meta: {
												requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
											},
							},
							{
									path: 'DeviceDetail_ChkResult',
									name: 'DeviceDetail_ChkResult',
									component: DeviceDetail_ChkResult,
											meta: {
												requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
											},
							},
							{
									path: 'DeviceDetail_RunLog',
									name: 'DeviceDetail_RunLog',
									component: DeviceDetail_RunLog,
											meta: {
												requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
											},
							},
							{
									path: 'DeviceDetail_Version',
									name: 'DeviceDetail_Version',
									component: DeviceDetail_Version,
											meta: {
												requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
											},
							}]
					},
	
					{
						path: 'MainInfo',
						name: 'MainInfo',
						component: MainInfo,
						meta: {
							requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
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
