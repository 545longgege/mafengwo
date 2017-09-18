<template>
	<div>
		<header>
			<div class="toCenter">
				<span class="date">
				26
				</span>
				<span class="year">
					<em>2017</em>
					<em>JUN</em>
				</span>
				<div style="font-size:0.45rem">蜂首纪念</div>
			</div>
			
		</header>
		<div class="topTitle">
			<div>
				<img src="../../../static/img/notes1.jpeg" alt="" />
			</div>
			<h2>跨越半个地球只为睡在你怀里--塞舌尔·拉迪格岛</h2>
			<div class="info">
				<div>
					<span>
						<img src="../../../static/img/1-y.jpeg" alt="" />
					</span>
					<span class="name">
						<i style="font-size: 0.18rem;color:#FFA800">七月沙漏</i>
						<br />17-06-11 浏览次数:100
					</span>
					<span style="font-size:0.28rem;font-weight:500;display: inline-block;padding-left: 0.1rem;">
						塞舌尔
					</span>
				</div>
				<div class="go">
					<span class="iconfont icon-dingwei">出发时间&nbsp;&nbsp;2017/03/26</span>
					<span class="iconfont icon-yanjing">人均费用&nbsp;&nbsp;10000</span>
					<span class="iconfont icon-10" style="width:1.5rem;">人物&nbsp;&nbsp;小两口</span>
					<span class="iconfont icon-fangdajing">出行天数&nbsp;&nbsp;9</span>
					<p class="pos">我的出行信息</p>
				</div>
			</div>
			
		</div>
		<div class="content">
			
			
			
		</div>
		<div class='directory'>
			<span class="iconfont icon-yanjing">1574</span>
			<span class="iconfont icon-fangdajing">目录</span>
			<span class="iconfont icon-10"></span>		
		</div>
	</div>
</template>
<script type='text/ecmascript-6'>
    import "../../../static/css/notes-y.css"
    import "../../../static/font-y/iconfont.css"
    import "../../../static/libs/jquery-1.8.3.min.js"
   
    
    export default {
    
    	methods:{
    	   //滚动固定ul
    		onScroll(){		
    			 let scrolled = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    			 //  console.log(scrolled)
    			 var top2=$("h2").offset().top;
    			 if(scrolled>top2){
    			 	$(".directory").stop().animate({
    			 		left:"-3rem"
    			 	},300,'linear'); }
    			 
    			 if(scrolled<top2){

    				$(".directory").stop().animate({
    			 		left:"0rem"
    			 	},300,'linear');	
    				
    			}
    			 
    		},
    		
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
                 	   var str='<div><p>'+data[i].summary+'</p><img src="'+data[i].picList[0].picUrl+'" alt="" /></div>';
                 	   $(".content").append(str);
                 		
                 	}
                 }
            	
            })

       }},
       created:function(){
       	this.loadsight();
       },
       mounted:function(){
       	window.addEventListener('scroll', this.onScroll)
       }
             
   
     
     }
    	
    
    	
    	
    
</script>


<style scoped>

</style>
