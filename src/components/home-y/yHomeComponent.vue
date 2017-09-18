<template>
	<div>
		<yHeader></yHeader>
		<yHomeMain></yHomeMain>
	</div>
</template>
<script type='text/ecmascript-6'>
    import "../../../static/css/home-y.css"
    import "../../../static/font-y/iconfont.css"
    import yHeader from "./yHeader.vue"
    import yHomeMain from "./yHomeMain.vue"
    export default {
    	components:{
    		yHeader,
    		yHomeMain	
    	}
    }
</script>

<style scoped>

</style>
