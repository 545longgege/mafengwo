<template>
	<div>
		
    
	
	<main class="visaMain">
	<div class="title">
    	<p>
    		<span class="iconfont icon-yanjing"></span>
    		已有<span>407111</span>人出签，出签成功率<span>99.8%</span>
    	</p>
  	 </div>
	<div class="swiper-container">
        <div class="swiper-wrapper">
        	<div class="swiper-slide each">
        		<img src="../../../static/img/visaB1.jpeg" alt="" />
        			
        	</div>
        	<div class="swiper-slide each">
        		<img src="../../../static/img/visaB2.jpeg" alt="" />		
        	</div>
        	<div class="swiper-slide each">
        		<img src="../../../static/img/visaB3.jpeg" alt="" />
        			
        	</div>
        	<div class="swiper-slide each">
        		<img src="../../../static/img/visaB4.jpeg" alt="" />		
        	</div>
        	<div class="swiper-slide each">
        		<img src="../../../static/img/visaB5.jpeg" alt="" />
        			
        	</div>
        	<div class="swiper-slide each">
        		<img src="../../../static/img/visaB6.jpeg" alt="" />		
        	</div>
        	
        </div>
         <div class="swiper-pagination"></div>
    </div>
    
    <!--复用标题栏组件-->
    <div class="commend">
    	<p>蚂蜂窝推荐</p>
    	<div class="visaContent">
        <div class="swiper-wrapper">
        	<div class="swiper-slide oneOf">
        		<img src="../../../static/img/v1.jpeg" alt="" />
        		<div>
        			<span class="wrap">【全国受理】美国旅游签证（途牛专属证件）</span>
        			<span style="color:#FF9D00">
        				￥1149
        				<i style="color:grey;font-size:0.12rem">起/本</i>
        			</span>
        			
        		</div>
        			
        	</div>
        	<div class="swiper-slide oneOf">
        		<img src="../../../static/img/v2.jpeg" alt="" />
        			<div>
        			<span class="wrap">台湾自由行旅游签证（途牛专属证件）</span>
        			<span style="color:#FF9D00">
        				￥49
        				<i style="color:grey;font-size:0.12rem">起/本</i>
        			</span>
        			
        		</div>
        	</div>
        	<div class="swiper-slide oneOf">
        		<img src="../../../static/img/v3.jpeg" alt="" />
        			<div>
        			<span class="wrap">菲律宾旅游签证（途牛专属证件最新式）</span>
        			<span style="color:#FF9D00">
        				￥940
        				<i style="color:grey;font-size:0.12rem">起/本</i>
        			</span>
        			
        		</div>
        			
        	</div>
        	<div class="swiper-slide oneOf">
        		<img src="../../../static/img/v4.jpeg" alt="" />
        			<div>
        			<span class="wrap">【全国受理】日本旅游签证（途牛专属证件）</span>
        			<span style="color:#FF9D00">
        				￥149
        				<i style="color:grey;font-size:0.12rem">起/本</i>
        			</span>
        			
        		</div>
        	</div>
        	<div class="swiper-slide oneOf">
        		<img src="../../../static/img/v5.jpeg" alt="" />
        			<div>
        			<span class="wrap">【全国受理】澳大利亚旅游签证（途牛专属证件）</span>
        			<span style="color:#FF9D00">
        				￥950
        				<i style="color:grey;font-size:0.12rem">起/本</i>
        			</span>
        			
        		</div>
        			
        	</div>
        	<div class="swiper-slide oneOf">
        		<img src="../../../static/img/v6.jpeg" alt="" />
        			<div>
        			<span class="wrap">【全国受理】美国旅游签证（途牛专属证件）</span>
        			<span style="color:#FF9D00">
        				￥1149
        				<i style="color:grey;font-size:0.12rem">起/本</i>
        			</span>
        			
        		</div>
        	</div>
        	
        </div>
        
    </div>

    	
    </div>
    
	 <vmall :vlabel="visaTitle"></vmall>
	 <div class="flagBlock">
	 	<div class="one" v-for="(n,index) in Lists">
	 		<img :src="n.img" alt="" />
	 		<div>
	 			<span style="color:#333">{{n.title}}</span><br/><span>{{n.price}}</span><span style="color:gray;">起</span>
	 		</div> 		
	 	</div>
	 	
	 </div>
	  <vmall :vlabel="visaTitle2"></vmall>
	  <VipBlock :vimg="vimg1" :vTitle="vTitle1" :vsale="vsale1"></VipBlock>
	  <VipBlock :vimg="vimg2" :vTitle="vTitle2" :vsale="vsale2"></VipBlock>
	  <VipBlock :vimg="vimg3" :vTitle="vTitle3" :vsale="vsale3"></VipBlock>
	  <div style="background:lavenderblush;height: 0.1rem;"></div>
	  <vmall vlabel="办理流程"></vmall>
	  <div class='process'>
	  	<div class="theOne">
	  		<i v-bgPosition="'2px -40px'"></i>
	  		<p>1.选择签证</p>
	  	</div>
	  	<div class="theOne">
	  		<i v-bgPosition="'-37px -42px'"></i>
	  		<p>2.确认订单</p>
	  	</div>
	  	<div class="theOne" >
	  		<i v-bgPosition="'-75px -42px'"></i>
	  		<p>3.支付费用</p>
	  	</div>
	  	<div class="theOne">
	  		<i v-bgPosition="'-112px -42px'"></i>
	  		<p>4.等待商家邮件</p>
	  	</div>
	  	<div class="theOne">
	  		<i v-bgPosition="'-150px -42px'"></i>
	  		<p>5.递交材料</p>
	  	</div>
	  	<div class="theOne">
	  		<i v-bgPosition="'-188px -42px'"></i>
	  		<p>6.出签领取</p>
	  	</div>
	  	
	  </div>
	  
	  
    
    </main>
