<template>
  <div>
		
		
		<b-card-text>
			设备指标分析</b-card-text>	
			
				<b-card-text>
						<b-container fluid class="mt-2">
							<!-- User Interface controls -->
							<b-row>
								<b-col md="4" class="my-1">
									<b-form-group label-cols-sm="4" label="设备类型" class="mb-0">
										<b-input-group>
											<b-form-select v-model="countrySelected" :options="countryOptions">
												<option slot="first" :value="null">-- 全部 --</option>
											</b-form-select>
											
											<b-input-group-append>
												<b-button  @click="A">清空</b-button>
											</b-input-group-append>
										
										</b-input-group>
									</b-form-group>
								</b-col>
								
								<b-col md="4" class="my-1">
									<b-form-group label-cols-sm="4" label="设备编号" class="mb-0">
										<b-input-group>
										<b-form-input v-model="filter" placeholder="输入设备编号"></b-form-input>
												<b-input-group-append>
													<b-button   @click="filter = ''">清空</b-button>
												</b-input-group-append>
										</b-input-group>
									</b-form-group>
								</b-col>
							
								<b-col md="4" class="my-1">
									<b-form-group label-cols-sm="4" label="选择指标" class="mb-0">
										<b-input-group>
											<b-form-select v-model="deviceStatusSelected" :options="deviceStatusOptions">
												<option slot="first" :value="null">-- 全部 --</option>
											</b-form-select>
							
											<b-input-group-append>
												<b-button  @click="filter = ''">清空</b-button>
											</b-input-group-append>
											
										</b-input-group>
									</b-form-group>
								</b-col>
						</b-row>
					
						<b-row>
							<b-col md="6" class="my-1">
								<div 	  id="main1"   ref="chart1" style="height:400px; border: 1px solid red;"></div>
							</b-col>
							<b-col md="6" class="my-1">
									<div id="main2" ref="chart2" style="height:400px; border: 1px solid red;"></div>
								</b-col>
						</b-row>
					</b-container>
				</b-card-text>
			
	</div>
</template>	


<script>
	import echarts from 'echarts'
  export default {
        name: '',
					data () {
							return {
								 months:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
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
				
				created(){		
					this.$nextTick(function () {
						this.drawLine('main1');
						this.drawLine('main2');
					});
				},
					
       methods:{
					drawLine(id){
					var chartId
					if (id=="main1"){
						  chartId = this.$refs.chart1;
					}else{
					    chartId = this.$refs.chart2;
					}
					console.log("bar-div======>",chartId)
						this.charts = echarts.init(chartId)
						this.charts.setOption({
							
						tooltip: {
								trigger: 'axis',
								axisPointer: {
										type: 'cross',
										crossStyle: {
												color: '#999'
										}
								}
						},
						toolbox: {
								feature: {
										dataView: {show: true, readOnly: false},
										magicType: {show: true, type: ['line', 'bar']},
										restore: {show: true},
										saveAsImage: {show: true}
								}
						},
						legend: {
									data:['蒸发量','降水量','平均温度']
						},
						xAxis: [
								{
										type: 'category',
										data: this.months,
										axisPointer: {
												type: 'shadow'
										}
								}
						],
						yAxis: [
								{
										type: 'value',
										name: '水量',
										min: 0,
										max: 250,
										interval: 50,
										axisLabel: {
												formatter: '{value} ml'
										}
								}
						],
							series: [
									{
											name:'蒸发量',
											type:'bar',
											data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
									},
									{
											name:'降水量',
											type:'bar',
											data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
									},
									{
											name:'平均温度',
											type:'line',
											yAxisIndex: 0,
											data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
									}
							]
               })
            }
        },
	  
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
