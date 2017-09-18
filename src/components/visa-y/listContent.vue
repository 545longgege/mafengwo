<template>
	<div>
		
   	  
	  <div class='vip clear'> 
	  	<div class="left imgDis">
	  		<img :src=vimg alt="" />
	  		<p><span style="color:white;background:#20d167;">日本</span><span style="color:#20d167;background:white;">签证</span></p>
	  	</div>
	  	<div class="left desc clear">
	  		<p class="vipTitle">{{vTitle}}</p>
	  		<p class="tag"><span>拒签退</span><span>包邮</span><span>可加急</span><span>简化材料</span></p>
	  		<p class="left"><span>￥1008</span>起</p>
	  		<p class="right">{{vsale}}</p>
	  	</div>
	  </div>

	</div>
</template>
<script type='text/ecmascript-6'>
    import "../../../static/css/visa-y.css"
    export default {
    	props:{
    		vimg:String,
    		vTitle:String,
    		vsale:String
    	}
//  	data:function(){
//  		return{
//  			
//  			vimg:"../../../static/img/vip1.jpeg",
//  			vTitle:"日本5年多次【超级VIP】旅游签证（北京送签）双向包邮+极速+拒全退+极简+洗照片+17万海外险+专员服务",
//  			vsale:"已售100"		
//  		
//  		
//  		}
//  	}
    }
</script>

<style scoped>
	.vip {
    padding: 0.1rem;
    position: relative; }
    .vip .imgDis img {
      width: 1.3rem;
      height: 1rem; }
   .vip .imgDis p {
      position: absolute;
      left: 0.1rem;
      top: 0.1rem;
      border: 0.01rem solid #20d167;
      font-size: 0.14rem; }
    .vip .imgDis p span {
        display: inline-block;
        font-size: 0.14rem;
        padding-left: 0.05rem;
        padding-right: 0.05rem; }
    .vip .imgDis:after {
      content: "";
      width: 100%;
      height: 0;
      border-bottom: 0.01rem solid gainsboro;
      position: absolute;
      left: 0;
      bottom: 0; }
    .vip .desc {
      width: 2.1rem;
      margin-left: 0.1rem;
      font-size: 0.14rem; }
    .vip .desc .vipTitle {
        overflow: hidden;
        word-break: break-all;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        margin-bottom: 0.05rem;
        font-size: 0.16rem; }
     .vip .desc .tag span {
        font-size: 0.12rem;
        color: gray;
        border: 0.01rem solid gainsboro;
        border-radius: 0.05rem;
        display: inline-block;
        margin-right: 0.05rem; }


</style>
