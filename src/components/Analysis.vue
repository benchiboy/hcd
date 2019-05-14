<template>
  <div >
		<div>
			<b-tabs
				active-nav-item-class="font-weight-bold text-uppercase text-danger"
				active-tab-class="font-weight-bold text-success"
				content-class="mt-3"
			>
					<b-tab title="个体分析" active>
						<div>
						<b-card no-body>
							<b-tabs pills card vertical>
								<b-tab title="设备身份" active @click="tab1">
									<b-card-text>
										
										<div id="main" style="width:700px;height:400px; border: 1px solid red;"></div>
									</b-card-text>
								</b-tab>
								
								<b-tab title="设备配置"><b-card-text>
										Tab Contents 2</b-card-text></b-tab>
								<b-tab title="监控预警"><b-card-text>
										Tab Contents 3</b-card-text>	
								</b-tab>
								
							</b-tabs>
						</b-card>
					</div>
							
			</b-tab>
			<b-tab title="整体分析"><p>I'm the second tab</p></b-tab>
		</b-tabs>
		</div>
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
        methods:{
					
        drawLine(id){
            
						this.charts = echarts.init(document.getElementById(id))
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
								},
								{
										type: 'value',
										name: '温度',
										min: 0,
										max: 25,
										interval: 5,
										axisLabel: {
												formatter: '{value} °C'
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
											yAxisIndex: 1,
											data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
									}
							]
               })
            }
        },
				
      //调用
      mounted(){
            this.$nextTick(function() {
                this.drawLine('main')
            })
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
