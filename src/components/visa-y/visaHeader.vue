<template>
	<div>
		
    <header class="clear visaHeader">
        <div class="return" >
            <a class="iconfont icon-fanhui"> </a>
        </div>
        <div class="word" style="padding-top:0.06rem">
        	<input type="text" :placeholder='name'/>
        </div>
       <div class="ext">
			<a class="iconfont icon-10"> </a>
       </div>
     
    </header> 

	</div>
</template>
<script type='text/ecmascript-6'>
    import "../../../static/css/visa-y.css"
    import "../../../static/font-y/iconfont.css"
    export default {
		props:{
			name:String
		}
//		,
//		data:function(){
//			return{
//				name:"搜索国家或地区名称"
//			}
//		}
 	
    }
</script>

<style scoped>

</style>
