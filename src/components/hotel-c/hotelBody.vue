<template>
  <div class="hotel-body">
    <div class="hotel-main">
      <div class="image">
        <p class="road">问路卡</p>
        <div class="hotel-name">
          <p class="chinaName">成都臻悦楼堡酒店</p>
          <span class="enName">Rhombus Park Aura Chengdu Hotel</span>
          <p class="eatAddr">吃货根据地</p>
        </div>
        <p class="photo">照片 232</p>
      </div>
      <div class="address">
        <p>位于春熙路商圈，毗邻太古里及IFS国际金融中心</p>
      </div>
      <div class="strategy" @click="tiaosan">
        <p><i>1059</i>条蜂蜂攻略，<i>17</i>篇游记提到这里 &nbsp;&nbsp;&nbsp;<i class="iconfont icon-shoucang"></i></p>
      </div>
    </div>
    <div class="strongLine"></div>
    <!--房间预订-->
    <div class="hotel-reserve">
      <div class="date">
        <div class="start">
          <p>入住</p>
          <input type="date" id="startDate" value=""/>
        </div>
        <div class="end">
          <p>离开</p>
          <input type="date" id="endDate" value="离开"/>
        </div>
        <div class="days" @click="cond">
          <p>每间房住</p>
          <div class="peopleCount">2成人</div>
        </div>
        <div class="sanjiao">
          <p></p>
        </div>
      </div>
      <div class="roomReserve">
        <div class="offical">
          <div>
            <p>官方直订</p>
            <span>已含税</span>
            <span>在线付</span>
          </div>
          <div>
            <p><span>￥619</span>元起</p>
            <p>预订</p>
          </div>
        </div>
        <div class="line"></div>
        <div class="booking">
          <div>
            <p>Booking</p>
            <span>已含税</span>
            <span>在线付</span>
          </div>
          <div>
            <p><span>￥630</span>元起</p>
            <p>预订</p>
          </div>
        </div>
        <div class="line"></div>
        <div class="xiecheng">
          <div>
            <p>携程</p>
          </div>
          <div>
            <p><span>￥639</span>元起</p>
            <p>预订</p>
          </div>
        </div>
        <div class="line"></div>
      </div>
    </div>
    <div class="strongLine"></div>
    <!--详情-->
    <div class="hotel-details">
      <div class="detail-nav">
        <div>酒店攻略</div>
        <div>基础信息</div>
      </div>
      <!--酒店攻略-->
      <div class="hotelStra">
        <div class="info">
          <p>【必读】 -- 酒店靠近春熙路，在成都太古里旁边。--酒店至宽窄巷子约10分钟，至锦里古街和武侯祠约15分钟车程。-- 酒店靠近春熙路，在成都太古里旁边。【贴士】 -- 酒店靠近春熙路，在成都太古里旁边。--酒店至宽窄巷子约10分钟，至锦里古街和武侯祠约15分钟车程。-- 酒店靠近春熙路，在成都太古里旁边。</p>
        </div>
        <div class="line"></div>
        <div class="map">
          <p><i>地址：</i>成都下东大街216号喜年广场B座</p>
          <div><img src="../../../static/img/imgC/map.jpg"/></div>
        </div>
      </div>
      <!--基础信息-->
      <div class="baseInfo">
        基础信息的内容<br/>
        基础信息的内容<br/>
        基础信息的内容<br/>
        基础信息的内容<br/>
      </div>
    </div>
    <div class="strongLine"></div>
    <!--评价-->
    <div class="hotel-comment">
      <h2>来自2425条蜂蜂攻略</h2>
      <!--简要-->
      <div class="brief">
        <div cl="0"><p>就在春熙路</p><span>402提到</span></div>
        <div cl="0"><p>服务很热情</p><span>174提到</span></div>
        <div cl="0"><p>性价比很高</p><span>402提到</span></div>
        <div cl="0"><p>在市中心</p><span>174提到</span></div>
        <div cl="0"><p>巷子里</p><span>402提到</span></div>
        <div cl="0"><p>适合家庭</p><span>174提到</span></div>
      </div>
      <!--评论-->
      <div class="comment">
        <!--第一条-->
        <div class="commentMessage" v-for="(n,index) in commentContent">
          <div class="photoName">
            <div>
              <img :src="n.pic"/>
              <span>{{n.name}}</span>
              <i>Lv{{n.grade}}</i>
            </div>
            <span>{{n.date}}</span>
          </div>
          <div class="infomation">
            <p>{{n.description}}</p>
            <div class="swiper-container swiper-photo">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="m in commentContent[index].content">
                  <img :src="m.photo"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="line"></div>

      </div>
      <!--查看全部真实攻略-->
      <div class="look">
        查看全部真实攻略
      </div>
    </div>
    <div class="strongLine"></div>
    <!--附近-->
    <div class="near" v-for="(n,index) in nearContent">
      <div class="title">
        <h2>{{n.title}}</h2>
        <p><span>查看更多</span><i class="iconfont icon-zuoyoujiantou1"></i></p>
      </div>
      <div class="detail">
        <div class="img01" v-for="m in nearContent[index].content">
          <img :src="m.pic"/>
          <p>{{m.name}}</p>
          <i>{{m.com}} 的蜂蜂推荐</i>
        </div>
      </div>
      <div class="line"></div>
    </div>
    <div class="strongLine"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import "../../../node_modules/swiper/dist/css/swiper.min.css";
  import Swiper from "swiper";
  import $ from "../../../static/libs/jquery-3.2.1.min"

  export default {
    data : function(){
      return {
          nearContent : [
            {
              title : "附近美食",
              content : [
                    {
                      pic : "../../../static/img/imgC/food1.jpg",
                      name : "龙抄手（春熙路总店）",
                      com : "66%"
                    },
                    {
                      pic : "../../../static/img/imgC/food2.jpg",
                      name : "陈麻婆豆腐（骡马市店）",
                      com : "82%"
                    },
                    {
                      pic : "../../../static/img/imgC/food3.jpg",
                      name : "洞子口张老二凉粉",
                      com : "85%"
                    }
              ]
            },
            {
              title : "附近景点",
              content : [
                    {
                      pic : "../../../static/img/imgC/food4.jpg",
                      name : "龙抄手（春熙路总店）",
                      com : "66%"
                    },
                    {
                      pic : "../../../static/img/imgC/food5.jpg",
                      name : "陈麻婆豆腐（骡马市店）",
                      com : "82%"
                    },
                    {
                      pic : "../../../static/img/imgC/004.jpg",
                      name : "洞子口张老二凉粉",
                      com : "85%"
                    }
              ]
            },
            {
              title : "附近有空房的酒店",
              content : [
                {
                  pic : "../../../static/img/imgC/001.jpg",
                  name : "龙抄手（春熙路总店）",
                  com : "66%"
                },
                {
                  pic : "../../../static/img/imgC/002.jpg",
                  name : "陈麻婆豆腐（骡马市店）",
                  com : "82%"
                },
                {
                  pic : "../../../static/img/imgC/003.jpg",
                  name : "洞子口张老二凉粉",
                  com : "85%"
                }
              ]
            }
          ],
          commentContent: [
            {
              pic : "../../../static/img/imgC/1.jpg",
              name :"孤岛上的蓝鲸鱼",
              grade :"4",
              date : "2017-05-26",
              description : "住的环境不错，位置很好在IFS前面。酒店靠近春熙路，在成都太古里旁边。--酒店至宽窄巷子约10分钟，至锦里古街和武侯祠约15分钟车程。",
              content : [
                {
                    photo :"../../../static/img/imgC/food1.jpg"
                },
                {
                  photo :"../../../static/img/imgC/food2.jpg"
                },
                {
                  photo :"../../../static/img/imgC/food3.jpg"
                },
                {
                  photo :"../../../static/img/imgC/food4.jpg"
                },
                {
                  photo :"../../../static/img/imgC/food5.jpg"
                }
              ]

            },
            {
              pic : "../../../static/img/imgC/2.jpg",
              name :"lalala",
              grade :"3",
              date : "2017-05-22",
              description : "酒店靠近春熙路，在成都太古里旁边。住的环境不错，位置很好在IFS前面。--酒店至宽窄巷子约10分钟，至锦里古街和武侯祠约15分钟车程。",
              content : [
                {
                  photo :"../../../static/img/imgC/food3.jpg"
                },
                {
                  photo :"../../../static/img/imgC/food4.jpg"
                },
                {
                  photo :"../../../static/img/imgC/food5.jpg"
                },
                {
                  photo :"../../../static/img/imgC/001.jpg"
                },
                {
                  photo :"../../../static/img/imgC/002.jpg"
                }
              ]

            },
            {
              pic : "../../../static/img/imgC/3.jpg",
              name :"王丹",
              grade :"5",
              date : "2017-05-18",
              description : "住的环境不错，位置很好在IFS前面。酒店靠近春熙路，在成都太古里旁边。--酒店至宽窄巷子约10分钟，至锦里古街和武侯祠约15分钟车程。",
              content : [
                {
                  photo :"../../../static/img/imgC/001.jpg"
                },
                {
                  photo :"../../../static/img/imgC/002.jpg"
                },
                {
                  photo :"../../../static/img/imgC/003.jpg"
                },
                {
                  photo :"../../../static/img/imgC/004.jpg"
                },
                {
                  photo :"../../../static/img/imgC/005.jpg"
                }
              ]

            }

          ]
      }
    },
    mounted : function(){
      //当前时间
      var now = new Date();
      //当天日期
      var day = parseInt(("0" + now.getDate()).slice(-2));
      var month = ("0" + (now.getMonth() + 1)).slice(-2);
      var today = now.getFullYear()+"-"+(month)+"-"+(day);
      $('#startDate').val(today);

      //离开日期
      var leaveDate = now.getFullYear()+"-"+(month)+"-"+(day+1);
      $('#endDate').val(leaveDate);

      //导航切换效果
      $(".detail-nav").find("div").eq(0).addClass("active")
      $(".baseInfo").hide()
      $(".detail-nav").find("div").on("click" , function(){
        var activeIndex = $(this).index()
        $(this).addClass("active")
        switch(activeIndex){
          case 0 :
            $(".hotelStra").show()
            $(".baseInfo").hide()
            break;
          case 1 :
            $(".hotelStra").hide()
            $(".baseInfo").show()
            break;
        }
        $(this).addClass('active').siblings().removeClass('active')
      })

      //点击评论的的简要，盒子变大

      $(".brief div").on("click", function(){
        if($(this).attr("cl")==0){//取出当前cl的属性值
          //console.log($(this).attr("cl"))
          $(this).css({"transform":"scale(1.2)","z-index":"999"}).siblings().css({"transform":"scale(1)","z-index":"9"})
          $(this).attr("cl","1").siblings().attr("cl","0")
        }else{
          $(this).css({"transform":"scale(1)"})
          //console.log($(this).attr("cl"))
          $(this).attr("cl","0")
        }
      })

      //评论的图片
      var commentSwiper = new Swiper(".swiper-photo" , {
        slidesPerView: 3.5,
        paginationClickable: true,
        spaceBetween: 10
      })

      var adultCountObj = localStorage.getItem("adultCount");
      var num = JSON.parse(adultCountObj);
      var adultNum = num.adultCount;
      var childNum = num.childCount;
      if(childNum == 0){
        $(".peopleCount").text(adultNum+"成人")
      }else{
        $(".peopleCount").text(adultNum+"成人,"+childNum+"儿童")
      }
    },
    methods:{
        cond:function(){
            location.href = '#/Condition_c'
        },
		    tiaosan:function(){
            location.href = '#/Comment_c'
        }
    }
  }
