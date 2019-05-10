<template>
  <div >
	
		<div id="allmap" style="margin-left: 5px;margin-right: 5px;" class="map"></div>
	
	</div>
</template>
<script>	

export default {
  name: 'Map', 
  data () {
   return {
   
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
			
			this.getBoundary();
			map.centerAndZoom(point, 8);
			
		
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
</style>
