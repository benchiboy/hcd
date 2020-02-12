<template>
	
 <div>

  <div class="title d-flex justify-content-center">
	<!-- 	 <h3 style="color: white;"> 微点云设备监控系统</h3>
	--> 
   	<!-- <h3 style="color: white;"> CRF申请审批系统</h3> -->
  </div>
	
  <div class=" backimg d-flex justify-content-center align-items-center ">
		<div class="w-25" >
			 <b-form @submit="onSubmit" @reset="onReset" >
				<b-form-group id="input-group-1"  label-for="input-1">
				<div class="d-flex justify-content-around" v-if="loginObj!=null &&loginObj.length>0">
						<div v-for=" item,index in loginObj">
								<b-button class="rounded-circle  p-3" pill 
								variant="outline-success" @click="onUserSelected(index)" >
									<img  src="../assets/profileB.png" 
									alt="Image 1" width="30" 
									height="30" ></img>
								</b-button>
								<div>
									<img  src="../assets/default_user.png" 
									alt="Image 1" width="15" 
									height="15" v-show=" currUserIndex==index"></img>
									{{item.user_name}}
								</div>
						</div>
						<div  >
								<b-button class="rounded-circle  p-3" pill 
								variant="outline-secondary" @click="onOtherUser">
									<img  src="../assets/profileD.png" 
									alt="Image 1" width="30" 
									height="30" ></img>
								</b-button>
								<div>
									<img  src="../assets/default_user.png" 
									alt="Image 1" width="15" 
									height="15" v-show=" currUserIndex==-1"></img>
									<strong>其他用户</strong>
								</div>
						</div>
				</div>
				
				<div v-else>
					
					<div>
						<img  src="../assets/login.png" 
						alt="Image 1" width="50" 
						height="50" ></img>
					</div>
				</div>
				
				</b-form-group>
				<!-- 	<b-form-group id="input-group-1"  label-for="input-1">
						<b-input-group prepend="厂家编号">
						<b-form-input id="input-1"
						v-model="form.mct_no"
						required
						placeholder="请输入"></b-form-input>
						</b-input-group>
				</b-form-group> -->
		
				<b-form-group id="input-group-2"  label-for="input-2" 
				 v-show="isShowUserName">
						<b-input-group prepend="登录账号">
						<b-form-input id="input-2"
						v-model="form.user_name"
						required
						placeholder="请输入"></b-form-input>
						</b-input-group>
				</b-form-group>
				
				<b-form-group id="input-group-3"  label-for="input-3">
						<b-input-group prepend="登录密码">
						<b-form-input id="input-3"
						v-model="form.pass_word"
						required
						type=password
						placeholder="请输入"></b-form-input>
						</b-input-group>
				</b-form-group>
				<b-button type="submit" block variant="primary" ><span>确定</span></b-button>
			</b-form>
		</div>
	</div>
	</div>
</template>
<script>

import {getStore,setStore,removeStore} from './Global.js'
import GLOBAL from './Global.js'

export default {
  name: 'Login',
  data () {
     return {
			form: {
				mct_no: '0001',
				user_name: '',
				pass_word: '',
			},
			user:{
				user_name:'',
				pic_url:'',
				timestamp:0,
			},
			loginUsers:[],
			loginObj:null,
			currUserIndex:null,
			isShowUserName:false,
			compare :function (obj1, obj2) {
					var val1 = obj1.timestamp;
					var val2 = obj2.timestamp;
					if (val1 < val2) {
							return -1;
					} else if (val1 > val2) {
							return 1;
					} else {
							return 0;
					}            
				} 
		}
		
	},
	
	created() {
		var  u=getStore(GLOBAL.LAST_USER)
		console.log("login users ===>",u)
		if (u==null){
			 this.isShowUserName=true;
			 return
		}
	
		this.loginObj=JSON.parse(u)
		this.loginUsers=this.loginObj
		
		var  currUser=getStore(GLOBAL.CURR_INDEX)
		if (currUser==null){
				this.currUserIndex=this.loginObj.length-1
		}else{
				this.currUserIndex=currUser
		}
		console.log("=====>",this.currUserIndex)
		
		this.form.user_name=this.loginObj[this.currUserIndex].user_name
	},

	methods: {
		makeToast(tip) {
			this.$bvToast.toast(tip, {
			  title: `登录结果`,
			  variant:"warning",
			  solid: true,
			  toaster: "b-toaster-top-center",
			})
		},
		/*
		   点击其他用户登录
		*/
		onOtherUser() {
			this.form.user_name=''
			this.isShowUserName=true;
			this.form.pass_word=''
			this.currUserIndex=-1
		},
		/*
			点击用户
		*/
		onUserSelected(index) {
			this.currUserIndex=index
			this.isShowUserName=false;
			console.log("======>",this.loginObj[index].user_name)
			this.form.user_name=this.loginObj[index].user_name
		},
		
		/*
		*/
		addUser(userName){
			 var isNewUser=true;
			 for (var i=0;i<this.loginUsers.length;i++){
				  if (this.loginUsers[i].user_name==userName){
							isNewUser=false
					}
			 }
			 if (isNewUser){
				 console.log(this.loginUsers.length)
				 if (this.loginUsers.length>2){
					 this.loginUsers.shift()
				 }
				this.loginUsers.push({user_name:userName,pic_url:'',timestamp:new Date().getTime()})
			 }
		},
		
		/*
		*/
  	checkUser(userName){
			for (var i=0;i<this.loginUsers.length;i++){
				if (this.loginUsers[i].user_name==userName){
						this.currUserIndex=i;
						break;
				}
			}
		},

		onSubmit(evt) {
			console.log("=========>")
			  evt.preventDefault()
				var that=this;
				this.checkUser(this.form.user_name)
				this.isShowLoading=false
				this.$axios.post(GLOBAL.URL_SIGNIN, 
						JSON.stringify(this.form))
						.then(function (response) {
								if (response.data.err_code==GLOBAL.SUCC){
									setStore(GLOBAL.UID_TOKEN,response.data.token)
									that.addUser(that.form.user_name)
									console.log(JSON.stringify(that.loginUsers))
									setStore(GLOBAL.LAST_USER,JSON.stringify(that.loginUsers))
									setStore(GLOBAL.CURR_INDEX,that.currUserIndex)
									console.log("======>",response.data)
									that.$router.push({name:'Main',params:{nickn_name: response.data.nick_name}});
									return;
								}else {
									that.makeToast(response.data.err_msg);
								}
 						})
						.catch(function (error) {
							console.log("=========>",error);
							that.makeToast(error);
						}); 		
		  },
    
		onReset(evt) {
			evt.preventDefault()
			this.form.mct_no = ''
			this.form.user_name = ''
			this.form.pass_word = ''       
			this.$nextTick(() => {
				this.show = true
			})
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

.loginbox{
	top: 10rem;
	box-shadow:black 0px 0px 30px
}

.loading{
		position: absolute;
		z-index: 1999;
		top: 300px;
}


.title{
	top: 10%;
	left: 40%;
	position: absolute;
	z-index: 999;
}


.backimg{
	background-image: url(../assets/login-back.jpeg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
	padding: 0;
	width: 100%;
	height: 100%;
	position: fixed;
}

</style>
