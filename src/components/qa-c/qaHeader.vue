<template>
  <div class="qa-header">
    <ul>
      <li><i class="iconfont icon-zuoyoujiantou"></i></li>
      <li>
        <div>
          <i class="iconfont icon-sousuo_sousuo"></i>
          <span>搜索旅行问题</span>
        </div>
      </li>
      <li>
        <i class="iconfont icon-wenda"></i>
      </li>
    </ul>
    <div class="qa-head">
      <img src="../../../static/img/imgC/qa2.jpg"/>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>

  import "../../../static/font-c/iconfont.css";
  import $ from "../../../static/libs/jquery-3.2.1.min.js";
  export default {
    mounted:function (){
      $(window).scroll(function (){
        if(($(window).scrollTop())/100>=2){
          $(".qa-header ul").css({"background": "rgba(255, 255, 255, 1)"})
          $(".qa-header ul>li>i").css({"color":"orange"})
          $(".qa-header li>div>i , .qa-header li>div>span").css({"color":"gray"})
        }else{
          $(".qa-header ul").css({"background": "rgba(200, 200, 200, 0.8)"})
          $(".qa-header ul>li>i").css({"color":"white"})
          $(".qa-header li>div>i , .qa-header li>div>span").css({"color":"white"})
        }
      })
    }
  }
</script>

<style scoped>
  .qa-header {
    width: 100%;
    height: 2rem; }
  .qa-header ul {
    width: 100%;
    position: fixed;
    height: .44rem;
    background: rgba(200, 200, 200, 0.8);
    display: flex;
    justify-content: space-around; }
  .qa-header ul li > i {
    font-size: .26rem;
    line-height: .44rem;
    color: white; }
  .qa-header ul li div {
    width: 2rem;
    height: 0.4rem;
    margin: 0.02rem 0;
    text-align: center;
     }
  .qa-header ul li div i {
    line-height: 0.4rem;
    color: white; }
  .qa-header ul li div span {
    line-height: 0.4rem;
    color: white; }
  .qa-header .qa-head img {
    width: 100%;
    height: 2rem;
    position: absolute;
    top: 0;
    z-index: -1; }
</style>
