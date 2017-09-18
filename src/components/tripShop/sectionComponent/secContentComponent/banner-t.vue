<template>
	<div>
		<div id="banner">
			<ul class='banner-top'>
				<li v-bgcolor="purple">
					<i class="iconfont icon-jipiao"></i>
					<em>国内机票</em>
				</li>
				<li v-bgcolor="blue">
					<i class="iconfont icon-Hotel"></i>
					<em>酒店预订</em>
				</li>
				<li v-bgcolor="green">
					<i class="iconfont icon-jijiajiu"></i>
					<em>特价机酒</em>
				</li>
				<li v-bgcolor="greenbright">
					<i class="iconfont icon-lvyouluxian"></i>
					<em>旅游线路</em>
				</li>
				<li v-bgcolor="pink">
					<i class="iconfont icon-lvyou"></i>
					<em>当地玩乐</em>
				</li>
				<li v-bgcolor="red">
					<i class="iconfont icon-jingdianmenpiao"></i>
					<em>景点门票</em>
				</li>
				<li v-bgcolor="orange" @click="tiaoyong">
					<i class="iconfont icon-shangwuyongche"></i>
					<em>当地用车</em>
				</li>
				<li v-bgcolor="yellow">
					<i class="iconfont icon-icon-youlun"></i>
					<em>邮轮</em>
				</li>
			</ul>
			<ul class="banner-bottom">
				<li @click="tiaoqian">
					<i class="iconfont icon-icon-test"></i>
					<em>签证</em>
				</li>
				<li>
					<i class="iconfont icon-wifi"></i>
					<em>WIFI</em>
				</li>
				<li>
					<i class="iconfont icon-jiejifuwu"></i>
					<em>接送机</em>
				</li>
				<li>
					<i class="iconfont icon-meitongqia"></i>
					<em>交通卡</em>
				</li>
				<li>
					<i class="iconfont icon-baoxian"></i>
					<em>保险</em>
				</li>
			</ul>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import '../../../../../static/css/tripShop-t.css';
	import '../../../../../static/font/iconfont.css';
	
	
	export default {
		data:function(){
            return{
            	red:"#FD4E4E",
	            green:"#42D6BA",
	            greenbright:'#97CF2B',
	            yellow:"#FFCA2B",
	            purple:"#D174F0",
	            blue:'#32A2F1',
	            pink:'#F74986',
	            orange:'#FFA412'
	            
            }
        },
		methods : {
			tiaoqian:function(){
				location.href="#/Visa_y"
			},
			tiaoyong:function(){
				location.href="#/Traffic_y"
			}
		}
	}
</script>

<style>
</style>