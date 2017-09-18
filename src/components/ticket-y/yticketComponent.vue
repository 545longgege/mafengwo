<template>
	<div>
		
  		<ticketHeader></ticketHeader>
  		<ticketMain></ticketMain>

	</div>
</template>
<script type='text/ecmascript-6'>
    import "../../../static/css/ticket-y.css"
    import "../../../static/font-y/iconfont.css"
    import ticketHeader from './ticketHeader.vue'
    import ticketMain from './ticketMain.vue'
    export default {
    	components:{
    		ticketHeader,
    		ticketMain
    	}
    }
</script>

<style scoped>

</style>
