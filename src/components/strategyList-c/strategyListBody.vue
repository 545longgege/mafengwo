<template>
  <div class="list-body">
    <!-- 阅读人数-->
    <div class="read">
      <p>
        <i class="count">2088916</i>
        <span>人阅读此功略</span>
      </p>
      <div class="pho">
        <img src="../../../static/img/imgC/1.jpg"/>
        <img src="../../../static/img/imgC/2.jpg"/>
        <img src="../../../static/img/imgC/3.jpg"/>
        <img src="../../../static/img/imgC/4.jpg"/>
        <img src="../../../static/img/imgC/5.jpg"/>
      </div>
    </div>
    <!-- 简介-->
    <div class="introduce">
      <!-- 01概况-->
      <div class="profile" v-for="(n,index) in content">
        <h2>{{n.title}}</h2>
          <div class="intro">
          <span v-for="m in content[index].spanNum" >{{m.span}}</span>
        </div>
      </div>
    </div>
  </div>
</template>


<script type='text/ecmascript-6'>

  import $ from "../../../static/libs/jquery-3.2.1.min"

  export default {
      data: function(){
          return{
            content : [
              {
                  title:"01/概况",
                  spanNum : [
                    {span : "青岛速览"},
                    {span : "最佳旅行时间"},
                    {span : "建议游玩天数"},
                    {span : "消费水平"}
                  ]
              },
              {
                title:"02/青岛必体验",
                spanNum : [
                  {span : "四月到青岛沐浴樱花"},
                  {span : "如土著般喝原浆啤酒"},
                  {span : "八大关深秋拍唯美照"},
                  {span : "三九严冬登崂山赏冰瀑"}
                ]
              },
              {
                title:"03/行前准备",
                spanNum : [
                  {span : "穿衣指南"},
                  {span : "预订住宿"}
                ]
              },
              {
                title:"04/景点",
                spanNum : [
                  {span : "景点概况"},
                  {span : "青岛必游景点TOP10"},
                  {span : "青岛45月赏樱花最佳地"},
                  {span : "5月赏樱花最佳地"},
                  {span : "当地人最爱海水浴场TOP5"},
                  {span : "青岛最具人气公园TOP5"},
                  {span : "老青岛的经典德式建筑大赏"}
                ]
              },
              {
                title:"05/住宿",
                spanNum : [
                  {span : "概述"},
                  {span : "栈桥-中山路"},
                  {span : "奥帆中心/香港中路"},
                  {span : "八大关-第一海水浴场"},
                  {span : "台东商圈"},
                  {span : "市北商务区"},
                  {span : "青岛住劈柴院"},
                  {span : "青岛异国建筑"},
                  {span : "青岛住啤酒街"}
                ]
              },
              {
                title:"06/餐饮",
                spanNum : [
                  {span : "美食概况"},
                  {span : "特色美食"},
                  {span : "青岛人气美食街TOP4"},
                  {span : "青岛人气海鲜餐馆推荐"},
                  {span : "青岛人气海鲜市场TOP4"},
                  {span : "青岛老字号鲁菜馆"},
                  {span : "青岛性价比高的人气小店"},
                  {span : "青岛人气小吃店"}
                ]
              },
              {
                title:"07/购物",
                spanNum : [
                  {span : "购物概况"},
                  {span : "特色商品"},
                  {span : "青岛热门商圈TOP4"}
                ]
              },
              {
                title:"08/娱乐",
                spanNum : [
                  {span : "娱乐概况"},
                  {span : "亲自最爱游乐园"},
                  {span : "文艺范独立书店"},
                  {span : "多角度赏玩青岛"}
                ]
              },
              {
                title:"09/实用信息",
                spanNum : [
                  {span : "语言"},
                  {span : "邮局与明信片"},
                  {span : "银行"},
                  {span : "旅行安全"}
                ]
              },
              {
                title:"10/关于青岛要知道",
                spanNum : [
                  {span : "城市风貌"},
                  {span : "节庆"}
                ]
              },
              {
                title:"11/如何到达",
                spanNum : [
                  {span : "飞机"},
                  {span : "火车"},
                  {span : "汽车"},
                  {span : "自驾"}
                ]
              },
              {
                title:"12/市内交通",
                spanNum : [
                  {span : "公交车"},
                  {span : "出租车"},
                  {span : "轮渡"}
                ]
              },
              {
                title:"13/线路推荐",
                spanNum : [
                  {span : "青岛超充实五日精华油"}
                ]
              },
              {
                title:"14/青岛专题攻略",
                spanNum : [
                  {span : "比你想象的更好玩！"}
                ]
              },
              {
                title:"15/旅行路上",
                spanNum : [
                  {span : "推荐电影"}
                ]
              }
            ]
          }
      },
      mounted : function(){
        var intro=$('.intro');
        var len=intro.length;
        for(var i=0;i<len;++i){
            if($(intro[i]).children('span').length<6){
                continue;
            }
            else{
                var sLen=$(intro[i]).children('span').length;
                for(var j=5;j<sLen;++j){
                    $(intro[i]).children('span')[j].style.display='none';
                }
               $(intro[i]).append('<p id="more" style="color:#666;padding-left: 0.1rem;line-height: 0.4rem">显示更多</p>');
               $(intro[i]).children('p').click(function(){
                  $(this).css('display','none')
                  $(this).siblings().css('display','block')
                });
            }
        }
    }
  }
</script>

<style scoped>

  .list-body {
    flex: 1;
    overflow: auto;
    width: 95%;
    margin: 0.1rem auto; }
  .list-body .read {
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 0.005rem solid #cccccc;
    padding: 0.15rem 0; }
  .list-body .read p {
    width: 2rem;
    display: flex;
    flex-direction: column; }
  .list-body .read p i {
    font-size: 0.2rem; }
  .list-body .read p span {
    font-size: 0.14rem; }
  .list-body .read .pho{
    width: 100%;
  }
  .list-body .read .pho img {
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    border: 0.02rem solid white;
    display: inline}
  .list-body .read .pho img:nth-of-type(1) {
    transform: translateX(0.6rem); }
  .list-body .read .pho img:nth-of-type(2) {
    transform: translateX(0.45rem); }
  .list-body .read .pho img:nth-of-type(3) {
    transform: translateX(0.3rem); }
  .list-body .read .pho img:nth-of-type(4) {
    transform: translateX(0.15rem); }
  .list-body .read .pho img:nth-of-type(5) {
    transform: translateX(0rem); }
  .list-body .introduce {
    width: 100%; }
  .list-body .introduce .profile h2 {
    font-size: 0.2rem;
    line-height: 0.5rem;
    border-bottom: 0.01rem solid #cccccc; }
  .list-body .introduce .profile > div {
    display: flex;
    flex-wrap: wrap;
    border-bottom: 0.01rem solid #cccccc; }
  .list-body .introduce .profile > div > span {
    display: inline-block;
    width: 46%;
    padding: 3%;
    margin-right: 0.1rem;
    line-height: 0.24rem;
    font-size: 0.14rem;
    color: #666666;
    letter-spacing: 0.02rem; }
</style>
