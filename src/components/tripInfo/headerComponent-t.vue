<template>
	<div>
		<header>
			<ul>
				<li>
					<span class="iconfont icon-guanbi"></span>
				</li>
				<li>
					<p>{{title}}</p>
				</li>
				<li>
					<span class="iconfont icon-fenxiang"></span>
				</li>
				<li>
					<span class="iconfont icon-iconfont-edu06"></span>
				</li>
			</ul>
		</header>
	</div>
</template>

<script type="text/ecmascript-6">
	import "../../../static/css/tripInfo-t.css";
	import "../../../static/font/iconfont.css";
	export default{
		data:function(){
			return{
				title:'上海出发马尔代夫K岛/库拉玛提岛6-7天自由行（咨询下单随机立减+浮潜A级+可升级一价全包+马代超美超长拖尾沙滩+赠送居民岛游/日落巡航）'
			}
		}
	}
	
</script>

<style scoped>
	
	header{
		width:100%;
		height:.44rem;
		background:#fff;
	}
	
	header ul{
		width:95%;
		height:100%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
	}
	
	header ul li{
		display: flex;
		
	}
	
	header ul li:nth-of-type(2){
		width:71%;
	}
	
	header ul li p{
		width:100%;
		font-size:.16rem;
		line-height:.44rem;
		white-space:nowrap;
        text-overflow:ellipsis;
        -o-text-overflow:ellipsis;
        overflow:hidden;
        color:#000;
	}
	
	header ul li span{
		display: inline-block;
		height:.2rem;
		font-size:.2rem;
		color:orangered;
		transform: translateY(.1rem);
		
	}
</style>