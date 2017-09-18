<template>
	<div>
		<notesHeader :name='trafficSearch'></notesHeader>
		<main class="trafficMain">
		<ul class="clear nav">
				<li><a style="color:#FF9D00">全部</a></li>
				<li><a>旅游度假</a></li>
				<li><a>当地玩乐</a></li>
				<li><a>当地用车</a></li>
				<li><a>出境必备</a></li>
				<div class="pos"></div>
			</ul>
			
			<ul class="content">
				<li style="display:block;" class="all" >
					
					<div class="item clear" v-for="(n,index) in allList">
    					<div class="left">
    						<img :src=n.img alt="" />
    					</div>
    					<div class="left desc clear">
	  						<p class="vipTitle">{{n.title}}</p>
	  		    			<p class="word">{{n.desc}}</p>
	  						<p class="left order">可订今日</p>
	  						<p class="right"><span style="color:#FF9D00;font-size:0.18rem;">￥169</span>/人</p>
	  					</div>
    		
    				</div>
			
				</li>
				<li style="display:none;">
					<div class="tag">
						<span>机票</span>
						<span>机+酒</span>
						<span>跟团游</span>
						<span>游轮</span>
						<span>自由行</span>
					</div>
					<div class="item clear" v-for="(n,index) in allList1">
    					<div class="left">
    						<img :src=n.img alt="" />
    					</div>
    					<div class="left desc clear">
	  						<p class="vipTitle">{{n.title}}</p>
	  		    			<p class="word">"几年前，微博上盛传，因为全球温室效应，马尔代夫还有10几年就将沉没。于是，在一个夏日午后，我列下了一份旅行清单。"</p>
	  						<p class="left order">可订今日</p>
	  						<p class="right"><span style="color:#FF9D00;font-size:0.18rem;">￥98</span>/人</p>
	  					</div>
    		
    				</div>
				</li>
				<li style="display:none;">
					<div class="tag">
						<span>一日游</span>
						<span>多日游</span>
						<span>当地定制</span>
						<span>景点门票</span>		
					</div>
					<div class="item clear" v-for="(n,index) in allList2">
    					<div class="left">
    						<img :src=n.img alt="" />
    					</div>
    					<div class="left desc clear">
	  						<p class="vipTitle">{{n.title}}</p>
	  		    			<p class="word">"几年前，微博上盛传，因为全球温室效应，马尔代夫还有10几年就将沉没。于是，在一个夏日午后，我列下了一份旅行清单。"</p>
	  						<p class="left order">可订今日</p>
	  						<p class="right"><span style="color:#FF9D00;font-size:0.18rem;">￥199</span>/人</p>
	  					</div>
    		
    				</div>
				</li>
				<li style="display:none;">
					<div class="tag">
						<span>包车/拼车</span>
						<span>交通卡/劵</span>
						<span>租车</span>
						<span>接送机</span>
					</div>
					<div class="item clear" v-for="(n,index) in allList3">
    					<div class="left">
    						<img :src=n.img alt="" />
    					</div>
    					<div class="left desc clear">
	  						<p class="vipTitle">{{n.title}}</p>
	  		    			<p class="word">"几年前，微博上盛传，因为全球温室效应，马尔代夫还有10几年就将沉没。于是，在一个夏日午后，我列下了一份旅行清单。"</p>
	  						<p class="left order">可订今日</p>
	  						<p class="right"><span style="color:#FF9D00;font-size:0.18rem;">￥95</span>/人</p>
	  					</div>
    		
    				</div>
				</li>
				<li style="display:none;">
					<div class="tag">
						<span>签证</span>
						<span>wifi</span>
						<span>电话卡</span>
					</div>
					<div class="item clear" v-for="(n,index) in allList4">
    					<div class="left">
    						<img :src=n.img alt="" />
    					</div>
    					<div class="left desc clear">
	  						<p class="vipTitle">{{n.title}}</p>
	  		    			<p class="word">"几年前，微博上盛传，因为全球温室效应，马尔代夫还有10几年就将沉没。于是，在一个夏日午后，我列下了一份旅行清单。"</p>
	  						<p class="left order">可订今日</p>
	  						<p class="right"><span style="color:#FF9D00;font-size:0.18rem;">￥102</span>/人</p>
	  					</div>
    		
    				</div>
				</li>
				
			</ul>
			
		</main>

	</div>
</template>
<script type='text/ecmascript-6'>
    import "../../../static/css/traffic-y.css"
    import "../../../static/font-y/iconfont.css"
    import "../../../static/libs/jquery-1.8.3.min.js"
    import notesHeader from "../visa-y/visaHeader.vue"
    import "../../../node_modules/axios/dist/axios.js"
    import axios from 'axios'

   
    
    export default {
    	components:{
    		notesHeader  		
    		
    	} ,
    	data:function(){
  			return{
  				trafficSearch:"目的地/产品名称",
  				allList:[],
  				allList1:[],
  				allList2:[],
  				allList3:[],
  				allList4:[]
  			}
 		},
 		methods:{
    		loadLists:function(){
           		axios.get("../../static/travelNotes.json").then((res)=>{
                this.allList=res.data;
                
            })

        },
    		
    		loadList2:function(){
    			axios.get("../../static/slection.json").then((res)=>{
    				//拆分请求来的数据
    				//console.log(res.data)
    				for(var i=2;i<12;i++){
    					this.allList1.push(res.data[i])
    				}
    				
    				for(var i=12;i<22;i++){
    					this.allList2.push(res.data[i])
    				}
    				
    				for(var i=17;i<23;i++){
    					this.allList3.push(res.data[i])
    				}
    				
    				for(var i=23;i<34;i++){
    					this.allList4.push(res.data[i])
    				}	
    			})
    		}
    		
    	},
   
    	mounted:function(){
    		$(".nav a").on("click",function(){
    		
    		//显示隐藏对应
			var idx=$(this).parent().index();
			//console.log(idx);
			$(".content li").eq(idx).css("display","block").siblings().css("display","none");
			
			//字体颜色
			$(".nav a").css("color","#000")
			$(this).css("color","#ff9d00");
			
			//设置li下面的横线动画
			var aW=$(this).parent("li").css("width");	
			$(".nav .pos").css("width",aW);
			
			
			var posLeft= $(this).position().left;
			$('.nav .pos').stop().animate({
				'left':posLeft
			},200);
		
			
		})

    	},
    	created:function(){
    		this.loadLists();
    		this.loadList2();
    	}
   
     
     }
    	    	
    
</script>


<style scoped>

</style>
