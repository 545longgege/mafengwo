<template>
		<table cellspacing="0">
			<tr>
				<td @click="tiaoxf1">泸沽湖<br /><span class="hui">已售30327</span></td>
				<td>洱海<br /><span class="hui">已售30327</span></td>
				<td>茶马古道<br /><span class="hui">已售30327</span></td>
			</tr>
			<tr>
				<td>香格里拉<br /><span class="hui">已售30327</span></td>
				<td>玉龙雪山<br /><span class="hui">已售30327</span></td>
				<td>丽江古城<br /><span class="hui">已售30327</span></td>
			</tr>
			<tr>
				<td>纳西庭院<br /><span class="hui">已售30327</span></td>
				<td>人气小巷<br /><span class="hui">已售30327</span></td>
				<td>热闹酒吧街<br /><span class="hui">已售30327</span></td>
			</tr>
			<tr>
				<td>文艺客栈<br /><span class="hui">已售30327</span></td>
				<td>顶级东方美学<br /><span class="hui">已售30327</span></td>
				<td>浪漫情侣<br /><span class="hui">已售30327</span></td>
			</tr>
		</table>
	
	
</template>

<script type='text/ecmascript-6'>
	export default {
  		methods : {
			tiaoxf1 :function(){
				location.href = "#/TopspeedRes_g"
			}
		}

	}
</script>

<style scoped>
		*{
		padding:0;margin:0;
		font-size:0.16rem;
		box-sizing: border-box;
	}
	html{
		font-size:26.67vw;
	}
	body,html{
		height:100%;
	}
	table{
		border:0.01rem solid #ccc;
		width:100%;border-bottom:0.1rem solid #EEEEEE;
	}
	td{
		border:0.01rem solid #ccc;
		border-bottom:none;
		border-right:none;
		height:0.5rem;width:33.3%;
		text-align:center;
		font-size:0.14rem;
	}
	tr:nth-child(1) td{
		border-top:none;
	}
	tr td:nth-child(1){
		border-left:none;
	}
	.hui{
		font-size:0.12rem;
		color: gray;
	}
	
</style>