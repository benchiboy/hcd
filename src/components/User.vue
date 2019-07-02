<template>
	
<div >
<div class="d-flex justify-content-center">
    <b-modal
		id="manage-modal-add"
		ref="modal"
		title="新增用户"
		scrollable
		@show="showModalAdd"
		@hidden="hiddenModal"
		size="md"
		@ok="handleAddOk"
    >
	
	<template slot="modal-footer" slot-scope="{ ok, cancel, hide }">
      <b-button size="md" variant="success" @click="ok()">
			确定
      </b-button>
      <b-button size="md" variant="danger" @click="cancel()">
			取消
      </b-button>
    </template>

	<div class="m-3" >
      <form ref="form" @submit.stop.prevent="handleOk" >
				<b-form-group
				  :state="nameState"
				  label="登录账号"
				  label-for="name-input"
				  invalid-feedback="登录账号必须为5-12个英文字母组合"
				  valid-feedback="输入通过校验"
				  class="text-left w-100 "
			 >
				<b-form-input
					id="name-input"
					v-model="form.login_name"
					:state="nameState"
					required
				></b-form-input>
			 </b-form-group>

				<b-form-group
          :state="realNameState"
          label="用户姓名"
          label-for="realNameState"
          invalid-feedback="用户姓名必须4-20个英文字母组合"
					valid-feedback="输入通过校验"
					class="text-left w-100 "
        >
				<b-form-input
					id="realNameState"
					v-model="form.nick_name"
					:state="realNameState"
					required
				></b-form-input>
			 </b-form-group>
			 
				
      <b-form-group
      	:state="pwdState1"
      	label="登录密码"
      	label-for="pwd1-input"
      	invalid-feedback="登录密码不能为空"
				valid-feedback="密码输入通过"
				class="text-left"
		
	    >
      	<b-form-input
      		id="pwd1-input"
					type="password"
      		v-model="form.login_pass"
      		:state="pwdState1"
      		required
	
      	></b-form-input>
      </b-form-group>
	
			<b-form-group
				:state="pwdState2"
				label="确认密码"
				label-for="pwd2-input"
				invalid-feedback="确认密码不能为空"
				valid-feedback="确认密码输入通过"
				class=" text-left"
				>
				
				<b-form-input
					id="pwd2-input"
					type="password"
					v-model="form.login_pass2"
					:state="pwdState2"
					required
						
				></b-form-input>
			</b-form-group>
			
			<b-form-group
				:state="expireState"
				label="账户到期日-默认1年"
				label-for="expire-input"
				invalid-feedback="账户到期日不能为空"
				valid-feedback="账户到期日通过"
				class=" text-left"
				
			>
				<b-form-input
					id="expire-input"
					type="date"
					v-model="form.expire_date"
					:state="expireState"
					required
				
				></b-form-input>
			</b-form-group>
			
			
			<b-form-group
				label="账户状态"
				label-for="btn-radios-2"
				invalid-feedback="账户状态"
				class="text-left"
			>
				 <b-form-radio-group
        id="btn-radios-2"
        v-model="form.status"
        :options="status_options"
        buttons
        button-variant="outline-primary"
        size="sm"
        name="radio-btn-outline"
				></b-form-radio-group>
			
				</b-form-group>
	
				<b-form-group
					:state="rightsState"
					label="选择用户权限"
					label-for="rights-input"
					invalid-feedback="用户权限不能为空"
					valid-feedback="权限校验通过"
					class="text-left"
				>
				<b-form-checkbox-group
					id="rights-input"
					v-model="form.rights"
					:options="options"
					switches
				></b-form-checkbox-group>
 
			 </b-form-group>
			 
			</form>
			</div >
    </b-modal>
	
		<b-modal
		      id="manage-modal-edit"
		      ref="modal2"
				  title="修改用户信息"
					scrollable
		      @show="showModalEdit"
		      @hidden="hiddenModal"
		      @ok="handleEditOk"
		    >
				 <template slot="modal-footer" slot-scope="{ ok, cancel, hide }">
		      <b-button size="md" variant="success" @click="ok()">
						确定
		      </b-button>
		      <b-button size="md" variant="danger" @click="cancel()">
		        取消
		      </b-button>
		    </template>
		
				<div class="m-3" >
		      <form ref="form" @submit.stop.prevent="handleOk" >
						<b-form-group
		          :state="nameState"
		          label="登录账号"
		          label-for="name-input"
		          invalid-feedback="登录账号必须为5-12个英文字母组合"
							valid-feedback="输入通过校验"
							class="text-left w-100 "
		        >
						<b-form-input
							id="name-input"
							v-model="form.login_name"
							:state="nameState"
							required
							
							disabled
						></b-form-input>
					 </b-form-group>
		
						<b-form-group
		          :state="realNameState"
		          label="用户姓名"
		          label-for="realNameState"
		          invalid-feedback="用户姓名必须4-20个英文字母组合"
							valid-feedback="输入通过校验"
							class="text-left w-100 "
		        >
						<b-form-input
							id="realNameState"
							v-model="form.nick_name"
							:state="realNameState"
							required
						></b-form-input>
					 </b-form-group>
					
					<b-form-group
						:state="expireState"
						label="账户到期日-默认1年"
						label-for="expire-input"
						invalid-feedback="账户到期日不能为空"
						valid-feedback="账户到期日通过"
						class=" text-left"
						
					>
						<b-form-input
							id="expire-input"
							type="date"
							v-model="form.expire_date"
							:state="expireState"
							required
						
						></b-form-input>
					</b-form-group>
					
					
					<b-form-group
						label="账户状态"
						label-for="btn-radios-2"
						invalid-feedback="账户状态"
						class="text-left"
					>
						 <b-form-radio-group
		        id="btn-radios-2"
		        v-model="form.status"
		        :options="status_options"
		        buttons
		        button-variant="outline-primary"
		        size="sm"
		        name="radio-btn-outline"
						></b-form-radio-group>
					
						</b-form-group>
			
						<b-form-group
							:state="rightsState"
							label="选择用户权限"
							label-for="rights-input"
							invalid-feedback="用户权限不能为空"
							valid-feedback="权限校验通过"
							class="text-left"
						>
						<b-form-checkbox-group
							id="rights-input"
							v-model="form.rights"
							:options="options"
							switches
						></b-form-checkbox-group>
					 </b-form-group>
					</form>
					</div >
		    </b-modal>
  </div>
