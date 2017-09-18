
<template>
	<div>
		
		<div class="zheader">
			<svg class="icon biao" aria-hidden="true">
			 <a href="###"> <use xlink:href="#icon-shijian"></use></a>
			</svg>
			
			<input type="text" placeholder="暑期出行优惠总汇" />
			
			<svg class="icon ss" aria-hidden="true">
			 <a href="###"> <use xlink:href="#icon-star-outline"></use></a>
			</svg>
		</div>		
		<div class="meinv">
			
			
			
			<div class="meng" @click = "tiaozt1">
				<p>过去24小时</p>
				<span class="people">13023</span>人正在这里旅行
				<a href="###">丽江24℃|96万张照片</a>
			</div>
		</div>
		<gonglue></gonglue>
		<zi></zi>
		<biao></biao>
		
		<div class="ditu">
			<h2>城市地图</h2><br />
			<!-----------------------------------------------这里要跳路由-------------------------------->
			   <!--<router-link to='/map'>-->
				<img src="../../../static/img/map-z.jpg"/>
				<!--</router-link>-->
				<ul>
					<a href="###"><li><svg class="icon" aria-hidden="true"><use xlink:href="#icon-jingdian"></use></svg>景点</li></a>
					
					<a href="###"><li><svg class="icon" aria-hidden="true"><use xlink:href="#icon-jiudian"></use></svg>酒店</li></a>
					
					<a href="###"><li><svg class="icon" aria-hidden="true"><use xlink:href="#icon-iconfonticonfontcanyin"></use></svg>美食</li></a>
					
					<a href="###"><li id="noneborder"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-wanle"></use></svg>购物</li></a>
				</ul>
		</div>
		
		<div class="live">
			<h2>住哪里</h2><br />
			<ul>
				<a href="###"><li style="background: orange;">五一街</li></a>
				<a href="###"><li>四方街</li></a>
				<a href="###"><li>七一街</li></a>
			</ul><br />
			<!--swiper-->
			<div class="swiper-container2">
			  <div class="swiper-wrapper">
			    <div class="swiper-slide" @click = "tiaocl">
			    	<img src="../../../static/img/s1-z.jpeg" />
			    	丽江橄榄树田园风情驿站<br />
			    	<span>今日有127人关注</span>
			    </div>
			    <div class="swiper-slide">
			    	<img src="../../../static/img/s2-z.jpeg" />
			    	丽江暮光倾城客栈<br />
			    	<span>今日有153人关注</span>
			    </div>
			    <div class="swiper-slide">
			    	<img src="../../../static/img/s3-z.jpeg" />
			    	丽江芝麻开门客栈<br />
			    	<span>今日有127人关注</span>
			    </div>
			    <div class="swiper-slide">
			    	<img src="../../../static/img/s4-z.jpeg" />
			    	云端精品度假庭院<br />
			    	<span>今日有127人关注</span>
			    </div>
			    <div class="swiper-slide">
			    	<img src="../../../static/img/s5-z.png" />
			    	李静静水花涧精致水景客栈<br />
			    	<span>今日有127人关注</span>
			    </div>
			  </div>
			</div>
			<br />
			<button>查看更多</button>
		</div>
		<longfooter></longfooter>
	</div>
</template>

<script type='text/ecmascript-6'>
	import "../../../static/font_gxxxqmnoli9kke29/iconfont.js";

	import gonglue from "./gonglue-z.vue";
	import zi from "./zi-z.vue";
	import biao from "./table-z.vue";
	import longfooter from "./longfooter-z.vue";
	import $ from "../../../static/js/jquery-3.2.1.min.js";
	import "../../../static/libs/swiper/dist/css/swiper.css";
	import Swiper from "../../../static/libs/swiper/dist/js/swiper.js";
	import "../../../node_modules/vue-router/dist/vue-router.js";
	
	
	export default {
  		components:{
  			
  			gonglue,
  			zi,
			biao,
			longfooter
			
  		},
  		mounted:function (){
  			$(".live").find("li").eq(0).click(function(){
//				alert(1);
				$(this).css("background","orange");
				$(this).parent().siblings().find("li").css("background","white");
			});
			$(".live").find("li").eq(1).click(function(){

				$(this).css("background","orange");
				$(this).parent().siblings().find("li").css("background","white");
			});
			$(".live").find("li").eq(2).click(function(){

				$(this).css("background","orange");
				$(this).parent().siblings().find("li").css("background","white");
			});
			var mySwiper = new Swiper('.swiper-container2', {
				direction :"horizontal",
//				initialSlide :2,
				slidesPerView:3,
				paginationClickable: true,
				spaceBetween: 10
			})
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
  		},
  		methods:{
  			map:function(){
  				location.href = './home.html'
  			},
			tiaozt1 : function(){
				location.href = '#/Past24hours_t'
			},
			tiaocl : function(){
				location.href = '#/Strategy_c'
			}
  		}
  		
  		
	}
	
