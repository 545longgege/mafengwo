<template>
	<div>
		<div id="theader">
			<span class="bli">&lt;</span>
			<span class="liyou">{{title}}</span>
			<span class="ddd" @click="bian">...</span>
			<transition name="slide-fade" enter-active-class="animated rollIn" leave-active-class="animated hinge">
			<ul class="reload" v-show="isshow">
				<li>
					<svg class="icon biao" aria-hidden="true"><a href="###"> <use xlink:href="#icon-shijian"></use></a></svg>最近浏览
				</li>
				<li>
					<svg class="icon biao" aria-hidden="true"><a href="###"> <use xlink:href="#icon-shijian"></use></a></svg>最近浏览
				</li>
				<li>
					<svg class="icon biao" aria-hidden="true"><a href="###"> <use xlink:href="#icon-shijian"></use></a></svg>最近浏览
				</li>
			</ul>
			</transition>
		</div>
		
		
		
	</div>
</template>

<script type='text/ecmascript-6'>
	import "../../../static/font_gxxxqmnoli9kke29/iconfont.js";
	import "../../../static/css/animate.min.css";
	import "../../../static/libs/swiper/dist/css/swiper.css";
	import Swiper from "../../../static/libs/swiper/dist/js/swiper.js";
	import $ from "../../../static/js/jquery-3.2.1.min.js";
	import finez from "./fine-z.vue";
	
	export default {
		props:{
			title:String
		},
  		data:function (){
  			return {
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

</style>