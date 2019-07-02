<template>
   <div>
		 	
		 <div class="mt-3">
				 <b-form-textarea
					id="textarea"
					placeholder=""
					rows="10"
					max-rows="6"
				></b-form-textarea>
		 </div>
		
		 <div class="w-50 loading bg-info"  v-show="isShowLoading">
					<b-spinner class="ml-auto" label="Loading..." ></b-spinner>
						<b-progress :value="ipos" :max="imax"  class="mb-3"></b-progress>
					<h6 style="color: blue;">
							数据正在提取中......
					</h6>
		 </div>
		
		<div>
		</div>

		 <div class="mt-3">
				<b-button  @click="Test" ><span>TEST</span></b-button>
				<b-button  @click="getDataList" v-if="isGetData"><span>提取配置信息</span></b-button>
				<b-button  @click="getDataList" disabled v-else><span>提取配置信息</span></b-button>
	
		 </div>
		 
			
   </div>
</template>

<script>
  import GLOBAL from './Global.js'
	import Util from './Util.js';
  export default {
    data() {
      return {
				isBusy: false,
				form:{
					token:'123',
					sn:'',
			
				},
				ipos:0,
				imax:9,
				isShowLoading:false,
				isGetData:true,
      }
    },
  
	 mounted() {
			let  that=this;
			if (this.$route.params.sn!=null){
					this.form.sn=this.$route.params.sn
			}
			Util.$on('setDeviceSn_Config', function (sn) {
			 		that.setDeviceSn(sn)
			})
		 	this.getDataList("id","asc",this.currentPage,this.perPage)
   },
	 
    methods: {
			 setDeviceSn(sn){
				  this.form.sn=sn;
			 },
			 Sleep(ms) {
			 	return new Promise(resolve => setTimeout(resolve, ms))
			 },
			 
			 async CheckResult() {
			 	console.log("........")
			 	for (var i=0;i<10;i++){
			 		await	this.Sleep(600)
					this.ipos++
					console.log("........",i)
				}
				this.isShowLoading=false;
				this.isGetData=true
				this.ipos=0;
				
			},
						
			
			getDataList(sortFld,sortMode,pageNo,pageSize){
				var that=this;
				//	this.CheckResult()
				that.isShowLoading=true;
				that.isGetData=false
				that.ipos=0;
				//that.CheckResult()
				console.log("======end ====>")
				this.$axios.post(GLOBAL.URL_DEVICE_CONFIGINFO, 
									JSON.stringify(this.form),
									{headers: {'Content-Type': 'application/json'}})
							.then(function (response) {
								console.log("======>verinfo====>")
								//that.CheckResult()
								console.log("======end ====>")
								that.isGetData=true
								that.isShowLoading=false;
							})
							.catch(function (error) {
								console.log("---->=========>",error);
								that.isShowLoading=false;
				}); 		
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

.loading{
		position: absolute;
		z-index: 1999;
		top: 30%;
		left: 25%;
		width: 20%;
}

</style>
