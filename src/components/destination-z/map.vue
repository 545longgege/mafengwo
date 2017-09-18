<template>
   <div id="map">
  		
  	</div> 
</template>

<script type='text/ecmascript-6'>
export default{
	mounted:function (){
		function initialize() {  
	  	var map = new BMap.Map('map');  
	  	map.centerAndZoom(new BMap.Point(108.95, 34.27), 12);
	  	map.addControl(new BMap.NavigationControl());    
		map.addControl(new BMap.ScaleControl());    
		map.addControl(new BMap.OverviewMapControl());    
		map.addControl(new BMap.MapTypeControl());    
		map.setCurrentCity("西安"); // 仅当设置城市信息时，MapTypeControl的切换功能才能可用
	}  
	   
	function loadScript() {  
	  	var script = document.createElement("script");
	  	script.src = "http://api.map.baidu.com/api?v=2.0&ak=1vmKmUQ69PG71rtHcx5OLWTnXKpgLPUH&callback=initialize";//此为v2.0版本的引用方式  
//	   	http://api.map.baidu.com/api?v=1.4&ak=您的密钥&callback=initialize"; //此为v1.4版本及以前版本的引用方式  
	  	document.body.appendChild(script);
	}  
	   
	window.onload = loadScript;
	}
}
</script>

<style scoped>
*{
				margin: 0;
				padding: 0;
			}
			html,body{
				width:100%;
				height: 100%;
			}
	#map{
				width:100%;
				height:100%;
			}
	
</style>