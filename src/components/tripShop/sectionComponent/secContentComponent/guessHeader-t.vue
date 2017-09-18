<template>
	<div>
		<div id='guessHeader'>
			<p><span>&gt;</span>{{title}}<span>&lt;</span></p>
			
		</div>
	</div>
</template>

<script type='text/ecmascript-6'>
	import '../../../../../static/css/tripShop-t.css';
	export default {
		props:{
			title:{
				
			}
		},
		data:function(){
			return{
				
			}
		}
	}
</script>

<style scoped>
	#guessHeader{margin-bottom:.1rem;}
    #guessHeader span{
        font-size:.2rem;
        color:orangered;
    }
    #guessHeader span:nth-of-type(1){
        margin-right:.1rem;
    }
    #guessHeader span:nth-of-type(2){
        margin-left:.1rem;
    }
    #guessHeader p{
        font-size:.16rem;
        text-align: center;
        transform:translateY(.05rem);
    }
   
</style>