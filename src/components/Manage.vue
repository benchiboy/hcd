<template>
	

	
	
<div class=" " >

<div class="d-flex justify-content-center">
    <b-modal
      id="modal-1"
      ref="modal"
		  title="新增用户"
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
					v-model="form.real_name"
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
      		v-model="form.pwd1"
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
					v-model="form.pwd2"
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
					v-model="form.expire"
					:state="expireState"
					required
				></b-form-input>
			</b-form-group>
			
			
			<b-form-group
				:state="statusState"
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
	
	<div class="d-flex justify-content-center mt-2 mb-2">
		<b-input-group class="w-25">
      <b-input-group-text slot="prepend">登录名称</b-input-group-text>
				<b-form-input type="text" min="0.00"></b-form-input>
			<b-input-group-append>
				<b-button variant="outline-secondary">查询</b-button>
			</b-input-group-append>
		</b-input-group>
	</div>		
				
  <div>
    <b-card-group deck class="m-2">
      <b-card
        border-variant="primary"
        header="李晓明"
        header-bg-variant="primary"
        header-text-variant="white"
        align="center"
	    >
				<b-card-text>
				<div class="d-flex justify-content-between">
					<span><h6>登录账号:</h6></span><span>admin</span>
				</div>
					<div class="d-flex justify-content-between">
						<span><h6>上次登录时间:</h6></span><span>2018-12-12 12:12:12</span>
					</div>
					<div class="d-flex justify-content-between">
						<span><h6>有效期至:</h6></span><span>2018-12-12</span>
					</div>
					<div class="d-flex justify-content-between">
						<span><h6>用户状态:</h6></span><span>正常</span>
					</div>
					<div class="d-flex justify-content-between">
						<span><h6>权限:</h6></span><span>设备地图、设备分析</span>
					</div>
					<div class="d-flex justify-content-end">
						<b-button-group size="sm"  class="mt-2" >
						<b-button variant="outline-primary" class="mr-3">
							<img  src="../assets/icon_trashcan.png" alt="Image 1" width="30" height="30" class=""></img>
						</b-button>
					
						<b-button variant="outline-primary">
							<img  src="../assets/icon_dispose.png" alt="Image 1" width="30" height="30" class=""></img>
						</b-button>
						</b-button-group>
					</div>
				</b-card-text>
			</b-card>
			
			<b-card
				border-variant="primary"
				header="李晓明"
				header-bg-variant="primary"
				header-text-variant="white"
				align="center"
			>
				<b-card-text>
				<div class="d-flex justify-content-between">
					<span><h6>登录账号:</h6></span><span>admin</span>
				</div>
					<div class="d-flex justify-content-between">
						<span><h6>上次登录时间:</h6></span><span>2018-12-12 12:12:12</span>
					</div>
					<div class="d-flex justify-content-between">
						<span><h6>有效期至:</h6></span><span>2018-12-12</span>
					</div>
					<div class="d-flex justify-content-between">
						<span><h6>用户状态:</h6></span><span>正常</span>
					</div>
					<div class="d-flex justify-content-between">
						<span><h6>权限:</h6></span><span>设备地图、设备分析</span>
					</div>
					<div class="d-flex justify-content-end">
						<b-button-group size="sm"  class="mt-2" >
						<b-button variant="outline-primary" class="mr-3">
							<img  src="../assets/icon_trashcan.png" alt="Image 1" width="30" height="30" class=""></img>
						</b-button>
					
						<b-button variant="outline-primary">
							<img  src="../assets/icon_dispose.png" alt="Image 1" width="30" height="30" class=""></img>
						</b-button>
						</b-button-group>
					</div>
				</b-card-text>
			</b-card>
			
			
			
			<b-card
				border-variant="primary"
				header="李晓明"
				header-bg-variant="primary"
				header-text-variant="white"
				align="center"
			>
				<b-card-text>
				<div class="d-flex justify-content-between">
					<span><h6>登录账号:</h6></span><span>admin</span>
				</div>
					<div class="d-flex justify-content-between">
						<span><h6>上次登录时间:</h6></span><span>2018-12-12 12:12:12</span>
					</div>
					<div class="d-flex justify-content-between">
						<span><h6>有效期至:</h6></span><span>2018-12-12</span>
					</div>
					<div class="d-flex justify-content-between">
						<span><h6>用户状态:</h6></span><span>正常</span>
					</div>
					<div class="d-flex justify-content-between">
						<span><h6>权限:</h6></span><span>设备地图、设备分析</span>
					</div>
					<div class="d-flex justify-content-end">
						<b-button-group size="sm"  class="mt-2" >
						<b-button variant="outline-primary" class="mr-3">
							<img  src="../assets/icon_trashcan.png" alt="Image 1" width="30" height="30" class=""></img>
						</b-button>
					
						<b-button variant="outline-primary">
							<img  src="../assets/icon_dispose.png" alt="Image 1" width="30" height="30" class=""></img>
						</b-button>
						</b-button-group>
					</div>
				</b-card-text>
			</b-card>
			<b-card
				border-variant="primary"
				header="李晓明"
				header-bg-variant="primary"
				header-text-variant="white"
				align="center"
			>
				<b-card-text>
				<div class="d-flex justify-content-between">
					<span><h6>登录账号:</h6></span><span>admin</span>
				</div>
					<div class="d-flex justify-content-between">
						<span><h6>上次登录时间:</h6></span><span>2018-12-12 12:12:12</span>
					</div>
					<div class="d-flex justify-content-between">
						<span><h6>有效期至:</h6></span><span>2018-12-12</span>
					</div>
					<div class="d-flex justify-content-between">
						<span><h6>用户状态:</h6></span><span>正常</span>
					</div>
					<div class="d-flex justify-content-between">
						<span><h6>权限:</h6></span><span>设备地图、设备分析</span>
					</div>
					<div class="d-flex justify-content-end">
						<b-button-group size="sm"  class="mt-2" >
						<b-button variant="outline-primary" class="mr-3">
							<img  src="../assets/icon_trashcan.png" alt="Image 1" width="30" height="30" class=""></img>
						</b-button>
					
						<b-button variant="outline-primary">
							<img  src="../assets/icon_dispose.png" alt="Image 1" width="30" height="30" class=""></img>
						</b-button>
						</b-button-group>
					</div>
				</b-card-text>
			</b-card>
	
    </b-card-group>
  </div>
  
	<div>
	    <b-card-group deck class="m-2 w-25">
	      <b-card
	        align="center"
		   >
	      <b-card-text></b-card-text>
					<b-button v-b-modal.modal-1 variant="outline-primary">
						<img  src="../assets/icon_addperson.png" alt="Image 1" width="30" height="30" class=""></img>
					</b-button>
		
				</b-card>
	    </b-card-group>
	  </div>
  </div>
	</div>
	