</script>

<style scoped>
  .hotel-body {
    width: 100%;
    flex: 1;
    overflow: auto; }
  .hotel-body .hotel-main {
    width: 100%; }
  .hotel-body .hotel-main .image {
    width: 100%;
    height: 2rem;
    background: url("../../../static/img/imgC/hotel3.jpg") no-repeat;
    background-size: 100% 2rem;
    position: relative; }
  .hotel-body .hotel-main .image .road {
    width: 1rem;
    font-size: 0.12rem;
    color: white;
    background: rgba(0, 0, 0, 0.5);
    line-height: 0.34rem;
    text-align: center;
    position: absolute;
    right: 0.15rem;
    top: 0.05rem; }
  .hotel-body .hotel-main .image .hotel-name {
    width: 2.3rem;
    position: absolute;
    left: 0.25rem;
    top: 1rem; }
  .hotel-body .hotel-main .image .hotel-name .chinaName {
    font-size: 0.24rem;
    line-height: 0.34rem;
    color: white; }
  .hotel-body .hotel-main .image .hotel-name .enName {
    font-size: 0.12rem;
    color: whitesmoke;
    opacity: 0.8;
    line-height: 0.24rem; }
  .hotel-body .hotel-main .image .hotel-name .eatAddr {
    width: 0.8rem;
    height: 0.2rem;
    border-radius: 0.1rem;
    background: white;
    color: cornflowerblue;
    text-align: center;
    line-height: 0.2rem; }
  .hotel-body .hotel-main .image .photo {
    line-height: 0.24rem;
    color: white;
    position: absolute;
    bottom: 0.2rem;
    right: 0.15rem; }
  .hotel-body .hotel-main .address {
    width: 100%;
    padding: 0.2rem 0;
    border-bottom: 0.005rem solid #cccccc; }
  .hotel-body .hotel-main .address p {
    width: 100%;
    text-align: center;
    line-height: 0.2rem;
    border-left: 0.02rem solid orange;
    border-right: 0.02rem solid orange; }
  .hotel-body .hotel-main .strategy {
    width: 100%;
    padding: 0.2rem 0; }
  .hotel-body .hotel-main .strategy p {
    width: 90%;
    margin: 0 auto;
    font-size: 0.16rem; }
  .hotel-body .hotel-main .strategy p i {
    color: orange;
    font-size: 0.16rem;
    letter-spacing: 0.05rem; }
  .hotel-body .hotel-reserve {
    width: 100%;
    padding: 0.1rem 0; }
  .hotel-body .hotel-reserve .date {
    width: 96%;
    margin: 0 auto;
    display: flex; }
  .hotel-body .hotel-reserve .date .start, .hotel-body .hotel-reserve .date .end {
    width: 1.3rem;
    background: whitesmoke; }
  .hotel-body .hotel-reserve .date .start p, .hotel-body .hotel-reserve .date .end p {
    color: orange;
    background: whitesmoke;
    line-height: 0.24rem; }
  .hotel-body .hotel-reserve .date .start input, .hotel-body .hotel-reserve .date .end input {
    border: none;
    outline: none;
    width: 1.3rem;
    height: 0.5rem;
    line-height: 0.5rem;
    background: whitesmoke; }
  .hotel-body .hotel-reserve .date .days {
    margin-left: 0.1rem;
    width: 100rem;
    height: 0.74rem; }
  .hotel-body .hotel-reserve .date .days p {
    height: 0.24rem;
    color: orange;
    background: whitesmoke;
    line-height: 0.24rem;
    padding-left: 0.1rem; }
  .hotel-body .hotel-reserve .date .days .peopleCount {
    height: 0.5rem;
    line-height: 0.5rem;
    background: whitesmoke;
    padding-left: 0.1rem; }
  .hotel-body .hotel-reserve .date .sanjiao {
    height: 0.74rem;
    background: whitesmoke;
    position: relative; }
  .hotel-body .hotel-reserve .date .sanjiao p {
    border: 0.08rem solid whitesmoke;
    border-top-color: black;
    line-height: 0.5rem;
    position: absolute;
    left: -0.2rem;
    top: 20%;
    transform: translateY(-50%); }
  .hotel-body .hotel-reserve .roomReserve {
    width: 96%;
    margin: 0 auto; }
  .hotel-body .hotel-reserve .roomReserve .offical {
    display: flex;
    justify-content: space-between;
    margin: 0.1rem 0; }
  .hotel-body .hotel-reserve .roomReserve .offical > div:nth-of-type(1) p {
    color: gray;
    font-size: 0.14rem;
    line-height: 0.24rem; }
  .hotel-body .hotel-reserve .roomReserve .offical > div:nth-of-type(1) span {
    display: inline-block;
    width: 0.44rem;
    height: 0.24rem;
    font-size: 0.12rem;
    line-height: 0.23rem;
    border: 0.005rem solid gray;
    color: gray;
    text-align: center; }
  .hotel-body .hotel-reserve .roomReserve .offical > div:nth-of-type(2) {
    display: flex;
    justify-content: space-between}
  .hotel-body .hotel-reserve .roomReserve .offical > div:nth-of-type(2) > p:nth-of-type(1) {
    margin-right: 0.1rem;
    font-size: 0.12rem;
    color: gray;
    line-height: 0.44rem; }
  .hotel-body .hotel-reserve .roomReserve .offical > div:nth-of-type(2) > p:nth-of-type(1) span {
    color: orange;
    font-size: 0.24rem; }
  .hotel-body .hotel-reserve .roomReserve .offical > div:nth-of-type(2) > p:nth-of-type(2) {
    width: 0.5rem;
    height: 0.26rem;
    font-size: 0.14rem;
    letter-spacing: 0.06rem;
    text-align: center;
    color: #ffffff;
    background: orange;
    line-height: 0.24rem;
    margin-top: 0.12rem; }
  .hotel-body .hotel-reserve .roomReserve .booking {
    display: flex;
    justify-content: space-between;
    margin: 0.1rem 0; }
  .hotel-body .hotel-reserve .roomReserve .booking > div:nth-of-type(1) p {
    color: gray;
    font-size: 0.14rem;
    line-height: 0.24rem; }
  .hotel-body .hotel-reserve .roomReserve .booking > div:nth-of-type(1) span {
    display: inline-block;
    width: 0.44rem;
    height: 0.24rem;
    font-size: 0.12rem;
    line-height: 0.23rem;
    border: 0.005rem solid gray;
    color: gray;
    text-align: center; }
  .hotel-body .hotel-reserve .roomReserve .booking > div:nth-of-type(2) {
    display: flex;
    justify-content: space-between}
  .hotel-body .hotel-reserve .roomReserve .booking > div:nth-of-type(2) > p:nth-of-type(1) {
    margin-right: 0.1rem;
    font-size: 0.12rem;
    color: gray;
    line-height: 0.44rem; }
  .hotel-body .hotel-reserve .roomReserve .booking > div:nth-of-type(2) > p:nth-of-type(1) span {
    color: orange;
    font-size: 0.24rem; }
  .hotel-body .hotel-reserve .roomReserve .booking > div:nth-of-type(2) > p:nth-of-type(2) {
    width: 0.5rem;
    height: 0.26rem;
    font-size: 0.14rem;
    letter-spacing: 0.06rem;
    text-align: center;
    color: #ffffff;
    background: orange;
    line-height: 0.24rem;
    margin-top: 0.12rem; }
  .hotel-body .hotel-reserve .roomReserve .xiecheng {
    display: flex;
    justify-content: space-between;
    margin: 0.1rem 0; }
  .hotel-body .hotel-reserve .roomReserve .xiecheng > div:nth-of-type(1) p {
    color: gray;
    font-size: 0.14rem;
    line-height: 0.48rem; }
  .hotel-body .hotel-reserve .roomReserve .xiecheng > div:nth-of-type(2) {
    display: flex;
    justify-content: space-between}
  .hotel-body .hotel-reserve .roomReserve .xiecheng > div:nth-of-type(2) > p:nth-of-type(1) {
    margin-right: 0.1rem;
    font-size: 0.12rem;
    color: gray;
    line-height: 0.44rem; }
  .hotel-body .hotel-reserve .roomReserve .xiecheng > div:nth-of-type(2) > p:nth-of-type(1) span {
    color: orange;
    font-size: 0.24rem; }
  .hotel-body .hotel-reserve .roomReserve .xiecheng > div:nth-of-type(2) > p:nth-of-type(2) {
    width: 0.5rem;
    height: 0.26rem;
    font-size: 0.14rem;
    letter-spacing: 0.06rem;
    text-align: center;
    color: #ffffff;
    background: orange;
    line-height: 0.24rem;
    margin-top: 0.12rem; }
  .hotel-body .hotel-details {
    width: 100%; }
  .hotel-body .hotel-details .detail-nav {
    width: 96%;
    margin: 0 auto;
    display: flex;
    position: relative;
    border-bottom: 0.005rem solid #cccccc; }
  .hotel-body .hotel-details .detail-nav > div {
    width: 40%;
    margin: 0 10%;
    line-height: 0.44rem;
    text-align: center; }
  .hotel-body .hotel-details .detail-nav .active {
    color: orange;
    border-bottom: 0.02rem solid orange; }
  .hotel-body .hotel-details .hotelStra {
    width: 94%;
    margin: 0 auto; }
  .hotel-body .hotel-details .hotelStra .info p {
    font-size: 0.14rem;
    line-height: 0.26rem;
    padding: 0.1rem 0; }
  .hotel-body .hotel-details .hotelStra .map {
    display: flex;
    margin-top: 0.1rem; }
  .hotel-body .hotel-details .hotelStra .map p {
    width: 80%;
    line-height: 0.6rem; }
  .hotel-body .hotel-details .hotelStra .map p i {
    color: orange; }
  .hotel-body .hotel-details .hotelStra .map div {
    width: 20%; }
  .hotel-body .hotel-comment {
    width: 94%;
    margin: 0 auto; }
  .hotel-body .hotel-comment .brief {
    display: flex;
    flex-wrap: wrap; }
  .hotel-body .hotel-comment .brief div {
    width: 1.15rem;
    text-align: center;
    margin: 0.01rem 0.01rem;
    border-radius: 0.1rem;
    border: 0.001rem solid floralwhite; }
  .hotel-body .hotel-comment .brief div span {
    font-size: 0.12rem; }
  .hotel-body .hotel-comment .brief div:nth-of-type(1) {
    height: 0.65rem;
    background: orangered;
    color: white;
    font-size: 0.22rem; }
  .hotel-body .hotel-comment .brief div:nth-of-type(1) p {
    padding-top: 0.1rem; }
  .hotel-body .hotel-comment .brief div:nth-of-type(2) {
    height: 0.58rem;
    background: coral;
    color: white;
    font-size: 0.20rem; }
  .hotel-body .hotel-comment .brief div:nth-of-type(2) p {
    padding-top: 0.08rem; }
  .hotel-body .hotel-comment .brief div:nth-of-type(3) {
    height: 0.50rem;
    background: orange;
    color: white;
    font-size: 0.18rem; }
  .hotel-body .hotel-comment .brief div:nth-of-type(3) p {
    padding-top: 0.06rem; }
  .hotel-body .hotel-comment .brief div:nth-of-type(4) {
    height: 0.50rem;
    background: navajowhite;
    color: black;
    font-size: 0.16rem; }
  .hotel-body .hotel-comment .brief div:nth-of-type(4) p {
    padding-top: 0.05rem; }
  .hotel-body .hotel-comment .brief div:nth-of-type(5) {
    height: 0.43rem;
    background: navajowhite;
    color: black;
    font-size: 0.14rem; }
  .hotel-body .hotel-comment .brief div:nth-of-type(5) p {
    padding-top: 0.03rem; }
  .hotel-body .hotel-comment .brief div:nth-of-type(6) {
    height: 0.40rem;
    background: navajowhite;
    color: black;
    font-size: 0.12rem; }
  .hotel-body .hotel-comment .brief div:nth-of-type(6) p {
    padding-top: 0.01rem; }
  .hotel-body .hotel-comment .comment .commentMessage {
    padding-bottom: 0.1rem; }
  .hotel-body .hotel-comment .comment .commentMessage .photoName {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0.15rem 0; }
  .hotel-body .hotel-comment .comment .commentMessage .photoName > div {
    display: flex; }
  .hotel-body .hotel-comment .comment .commentMessage .photoName > div img {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%; }
  .hotel-body .hotel-comment .comment .commentMessage .photoName > div span {
    font-size: 0.14rem;
    line-height: 0.5rem; }
  .hotel-body .hotel-comment .comment .commentMessage .photoName > div i {
    display: block;
    color: orange;
    border: 0.001rem solid orange;
    width: 0.5rem;
    height: 0.26rem;
    text-align: center;
    margin: 0.12rem 0 0 0.1rem; }
  .hotel-body .hotel-comment .comment .commentMessage .photoName>span {
    width: 1.2rem;
	text-align:right;
    line-height: 0.5rem; }
  .hotel-body .hotel-comment .comment .commentMessage .infomation > p {
    line-height: 0.24rem;
    padding-bottom: 0.1rem; }
  .hotel-body .hotel-comment .look {
    width: 2rem;
    margin: 0.1rem auto;
    height: 0.4rem;
    border: 0.005rem solid #cccccc;
    font-size: 0.14rem;
    line-height: 0.4rem;
    text-align: center;
    border-radius: 0.05rem; }
  .hotel-body .near {
    width: 96%;
    margin: 0 auto 0.15rem; }
  .hotel-body .near .title {
    width: 100%;
    display: flex;
    justify-content: space-between; }
  .hotel-body .near .title h2 {
    font-size: 0.16rem;
    line-height: 0.5rem; }
  .hotel-body .near .title p {
    display: flex; }
  .hotel-body .near .title p span {
    font-size: 0.12rem;
    color: gray;
    line-height: 0.5rem; }
  .hotel-body .near .title p i {
    color: orange;
    font-size: 0.24rem;
    line-height: 0.5rem; }
  .hotel-body .near .detail {
    width: 100%;
    display: flex;
    justify-content: space-between; }
  .hotel-body .near .detail .img01 {
    width: 30%; }
  .hotel-body .near .detail .img01 img {
    width: 100%;
    height: 1rem; }
  .hotel-body .near .detail .img01 p {
    font-size: 0.16rem;
    line-height: 0.26rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    text-align: center; }
  .hotel-body .near .detail .img01 i {
    color: gray;
    font-size: 0.12rem;
    line-height: 0.24rem;
    text-align: center; }
</style>
