<template>
	<div>
		<!-- <svg class="icon">
		  <use xlink:href="open-iconic.svg#account-login"  class="icon-account-login"></use>
		</svg>
		 -->
				
		  <b-modal
		       id="modal-1"
		       ref="modal"
		 		  title="密码修改"
		 			scrollable
		       @show="showModal"
		       @hidden="hiddenModal"
		       @ok="handleOk"
		     >
		 		 <template slot="modal-footer" slot-scope="{ ok, cancel, hide }">
		       <b-button size="sm" variant="success" @click="ok()">
		 				确定
		       </b-button>
		       <b-button size="sm" variant="danger" @click="cancel()">
		         取消
		       </b-button>
		     </template>
		 
		 		<div class="m-3" >
		       <form ref="form" @submit.stop.prevent="handleOk" >
						<b-form-group
		           :state="oldPwdState"
		           label="原密码"
							 type="password"
		           label-for="oldPwdState"
		           invalid-feedback="原密码不能为空"
		 					valid-feedback="输入通过校验"
		 					class="text-left w-100 "
		         >
		 				<b-form-input
		 					id="oldPwdState"
		 					v-model="form.old_pwd"
		 					required
		 				></b-form-input>
		 			 </b-form-group>
		       <b-form-group
		       	:state="newPwdState"
		       	label="新密码"
		       	label-for="newPwdState"
		       	invalid-feedback="新密码不能为空"
		 				valid-feedback="新密码输入通过"
		 				class="text-left"
		 	    >
		       	<b-form-input
		       		id="newPwdState"
		 					type="password"
		       		v-model="form.new_pwd"
		       		:state="newPwdState"
		       		required
		       	></b-form-input>
		       </b-form-group>
		 		
		 			<b-form-group
		 				:state="newPwd2State"
		 				label="确认密码"
		 				label-for="oldPwd2State"
		 				invalid-feedback="确认密码不能为空"
		 				valid-feedback="确认密码输入通过"
		 					class=" text-left"
		 			>
		 				<b-form-input
		 					id="newPwd2State"
		 					type="password"
		 					v-model="form.new_pwd2"
		 					:state="newPwd2State"
		 					required
		 				></b-form-input>
		 			</b-form-group>
		 			</form>
		 			</div >
		  </b-modal>
		 
		<div style="margin-left: 5px;margin-right: 5px;" >
				
					<b-navbar toggleable="lg" type="dark" variant="info" class="navbar-inverse" >
						<b-navbar-brand href="#">深圳微点生物技术有限公司</b-navbar-brand>
		
						<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
						<b-collapse id="nav-collapse" is-nav>
							<b-navbar-nav>
								<b-nav-item href="#">Link</b-nav-item>
							</b-navbar-nav>
		
							<!-- Right aligned nav items -->
							
							<b-navbar-nav class="ml-auto">
								<b-navbar-nav  id="map" :class="active_id=='map'?'addclass':''" @click="menuclick('map')">
										<b-nav-item href="#/Home/Map" >
											<b-span class="text-white font-weight-bold text-decoration-none">设备地图 </b-span>
										</b-nav-item>
								</b-navbar-nav >
								<b-navbar-nav  id="devicelist"  :class="active_id=='devicelist'?'addclass':''"  @click="menuclick('devicelist')">
										<b-nav-item href="#/Home/DeviceList" >
											<b-span class="text-white font-weight-bold">设备列表 </b-span>
										</b-nav-item>
								</b-navbar-nav>
								<b-navbar-nav id="analysis" :class="active_id=='analysis'?'addclass':''" @click="menuclick('analysis')">
										<b-nav-item href="#/Home/Analysis">
											<b-span class="text-white font-weight-bold">设备分析 </b-span>
										</b-nav-item>
								</b-navbar-nav>
						
								<b-navbar-nav id="decision" :class="active_id=='decision'?'addclass':''"  @click="menuclick('decision')">
										<b-nav-item href="#/Home/Decision">
											<b-span class="text-white font-weight-bold">设备决策</b-span>
										</b-nav-item>
								</b-navbar-nav>
						
								<b-navbar-nav id="manage" :class="active_id=='manage'?'addclass':''"  @click="menuclick('manage')">
										<b-nav-item href="#/Home/Manage">
											<span class="text-white font-weight-bold">账户管理</span>
										</b-nav-item>
								</b-navbar-nav>
						
								<b-navbar-nav >
										<b-img class="rounded-circle" style="width: 40px; height:40px"  src="https://picsum.photos/125/125/?image=58" alt="Center image"></b-img>
								</b-navbar-nav>
						
					
							<!-- 	<b-popover target="popover-3" triggers="hover focus">
									<template slot="title">账户信息</template>
									
									<div>
									<div class="m-1 w-50">
										<span >账户名称：</span>
										<span >admin</span>
									</div>
									
									<div class="m-1 ">
										<span >上次登录时间：</span>
										<span >admin</span>
									</div>
									
									</div>
								
								</b-popover> -->
						
								<b-nav-item-dropdown right>
									<template slot="button-content">
										<em>
												<span class="text-danger font-weight-bold">
												{{nick_name}}
												</span>
										</em></template>
									<b-dropdown-item v-b-modal.modal-1  href="#">密码修改</b-dropdown-item>
									<b-dropdown-item  @click="onQuit">退出</b-dropdown-item>
							
								</b-nav-item-dropdown>
							</b-navbar-nav>
						</b-collapse>
					</b-navbar>
	</div>
		
		
		
	<div class="homebox">
		<router-view/>
	</div>

	</div>

