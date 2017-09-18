<template>
	<div>
		<footer id="strategyFooter">
			<ul id='footerBox' @click="tiaoping">
				<li class='iconfont icon-xiedianping'></li>
				<li>写评论</li>
			</ul>
		</footer>
	</div>
</template>

<script type='text/ecmascript-6'>
	import "../../../static/font/iconfont.css";
	import "../../../static/css/strategy-t.css";
	export default{
		methods : {
			tiaoping:function(){
				location.href="#/Remark_t"
			}
		}
	}
</script>

<style scoped>
	
</style>