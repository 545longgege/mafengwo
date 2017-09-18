<template>
	<div>
		<tourh title='丽江游记'></tourh>
		<ul>
			<li class="li" v-for="lijiang in shuzu">
				<div class="liz">
					<span class="lizi">{{lijiang.jieshao}}</span>
					<span class="liname">{{lijiang.name}}</span>
				</div>
				<img :src="lijiang.img" />
			</li>
		</ul>
	</div>
</template>

<script type='text/ecmascript-6'>
	
	import tourh from "../special-z/sheader-z.vue";
	
	export default {
		components:{
			tourh
		},
  		data:function (){
  			return {
  				shuzu:[
	  					{img:"/static/img/y1.jpeg",jieshao:"炸裂少女心，TOP5最适合虚度下午的丽江咖啡馆",name:"fhods"},
						{img:"/static/img/y2.jpeg",jieshao:"慵懒之旅丽江云南丽江，古城的归隐与绽放",name:"gngi"},
						{img:"/static/img/y3.jpeg",jieshao:"三月束河，我为你身穿白沙轻舞飞扬",name:"ngdi"},
						{img:"/static/img/y4.jpeg",jieshao:"不负艳遇之都，这才是丽江的样子",name:"uioh"},
						{img:"/static/img/y5.jpeg",jieshao:"这一生，仅有的一回不一样",name:"jhi"},
						{img:"/static/img/y6.jpeg",jieshao:"舌尖上的丽江TOP5",name:"hgfs"}
	  				]
  			}
  		}
  		
  		
	}
	
</script>

<style>
*{
		padding:0;margin:0;
		font-size:0.16rem;
		box-sizing: border-box;
		list-style:none;
	}
	html{
		font-size:26.67vw;
	}
	
	
	.bli{
		font-size:0.26rem;
		font-weight:bolder;
		color:orange;
	}
	.liyou{
		display: inline-block;
		margin-left:50%;
		transform:translateX(-70%);
		color:grey;font-size:0.15rem;
	}
	
	.li{
		width:100%;height:1.2rem;
		padding:0.1rem;
	}
	.li img{
		float:right;
		height:1rem;
		
	}
	.liz{
		width:1.85rem;height:1rem;
		float:left;
		position:relative;
	}
	.lizi{
		font-size:0.14rem;
	}
	.liname{
		display: inline-block;
		position: absolute;
		right:0.1rem;bottom:0.1rem;
		color:orange;
	}
</style>