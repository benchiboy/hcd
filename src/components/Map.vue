
<template>
	<div>
		

	<div>
		<div id="allmap"  class="map"></div>
	</div>
	
	
		
<div class=" searchbox "  >

	<div class="m-1">
	
	<b-navbar toggleable type="light"  sticky variant="info" style="opacity: 0.8; " class="d-flex align-items-center">
		
	<b-navbar-toggle target="collapse-1" ></b-navbar-toggle>
	<b-collapse id="collapse-1" class="mt-2 ">	
	  <b-form inline class="d-flex align-items-center">
		<label class="mr-sm-2" for="inline-form-custom-select-pref">国家</label>
		<b-form-select v-model="country_selected"  :options="country_options"
		>
		</b-form-select>

		<label class="mr-lg-2 ml-3" for="inline-form-custom-select-pref">地区</label>
		<b-form-select v-model="area_selected"  :options="area_options"
		@change="onAreaChange">
		</b-form-select>
	
		<label class="mr-lg-2 ml-3" for="inline-form-custom-select-pref">设备类型</label>
		<b-form-select v-model="device_selected"  :options="device_options"
		>
		</b-form-select>
			
		<label class="mr-lg-2 ml-3" for="inline-form-custom-select-pref">设备状态</label>
		<b-form-select v-model="status_selected"  :options="status_options"
		>
		</b-form-select>
	  </b-form>
	
	  </b-collapse>
	</b-navbar>
	
   </div>
 
<!-- <div>
  <b-dropdown id="dropdown-offset" offset="25" text="Offset Dropdown" class="m-2">
    <b-dropdown-item href="#">Action</b-dropdown-item>
    <b-dropdown-item href="#">Another action</b-dropdown-item>
    <b-dropdown-item href="#">Something else here</b-dropdown-item>
  </b-dropdown>
</div> -->


</div>
		
	<!-- 
<div class="card searchbox w-50 shadow-lg p-1">
	
	
		<form>
		  <div class="form-row">
			<div class="col">
			   <select id="inputState" class="form-control">
				<option selected>国家</option>
				<option>...</option>
				</select>
			</div>
			<div class="col">
			   <select id="inputState1" class="form-control">
				<option selected>地区</option>
				<option>...</option>
			  </select>
			</div>
		 <div class="col">
		 	<select id="inputState2" class="form-control">
		 	<option selected>设备类型</option>
		 	<option>...</option>
		 	</select>
		 </div>
		 
		 <div class="col">
		 	<select id="inputState" class="form-control">
		 	<option selected>设备状态</option>
		 	<option>...</option>
		 	</select>
		 </div>
		 
		 </div>
		</form>


	</div> -->


	
	<div class="card legend-device-box rounded border-primary shadow-lg" shadow-lg header="设备类型图标">
		 <b-card
			header="设备图例"
			header-text-variant="white"
			header-tag="header"
			header-bg-variant="info"
			style="max-width: 50rem;"
		>
		<b-card-text>
			<div class="d-flex justify-content-between align-items-center">
				<b-img class="rounded-circle" style="width: 25px; height:25px"  src="https://picsum.photos/125/125/?image=58" alt="Center image"></b-img>
				<span class="w-50" style="text-align: left;">mLabs</span>
			</div>
			<div class="d-flex justify-content-between align-items-center mt-1" >
					<b-img class="rounded-circle" style="width: 25px; height:25px"  src="https://picsum.photos/125/125/?image=58" alt="Center image"></b-img>
				<span class="w-50" style="text-align: left;">qLabs</span>
			</div>
			
		</b-card-text>
		</b-card>
	</div>
	
	<div class="card legend-status-box rounded border-primary shadow-lg" header="运行状态图标">
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
				<span class="w-50" style="text-align: left;">运行良好</span>
			</div>
			
			<div class="d-flex justify-content-between align-items-center">
				<span class="legend-status-item  w-25" style="background:lightgreen;" ></span> 
				<span class=" w-50" style="text-align: left;">使用不足</span>
			</div>
			
			<div class="d-flex justify-content-between align-items-center">
				<span class="legend-status-item  w-25" style="background: yellow;" ></span> 
				<span class=" w-50" style="text-align: left;">警告</span>
			</div>
			
			<div class="d-flex justify-content-between align-items-center">
				<span class="legend-status-item  w-25" style="background: red;" ></span> 
				<span class=" w-50" style="text-align: left;">紧急</span>
			</div>
			
			<div class="d-flex justify-content-between align-items-center">
				<span class="legend-status-item  w-25" style="background: grey;" ></span> 
				<span class=" w-50" style="text-align: left;">闲置</span>
			</div>
		</b-card-text>

		</b-card>
	</div>
	
	
	
	</div>
</template>


