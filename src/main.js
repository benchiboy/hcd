// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import {BootstrapVue,BootstrapVueIcons} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import Mermaid from 'mermaid'

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false
Vue.use(Mermaid);
Vue.prototype.$axios = axios

axios.defaults.withCredentials = true

// http request 拦截器
axios.interceptors.request.use(
	config => {
		let token=window.localStorage.getItem("uid_token")
	    if (token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization = token;
			
        }
	    return config;
    },
    err => {
        return Promise.reject(err);
 });
	
// http response 拦截器
axios.interceptors.response.use(
    response => {
		console.log("response......")
	
        return response;
    },
    error => {
		console.log("error=====>",error.response)
 		if (error.response) {
             switch (error.response.status) {
                 case 401:
				  console.log("======>")
                     // 返回 401 清除token信息并跳转到登录页面
                    // store.commit(types.LOGOUT);
	                      router.replace({
	                          path: '/',
	                          query: {redirect: router.currentRoute.fullPath}
	                      })
             }
         }
        return Promise.reject(error.response.data)   // 返回接口返回的错误信息
    });

 
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
		console.log("=========>需要验证登录")
		let token=window.localStorage.getItem("uid_token")
        if (token) {  //如果存在TOKEN,继续
	        next();
        }else{
			console.log("=========>没有TOKEN ，需要跳转")
			next({
                path: '/',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
		}
    }
    else {
		console.log("不需要验证登录。。",to)
        next();
    }
 });
 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
