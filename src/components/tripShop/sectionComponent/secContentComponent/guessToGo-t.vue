<template>
	<div>
		<div id="guessToGoBox">
			<v-guessHeader title="猜你想去"></v-guessHeader>
			<v-guessLists></v-guessLists>
			<v-guessLists></v-guessLists>
			<v-guessSwiper></v-guessSwiper>
		</div>
	</div>
</template>

<script type='text/ecmascript-6'>
	import vGuessHeader from './guessHeader-t.vue';
	import vGuessLists from './guessLists-t.vue';
	import vGuessSwiper from './guessSwiper-t.vue';
	export default{
		components:{
			vGuessHeader,
			vGuessLists,
			vGuessSwiper
		}
	}
</script>

<style scoped>
</style>