<template>
	<div style="width:100%;flex:1;overflow: auto;">
		<section>
			<v-priceInfo></v-priceInfo>
			<v-itemNavWrap></v-itemNavWrap>
		</section>
	</div>
</template>

<script type='text/ecmascript-6'>
	import vPriceInfo from './secContentComponent/priceInfo-t.vue';
	import vItemNavWrap from './secContentComponent/itemNavWrap-t.vue';
	export default{
		components:{
			vPriceInfo,
			vItemNavWrap
		}
	}
	
	
</script>

<style scoped>
	
</style>