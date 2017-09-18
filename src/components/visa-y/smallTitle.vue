<template>
	<div>
		
   	<p>{{vlabel}}</p>

	</div>
</template>
<script type='text/ecmascript-6'>
   
    export default {
    	props:{
    		vlabel:String
  	}
//  	data:function(){
//  		return{title:"旅游攻略"}
//  	}
    }
</script>

<style scoped>
	p{
            border-left:0.07rem solid #FF9D00;
            text-indent: 0.1rem;
            line-height: 0.3rem;
            height: 0.3rem;
            font-size: 0.18rem;
        }

</style>
