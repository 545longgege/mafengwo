<template>
	<ul class="gonglue">
		<a href="javascript:;" @click="gonglb"><li><svg class="icon" aria-hidden="true"><use xlink:href="#icon-gonglve"></use></svg><br />攻略</li></a>
		<a href="javascript:;"><li @click="tiaoz3"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-jingdian"></use></svg><br />景点</li></a>
		<a href="javascript:;" @click = "tiaocljd"><li><svg class="icon" aria-hidden="true"><use xlink:href="#icon-jiudian"></use></svg><br />酒店</li></a>
		<a href="javascript:;" @click="meishi"><li><svg class="icon" aria-hidden="true"><use xlink:href="#icon-iconfonticonfontcanyin"></use></svg><br />美食</li></a>
		<a href="javascript:;"><li @click="tiaoz4"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-youji"></use></svg><br />游记</li></a>
		<a href="javascript:;" @click="tiaowen"><li><svg class="icon" aria-hidden="true"><use xlink:href="#icon-question-answer"></use></svg><br />问答</li></a>
		<a href="javascript:;"><li @click="tiaoz2"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-tehui"></use></svg><br />特惠机酒</li></a>
		<a href="javascript:;" @click = "tiaoxl"><li><svg class="icon" aria-hidden="true"><use xlink:href="#icon-wanle"></use></svg><br />当地玩乐</li></a>
	</ul>
</template>

<script type='text/ecmascript-6'>
	import "../../../static/font_gxxxqmnoli9kke29/iconfont.js";
	export default {
	  methods:{
	  	tiaoz2:function(){
  				location.href = '#/Special_z'
  		},
  		tiaoz3:function(){
  				location.href = '#/Spot_z'
  			},
  		tiaoz4:function(){
  				location.href = '#/Tour_z'
  			},
			
		tiaocljd : function(){
				location.href ='#/Hotel_c'
			},
		tiaoxl : function(){
				location.href ='#/Location_x'
			},
		tiaowen : function(){
				location.href ='#/Qa_c'
			},
			meishi : function(){
				location.href = '#/DeliciousFood_t'
			},
			gonglb : function(){
				location.href = '#/StrategyList_c'
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
	}
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
	
	.gonglue{
		width:100%;height:2rem;
		list-style:none;
	}
	.gonglue li{
		float:left;
		width:25%;height:1rem;
		text-align:center;
		padding-top:0.2rem;
		font-size:0.12rem;
		color:#000;
	}
	.gonglue .icon{
		font-size:0.3rem;
	}

</style>