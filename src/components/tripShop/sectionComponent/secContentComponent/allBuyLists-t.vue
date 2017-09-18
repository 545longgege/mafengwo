<template>
	<div>
		<div id="singleInfoBox">
			<ul class='singleInfo-content'>
				<li>
					<img :src="vSrc">
				</li>
				<li>
					<p>{{title}}</p>
					<div class='priceBox'>
						<p><i>￥{{price}}</i>起/人</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script type='text/ecmascript-6'>
	
	export default{
		props:{
			title:{},
			price:{},
			vSrc:{}
		},
		data:function(){
			return{
				
			}
		}
	}
</script>

<style scoped>
	#singleInfoBox{
		width:1.75rem;
		height:2rem;
		margin-bottom: .07rem;
	}
	
	#singleInfoBox .singleInfo-content{
		width:100%;
		height:100%;
		border:1px solid #ccc;
	}
	
	#singleInfoBox .singleInfo-content li:nth-of-type(1){
		width:100%;
		height:60%;
		display: flex;
	}
	
	#singleInfoBox .singleInfo-content li:nth-of-type(1) img{
		width:100%;
		height:100%;
	}
	
	#singleInfoBox .singleInfo-content li:nth-of-type(2) p{
		padding:0.03rem 0.03rem 0;
		height:.4rem;
		font-size:.14rem;
		text-overflow: ellipsis;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp:2;
		-webkit-box-orient:vertical;
	}
	
	#singleInfoBox .singleInfo-content li:nth-of-type(2) .priceBox p{
		font-size:.1rem;
		transform: translateY(.1rem);
	}
	
	#singleInfoBox .singleInfo-content li:nth-of-type(2) .priceBox p i{
		font-size:.16rem;
		color:orangered;
	}
</style>