<div>
	
	<div class="d-flex justify-content-around  mt-2 border-bottom" >
		<b-form-group label-cols-sm="3" label="用户名称" class="mb-0">
			<b-input-group>
				<b-form-input type="text" ></b-form-input>
				<b-input-group-append>
					<b-button  @click="searchData">查询</b-button>
				</b-input-group-append>
			</b-input-group>
		</b-form-group>
		<b-button v-b-modal.manage-modal-add  class=" btn-sm">
			<img  src="../assets/icon_addperson.png" alt="Image 1" width="30" height="30" class=""></img>
		</b-button>
	</div>		
				
	<div>
		<b-container fluid class="mt-2">
		<!-- User Interface controls -->
		<b-row >
			<b-col md="3" v-for="account in accounts" >
				<b-card
					border-variant="primary"
					:header="account.nick_name"
					header-bg-variant="success"
					header-text-variant="white"
					align="center"
					class="mt-2"
				>
					<b-card-text>
						<div class="d-flex justify-content-between">
							<span><h6>登录账号:</h6></span><span>{{ account.login_name }}</span>
						</div>
						
						<div class="d-flex justify-content-between">
							<span><h6>有效期至:</h6></span><span>{{ account.expire_date }}</span>
						</div>
						<div class="d-flex justify-content-between">
							<span><h6>用户状态:</h6></span><span>{{ account.status=='e'?'正常': account.status=='f'?'冻结':'禁用'}}</span>
						</div>
						<div class="d-flex justify-content-between">
							<span><h6>权限:</h6></span><span>{{ getRights(account.rights)}}</span>
						</div>
						<div class="d-flex justify-content-end">
							<b-button-group size="sm"  class="mt-2" >
							<b-button variant="outline-primary" @click="delAccount(account.user_id,account.login_name)" class="mr-3">
								<img  src="../assets/icon_trashcan.png" alt="Image 1" width="20" height="20" class=""></img>
							</b-button>
							<b-button variant="outline-primary" v-b-modal.manage-modal-edit @click="getAccount(account.user_id)">
								<img  src="../assets/icon_dispose.png" alt="Image 1" width="20" height="20" class=""></img>
							</b-button>
							</b-button-group>
						</div>
					</b-card-text>
				</b-card>
			</b-col >	
		</b-row>		
		</b-container
 
 </div>
	</div>