</script>

<style>
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
	.meinv .icon:nth-child(1){
		position:absolute;
		left:0.1rem;top:0.1rem;
	}
	.ss{
		position:absolute;
		right:0.1rem;top:0.1rem;
		font-size:1.3em;
	}
		*{
		padding:0;margin:0;
		font-size:0.16rem;
		box-sizing: border-box;
		list-style:none;
	}
	html{
		font-size:26.67vw;
	}
	body,html{
		height:100%;
	}
	
	
	.meinv{
		width:100%;height:2rem;
		background: url(../../../static/img/meinv.jpeg) no-repeat;
		background-size:130% 2rem;
		position:relative;
		
	}
	.meinv input{
		background: rgba(248,248,248,0.5);
		position:absolute;
		margin-top:0.1rem;
		text-align:center;
		left:50%;
		transform: translateX(-50%);
		outline: none;
		borer:none;
	}

	.meng{
		width:100%;height:0.6rem;
		position:absolute;
		bottom:0;
		background:rgba(0,0,0,0.5);
		padding:0.1rem 0.2rem;
		color:#fff;
	}
	.people{font-size:0.2rem;}
	.meinv a{
		color:#fff;
		font-size:0.13rem;
		font-weight:bolder;
		position:absolute;
		right:0.1rem;top:-0.2rem;
	}
	.meinv .iconfont{
		font-size:0.16rem;
	}
	
	.ditu{
		height:2.3rem;width:100%;
		padding:0.1rem 0.1rem;
		position:relative;
		
	}
	.ditu img{
		display:block;
		height:1.6rem;
		position:absolute;
		left:50%;
		transform: translateX(-50%);
	}
	.ditu ul{
		width:80%;height:0.2rem;
		position:absolute;
		bottom:0;
		transform: translateX(20%);
	}
	.ditu ul li{
		float:left;
		width:0.6rem;
		color:#000;
		text-align: center;
		border-right:0.01rem solid #ccc;
	}
	#noneborder{
		border:none;
	}
	
	.live{
		width:100%;height:3.4rem;
		padding:0.1rem 0.1rem;
		/*border-bottom: 0.44rem solid #fff;*/
	}
	.live ul{
		height:0.25rem;
	}
	.live ul li{
		float: left;
		width:0.6rem;height:0.25rem;
		text-align:center;line-height:0.25rem;
		border:0.01rem solid #ccc;
		margin-left:0.1rem;
		color:#000;
		border-radius:10%;
		font-size:0.14rem;
	}
	
	
	
	.swiper-container2{
		width:100%;height:1.4rem;overflow:hidden;
	}
	.swiper-container2 .swiper-slide{
		box-shadow:0.05rem 0.05rem 0.05rem #888888 ;
		width:1.2rem;height:1.5rem;
		font-size:0.12rem;
	}
	.swiper-container2 .swiper-slide img{
		width:100%;
	}
	.swiper-container2 .swiper-slide span{
		color: gray;
		font-size:0.12rem;
	}
	.live button{
		width:1.2rem;height:0.3rem;
		margin-left:50%;
		transform:translateX(-50%);
		border:0.01rem solid orange;
		background: #fff;
		border-radius:5%;
		color:orange;
		outline:none;
	}
</style>