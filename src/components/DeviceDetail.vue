<template>

   <div>
	<!-- 	<div style="" class="text-left ml-3 m">
			<strong class="text-primary border-left  border-success">查询条件</strong>
	</div> -->
	
	<b-container fluid class="mt-2 " style="border-bottom: 1px solid #ddd;">
		<b-row>
		   <b-col md="5" class="my-1 mb-3">
			<b-form-group label-cols-sm="4" label="设备序列号" class="mb-0">
					 <b-input-group>
					
					<b-form-input v-model="sn" placeholder="设备序列号"></b-form-input>
					
					<b-input-group-append  >
							<b-button   @click="onSearchData(sn)">
								<span class="pl-2 pr-2">GO</span>
							</b-button>
					</b-input-group-append>
					
					 </b-input-group>
					</b-form-group>
			</b-col>
			
		</b-row>
	</b-container>
	<!-- <b-tabs content-class="mt-3" justified>
		<b-tab title="基本信息" active  > </b-tab>
		<b-tab title="配置信息"></b-tab>
		<b-tab title="参数芯片"></b-tab>
		<b-tab title="检测结果" ></b-tab>
		<b-tab title="设备日志" ></b-tab>
	  </b-tabs> -->
	  
  <b-tabs class="mt-3">
    <!-- Add your b-tab components here -->
    <template slot="tabs">
      <b-nav-item href="#" @click="onDeviceInfo(sn)" 
	  :class="currIndex==1?'selectedItem':''">基本信息</b-nav-item>
      <b-nav-item href="#" @click="onDeviceConfig"
	  :class="currIndex==2?'selectedItem':''">配置信息</b-nav-item>
	  <b-nav-item href="#" @click="onDeviceVersion"
	  :class="currIndex==3?'selectedItem':''">版本信息</b-nav-item>
	  <b-nav-item href="#" @click="onDeviceChip"
	  :class="currIndex==4?'selectedItem':''">参数芯片</b-nav-item>
      <b-nav-item href="#" @click="onDeviceChkResult"
	  :class="currIndex==5?'selectedItem':''">检测结果</b-nav-item>
      <b-nav-item href="#" @click="onDeviceRunLog"
	  :class="currIndex==6?'selectedItem':''">设备日志</b-nav-item>
    </template>
  </b-tabs>
 	<div>  
		<router-view/>
	</div>
 
   </div>
</template>

<script>
  import GLOBAL from './Global.js'
  import Util from './Util.js';
  export default {
    data() {
      return {
		  currIndex:1,
		  sn:'11111111'
      }
    },
	mounted() {
		// Set the initial number of items
		console.log("------>",this.$route.params.sn)
		if (this.$route.params.sn!=null){
			this.form.sn=this.$route.params.sn
		}
		
		this.onDeviceInfo()
	},
    methods: {
			onDeviceInfo(sn){
				this.currIndex=1
				this.$router.push({name:'DeviceDetail_Info',params:{sn: sn}});
			},
			
			onDeviceConfig(sn){
				this.currIndex=2
				this.$router.push({name:'DeviceDetail_Config',params:{sn: sn}});
			},
			
			onDeviceVersion(sn){
				this.currIndex=3
				this.$router.push({name:'DeviceDetail_Version',params:{sn: sn}});
			},
			
			onDeviceChkResult(sn){
				this.currIndex=5
				this.$router.push({name:'DeviceDetail_ChkResult',params:{sn: sn}});
			},
		
			onDeviceRunLog(sn){
				this.currIndex=6
				this.$router.push({name:'DeviceDetail_RunLog',params:{sn: sn}});
			},
			onDeviceChip(sn){
				this.currIndex=4
				this.$router.push({name:'DeviceDetail_Chip',params:{nickn_name: sn}});
			},
			onSearchData(sn){
				//Util.$emit('getDeviceSn',sn);
			switch (this.currIndex) {
				case 1:
					this.$router.push({name:'DeviceDetail_Info',params:{sn: sn}});
					
					break;
				case 2:
					this.$router.push({name:'DeviceDetail_Config',params:{sn: sn}});
					break;
				case 3:
					this.$router.push({name:'DeviceDetail_Version',params:{sn: sn}});
					break;
				case 4:
					this.$router.push({name:'DeviceDetail_Chip',params:{nickn_name: sn}});
					break;
				case 5:
					this.$router.push({name:'DeviceDetail_ChkResult',params:{sn: sn}});
					break;
				case 6:
					this.$router.push({name:'DeviceDetail_RunLog',params:{sn: sn}});
					break;				
				}
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
.loading{
		position: absolute;
		z-index: 1999;
		top: 300px;
		left: 400px;
		width: 20%;
}

.selectedItem{
	background-color:lightblue
}
</style>
