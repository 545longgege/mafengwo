<template>
	<div class="zheader">
		<svg class="icon biao" aria-hidden="true">
		 <a href="###"> <use xlink:href="#icon-shijian"></use></a>
		</svg>
		
		<input type="text" placeholder="暑期出行优惠总汇" />
		
		<svg class="icon ss" aria-hidden="true">
		 <a href="###"> <use xlink:href="#icon-star-outline"></use></a>
		</svg>
	</div>		
</template>

<script type='text/ecmascript-6'>
	import "../../../static/font_gxxxqmnoli9kke29/iconfont.js";
	import $ from "../../../static/js/jquery-3.2.1.min.js";
	export default {
		mounted:function (){
			 $(window).scroll(function (){
			 	 if($(window).scrollTop()>190){
			 	 	$(".zheader").css("background","#fff");
			 	 	$(".zheader .icon").css("color","orange");
			 	 	$(".zheader input").css({"border":"orange 0.01rem solid","background":"#fff"});
			 	 }else{
			 	 	$(".zheader").css("background","rgba(204,204,204,0.3)");
			 	 	$(".zheader .icon").css("color","#fff");
			 	 	$(".zheader input").css({"border":"none","background":"rgba(204,204,204,0.3)"});
			 	 }
			 })
		}
	}
</script>

<style scoped>
	.icon {
	   width: 1.2em; height: 1.2em;
	   vertical-align: -0.15em;
	   fill: currentColor;
	   overflow: hidden;
	   color:#fff;
	}
	.zheader{
		width:100%;height:0.3rem;
		line-height: 0.3rem;
		text-align: center;
		position:relative;
		position:fixed;
		/*background:rgba(255,255,255,0)*/
		z-index:10;
	}
	.zheader input{
		background:rgba(204,204,204,0.3);
		outline:none;
		border:none;
		font-size:0.15rem;
	}
	.biao{
		position:absolute;
		left:0.1rem;top:0.05rem;
	}
	.ss{
		position:absolute;
		right:0.1rem;top:0.05rem;
		font-size:1.3em;
	}
</style>