</div>
</template>
<script type='text/ecmascript-6'>
    import "../../../static/css/visa-y.css"
    import "../../../static/font-y/iconfont.css"
    import "../../../node_modules/swiper/dist/js/swiper.min.js"
    import "../../../node_modules/swiper/dist/css/swiper.min.css"
    import Vue from 'vue'
    import Vmall from "./smallTitle.vue";
    import Swiper from "swiper"
    import "../../../node_modules/axios/dist/axios.js"
    import axios from 'axios'
    import VipBlock from "./listContent.vue";

  
    
    export default {
    	data:function(){
    		return{
    			visaTitle:"热门签证",
    			visaTitle2:"超级VIP服务（定制签证）",
    			Lists:[],
    			vimg1:"../../../static/img/vip1.jpeg",
    			vTitle1:"日本5年多次【超级VIP】旅游签证（北京送签）双向包邮+极速+拒全退+极简+洗照片+17万海外险+专员服务",
    			vsale1:"已售120"	,
    			vimg2:"../../../static/img/vip2.jpeg",
    			vTitle2:"【超级VIP服务 上海送签】日本五年多次旅游签证（双向包邮+极速出签退+极简办理+免申请表+免机酒订单+免部分财力+个性化处理+代印照片+赠送西瓜卡+全程信息保密+专线顾问服务）",
    			vsale2:"已售160",
    			vimg3:"../../../static/img/vip3.jpeg",
    			vTitle3:"【超级VIP服务】美国旅游签证（全国受理+一对一专业顾问+加急24小时操作+4个工作日内面签+7天海外保险+拒签就退500元+7天美国电话卡（含1.5G高速流量）+电子材料+全程包邮+陪同面签/取签）",
    			vsale3:"已售110"	
    		}
    	},
    	methods:{
    		loadLists:function(){
            axios.get("../../static/flag.json").then((res)=>{
                this.Lists=res.data;
                
            })

        }
    		
    	},
    	created:function(){
    		this.loadLists();
    	},
    	components:{
    		Vmall,
    		VipBlock
    	},
    	//自定义指令，设置i的背景定位
    	directives:{
    		bgPosition:function(el,binging){
    			el.style.backgroundPosition=binging.value;
    		}
    	},
    	mounted:function(){
    		var mySwiper = new Swiper('.swiper-container', {
				autoplay: 2000,//可选选项，自动滑动
				 pagination: '.swiper-pagination',
				 loop:"true"
			})
    		
    		var myswiper2=new Swiper('.visaContent',{
    			slidesPerView:3.5,
				spaceBetween:5
    		})
    		
    	}
    }
    
</script>

<style scoped>
</style>
