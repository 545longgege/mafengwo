<template>
	<div>
		<div id="guessSwiperBox">
			<div class='swiper-container'>
				<div class='swiper-wrapper'>
					<div class='swiper-slide'>
						<img src="../../../../../static/img/guessSwiper-1.jpeg"/>
						<span>巴厘岛</span>
					</div>
					<div class='swiper-slide'>
						<img src="../../../../../static/img/guessSwiper-2.jpeg"/>
						<span>香港</span>
					</div>
					<div class='swiper-slide'>
						<img src="../../../../../static/img/guessSwiper-3.jpeg"/>
						<span>三亚</span>
					</div>
					<div class='swiper-slide'>
						<img src="../../../../../static/img/guessSwiper-4.jpeg"/>
						<span>普吉岛</span>
					</div>
					<div class='swiper-slide'>
						<img src="../../../../../static/img/guessSwiper-5.jpeg"/>
						<span>清迈</span>
					</div>
					<div class='swiper-slide'>
						<img src="../../../../../static/img/guessSwiper-6.jpeg"/>
						<span>沙巴</span>
					</div>
					<div class='swiper-slide'>
						<img src="../../../../../static/img/guessSwiper-7.jpeg"/>
						<span>吴哥窟</span>
					</div>
					<div class='swiper-slide'>
						<img src="../../../../../static/img/guessSwiper-8.jpeg"/>
						<span>马尔代夫</span>
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
	    mounted:function(){
	      var mySwiper2 = new Swiper('.swiper-container', {
	        slidesPerView:3,
	        spaceBetween:20
	      })
	    }
 	}
</script>

<style scoped>
</style>