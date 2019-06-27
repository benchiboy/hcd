<template>
 <div>
	 
	  
		<b-card-group deck class="mt-2" >
			<b-card  text-variant="dark" header="待处理客服问题" class="text-center">
				<b-card-text>
						<b-container fluid  >
							<b-row >
									<b-col md="1"  >
											<span>1</span>
									</b-col>
									<b-col md="3"  >
											<span>2018-12-12 12:12:12</span>
									</b-col>
									<b-col md="2"  >
											<span>qlab</span>
									</b-col>
									<b-col md="2"  >
											<span>北京协和医院</span>
									</b-col>
									<b-col md="3"  >
											<strong><span style="color:red">设备无法启动...</span></strong>
									</b-col>
									<b-col md="1"  >
											<span>查看</span>
									</b-col>
							</b-row>
							
							<b-row  class="mt-2">
									<b-col md="1"  >
											<span>1</span>
									</b-col>
									<b-col md="3"  >
											<span>2018-12-12 12:12:12</span>
									</b-col>
									<b-col md="2"  >
											<span>qlab</span>
									</b-col>
									<b-col md="2"  >
											<span>北京协和医院</span>
									</b-col>
									<b-col md="3"  >
											<strong><span style="color:red">设备无法启动...</span></strong>
									</b-col>
									<b-col md="1"  >
											<span>查看</span>
									</b-col>
							</b-row>
							
						
						</b-container>
				</b-card-text>
			</b-card>
		</b-card-group>
		
		
		
		<b-card-group deck class="mt-2" >
			<b-card  text-variant="dark" header="设备错误日志" class="text-center">
				<b-card-text>
						<b-container fluid  >
							<b-row >
									<b-col md="1"  >
											<span>1</span>
									</b-col>
									<b-col md="5"  >
											<span>2018-12-12 12:12:12</span>
									</b-col>
									<b-col md="6"  >
											<span>北京协和医院-设备无法启动...</span>
									</b-col>
							</b-row>
						
						</b-container>
				</b-card-text>
			</b-card>
		</b-card-group>
		
	
						<b-container fluid >
						<b-row>
							<b-col md="12" class="my-1">
								<div 	  id="main1"   ref="chart1" style="height:380px; border: 1px solid red;"></div>
							</b-col>
						</b-row>
						<b-row>
								<b-col md="12" class="my-1">
									<div id="main2" ref="chart2" style="height:180px; border: 1px solid red;"></div>
								</b-col>
						</b-row>
					</b-container>
			

	
	
</div>
</template>



<script>
	import echarts from 'echarts'
  export default {
        name: '',
					data () {
							return {
								 months:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
								 factData1:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
								 factData2:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
								 factData3:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
								 
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
					var that=this;
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
					
						legend: {
									data:['蒸发量','降水量','平均温度']
						},
						xAxis: [
								{
										type: 'category',
										data: that.months,
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
										interval:60,
										axisLabel: {
												formatter: '{value} ml'
										}
								}
						],
							series: [
									{
											name:'温度',
											type:'line',
											data:that.factData1
									},
									{
											name:'降水量',
											type:'line',
											data:that.factData2
									},
									{
											name:'平均温度',
											type:'line',
											yAxisIndex: 0,
											data:that.factData3
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
.menuBox{
	 height: 100%;
	 width: 100%;
	 padding: 0;
	 position: fixed;
	 background:bg-secondary;
	
}


</style>
