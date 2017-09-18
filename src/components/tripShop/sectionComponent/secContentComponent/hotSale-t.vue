<template>
	<div>
		<div id="hotSaleBox">
			<div class="hotSale-top">
				<img src="../../../../../static/img/hotsale.png">
			</div>
			<div class="hotSale-bot">
				<div class='swiper-container'>
					<div class="swiper-wrapper">
						<div class='swiper-slide'>
							<img src="../../../../../static/img/hotsale-1.png" />
							<p>上海直飞新加坡5-7天自由行</p>
							<span>￥99<i>起/本</i></span>
						</div>
						<div class='swiper-slide'>
							<img src="../../../../../static/img/hotsale-2.gif" />
							<p>北京直飞普吉岛7天5晚自由行</p>
							<span>￥6099<i>起/本</i></span>
						</div>
						<div class='swiper-slide'>
							<img src="../../../../../static/img/hotsale-3.gif" />
							<p>上海出发迪拜6天自由行</p>
							<span>￥5699<i>起/本</i></span>
						</div>
						<div class='swiper-slide'>
							<img src="../../../../../static/img/hotsale-4.png" />
							<p>北京直飞俄罗斯贝加尔湖4-9天自由</p>
							<span>￥1888<i>起/本</i></span>
						</div>
						<div class='swiper-slide'>
							<img src="../../../../../static/img/hotsale-5.png" />
							<p>曼谷纯玩一日游</p>
							<span>￥88<i>起/本</i></span>
						</div>
						<div class='swiper-slide'>
							<img src="../../../../../static/img/hotsale-6.png" />
							<p>私人定制 新疆旅游包车自由行</p>
							<span>￥800<i>起/本</i></span>
						</div>
						<div class='swiper-slide'>
							<img src="../../../../../static/img/hotsale-7.png" />
							<p>长滩岛超值深潜</p>
							<span>￥350<i>起/本</i></span>
						</div>
						<div class='swiper-slide'>
							<img src="../../../../../static/img/hotsale-8.png" />
							<p>新加坡环球影城电子票</p>
							<span>￥99<i>起/本</i></span>
						</div>
            <div v-bgcolor="none" class='swiper-slide'>
              <a href="">查看更多</a>
            </div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import '../../../../../node_modules/swiper/dist/css/swiper.min.css';
	import '../../../../../node_modules/swiper/dist/js/swiper.min.js';
	import Swiper from 'swiper';

	export default {
		data:function(){
			return{
				none:"none"
			}
		},
	    mounted:function(){
	      var mySwiper1 = new Swiper('.swiper-container', {
	        slidesPerView:3,
	        spaceBetween:20
	      })
	    }
 	}
</script>

<style>
</style>
