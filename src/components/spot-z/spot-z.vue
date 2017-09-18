<template>
	<div>
		<tourh title="西安"></tourh>
		<ssearch sousuo="景点名称"></ssearch>
		<sfinez></sfinez>
	</div>
</template>

<script type='text/ecmascript-6'>
	
	import tourh from "../special-z/sheader-z.vue";
	import ssearch from "./search-z.vue";
	import sfinez from "./fine-z.vue";
	
	export default {
		components:{
			tourh,
			ssearch,
			sfinez
		},
  		data:function (){
  			return {
  				
  			}
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
	
	

</style>