</template>
<script>	
import {getStore,setStore,removeStore} from './Global.js'
import GLOBAL from './Global.js'

export default {
  name: 'Home',
  data () {
		return {
			 showSelf: false,
			 active_id:'',
			 nick_name:'晓明',
			 avatar:'',
			 form: {
			 		old_pwd: '',
			 		new_pwd:'',
			 		new_pwd2:'',
			 	},
		}
  },
	computed:{
		
		oldPwdState() {
			return this.form.old_pwd.length > 4 && this.form.old_pwd.length < 20
		},
		newPwdState() {
			return this.form.new_pwd.length > 4 && this.form.new_pwd.length < 13
		},
		newPwd2State() {
			return this.form.new_pwd2.length > 4 && this.form.new_pwd2.length < 13
		},
		
	},
	mounted() {
		this.nick_name=this.$route.params.nick_name
	},
	
	methods: {
		menuclick(event) {
				this.active_id = event;
		},
		
		checkFormValidity() {
			const valid = this.$refs.form.checkValidity()
			//this.nameState = valid ? 'valid' : 'invalid'
			return valid
		},
		
		
		handleOk(evt) {
			evt.preventDefault()      
				// Hide the modal manually
			// Exit when the form isn't valid
			if (!this.checkFormValidity()) {
				return
			}
				
			this.$nextTick(() => {
				this.$refs.modal.hide()
				this.toast()
			})
			
		},

		showModal(evt) {
			this.form.old_pwd = ''
			this.form.new_pwd = ''
			this.form.new_pwd2 = ''
		},
		
		toast(toaster, append = false) {
			this.$bvToast.toast(`新增用户成功!`, {
				title: `执行结果`,
				toaster: 'b-toaster-top-center',
				solid: true,
				variant: 'info',
				autoHideDelay:1000,
				appendToast: append
			})
		},
		
		hiddenModal(evt) {
			showModal(evt)
		},
		
		onQuit(evt) {
			setStore(GLOBAL.UID_TOKEN,'')
			this.$router.push({name:'Login',params:{}});
			
		}
	}
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.homebox{
	 margin-left: 5px;
	 margin-right: 5px;
	 margin-top: 5px;
	 border: 1px solid #ddd;
}
.addclass{
	 border-bottom: 2px solid red;
}
.icon {
  width: 16px;
  height: 16px;
	
}
.icon-account-login {
  fill: #f00;
}

#devicelist:hover{
	background: blueviolet;
}

#map:hover{
	background: blueviolet;
}

#analysis:hover{
	background: blueviolet;
}

#decision:hover{
	background: blueviolet;
}

#manage:hover{
	background: blueviolet;
}


</style>
