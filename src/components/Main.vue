<template>
 <div>
	 	
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
	 
 	<div class="" >
		<b-navbar toggleable="lg" type="dark" variant="secondary" class="navbar-inverse" >
			<b-navbar-brand href="#">深圳众游科技</b-navbar-brand>
			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav>
					<b-button   variant="dark" @click="onMenuCollapse">
						<img  src="../assets/menu.png" alt="Image 1" 
								width="25" height="25" class="">
						</img>
					</b-button>
				</b-navbar-nav>
				 
				<b-navbar-nav class="ml-auto">
					<b-navbar-nav  id="map" >
						<b-nav-item  v-b-modal.modal-1  href="#">
							<b-span class="text-white font-weight-bold text-decoration-none">修改密码 </b-span>
						</b-nav-item>
					</b-navbar-nav >
				<b-navbar-nav  id="map" >
						<b-nav-item href="#" >
							<b-span class="text-white font-weight-bold text-decoration-none">admin </b-span>
						</b-nav-item>
				</b-navbar-nav >
					<b-navbar-nav >
							<b-img class="rounded-circle" style="width: 40px; height:40px"  src="https://picsum.photos/125/125/?image=58" alt="Center image"></b-img>
					</b-navbar-nav>
					<b-nav-item-dropdown right>
						<b-dropdown-item  @click="onQuit">退出</b-dropdown-item>
				</b-nav-item-dropdown>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
 </div>
 
 <b-container fluid >
		<b-row class="menuBox">
				<b-col :md="menuCols"  style="background-color:steelblue">
					<div v-show="isCollapse">
						<div v-for="(group,gindex) in groups">
							<span>
							<b-button  v-b-toggle="'collapse-'+gindex"  variant="primary" block 
							class=" mt-2 d-flex justify-content-between " @click="onMenuClick(gindex)">
								<img  src="../assets/icon_addperson.png" alt="Image 1" width="20" height="20" class="">
								</img>
							<span >{{group.group_name}}</span>
								<img  src="../assets/arrow_up.png" alt="Image 1" 
											width="20" height="20" class="" v-show="isMenuUpClick[gindex]">
								</img>
								<img  src="../assets/arrow_down.png" alt="Image 1" 
											width="20" height="20" class="" v-show="isMenuDownClick[gindex]">
								</img> 
							</b-button>
							</span>
							<b-collapse :id=forId(gindex)  accordion="my-accordion" class="m-2">
								<div v-for="(menu,index) in group.list"  :class="{'mt-2':index>0}" >
									<a :href="menu.url"  class="mt-2" >
										<b-button block pill :variant="currSelIndex==(index+1)*(gindex+1)?'success':'info'"
										@click="onSelected((index+1)*(gindex+1))">{{menu.menu_name}}</b-button>
									</a >										
								</div>
							</b-collapse>
						</div>

					</div>
				</b-col>
				
				<b-col :md="contentCols">
					<router-view/>
				</b-col>
	</b-row>
</b-container>	
	
</div>
</template>

<script>
  import GLOBAL from './Global.js'
  import {getStore,setStore,removeStore} from './Global.js'
  import Util from './Util.js';
  export default {
    data() {
      return {
				menuCols:2,
				contentCols:10,
				isCollapse:true,
				isMenuUpClick:[true,true,true],
				isMenuDownClick:[false,false,false],
				form: {
					old_pwd: '',
					new_pwd:'',
					new_pwd2:'',
				},
				groups:[],
				currSelIndex:0,
				isSubmit:false,
			}
    },
    
	mounted() {
		//this.$router.push({name:'DeviceList',params:{}});
			console.log("======>=========");
		var that=this;
		this.$axios.post(GLOBAL.URL_GETLEFT_MENU, 
								{ id: 123})
								.then(function (response) {
					
					console.log("======>",response.data);
					that.groups=response.data.list;
					
						
							
				})
				.catch(function (error) {
						
		}); 		
			

	
		Util.$on('setCurrIndex', function (index) {
			that.setCurrIndex(index)
		})
		this.$router.push({name:'MainInfo',params:{}});
	},

	computed:{
			// oldPwdState() {
			// 	if(!isSubmit){
			// 		return null;
			// 	}
			// 	return this.form.old_pwd.length > 4 && this.form.old_pwd.length < 20
			// },
			// newPwdState() {
			// 	if(!isSubmit){
			// 		return null;
			// 	}
			// 	return this.form.new_pwd.length > 4 && this.form.new_pwd.length < 13
			// },
			// newPwd2State() {
			// 	if(!isSubmit){
			// 		return null;
			// 	}
			// 	return this.form.new_pwd2.length > 4 && this.form.new_pwd2.length < 13
			// },
		},
    methods: {
		forId:function(index){
			 return "collapse-" +index
 		},
			setCurrIndex(index){
				this.currSelIndex=index;
			},
			onMenuClick(i){
				//this.isMenuUpClick[0]=!(this.isMenuUpClick[0])
				this.$set(this.isMenuUpClick, i, !(this.isMenuUpClick[i])); //
				//this.isMenuDownClick[0]=!(this.isMenuDownClick[0])
				this.$set(this.isMenuDownClick, i, !(this.isMenuDownClick[i])); //
				for(var t=0;t<this.isMenuUpClick.length;t++){
					 if (t!=i){
						 this.$set(this.isMenuUpClick, t, true); //
						 //this.isMenuDownClick[0]=!(this.isMenuDownClick[0])
						 this.$set(this.isMenuDownClick, t, false); //
					 }
				}
			},
			onMenuCollapse(){
				if (this.isCollapse){
					 this.menuCols=0;
					 this.contentCols=12;
				}else{
						this.menuCols=2;
						this.contentCols=10;
				}
				this.isCollapse=!this.isCollapse
			},
			
			onQuit(evt) {
				setStore(GLOBAL.UID_TOKEN,'')
				this.$router.push({name:'Login',params:{}});
			},
			
			onSelected(index) {
				this.currSelIndex=index;
			},
			
				
			handleOk(evt) {
				this.isSubmit=true;
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
			showModal(){
				this.old_pwd=""
				this.new_pwd=""
				this.new_pwd2=""
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
.menuBox{
	 height: 100%;
	 width: 100%;
	 padding: 0;
	 position: fixed;
	 background:bg-secondary;
	
}


</style>
