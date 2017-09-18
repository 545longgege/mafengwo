<template>
	<div id="app1">
		<v-header></v-header>
		<v-section></v-section>
	</div>
</template>

<script type='text/ecmascript-6'>
	import vHeader from "./headerComponent-t.vue";
	import vSection from "./sectionComponent/sectionComponent-t.vue";
	export default{
		components:{
		  	vHeader,
		  	vSection
	    }
	}
</script>

<style scoped>
	
</style>