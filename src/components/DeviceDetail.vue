<template>

   <div>
	<!-- 	<div style="" class="text-left ml-3 m">
			<strong class="text-primary border-left  border-success">查询条件</strong>
		</div> -->
	
	<b-container fluid class="mt-2">
		<b-row>
		   <b-col md="4" class="my-1">
			<b-form-group label-cols-sm="4" label="设备序列号" class="mb-0">
					 <b-input-group>
							<b-form-input v-model="deviceNo" placeholder="设备序列号"></b-form-input>
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
	  
  <b-tabs>
    <!-- Add your b-tab components here -->
    <template slot="tabs">
      <b-nav-item href="#" @click="onDeviceInfo">基本信息</b-nav-item>
      <b-nav-item href="#" @click="onDeviceConfig">配置信息</b-nav-item>
	   <b-nav-item href="#" @click="onDeviceVersion">版本信息</b-nav-item>
	  <b-nav-item href="#" @click="onDeviceChip">参数芯片</b-nav-item>
      <b-nav-item href="#" @click="onDeviceChkResult">检测结果</b-nav-item>
      <b-nav-item href="#" @click="onDeviceRunLog">设备日志</b-nav-item>
    </template>
  </b-tabs>
 	<div>  
		<router-view/>
	</div>
 
   </div>
</template>

<script>
  import GLOBAL from './Global.js'

  export default {
    data() {
      return {
      }
    },
 
    methods: {
			onDeviceInfo(){
				this.$router.push({name:'DeviceDetail_Info',params:{nickn_name: ''}});
			},
			
			onDeviceConfig(value){
				this.$router.push({name:'DeviceDetail_Config',params:{nickn_name: ''}});
			},
			
			onDeviceChkResult(value){
				this.$router.push({name:'DeviceDetail_ChkResult',params:{nickn_name: ''}});
		
			},
			
			onDeviceVersion(value){
				this.$router.push({name:'DeviceDetail_Version',params:{nickn_name: ''}});
					
			},
			onDeviceRunLog(){
				this.$router.push({name:'DeviceDetail_RunLog',params:{nickn_name: ''}});
			},
			onDeviceChip(){
				this.$router.push({name:'DeviceDetail_Chip',params:{nickn_name: ''}});
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

.statusColor{
	background: red;
	background-color: #42B983;
}
</style>
