<template>
  <div class="backimg d-flex justify-content-center ">
 		<div class="w-25" style="margin-top: 220px;">
			 <b-form @submit="onSubmit" @reset="onReset" >
				<b-form-group id="input-group-1"  label-for="input-1">
						<b-input-group prepend="厂家编号">
						<b-form-input id="input-1"
						v-model="form.mct_no"
						required
						placeholder="请输入"></b-form-input>
						</b-input-group>
				</b-form-group>
				
				<b-form-group id="input-group-2"  label-for="input-2">
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
		}
	},
	 methods: {
		start(){
			setTimeout(function(){ alert("hello")},1000)
		},
		makeToast(tip) {
		this.$bvToast.toast(tip, {
          title: `登录结果`,
          variant:"warning",
          solid: true,
		  toaster: "b-toaster-top-center",
        })
      },
      onSubmit(evt) {
			  evt.preventDefault()
				var that=this;
				this.$axios.post(GLOBAL.URL_SIGNIN, 
						JSON.stringify(this.form))
						.then(function (response) {
								if (response.data.err_code==GLOBAL.SUCC){
									setStore(GLOBAL.UID_TOKEN,response.data.token)
									console.log("======>",response.data)
									that.$router.push({name:'Home',params:{nickn_name: response.data.nick_name}});
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