</div>
		<div class="mt-3">
				<nav >
					<ul class="pagination ">
						<li class="page-item"><a class="page-link" @click="prevPage">上一页</a></li>
						<li  v-for="n in totalPage"   class="page-item" >
							<a class="page-link" :class="currPageNo==n?'bg-danger':''"   @click="goPage(n)">{{n}}</a>
						</li>			
						<li class="page-item"><a class="page-link" @click="nextPage">下一页</a></li>
					</ul>
				</nav>
		</div>
	
	
	</div>
	
</template>

<script>
	import GLOBAL from './Global.js'
  export default {
    data() {
      return {
				options: [
          { text: '设备地图', value: 'm' },
          { text: '设备列表', value: 'l' },
          { text: '设备分析', value: 'a' },
          { text: '设备决策', value: 'd' }
        ],
				status_options: [
          { text: '正常', value: 'e' },
          { text: '禁用', value: 'd' },
					{ text: '冻结', value: 'f' },
        ],
			 login_name:'',
			 currPageNo:1,
			 totalPage:0,
 			 form: {
					 page_no:1,
					 page_size:8,
					 user_id:0,
           login_name: '',
					 rights:[],
					 login_pass:'',
					 login_pass2:'',
					 expire_date:'',
					 nick_name:'',
					 status:'',
         },
			 accounts:[],
      }
    },
    computed: {
      nameState() {
		    return this.form.login_name.length > 4 && this.form.login_name.length < 13
      },
			realNameState() {
				return this.form.nick_name.length > 2 && this.form.nick_name.length < 20
			},
			pwdState1() {
				return this.form.login_pass.length > 4 && this.form.login_pass.length < 13
			},
			pwdState2() {
				return this.form.login_pass2.length > 4 && this.form.login_pass2.length < 13
			},
			rightsState() {
				return this.form.rights.length>0?true:false;
			},
			expireState() {
				return this.form.expire_date.length>6?true:false;
			},
	  },
    mounted() {
				this.getActList()
    },
    methods: {
			getRights(rights) {
				let text=""
				let r=rights.split(",")
				console.log("======>----",r.length)
				for ( var j = 0; j <r.length; j++){
						for ( var i = 0; i <this.options.length; i++){
							if (this.options[i].value==r[j]){
								text=text+this.options[i].text+" "
								break
							}
						}
				}
				return text
			},
				
			checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
		    return valid
      },
			
   		handleAddOk(evt) {
        evt.preventDefault()      
	      if (!this.checkFormValidity()) {
          return
        }
	      this.$nextTick(() => {
          this.$refs.modal.hide()
					this.addAccount()
					this.toast("新增成功")
        })
	    },
			
			handleEditOk(evt) {
				evt.preventDefault()      
 				if (!this.checkFormValidity()) {
 					return
 				}
				this.$nextTick(() => {
					this.$refs.modal2.hide()
					this.setAccount()
					this.toast("修改成功")
				})
			},

      showModalAdd(evt) {
				this.form.nick_name='';
				this.form.login_name=''
				this.form.login_pass='123456'
				this.form.login_pass2='123456'
				this.form.rights=['m']
				let dateNow
				var now = new Date()
				dateNow=now.getFullYear()+1
				if (now.getMonth()+1 <10){
					dateNow+="-0"+(now.getMonth()+ 1)
				}else{
					dateNow+="-"+(now.getMonth()+ 1)
				}
				dateNow+="-"+now.getDate()
				this.form.expire_date=dateNow
				this.form.status='e'
		  },
	
			showModalEdit(evt) {
			},
			
			toast(tip) {
        this.$bvToast.toast(tip, {
          title: `执行结果`,
          toaster: 'b-toaster-top-center',
          solid: true,
					variant: 'info',
					autoHideDelay:1000,
          appendToast: false
        })
      },
			
			hiddenModal(evt) {
				//showModal(evt)
			},
			
			prevPage() {
				if (this.form.page_no>1){
					this.form.page_no--
					this.currPageNo=this.form.page_no
					this.getActList()
				}
			},
			
			goPage(pageNo) {
					this.form.page_no=pageNo
					this.currPageNo=pageNo
					this.getActList()
			},
			nextPage() {
				console.log("this.totalPage",this.totalPage,this.form.page_no)
				if (this.form.page_no<this.totalPage){
					this.form.page_no++
					this.currPageNo=this.form.page_no
					this.getActList()
				}
			},
				
			searchData() {
				this.form.page_no=1
				this.currPageNo=this.form.page_no
				this.getActList()
			},
			/* 用户列表*/
			getActList() {
				var that=this;
				this.$axios.post(GLOBAL.URL_GETACTLIST, 
									JSON.stringify(this.form))
									.then(function (response) {
										that.accounts=response.data.List
										let t=parseInt(response.data.total/that.form.page_size)
										console.log("total======>",response,t)
										let m=response.data.total%that.form.page_size
										if (m>0){
											that.totalPage=t+1
										}else{
											that.totalPage=t
										}
										console.log("total-Page======>",that.totalPage)
										
									})
									.catch(function (error) {
						}); 		
			},
			/* 新增用户*/
			addAccount() {
				var that=this;
				alert(JSON.stringify(this.form))
				this.$axios.post(GLOBAL.URL_ADDACCOUNT, 
									JSON.stringify(this.form))
									.then(function (response) {
											that.getActList();
									})
									.catch(function (error) {
						}); 		
			},
			/* 修改用户提交*/
			setAccount() {
				var that=this;
				this.$axios.post(GLOBAL.URL_SETACCOUNT, 
									JSON.stringify(this.form))
									.then(function (response) {
									})
									.catch(function (error) {
										console.log("=========>",error);
						}); 		
			},
			
			/* 得到用户信息*/
			getAccount(user_id) {
				var that=this;
				this.form.user_id=user_id
				this.$axios.post(GLOBAL.URL_GETACCOUNT, 
									JSON.stringify(this.form))
									.then(function (response) {
										that.form.nick_name=response.data.nick_name
										that.form.login_name=response.data.login_name
										that.form.expire_date=response.data.expire_date
										that.form.status=response.data.status
										that.form.rights=response.data.rights.split(",")
										that.form.login_pass=response.data.login_pass
										that.form.login_pass2=response.data.login_pass
									})
									.catch(function (error) {
										console.log("=========>",error);
						}); 		
			},
			
			/* 删除用户信息*/
			delAccount(user_id,login_name) {
				var that=this;
				let tip='你确认要删除 '+login_name+" 吗?"
			  this.$bvModal.msgBoxConfirm(tip, {
          title: '删除确认',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'danger',
          okTitle: '确定',
          cancelTitle: '取消',
          footerClass: 'p-2',
          hideHeaderClose: false,
          centered: true
        }) 
					.then(value => {
							if (value){
								this.form.user_id=user_id
								this.$axios.post(GLOBAL.URL_DELACCOUNT, 
													JSON.stringify(this.form))
													.then(function (response) {
														that.searchData();
													})
													.catch(function (error) {
														console.log("=========>",error);
									}); 		
							}
					})
					.catch(err => {
						// An error occurred
				})
			},
			
			
			
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
.map{
	height: 650px;
	width:auto;
	
	border: 1px solid red;

}
</style>
