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
import DeviceAnalysis from '@/components/Analysis'
import DeviceAnalysis_Status from '@/components/Analysis_Status'
import DeviceMap from '@/components/DeviceMap'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Map from '@/components/Map'
import SystemLog from '@/components/SystemLog'
import Decision from '@/components/Decision'
import User from '@/components/User'
import Role from '@/components/Role'
import Menu from '@/components/Menu'
import Group from '@/components/Group'
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
						path: 'DeviceAnalysis',
						name: 'DeviceAnalysis',
						component: DeviceAnalysis,
						meta: {
									requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
						},
							children: [
								{
									path: 'DeviceAnalysis_Status',
									name: 'DeviceAnalysis_Status',
									component: DeviceAnalysis_Status,
											meta: {
												requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
											},
							}
						]
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
					
					{
						path: 'Role',
						name: 'Role',
						component: Role,
						meta: {
							requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
						},
					},
					
					{
						path: 'Group',
						name: 'Group',
						component: Group,
						meta: {
							requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
						},
					},
					
					{
						path: 'Menu',
						name: 'Menu',
						component: Menu,
						meta: {
							requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
						},
					},
					
					{
						path: 'User',
						name: 'User',
						component: User,
						meta: {
							requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
						},
					},
					{
						path: 'SystemLog',
						name: 'SystemLog',
						component: SystemLog,
						meta: {
							requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
						},
					}
				],
		},
				
  ]
})
