<template>
	<div style="width:100%;flex:1;overflow: auto;">
		<section>
			<div id='bannerBox'>
				<div class='banner-Top'>
					<h2>回民街<span>11812</span></h2>
				</div>
				<div class='banner-bot'>
					<p><strong>6353</strong>条蜂蜂点评，<strong>1402</strong>篇游记提到这里</p>
					<span>&gt;</span>
				</div>
			</div>
			
			<div id='restaurantStrategy'>
				<div class='restaurantStrategycontent'>
					<strong>餐厅攻略</strong>
					<section class='hideTxt'>
						<p>回民街是西安回族的聚集区，由多条道路组成，并非一条特定的道路，当地人也称其为“回坊”。</p>
						<p>位于鼓楼附近的回民街，指的是北院门、化觉巷、西羊市、大皮院等四条街道，而其中最重要的就是北院门这条街。</p>
						<p>到了西安的中外游客一般都不会错过回民街，不仅因为街道两旁有琳琅满目的美食店铺，更因为这里有着深厚的文化内涵。</p>
						<p>但街道不是很干净，青石板路上有些滑腻。行人多，还不时有汽车、三轮车通过，逢节假日较为拥堵吵闹。</p>
					</section>
					<h2>↓</h2>
					<ul class='ticketItems'>
						<li>
							<span>门票</span>免费
						</li>
						<li v-color="gray">
							<span>地址</span>陕西省西安市莲湖区西大街1号
						</li>
						<li v-color="gray">
							<span>交通</span>西安火车站到回民街坐611路公交车到广济街站下车即到，或在市内乘坐7、15、32、205、215、221路等公交车至钟楼站下车后步行可到。
						</li>
					</ul>
				</div>	
			</div>
			
			<div id='userRemark'>
				<div class='userRemarkContent'>
					<strong>来自<span v-color="orange">6358</span>位蜂蜂的点评</strong>
				</div>
				<v-remark v-for="n in lists1" :levelNum="n.levelNum" :dateTime="n.dateTime" :msg="n.msg" :picSrc1="n.picSrc1" :picSrc2="n.picSrc2" :picSrc3="n.picSrc3" :replyTxt="n.replyTxt" :reply="n.reply">
				</v-remark>
			</div>
			
			<div id='nextFoods'>
				<div class='foodsTitle'>
					<strong>下一站美食</strong>
					<a href="">
						查看更多
						<i>&gt;</i>
					</a>
				</div>
				<div class='foodsBox'>
					<v-foods v-for="n in lists2" :picSrc="n.picSrc" :titile="n.titile" :percent="n.percent"></v-foods>
				</div>
			</div>
		</section>
	</div>
</template>

<script type='text/ecmascript-6'>
	import "../../../../static/font/iconfont.css";
	import "../../../../static/css/deliciousFood-t.css";
	import '../../../../static/css/tripInfo-t.css';
	import vRemark from '../../tripInfo/sectionComponent/secContentComponent/userRemark-t.vue';
	import vFoods from '../../deliciousFood/sectionComponent/secContentComponent/foods-t.vue';
	import '../../../../node_modules/axios/dist/axios.js';
	import axios from 'axios';
	export default{
		data:function(){
			return{
				gray:'#696969',
				orange:'#ff9d00',
				lists1:[],
				lists2:[]
			}
		},
		methods:{
			getData1:function(){
				axios.get('../../../../static/js/userRemark-t.json')
				.then((res)=>{
					this.lists1 = res.data.slice(2,6);
					console.log(res.data)
				})
			},
			getData2:function(){
				axios.get('../../../../static/js/deliciousFood-t.json')
				.then((res)=>{
					this.lists2 = res.data.slice(0,3);
					console.log(res.data)
				})
			}
		},
		created:function(){
			this.getData1();
			this.getData2();
		},
		components:{
			vRemark,
			vFoods
		}
	}
</script>

<style scoped>
	
</style>