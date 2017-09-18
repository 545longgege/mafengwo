<template>
	<div>
		
    <header class="clear homeHeader">
        <div class="left" style="padding:0.15rem;padding-top: 0.1rem">
            <a class="logo"> </a>
        </div>
        <div class="left" style="padding-top:0.06rem" @click="tiaosou">
            <input type="text" placeholder="暑期出行优惠汇总">
        </div>
       <div class="left iconfont icon-10" style="padding:0.1rem;color:#ffa800;font-size:0.22rem">

       </div>

    </header>
	</div>
</template>
<script type='text/ecmascript-6'>
    import "../../../static/css/home-y.css"
    import "../../../static/font-y/iconfont.css"
    export default {
		methods : {
			tiaosou : function(){
				location.href = "#/Search_x"
			}
		}
	}
</script>

<style scoped>

</style>
