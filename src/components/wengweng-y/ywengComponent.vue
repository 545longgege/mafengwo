<template>
	<div>
		<wengHeader></wengHeader>
		<wengMain></wengMain>
   
	</div>
</template>
<script type='text/ecmascript-6'>
    import "../../../static/css/weng-y.css"
    import "../../../static/font-y/iconfont.css"
    import wengHeader from "./wengHeader.vue"
    import wengMain from "./wengMain.vue"
    export default {
    	components:{
    		wengHeader,
    		wengMain
    	}
    }
</script>

<style scoped>

</style>