</template>

<script>
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
        ],
     
 			 form: {
           login_name: '',
					 rights:[],
					 pwd1:'',
					 pwd2:'',
					 expire:'',
					 real_name:'',
					 status:'',
         },
      }
    },
    computed: {
      nameState() {
		    return this.form.login_name.length > 4 && this.form.login_name.length < 13
      },
			realNameState() {
				return this.form.real_name.length > 4 && this.form.real_name.length < 20
			},
			pwdState1() {
				return this.form.pwd1.length > 4 && this.form.pwd1.length < 13
			},
			pwdState2() {
				return this.form.pwd2.length > 4 && this.form.pwd2.length < 13
			},
			rightsState() {
				return this.form.rights.length>0?true:false;
			}			,
			expireState() {
				return this.form.expire.length>6?true:false;
			}
    },

    mounted() {
     
    },

    methods: {
			
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
			  // evt.preventDefault()
         // Reset our form values
         this.form.login_name = '11111'
         this.form.real_name = '11111'
         this.form.pwd1 = '11111'
         this.form.pwd2 = '11111'
				 this.form.status='e'
				 this.form.rights=['d','m','a','l']
				 this.form.expire='2019-12-12'
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
.map{
	height: 650px;
	width:auto;
	
	border: 1px solid red;

}
</style>
