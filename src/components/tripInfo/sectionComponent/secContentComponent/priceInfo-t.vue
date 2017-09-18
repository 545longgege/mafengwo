<template>
	<div>
		<div id="priceInfoBox">
			<div class='priceInfo-banner'>
				<img :src="sonSrc" />
			</div>
			<div class='priceInfo-bot'>
				<h2>{{title}}</h2>
				<div class='priceExplain'>
					<p>￥<span>{{price}}</span>起/人</p>
					<i>价格说明</i>
					<strong>{{people}}<em>人已付款</em></strong>
				</div>
				<h3>
					<i></i>
					<span>蜂蜜抵30%</span>
					(下单时使用蜂蜜至多可抵扣订单金额的30％)
				</h3>
			</div>
			<div class='advertisement'>
					<img :src="adSrc"/>
			</div>
		</div>
		
		<div id='packageSelection'>
			<div class='packageSelectionContent'>
				<a href="">选择：套餐类型/日期/出游人群</a>
				<i>&gt;</i>
			</div>
		</div>
		
		<div id='enterShop'>
			<div class='enterShopContent'>
				<h2><span class="iconfont icon-dianpu"></span>春秋旅游旗舰店</h2>
				<a href="">进入店铺</a>
			</div>
		</div>
		
	</div>
</template>

<script type='text/ecmascript-6'>
	
	export default{
//		props:{
//			sonSrc:{},
//			sontitle:{},
//			sonprice:{},
//			sonpeople:{},
//			sonadSrc:{}
				
//		},
		data:function(){
			return{
				sonSrc:'../../../../../static/img/priceInfo-banner1.gif',
				title:'上海直飞泰国普吉岛6天往返机票（吉祥航空直飞+限时特价机票）',
				price:'2999',
				people:'305',
				adSrc:'../../../../../static/img/priceInfo-banner2.png'
			}
		}
	}
</script>

<style scoped>
	#priceInfoBox{
		width:100%;
		background:#fff;
		margin-bottom:.1rem;
	}
	
	#priceInfoBox .priceInfo-banner{
		width:100%;
		height:2rem;
	}
	
	#priceInfoBox .priceInfo-banner img{
		width:100%;
		height:100%;
	}
	
	#priceInfoBox .priceInfo-bot{
		width:95%;
		margin:0 auto;
	}
	
	#priceInfoBox .priceInfo-bot h2{
		font-size:.16rem;
		color:#000;
		margin:.1rem 0; 
	}
	#priceInfoBox .priceInfo-bot .priceExplain{
		display: flex;
		justify-content: space-between;
		font-size:.16rem;
	}
	#priceInfoBox .priceExplain p{
		font-size:.1rem;
		color:#666;
	}
	#priceInfoBox .priceExplain p span{
		font-size:.25rem;
		color:#ff9d00;
		font-weight: bolder;
	}
	#priceInfoBox .priceExplain i{
		font-size:.1rem;
		color:#47a6df;
		transform: translateY(.12rem);
	}
	#priceInfoBox .priceExplain strong{
		font-size:.14rem;
		color:#666;
		transform: translateY(.12rem);
	}
	#priceInfoBox .priceExplain strong em{
		font-size:.1rem;
		color:#999;
		font-weight: 100;
	}
	#priceInfoBox .priceInfo-bot h3{
		font-size:.1rem;
		color:#999;
		font-weight: 100;
		margin:.1rem 0;
	}
	
	#priceInfoBox .priceInfo-bot h3 span{
		color:#000;
		font-weight: 100;
		font-size:.14rem;
	}
	
	#priceInfoBox .priceInfo-bot h3 i{
		display: inline-block;
		width:.2rem;
		height:.2rem;
		transform: translateY(.03rem);
		background:url(../../../../../static/img/icon_pic.png) no-repeat ;
	
	}
	
	#priceInfoBox .advertisement{
		width:100%;
		height:10%;
		display: flex;
	}
	
	#priceInfoBox .advertisement img{
		width:100%;
		height:100%;
	}
	
	#packageSelection{
		width:100%;
		height:.4rem;
		background:#fff;
		margin-bottom: .1rem;
		
	}
	#packageSelection .packageSelectionContent{
		width:95%;
		height:100%;
		margin:0 auto;
		display: flex;
		justify-content: space-between;
	}
	#packageSelection a{
		font-size:.14rem;
		color:#000;
		line-height:.4rem;
	}
	#packageSelection i{
		display: inline-block;
		width:.2rem;
		height:.2rem;
		background:#ccc;
		border-radius: 50%;
		font-size:.14rem;
		color:#fff;
		text-align:center;
		transform:translateY(.1rem);
		
	}
	
	#enterShop{
		width:100%;
		height:.4rem;
		background:#fff;
		margin-bottom: .1rem;
	}
	
	#enterShop .enterShopContent{
		width:95%;
		height:100%;
		margin:0 auto;
	}
	
	#enterShop .enterShopContent{
		display: flex;
		justify-content: space-between;
	}
	
	#enterShop .enterShopContent h2 span{
		font-size:.2rem;
		color:#ff9d00;
		font-weight: bolder;
		margin-right:.1rem;
		transform: translateY(.15rem);
	}
	
	#enterShop .enterShopContent h2{
		font-size: .16rem;
		color:#000;
		line-height:.4rem;
	}
	
	#enterShop .enterShopContent a{
		display: inline-block;
		width:.6rem;
		height:.2rem;
		border-radius: .03rem;
		border:1px solid #666;
		color:#666;
		font-size:.1rem;
		text-align: center;
		transform: translateY(.1rem);
	}
</style>