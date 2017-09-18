<template>
	<div>
		
     <main class="mainContent">
        <!--nav-->
        <div class="nav">
            <div>
                <a>
                    <i></i><br/>攻略
               </a>
            </div>
            <div @click = "tiaojiudian">
                <a>
                    <i></i><br/>酒店
                </a>
            </div>
            <div>
                <a>
                    <i></i><br/>商城
                </a>
            </div>
            <div @click="tiaotice">
                <a>
                    <i></i><br/>火车票
                </a>
            </div>
            <div @click="tiaoyouji">
                <a>
                    <i></i><br/>游记
                </a>
            </div>
            <div @click = "tiaoww">
                <a>
                    <i></i><br/>嗡嗡
                </a>
            </div>
            <div>
                <a>
                    <i></i><br/>结伴
                </a>
            </div>
            <div @click="tiaobe">
                <a>
                    <i></i><br/>玩乐
                </a>
            </div>


        </div>
        <div class="commend">
            &nbsp;>&nbsp;推荐攻略&nbsp;<&nbsp;
        </div>
        <div id="tripBox1" @click = "tiaoxq"></div>

   
         <div class="ad">
        	<div class="title">C-TREK蔚领 中国漫游季</div>
        	<div>
        		<img src="../../../static/img/ad.jpeg" alt="" />
        	</div>
        	<span class="adlogo">广告</span>
        	
        </div>
        
        
        <div class="wengweng">
        	<p class="title">最新嗡嗡</p>
        	<div class="clear"> 
        		<div class="left big">
        		<img src="../../../static/img/weng3.jpeg" alt="" />
        		</div>
        		<div class="left small">
        			<img src="../../../static/img/weng1.jpeg" alt="" />
        			<img src="../../../static/img/weng2.jpeg" alt="" />
        			
        		</div>
        	</div>
        	<span class="logo">嗡嗡</span>
        </div>
        
        <div id="tripBox2"></div>
        
             <div class="ad">
        	<div class="title">北海道的春天悄悄来临</div>
        	<div>
        		<img src="../../../static/img/ad1.jpeg" alt="" />
        	</div>
        	<span class="adlogo">广告</span>
        	
        </div>
        
        
        <div class="wengweng">
        	<p class="title">最新嗡嗡</p>
        	<div class="clear"> 
        		<div class="left big">
        		<img src="../../../static/img/w1.png" alt="" />
        		</div>
        		<div class="left small">
        			<img src="../../../static/img/w2.png" alt="" />
        			<img src="../../../static/img/w3.png" alt="" />
        			
        		</div>
        	</div>
        	<span class="logo">嗡嗡</span>
        </div>
        
        <div id="tripBox3"></div>
         <div class="wengweng">
        	<p class="title">最新嗡嗡</p>
        	<div class="clear"> 
        		<div class="left big">
        		<img src="../../../static/img/w4.jpeg" alt="" />
        		</div>
        		<div class="left small">
        			<img src="../../../static/img/w5.jpg" alt="" />
        			<img src="../../../static/img/w6.jpeg" alt="" />
        			
        		</div>
        	</div>
        	<span class="logo">嗡嗡</span>
        </div>

       
    </main>
    <mainfooter></mainfooter>

	</div>
</template>
<script type='text/ecmascript-6'>
    import "../../../static/css/home-y.css"
    import "../../../static/libs/jquery-1.8.3.min.js"
    import "../../../static/font-mainfooter/iconfont.css"
    import  mainfooter from "../mainfooter.vue"
   
    export default {
    	components:{
    		mainfooter
    	},
    	 //请求数据
    	methods:{
          loadTravelNotes:function(){
               $.ajax({
                    type:"get",
                    url:"../../static/travelNotes.json",
                    dataType:"json",
                    success:function(res){
                    //	console.log(res);
                    	for(var i=0;i<3;i++){
                    	var str='<div class="trip"><p class="Ctitle">'+res[i].title+'</p><div class="clear" style="margin-bottom:0.1rem">'
               +'<div class="left"><img src="'+res[i].img+'"  class="bigPic"alt=""></div><div class="left content">'+res[i].desc+' </div>'
          +'</div><p class="bot"><span><img src="'+res[i].img+'" alt=""></span><span style=" margin-right:0.3rem;width:1.5rem">'+res[i].name+'</span><span style=" margin-right:0.1rem;">'+res[i].time+'</span><span style=" margin-right:0.1rem;color:#ffa800" class="iconfont icon-yanjing">'+res[i].popular+' </span></p></div>';
                    	$("#tripBox1").append(str);
                       }
                        }
                    })

           $.ajax({
                    type:"get",
                    url:"../../static/travelNotes.json",
                    dataType:"json",
                    success:function(res){
                    //	console.log(res);
                    	for(var i=3;i<6;i++){
                    	var str='<div class="trip"><p class="Ctitle">'+res[i].title+'</p><div class="clear" style="margin-bottom: 0.1rem">'
               +'<div class="left"><img src="'+res[i].img+'"  class="bigPic"alt=""></div><div class="left content">'+res[i].desc+' </div>'
          +'</div><p class="bot"><span><img src="'+res[i].img+'" alt=""></span><span style=" margin-right:0.3rem;width:1.5rem">'+res[i].name+'</span><span style=" margin-right:0.1rem;">'+res[i].time+'</span><span style=" margin-right:0.1rem;color:#ffa800" class="iconfont icon-yanjing">'+res[i].popular+' </span></p></div>';
                    	$("#tripBox2").append(str);
                       }
                        }
                    })
           
            $.ajax({
                    type:"get",
                    url:"../../static/travelNotes.json",
                    dataType:"json",
                    success:function(res){
                    //	console.log(res);
                    	for(var i=6;i<12;i++){
                    	var str='<div class="trip"><p class="Ctitle">'+res[i].title+'</p><div class="clear" style="margin-bottom: 0.1rem">'
               +'<div class="left"><img src="'+res[i].img+'"  class="bigPic"alt=""></div><div class="left content">'+res[i].desc+' </div>'
          +'</div><p class="bot"><span><img src="'+res[i].img+'" alt=""></span><span style=" margin-right:0.3rem;width:1.5rem">'+res[i].name+'</span><span style=" margin-right:0.1rem;">'+res[i].time+'</span><span style=" margin-right:0.1rem;color:#ffa800" class="iconfont icon-yanjing">'+res[i].popular+' </span></p></div>';
                    	$("#tripBox3").append(str);
                       }
                        }
                    })
           
      },
		tiaoww : function(){
			location.href = '#/WengMain_y'
		},
		tiaoxq: function(){
			location.href = '#/Notes_y'
		},
		tiaojiudian : function(){
			location.href = '#/Hotel_g'
		},
		tiaobe : function(){
			location.href = '#/Ticket_y'
		},
		tiaoyouji : function(){
			location.href = '#/Travalnote_x'
		},
		tiaotice : function(){
			location.href = '#/Ticket_x'
		}
	  },
     created:function(){
        this.loadTravelNotes();
     }
    	
    }
</script>

<style scoped>

</style>
