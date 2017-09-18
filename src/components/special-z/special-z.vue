<template>
	<div>
		
		<sheader title='特价机酒'></sheader>
		<div class="spsou">
				<input type="text" placeholder="搜索"/>
		</div>
		
		<ul class="piao">
			<li>
				<svg class="icon biao" aria-hidden="true">
				 <a href="###"> <use xlink:href="#icon-feiji"></use></a>
				</svg><br />
				<span>机+酒</span>
			</li>
			<li>
				<svg class="icon biao" aria-hidden="true">
				 <a href="###"> <use xlink:href="#icon-icon25"></use></a>
				</svg>
				<span>机票</span>
			</li>
			<li>
				<svg class="icon biao" aria-hidden="true">
				 <a href="###"> <use xlink:href="#icon-iconboat"></use></a>
				</svg>
				<span>游轮</span>
			</li>
			<li>
				<svg class="icon biao" aria-hidden="true">
				 <a href="###"> <use xlink:href="#icon-gentuanyou"></use></a>
				</svg>
				<span>跟团游</span>
			</li>
		</ul>
		<!--轮播-->
		<div class="swiper-container3">
			<span class="sw1">热门</span>
			<span class="sw1">东南亚</span>
			<span class="sw1">海岛</span>
		  <div class="swiper-wrapper">
		    <div class="swiper-slide swiper-no-swiping">
		    	<div class="bali">
		    		<button>吉普岛</button><button>东京</button><button>长滩岛</button><button>大阪</button>
		    	</div>
		    	<div class="bali">
		    		<button>吉普岛</button><button>东京</button><button>长滩岛</button><button>大阪</button>
		    	</div>
		    </div>
		   <div class="swiper-slide swiper-no-swiping">
		    	<div class="bali">
		    		<button>曼谷</button><button>清迈</button><button>吴哥</button><button>新加坡</button>
		    	</div>
		    	<div class="bali">
		    		<button>吉普岛</button><button>东京</button><button>杜马盖地</button><button>更多</button>
		    	</div>
		    </div>
		    <div class="swiper-slide swiper-no-swiping">
		    	<div class="bali">
		    		<button>迪拜</button><button>西班牙</button><button>洛杉矶</button><button>意大利</button>
		    	</div>
		    	<div class="bali">
		    		<button>法国</button><button>澳大利亚</button><button>新西兰</button><button>更多</button>
		    	</div>
		    </div>
		  </div>
		</div>
		<!--轮播结束-->
		<finez></finez>
	</div>
</template>

<script type='text/ecmascript-6'>
	import "../../../static/font_gxxxqmnoli9kke29/iconfont.js";
	import "../../../static/css/animate.min.css";
	import "../../../static/libs/swiper/dist/css/swiper.css";
	import Swiper from "../../../static/libs/swiper/dist/js/swiper.js";
	import $ from "../../../static/js/jquery-3.2.1.min.js";
	import finez from "./fine-z.vue";
	import sheader from "./sheader-z.vue";
	
	export default {
  		data:function (){
  			return {
  				title:"境外通讯",
  				isshow:false
  			}
  		},
  		methods:{
  			bian:function (){
				this.isshow=!this.isshow;
//				console.log(this.isshow)
  			}

  		},
  		components:{
			finez,
			sheader
  		},
  		mounted:function (){
			var mySwiper = new Swiper('.swiper-container3', {
//				autoplay: 2000,
				effect : 'cube',
				watchSlidesProgress : true,
				watchSlidesVisibility : true,
//				onSlideChangeStart: function(swiper){
//			      alert(swiper.activeIndex);
//			    }

			})
			$(".sw1").click(function (){
				$(this).css('border-bottom','0.02rem solid orange').siblings().css('border-bottom','none');
				mySwiper.slideTo($(this).index(),700);
				//mySwiper.slideTo(0, 1000, false)
			})
  		}
  		
  		
	}
	
</script>

<style>
*{
		padding:0;margin:0;
		font-size:0.16rem;
		box-sizing: border-box;
		list-style:none;
	}
	html{
		font-size:26.67vw;
	}
	
	#theader{
		width:100%;height:0.44rem;
		line-height:0.44rem;
		padding:0 0.1rem;
		position:relative;
	}
	.bli{
		font-size:0.26rem;
		font-weight:bolder;
		color:orange;
	}
	.liyou{
		display: inline-block;
		margin-left:50%;
		transform:translateX(-70%);
		color:grey;font-size:0.15rem;
	}
	.ddd{
		float:right;
		color:orange;font-weight:bolder;
	}
	.reload{
		width:1rem;height:1.2rem;
		position:absolute;
		right:0.1rem;top:0.44rem;
		z-index:11;background:#fff;
	}
	.reload li{
		height:0.4rem;width:100%;
		text-align:center;
		font-size:0.14rem;
		color:orange;
	}
	#theader .reload li .icon{
		width:0.14rem;height:0.4rem;
		float: left;
		margin-left:0.1rem;
		color:orange;
	}
	/*动画*/
	/*.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}*/
.spsou{
	width:100%;height:0.3rem;
	background: #EEEEEE;
	position:relative;
}
.spsou input{
	width: 2rem;
	position:absolute;
	left:50%;transform:translateX(-50%);
	border:none;margin-top: 0.06rem;
	outline: none;
	font-size:0.14rem;
	text-align: center;
}

.piao{
	width:100%;height:1rem;
	border-bottom:0.05rem solid #EEEEEE;
}
.piao li{
	width:25%;height:1rem;
	float:left;text-align: center;
	padding:0.2rem;
}
.piao .icon{
	width:0.42rem;height:0.42rem;
}
.piao span{
	font-size: 0.14rem;
}
/*轮播*/
.swiper-container3{
	width:100%;
	overflow:hidden;
	border-bottom: 0.05rem solid #EEEEEE;
}
.swiper-container3 .swiper-wrapper .swiper-slide{
	height:1.45rem;width:100%;
	
}

.sw1{
	width:33.3%;height:0.3rem;
	display:inline-block;float:left;
	font-size:0.14rem;color:orange;
	font-weight:bolder;text-align: center;
	line-height:0.3rem;
}
.sw1:nth-child(1){
	border-bottom:orange solid 0.01rem;
}
.swiper-container3 .bali{
	width:100%;height:0.64rem;
	display:flex;
	justify-content:space-around;
	padding-top:0.2rem;
}
.swiper-container3 button{
	
	width:0.8rem;height:0.28rem;
	color:gray;background:#fff;
	border:orange solid 0.01rem;
	border-radius:5%;
}
/*
.swiper-slide img{
	width:100%;height:100%;
}*/
</style>