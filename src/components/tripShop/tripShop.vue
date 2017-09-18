<template>
	<div id="app1">
		<v-header></v-header>
		<v-section></v-section>
		<v-footer></v-footer>
	</div>
</template>

<script type='text/ecmascript-6'>
	import vHeader from "./headerComponent-t.vue";
	import vSection from "./sectionComponent/sectionComponent-t.vue";
	import vFooter from "./mainfooter.vue";
	export default{
		components:{
		  	vHeader,
		  	vSection,
		  	vFooter
	    }
	}
</script>

<style scoped>
	
</style>