<template>
  <div >
		
		<div>
			<b-tabs
				active-nav-item-class="font-weight-bold text-uppercase text-danger"
				active-tab-class="font-weight-bold text-success"
				content-class="mt-3"
			>
					<b-tab title="个体分析" >
						<div>
						<b-card no-body>
							<b-tabs pills card vertical>
								<b-tab title="设备身份" active @click="onTabId">
										<router-view/>
								</b-tab>
								<b-tab title="设备配置" @click="onTabConfig">
									 <router-view/>
								</b-tab>
								<b-tab title="监控预警" @click="onTabMonitor">
									 <router-view/>
								</b-tab>
								<b-tab title="运行状态" @click="onTabStatus" > 
									 <router-view/>
								</b-tab>
								<b-tab title="指标分析"   @click="onTabFact">
										<router-view/>
								</b-tab>
								</b-tabs>
						</b-card>
					</div>
			</b-tab>
	
					<b-tab title="整体分析">
							<p>I'm the second tab</p>
					</b-tab>
	
		</b-tabs>
		</div>
	</div>
</template>

<script>
	// import echarts from 'echarts'
   export default {
        name: '',
       data () {
       		return {
       	}
       },
			 
			 computed: {
			 	sortOptions() {
			 		// Create an options list from our fields
			 		return this.fields
			 			.filter(f => f.sortable)
			 			.map(f => {
			 				return { text: f.label, value: f.key }
			 			})
			 	},
			 	countryOptions() {
			 		// Create an options list from our fields
			 		return  [
			 			{ text: '中国', value: 'e' },
			 			{ text: '日本', value: 'd' },
			 			{ text: '美国', value: 'f' },
			 		]
			 	},
			 	areaOptions() {
			 		// Create an options list from our fields
			 		return  [
			 			{ text: '北京', value: 'a' },
			 			{ text: '上海', value: 'b' },
			 			{ text: '重庆', value: 'c' },
			 		]
			 	},deviceTypeOptions() {
			 		// Create an options list from our fields
			 		return  [
			 			{ text: 'mLabs', value: 'a' },
			 			{ text: 'qLabs', value: 'b' },
			 			{ text: 'uLabs', value: 'c' },
			 		]
			 	},
			 	deviceStatusOptions() {
			 		// Create an options list from our fields
			 		return  [
			 			{ text: '运行良好', value: 'a' },
			 			{ text: '使用不足', value: 'b' },
			 			{ text: '警告', value: 'c' },
			 			{ text: '紧急', value: 'd' },
			 			{ text: '闲置', value: 'e' },
			 			
			 		]
			 	}
			 	
			 },
			 
				mounted(){		
					this.onTabId()
					
				},
	
        methods:{
					onTabId(){
						this.$router.push({name:'AnalysisID',params:{}});
					},
					onTabConfig(){
						this.$router.push({name:'AnalysisConfig',params:{}});
					},
					onTabMonitor(){
						this.$router.push({name:'AnalysisMonitor',params:{}});
					},
					onTabStatus(){
						this.$router.push({name:'AnalysisStatus',params:{}});
					},
					onTabFact(){
						this.$router.push({name:'AnalysisFact',params:{}});
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
