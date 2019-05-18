<template>
 
 
	<div class="echarts">
    
		<b-button @click="makeData">MakeData</b-button>
		<b-button @click="DrawData">DrawData</b-button>
		<b-button @click="DrawDataTest">Test</b-button>
	
		<div>{{factLen1}}</div>
		
		<!-- <div class="card legend-status-box rounded border-primary shadow-lg" header="运行状态图标">
				<b-card
					header="运行状态图标"
					header-text-variant="white"
					header-tag="header"
					header-bg-variant="info"
					style="max-width: 20rem;"
				>
				<b-card-text>
					
					<div class="d-flex justify-content-between align-items-center">
						<span class="legend-status-item w-25" style="background: green;" ></span> 
						<span class="w-50" style="text-align: left;">运行良好</span><b-badge  pill variant="danger">4</b-badge>
					</div>
					
					<div class="d-flex justify-content-between align-items-center">
						<span class="legend-status-item  w-25" style="background:lightgreen;" ></span> 
						<span class=" w-50" style="text-align: left;">使用不足</span><b-badge pill  variant="danger">4</b-badge>
					</div>
					
					<div class="d-flex justify-content-between align-items-center">
						<span class="legend-status-item  w-25" style="background: yellow;" ></span> 
						<span class=" w-50" style="text-align: left;">警告</span><b-badge  pill variant="danger">4</b-badge>
					</div>
					
					<div class="d-flex justify-content-between align-items-center">
						<span class="legend-status-item  w-25" style="background: red;" ></span> 
						<span class=" w-50" style="text-align: left;">紧急</span><b-badge  pill variant="danger">4</b-badge>
					</div>
					
					<div class="d-flex justify-content-between align-items-center">
						<span class="legend-status-item  w-25" style="background: grey;" ></span> 
						<span class=" w-50" style="text-align: left;">闲置</span><b-badge pill variant="danger">4</b-badge>
					</div>
				</b-card-text>
		
				</b-card>
		</div> -->
			
			
		<div :style="{height:'530px',width:'90%'}" ref="myEchart"></div>
		
		
  </div>
	
	
</template>	
		

