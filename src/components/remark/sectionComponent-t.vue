<template>
	<div style="width:100%;flex:1;overflow: auto;">
		<section>
			<div id='starBox'>
				<i class="iconfont icon-xing"></i>
				<i class="iconfont icon-xing"></i>
				<i class="iconfont icon-xing"></i>
				<i class="iconfont icon-xing"></i>
				<i class="iconfont icon-xing"></i>
			</div>
			<p>点击星形评分</p>
			<div id='heartBox'>
				<ul>
					<li>
						<span>口味</span>
						<div class="heartItems">
							<i class="iconfont icon-xin"></i>
							<i class="iconfont icon-xin"></i>
							<i class="iconfont icon-xin"></i>
							<i class="iconfont icon-xin"></i>
							<i class="iconfont icon-xin"></i>
						</div>
						<span>还可以</span>
					</li>
					<li>
						<span>环境</span>
						<div class="heartItems">
							<i class="iconfont icon-xin"></i>
							<i class="iconfont icon-xin"></i>
							<i class="iconfont icon-xin"></i>
							<i class="iconfont icon-xin"></i>
							<i class="iconfont icon-xin"></i>
						</div>
						<span>还可以</span>
					</li>
					<li>
						<span>服务</span>
						<div class="heartItems">
							<i class="iconfont icon-xin"></i>
							<i class="iconfont icon-xin"></i>
							<i class="iconfont icon-xin"></i>
							<i class="iconfont icon-xin"></i>
							<i class="iconfont icon-xin"></i>
						</div>
						<span>还可以</span>
					</li>
				</ul>
			</div>
			<div id="remarkBox">
				<textarea placeholder="填写你的点评"></textarea>
				<ul>
					<li>
						<a href="">回民街</a>
					</li>
					<li>加油，还差<span>15</span>个字哦</li>
				</ul>
				<div class='picFile'>
					<span class="iconfont icon-jiahao"></span>
				</div>
			</div>
		</section>
	</div>
</template>

<script type='text/ecmascript-6'>
	import "../../../static/css/remark-t.css";
	export default{
		
	}
</script>

<style scoped>
	
</style>