<script>	
export default {
  name: 'Map', 
  data () {
   return {
		currCountry:'中国',
		currArea:'',
		country_selected: null,
        country_options: [
          { value: null, text: '中国' },
		  { value: null, text: '日本' },
        
        ],
		area_selected: null,
		area_options: [
		{ value: null, text: '北京' },
		{ value: null, text: '天津市' },
		{ value: null, text: '上海市' },
		{ value: null, text: '重庆市' },
		
		],
		device_selected: null,
		device_options: [
		{ value: null, text: '全部' },
		{ value: null, text: 'mLabs' },
		{ value: null, text: 'qLabs' },
	
		
		],
		status_selected: null,
		status_options: [
		{ value: null, text: '运行良好' },
		{ value: null, text: '运行不足' },
		{ value: null, text: '预警' },
		{ value: null, text: '紧急' },
		
		]
   	}
  },
  
  mounted(){		
  	this.createMap();	
  },
  
  methods: {
		//创建地图
		createMap(){
			
			var cityArr=[{city:"北京",lng:"116.413384",lat:"39.910925"},
			{city:"天津市",lng:"117.210813",lat:"39.14393"},
			{city:"上海市",lng:"121.480539",lat:"31.235929"},
			{city:"重庆市",lng:"106.558434",lat:"29.568996"},
			{city:"石家庄",lng:"114.521532",lat:"38.048312"},
			{city:"太原",lng:"112.556391",lat:"37.876989"},
			{city:"济南",lng:"117.126399",lat:"36.656554"},
			{city:"郑州",lng:"113.631419",lat:"34.753439"},
			{city:"沈阳",lng:"123.45599",lat:"41.720916"},
			{city:"长春",lng:"125.330602",lat:"43.821954"},
			{city:"哈尔滨",lng:"126.541615",lat:"45.808826"},
			{city:"南京",lng:"118.802422",lat:"32.064653"},
			{city:"杭州",lng:"120.215512",lat:"30.253083"},
			{city:"合肥",lng:"117.233443",lat:"31.826578"},
			{city:"南昌",lng:"115.864589",lat:"28.689455"},
			{city:"福州",lng:"119.30347",lat:"26.080429"},
			{city:"武汉",lng:"114.311582",lat:"30.598467"},
			{city:"长沙",lng:"112.945473",lat:"28.234889"},
			{city:"成都",lng:"104.081534",lat:"30.655822"},
			{city:"贵阳",lng:"106.636577",lat:"26.653325"},
			{city:"昆明",lng:"102.852448",lat:"24.873998"},
			{city:"广州",lng:"113.271431",lat:"23.135336"},
			{city:"海口",lng:"110.325525",lat:"20.044049"},
			{city:"西宁",lng:"101.78445",lat:"36.623385"},
			{city:"呼和浩特",lng:"111.755509",lat:"40.848423"},
			{city:"乌鲁木齐",lng:"87.62444",lat:"43.830763"},
			{city:"拉萨",lng:"91.120824",lat:"29.65004"},
			{city:"南宁",lng:"108.373451",lat:"22.822607"},
			{city:"银川",lng:"106.238494",lat:"38.49246"}];

			var that=this;
			var map = new BMap.Map("allmap");
			window.map = map;//将map变量存储在全局
			//var point = new BMap.Point(116.402399,39.916291);
//			var bound = map.getSize();
// 			var viewportCoordinate = map.pointToOverlayPixel(point);
// 			console.log("=======>",viewportCoordinate.x , viewportCoordinate.y);
// 			var viewportCoordinate1 = map.pointToPixel(point);
// 			console.log("=======>",viewportCoordinate1.x , viewportCoordinate1.y);
// 	
			//console.log("bound==",bound)
// 			var marker = new BMap.Marker(point);        // 创建标注    
// 			map.addOverlay(marker);                     // 将标注添加到地图中 
// 			map.centerAndZoom(point,5);
//    		var marker = new BMap.Marker(point);  // 创建标注
//     		var label = new BMap.Label("100",{offset:new BMap.Size(-3,-20)});
//     		marker.setLabel(label);
			for(var i = 0; i<cityArr.length; i++){
				var point = new BMap.Point(cityArr[i].lng, cityArr[i].lat);
				that.addMarker(point,new BMap.Label(cityArr[i].city+10,{offset:new BMap.Size(-3,-20)}))			
			}		
			
			//this.getBoundary();
			map.centerAndZoom(point, 5);
			
		
		},
		
		attribute(e){
		var p = e.target;
			alert("该覆盖物是点，点的坐标是：" + p.getPosition().lng + "," + p.getPosition().lat);      
		},
		
		// 编写自定义函数,创建标注
		addMarker(point,label){
			var marker = new BMap.Marker(point);
			marker.setLabel(label);
			map.addOverlay(marker);
		},

		getBoundary(){       
		    var bdary = new BMap.Boundary();
		    bdary.get("河北", function(rs){       //获取行政区域
		        map.clearOverlays();        //清除地图覆盖物       
		        var count = rs.boundaries.length; //行政区域的点有多少个
		        for(var i = 0; i < count; i++){
		            var ply = new BMap.Polygon(rs.boundaries[i], {strokeWeight: 1, strokeColor: "#ff0000"}); //建立多边形覆盖物
		            map.addOverlay(ply);  //添加覆盖物
		           // map.setViewport(ply.getPath());    //调整视野         
		        }                
		    });   
		},
		selectCountry(){       
			alert("hi")
		},
		selectArea(){       
		},
		
		onAreaChange(){
			alert(this.area_selected)
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
.legend-device-box{
	background:lavender;
	right: 50px;
	bottom: 100px;
	width: 200px;
	position: absolute;
	z-index: 999; 
}

.legend-device-item{
	width: 30px;
	height: 30px;
}


.legend-status-box{
	background:lavender;
	right: 50px;
	width: 200px;
	bottom: 250px;
	position: absolute;
	z-index: 999; 
}


.legend-status-item{
	display: inline-block;
	width:40px;height:10px;
}

.searchbox{
	top: 80px;
	left: 60px;
	position: absolute;
	z-index: 999; 
	
}
</style>
