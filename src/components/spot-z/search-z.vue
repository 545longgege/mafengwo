<template>
	<div class="search">
		<input type="text" :placeholder="sousuo" />
	</div>
</template>

<script type='text/ecmascript-6'>
	
	
	
	export default {
		props:{
			sousuo:String
		},
  		data:function (){
  			return {
  				
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
	
	.search{
		width:100%;height:0.35rem;
		line-height: 0.35rem;
	}
	.search input{
		outline: none;
		text-align:center;
		margin-left:25%;
		border: #eee solid 0.01rem;
	}
</style>