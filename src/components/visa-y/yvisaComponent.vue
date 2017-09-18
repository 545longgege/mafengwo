<template>
	<div>
		<visaHeader :name="palce"></visaHeader>
		<visaMain></visaMain>
   

	</div>
</template>
<script type='text/ecmascript-6'>
    import "../../../static/css/visa-y.css"
    import "../../../static/font-y/iconfont.css"
    import visaHeader from "./visaHeader.vue"
    import visaMain from "./visaMain.vue"
    export default {
	   components:{
	   		visaHeader,
	   		visaMain
	   }
		,
		data:function(){
			return{
				palce:"搜索国家或地区名称"
			}
		}
 	
    }
</script>

<style scoped>

</style>
