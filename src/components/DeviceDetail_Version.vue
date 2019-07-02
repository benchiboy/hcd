<template>
	
   <div>
	   {{form.sn}}
	<div class="d-flex justify-content-center mt-5" >
		<div class="w-25 mt-4 p-4" style=" background: #ADD8E6;">
			<div>整机版本</div>
			<div>
				<b-badge pill variant="primary"><span class="pl-4 pr-4">{{verInfo.device_ver}}</span></b-badge>
			</div>
		</div>
	</div>

	<div class=" d-flex justify-content-center ">
		<div  style="border: 1px solid #ADD8E6;background: #ADD8E6;height: 100px;">
		</div>
	</div>

	<div class=" d-flex justify-content-center ">
		<div  class="w-50  p-3" 
				style="border-left: 2px solid #ADD8E6; 
					   border-top:2px solid #ADD8E6; 
					   border-right: 2px solid #ADD8E6;
					   background:white;height: 100px;">
		</div>
	</div>

	<div class="d-flex justify-content-around ">
		<div class="w-25  p-4 " style="background: #ADD8E6;">
			<div>软件版本</div>
			<div>
				<b-badge pill variant="primary"><span class="pl-4 pr-4">{{verInfo.sw_ver}}</span></b-badge>
			</div>
		</div>
		
		<div class="w-25  p-4 " style="background: #ADD8E6;">
			<div>硬件版本</div>
			<div >
				<b-badge pill variant="primary" >
					<span class="pl-4 pr-4">{{verInfo.hw_ver}}</span>
				</b-badge>
			</div>
		</div>
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
		verInfo:{
			sn:'',
			device_ver:'',
			sw_ver:'',
			install_time:''
		},
		form:{
			token:'123',
			sn:'011401K0500031',
		},
      }
    },
   
    mounted() {
		let that=this;
		if (this.$route.params.sn!=null){
			this.form.sn=this.$route.params.sn
		}
		Util.$on('setDeviceSn_Version', function (sn) {
			that.setDeviceSn(sn)
		})  
		
		this.getDataList("id","asc",this.currentPage,this.perPage)
	},
    methods: {
		setDeviceSn(sn){
			this.form.sn=sn;
		},
		getDataList(sortFld,sortMode,pageNo,pageSize){
		var that=this;
		//that.isBusy=true
		this.$axios.post(GLOBAL.URL_DEVICE_VERINFO, 
							JSON.stringify(this.form),
							{headers: {'Content-Type': 'application/json'}})
					.then(function (response) {
						that.verInfo=response.data.data
						console.log("======>verinfo====>",that.verInfo)
					})
					.catch(function (error) {
					console.log("---->=========>",error);
		}); 		
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
.loading{
		position: absolute;
		z-index: 1999;
		top: 300px;
		left: 400px;
		width: 20%;
}

.statusColor{
	background: red;
	background-color: #42B983;
}
</style>
