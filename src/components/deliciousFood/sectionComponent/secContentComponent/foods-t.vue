<template>
	<div style="width:32%;height:1.5rem;">
		<dl id='foodBox'>
			<dt>
				<img :src="picSrc"/>
			</dt>
			<dd>{{titile}}</dd>
			<dd><span>{{percent}}%</span>蜂蜂推荐</dd>
		</dl>
	</div>
</template>

<script type='text/ecmascript-6'>
	
	export default{
		props:{
			picSrc:{},
			titile:{},
			percent:{}
		},
		data:function(){
			return{
			}
		}
	}
</script>

<style scoped>
	
</style>