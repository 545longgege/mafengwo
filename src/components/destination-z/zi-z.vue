
<template>
	<div class="swiper-container">
	  <div class="swiper-wrapper">
	    <div class="swiper-slide swiper-no-swiping"><span class="yel">不***饮</span>刚刚预定了丽江泸沽湖一日游往返直通车</div>
	    <div class="swiper-slide swiper-no-swiping"><span class="yel">浩***浩</span>刚刚预定了市海放空一日游</div>
	    <div class="swiper-slide swiper-no-swiping"><span class="yel">焰***n</span>刚刚预定了玉龙雪山纯玩一日游</div>
	  </div>
	</div>
</template>

<script type='text/ecmascript-6'>
	import "../../../static/libs/swiper/dist/css/swiper.css";
	import Swiper from "../../../static/libs/swiper/dist/js/swiper.js";
	export default {
  		mounted:function(){
		    var swiperTheme = new Swiper ('.swiper-container', {
		        direction : 'vertical',
		        spaceBetween: 25,
		        autoplay : 2000,
			    speed:800,
			    loop:true,noSwiping : true
		    })
	    }

	}
</script>

<style scoped>
		*{
		padding:0;margin:0;
		font-size:0.16rem;
		box-sizing: border-box;
	}
	html{
		font-size:26.67vw;
	}
	body,html{
		height:100%;
	}
	
	.swiper-container{
		width:100%;height:0.4rem;
		text-align:center;
		line-height:0.4rem;
		
	}
	.yel{font-size:0.13rem;color:orange;}
	.swiper-slide{
		font-size:0.13rem;
	}
	
	
	
</style>