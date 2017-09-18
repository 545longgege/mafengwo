<template>
	<div>
		
    <main class="ticketMain">
    	<div class="content">
    	<div class="item clear">
    		<div class="left">
    			<img src="../../../static/img/10-y.jpeg" alt="" />
    		</div>
    		<div class="left desc clear">
	  			<p class="vipTitle">八达岭</p>
	  		    <p class="word">秒杀收到货发放加上地方撒旦法师的我的服务范围秒杀收到货发放加上地方撒旦法师的我的服务范秒杀收到货发放加上地方撒旦法师的我的服务范</p>
	  			<p class="left order">可订今日</p>
	  			<p class="right"><span style="color:#FF9D00;font-size:0.18rem;">￥65</span>/人</p>
	  		</div>
    		
    	</div>
    	</div>
    	
    	<!--搜索部分-->
    		<div id="result" style="display: none;">
			    <div class="hot">
			    	<p style="padding:0.2rem;padding-bottom: 0;">热门搜索</p>
			    	<div style="margin: 0.2rem;" class="hotWords">
			    		<span>故宫</span><span>东北虎园</span><span>展览馆</span><span>华山</span>
			    	</div>
			    	
			    </div>
			    
			    <div class="resultList">
			    	
			    </div>
			</div>
    </main>

	</div>
</template>
<script type='text/ecmascript-6'>
    import "../../../static/css/ticket-y.css"
    import "../../../static/font-y/iconfont.css"
    import "../../../static/libs/jquery-1.8.3.min.js"
     export default {
   
  	methods:{
		
    	 loadsight:function(){
            $.ajax({
            	url:"http://route.showapi.com/268-1",
            	data:{
                        showapi_appid: '39136',
                        showapi_sign: '8b60cf399eeb4629831caee83b1f6552'                       
                 },
                 dataType:'json',
                 type:'post',
                 success:function(res){
                 //	console.log(res);
                 	
                 	var data=res.showapi_res_body.pagebean.contentlist;
                 	for(var i=0;i<data.length;i++){
var str='<div class="item clear"><div class="left"><img src="'+data[i].picList[0].picUrl+'" alt="" /></div><div class="left desc clear"><p class="vipTitle">'+data[i].name+'</p>'
	 +'<p class="word">'+data[i].summary+'</p><p class="left order">可订今日</p><p class="right"><span style="color:#FF9D00;font-size:0.18rem;">￥65</span>/人</p></div></div>';  
                 	  
                 	  
                 	  $(".content").append(str);
                 		
                 	}
                 }
            	
            })

       }},
     created:function(){
     	this.loadsight();
       },
      mounted:function(){
      	$("#search").click(
			function(){
				$(".content").css("display","none");
				$('#result').css("display","block");
			}		
		)
		
		$(".cancel").click(function(){
			if($(".resultList").html()){
				$(".resultList").html("");
			}else{
				
				$(".content").css("display","block");
				$('#result').css("display","none");
			}
				
		})
		
				
		//搜索功能
			
			$(".hotWords span").on("click",function(){
				 $('.resultList').html("");
				var word=$(this).html()
				$("#search").val(word);
				get();
			})
			
			
		$(window).keydown(function(event){
			$('.hot').css("display","block");
             $('.resultList').html("");
			if(event.keyCode==13){
				get();

			}
			
		})
		
		
			
		function get(){
			$('.hot').css("display","none");
			var search=$("#search").val();
		 $.ajax({
			url:" http://route.showapi.com/268-1",
			type:"post",
			dataType:"json",
			data:{
				showapi_appid:"39136",
				showapi_sign:"8b60cf399eeb4629831caee83b1f6552",
				keyword:search
			},
			success:function(res){
				console.log(res);
				var data=res.showapi_res_body.pagebean.contentlist;
				if(data.length>0){
				for(var i=0;i<data.length;i++){
					if(data[i].picList[0]){
							var str='<div class="item clear"><div class="left"><img src="'+data[i].picList[0].picUrl+'" alt="" /></div><div class="left desc clear"><p class="vipTitle">'+data[i].name+'</p>'
	 +'<p class="word">'+data[i].summary+'</p><p class="left order">可订今日</p><p class="right"><span style="color:#FF9D00;font-size:0.18rem;">￥65</span>/人</p></div></div>';  
                 	  
			   				 $('.resultList').append(str);
					}else{
							var str='<div class="item clear"><div class="left"><img src="../../../static/img/10-y.jpeg" alt="" /></div><div class="left desc clear"><p class="vipTitle">'+data[i].name+'</p>'
							+'<p class="word">'+data[i].summary+'</p><p class="order left">可订今日</p><p class="right"><span style="color:#FF9D00;font-size: 0.18rem;">￥57</span>/人</p></div></div>';
			   				 $('.resultList').append(str);
					}
				
				}
			
				}else{
					 $('.resultList').html("无搜索结果");
				
				}
		
		}})
			
		}
      }
     
     
     
     
     }

</script>

<style scoped>

</style>
