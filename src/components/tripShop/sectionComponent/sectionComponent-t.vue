<template>
	<div style="width:100%;flex:1;overflow: auto;">
		<section>
			<v-banner></v-banner>
			<v-advertisement></v-advertisement>
			<v-dayBuy></v-dayBuy>
			<v-hotSale></v-hotSale>
			<v-guess></v-guess>
			<v-allBuy></v-allBuy>
		</section>
	</div>
</template>

<script type="text/ecmascript-6">
	import vBanner from './secContentComponent/banner-t.vue';
	import vAdvertisement from './secContentComponent/ad-t.vue';
	import vDayBuy from './secContentComponent/dayBuy-t.vue';
	import vHotSale from './secContentComponent/hotSale-t.vue';
	import vGuess from './secContentComponent/guessToGo-t.vue';
	import vAllBuy from './secContentComponent/allBuy-t.vue';
	
	export default {
		components:{
		  	vBanner,
		  	vAdvertisement,
		  	vDayBuy,
		  	vHotSale,
		  	vGuess,
		  	vAllBuy
		}
	}
</script>

<style scoped>
	
</style>