<script>
	import echarts from "echarts";
  //import '../../node_modules/echarts/map/js/world.js'
  import '../../node_modules/echarts/map/js/china.js' // 引入中国地图数据
  export default {
					name: "echarts",
					props: ["userJson"],
					data() {
						return {
					
					mapData:[
					{name: '海门', value: 9},
					{name: '鄂尔多斯', value: 12},
					{name: '招远', value: 12},
					{name: '舟山', value: 12},
					{name: '齐齐哈尔', value: 14},
					{name: '盐城', value: 15},
					{name: '赤峰', value: 16},
					{name: '青岛', value: 18},
					{name: '乳山', value: 18},
					{name: '金昌', value: 19},
					{name: '泉州', value: 21},
					{name: '莱西', value: 21},
					{name: '日照', value: 21},
					{name: '胶南', value: 22},
					{name: '南通', value: 23},
					{name: '拉萨', value: 24},
					{name: '云浮', value: 24},
					{name: '梅州', value: 25},
					{name: '文登', value: 25},
					{name: '上海', value: 25},
					{name: '攀枝花', value: 25},
					{name: '威海', value: 25},
					{name: '承德', value: 25},
					{name: '厦门', value: 26},
					{name: '汕尾', value: 26},
					{name: '潮州', value: 26},
					{name: '丹东', value: 27},
					{name: '太仓', value: 27},
					{name: '曲靖', value: 27},
					{name: '烟台', value: 28},
					{name: '福州', value: 29},
					{name: '瓦房店', value: 30},
					{name: '即墨', value: 30},
					{name: '抚顺', value: 31},
					{name: '玉溪', value: 31},
					{name: '张家口', value: 31},
					{name: '阳泉', value: 31},
					{name: '莱州', value: 32},
					{name: '湖州', value: 32},
					{name: '汕头', value: 32},
					{name: '昆山', value: 33},
					{name: '宁波', value: 33},
					{name: '湛江', value: 33},
					{name: '揭阳', value: 34},
					{name: '荣成', value: 34},
					{name: '连云港', value: 35},
					{name: '葫芦岛', value: 35},
					{name: '常熟', value: 36},
					{name: '东莞', value: 36},
					{name: '河源', value: 36},
					{name: '淮安', value: 36},
					{name: '泰州', value: 36},
					{name: '南宁', value: 37},
					{name: '营口', value: 37},
					{name: '惠州', value: 37},
					{name: '江阴', value: 37},
					{name: '蓬莱', value: 37},
					{name: '韶关', value: 38},
					{name: '嘉峪关', value: 38},
					{name: '广州', value: 38},
					{name: '延安', value: 38},
					{name: '太原', value: 39},
					{name: '清远', value: 39},
					{name: '中山', value: 39},
					{name: '昆明', value: 39},
					{name: '寿光', value: 40},
					{name: '盘锦', value: 40},
					{name: '长治', value: 41},
					{name: '深圳', value: 41},
					{name: '珠海', value: 42},
					{name: '宿迁', value: 43},
					{name: '咸阳', value: 43},
					{name: '铜川', value: 44},
					{name: '平度', value: 44},
					{name: '佛山', value: 44},
					{name: '海口', value: 44},
					{name: '江门', value: 45},
					{name: '章丘', value: 45},
					{name: '肇庆', value: 46},
					{name: '大连', value: 47},
					{name: '临汾', value: 47},
					{name: '吴江', value: 47},
					{name: '石嘴山', value: 49},
					{name: '沈阳', value: 50},
					{name: '苏州', value: 50},
					{name: '茂名', value: 50},
					{name: '嘉兴', value: 51},
					{name: '长春', value: 51},
					{name: '胶州', value: 52},
					{name: '银川', value: 52},
					{name: '张家港', value: 52},
					{name: '三门峡', value: 53},
					{name: '锦州', value: 54},
					{name: '南昌', value: 54},
					{name: '柳州', value: 54},
					{name: '三亚', value: 54},
					{name: '自贡', value: 56},
					{name: '吉林', value: 56},
					{name: '阳江', value: 57},
					{name: '泸州', value: 57},
					{name: '西宁', value: 57},
					{name: '宜宾', value: 58},
					{name: '呼和浩特', value: 58},
					{name: '成都', value: 58},
					{name: '大同', value: 58},
					{name: '镇江', value: 59},
					{name: '桂林', value: 59},
					{name: '张家界', value: 59},
					{name: '宜兴', value: 59},
					{name: '北海', value: 60},
					{name: '西安', value: 61},
					{name: '金坛', value: 62},
					{name: '东营', value: 62},
					{name: '牡丹江', value: 63},
					{name: '遵义', value: 63},
					{name: '绍兴', value: 63},
					{name: '扬州', value: 64},
					{name: '常州', value: 64},
					{name: '潍坊', value: 65},
					{name: '重庆', value: 66},
					{name: '台州', value: 67},
					{name: '南京', value: 67},
					{name: '滨州', value: 70},
					{name: '贵阳', value: 71},
					{name: '无锡', value: 71},
					{name: '本溪', value: 71},
					{name: '克拉玛依', value: 72},
					{name: '渭南', value: 72},
					{name: '马鞍山', value: 72},
					{name: '宝鸡', value: 72},
					{name: '焦作', value: 75},
					{name: '句容', value: 75}],
					
					geoCoordMap:{
					'海门':[121.15,31.89],
					'鄂尔多斯':[109.781327,39.608266],
					'招远':[120.38,37.35],
					'舟山':[122.207216,29.985295],
					'齐齐哈尔':[123.97,47.33],
					'盐城':[120.13,33.38],
					'赤峰':[118.87,42.28],
					'青岛':[120.33,36.07],
					'乳山':[121.52,36.89],
					'金昌':[102.188043,38.520089],
					'泉州':[118.58,24.93],
					'莱西':[120.53,36.86],
					'日照':[119.46,35.42],
					'胶南':[119.97,35.88],
					'南通':[121.05,32.08],
					'拉萨':[91.11,29.97],
					'云浮':[112.02,22.93],
					'梅州':[116.1,24.55],
					'文登':[122.05,37.2],
					'上海':[121.48,31.22],
					'攀枝花':[101.718637,26.582347],
					'威海':[122.1,37.5],
					'承德':[117.93,40.97],
					'厦门':[118.1,24.46],
					'汕尾':[115.375279,22.786211],
					'潮州':[116.63,23.68],
					'丹东':[124.37,40.13],
					'太仓':[121.1,31.45],
					'曲靖':[103.79,25.51],
					'烟台':[121.39,37.52],
					'福州':[119.3,26.08],
					'瓦房店':[121.979603,39.627114],
					'即墨':[120.45,36.38],
					'抚顺':[123.97,41.97],
					'玉溪':[102.52,24.35],
					'张家口':[114.87,40.82],
					'阳泉':[113.57,37.85],
					'莱州':[119.942327,37.177017],
					'湖州':[120.1,30.86],
					'汕头':[116.69,23.39],
					'昆山':[120.95,31.39],
					'宁波':[121.56,29.86],
					'湛江':[110.359377,21.270708],
					'揭阳':[116.35,23.55],
					'荣成':[122.41,37.16],
					'连云港':[119.16,34.59],
					'葫芦岛':[120.836932,40.711052],
					'常熟':[120.74,31.64],
					'东莞':[113.75,23.04],
					'河源':[114.68,23.73],
					'淮安':[119.15,33.5],
					'泰州':[119.9,32.49],
					'南宁':[108.33,22.84],
					'营口':[122.18,40.65],
					'惠州':[114.4,23.09],
					'江阴':[120.26,31.91],
					'蓬莱':[120.75,37.8],
					'韶关':[113.62,24.84],
					'嘉峪关':[98.289152,39.77313],
					'广州':[113.23,23.16],
					'延安':[109.47,36.6],
					'太原':[112.53,37.87],
					'清远':[113.01,23.7],
					'中山':[113.38,22.52],
					'昆明':[102.73,25.04],
					'寿光':[118.73,36.86],
					'盘锦':[122.070714,41.119997],
					'长治':[113.08,36.18],
					'深圳':[114.07,22.62],
					'珠海':[113.52,22.3],
					'宿迁':[118.3,33.96],
					'咸阳':[108.72,34.36],
					'铜川':[109.11,35.09],
					'平度':[119.97,36.77],
					'佛山':[113.11,23.05],
					'海口':[110.35,20.02],
					'江门':[113.06,22.61],
					'章丘':[117.53,36.72],
					'肇庆':[112.44,23.05],
					'大连':[121.62,38.92],
					'临汾':[111.5,36.08],
					'吴江':[120.63,31.16],
					'石嘴山':[106.39,39.04],
					'沈阳':[123.38,41.8],
					'苏州':[120.62,31.32],
					'茂名':[110.88,21.68],
					'嘉兴':[120.76,30.77],
					'长春':[125.35,43.88],
					'胶州':[120.03336,36.264622],
					'银川':[106.27,38.47],
					'张家港':[120.555821,31.875428],
					'三门峡':[111.19,34.76],
					'锦州':[121.15,41.13],
					'南昌':[115.89,28.68],
					'柳州':[109.4,24.33],
					'三亚':[109.511909,18.252847],
					'自贡':[104.778442,29.33903],
					'吉林':[126.57,43.87],
					'阳江':[111.95,21.85],
					'泸州':[105.39,28.91],
					'西宁':[101.74,36.56],
					'宜宾':[104.56,29.77]
					},
        chart: null,
				myChart:null,
				timer: null,
				factList1:[],
				MakeDataInternal:4*1000,
				MakeDataLen:47,
				DefaultDelay:400,
			
	    };
    },
  
		mounted() {
	    this.ChinaConfigure();
			this.ClearData()
			//this.DataTimer()
 		},
		
    beforeDestroy() {
      if (!this.chart) {
        return;
      }
      this.chart.dispose();
      this.chart = null;
    },
		
		computed:{
				factLen1(){
						return this.factList1.length
				},
			
		},
    methods: {
			/*
				从微点获取数据
			*/
			makeData(){
				 for (var i = 0; i < this.MakeDataLen; i++) {
						let i=Math.floor(Math.random()*100+1)
						let areaName=this.mapData[i].name
						let areaVale=this.mapData[i].value
						let lng=this.geoCoordMap[areaName][0]
						let lat=this.geoCoordMap[areaName][1]
						if (i%3==0){
							this.factList1.push([0,lng,lat,areaVale])
						}
						if (i%3==1){
							this.factList1.push([1,lng,lat,areaVale])
						}
						if (i%3==2){
							this.factList1.push([2,lng,lat,areaVale])
						}
				 }
			},
		
			Sleep(ms) {
					return new Promise(resolve => setTimeout(resolve, ms))
			},
			
			DrawDataTest() {
				let tLen=this.factList1.length
				let perCnt=parseInt(tLen*this.DefaultDelay/this.MakeDataInternal)
				let modTime=(tLen*this.DefaultDelay)%this.MakeDataInternal
				let modCnt
				if (modTime>0){
					modCnt=modTime/this.DefaultDelay
				}
				for (var i = 0; i <tLen;i++) {
						console.log("====>",i)
						i=i+1
				}
				console.log("====>",modCnt,perCnt)
				
				
			},
			
			/*	
				在ECHART画出数据
				没2分钟取数一次 时间： 2*60*1000MS
				DELAY= 60*1000   /300
			*/
			async DrawData() {
				let tLen=this.factList1.length
				var perCnt=parseInt(tLen*this.DefaultDelay/this.MakeDataInternal)
				var timesCnt=parseInt(this.MakeDataInternal/this.DefaultDelay)
				var modTime=(tLen*this.DefaultDelay)%this.MakeDataInternal
				var modCnt=0
				if (modTime>0){
					 modCnt=modTime/this.DefaultDelay
				}
				console.log("tLen======>",tLen)
				console.log("perCnt======>",perCnt)
				console.log("modCnt======>",modCnt)
				console.log("timesCnt======>",timesCnt)
	
				var totalCnt=0
				for (var i = 0; i <tLen;) {
					var chart=this.myChart;
					var option = this.myChart.getOption();
					for (var j=0;j<perCnt;j++){
							let e=this.factList1.pop()
							option.series[e[0]].data =[{name:"上海", value:[e[1],e[2],e[3]]}]
					}
					i=i+perCnt
					if (modCnt>0){
 						let e=this.factList1.pop()
 						option.series[e[0]].data =[{name:"上海", value:[e[1],e[2],e[3]]}],
 						modCnt=modCnt-1
						i=i+1
					}
					console.log("index======>",i,totalCnt++)
					this.myChart.setOption(option);  
					await	this.Sleep(this.DefaultDelay)
					this.ClearData()
				}
			},
			/*
				清理ECHART数据
			*/
			ClearData() {
				var option = this.myChart.getOption();
				option.series[0].data = []; 
				option.series[1].data = []; 
				option.series[2].data = []; 
				this.myChart.setOption(option);  
			},
			/*
				 定时获取监控数据函数
			*/
			DataTimer() {
				this.timer =setInterval(this.FreshData, 5000)
      },
			
			beforeDestroy() {
				if(this.timer) { //如果定时器还在运行 或者直接关闭，不用判断
						clearInterval(this.timer); //关闭
					}
			},
			
      ChinaConfigure() {
        let myChart = echarts.init(this.$refs.myEchart); //这里是为了获得容器所在位置    
				this.myChart=myChart
        window.onresize = myChart.resize;
				myChart.on('click', function(params){
					alert(params.name);
				});
		
        myChart.setOption({ 
					 title: {
								text: '深圳微点生物设备测量指标监控',
								subtext: 'data from 微点生物',
								sublink: 'http://www.zto.com/',
								x: 'center',
								textStyle: {
										color: 'black'
								}
            },
	
						tooltip : {
							trigger: 'item',
							 formatter: function (params) {
									//alert(params.value + '');
									return "ssssss"
							}
						},
						toolbox: {
							show: true,
							orient : 'vertical',
							left: 'right',
							top: 'center',
							feature : {
									mark : {show: true},
									dataView : {show: true, readOnly: false},
									restore : {show: true},
									saveAsImage : {show: true}
							}
						},
						legend: {
							orient: 'vertical',
							left: 'right',
							itemHeight: 10,
							borderRadius: 5,
							padding: 10,
							borderColor:'red',
							backgroundColor:'#ddd',
							itemWidth: 100,
							shadowColor: 'rgba(0, 0, 0, 0.5)',
							shadowBlur: 40,
							data:['血压指标','脉搏次数','血小板指数'],
							textStyle: {
									fontSize: 12,
									color: '#F001F3'
							},
							formatter: function(name) {
								var index = 0;
								var clientlabels = ['血压指标', '脉搏次数'];
								var clientcounts = ['2323','自定义56'];//后台计算总数量
								clientlabels.forEach(function(value,i){
										if(value == name){
												index = i;
										}
								});
								return name + "(" + clientcounts[index]+"件)";
              }
							
						},
// 					
// 					visualMap: {
//           		left: 'left',
//           		min: 10,
//           		max: 100,
//           		inRange: {
//           			//	color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
//           		},
//           		text:['High','Low'],           // 文本，默认为数值文本
//           		calculable: true
//           },
					geo: { // 这个是重点配置区
            map: 'china', // 表示中国地图
						zoom: 1.1,
            roam: true,
            label: {
              normal: {
                show: true, // 是否显示对应地名
                textStyle: {
                  color: 'white'
                }
              }
            },
						itemStyle: {					// 定义样式
										normal: {					// 普通状态下的样式
												areaColor: 'black',
												borderColor: 'white'
										},
										emphasis: {					// 高亮状态下的样式
												areaColor: 'red'
										}
								}
						},
			    series: [{
							symbolSize: 15,
				      type: 'effectScatter',
              coordinateSystem: 'geo' ,// 对应上方配置
              name: '血压指标', // 浮动框的标题
              data: [],
							rippleEffect: {
                brushType: 'stroke'
							},
							label: {
                normal: {
                    formatter: '{b}',
                    position: 'left',
                    show: false
                }
							},
					    hoverAnimation: true,
							itemStyle: {
							normal: {
									color:'yellow',
									shadowBlur:7,
										},
							},
						},{
							symbolSize: 15,
				      type: 'effectScatter',
              coordinateSystem: 'geo' ,// 对应上方配置
              name: '脉搏次数', // 浮动框的标题
              data: [],
							rippleEffect: {
                brushType: 'stroke'
							},
							label: {
                normal: {
                    formatter: '{b}',
                    position: 'left',
                    show: false
                }
							},
					    hoverAnimation: true,
							itemStyle: {
							normal: {
									color:'blue',
									shadowBlur:7,
										},
							},
						},{
							symbolSize: 15,
				      type: 'effectScatter',
              coordinateSystem: 'geo' ,// 对应上方配置
              name: '血小板指数', // 浮动框的标题
              data: [],
							rippleEffect: {
                brushType: 'stroke'
							},
							label: {
                normal: {
                    formatter: '{b}',
                    position: 'left',
                    show: false
                }
							},
					    hoverAnimation: true,
							itemStyle: {
							normal: {
									color:'red',
									shadowBlur:7,
										},
							},
						}
						]
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
.map{
	height: 650px;
	width:auto;
	
	border: 1px solid red;

}

.legend-status-box{
	background:lavender;
	right: 100px;
	width: 200px;
	bottom: 250px;
	position: absolute;
	z-index: 999; 
}

.legend-status-item{
	display: inline-block;
	width:40px;height:10px;
}
</style>
