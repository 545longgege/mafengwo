<template>
  <header>
    <ul>
      <li><span class="icon-fanhui iconfont"></span></li>
      <!--<li><span>返回</span></li>-->
      <li>极速预定-蚂蜂窝</li>
      <!--<li><span class="icon-fenxiang iconfont"></span></li>-->
      <li><span class="icon-fenxiang iconfont"></span><div class="line_shu"></div><span class="icon-shenglvehao iconfont"></span></li>
    </ul>
  </header>

</template>


<script type='text/ecmascript-6'>
  import "../../../node_modules/vue/dist/vue.js";
  import"../../../static/libs/font_g/iconfont.css";
  import"../../../static/libs/font_g/iconfont.js";
    export default {
      data:function(){
        return{

        }
      }
    }
</script>

<style >
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
    font-size: .14rem; }

  html, body {
    width: 100%;
    height: 100%;
    font-family: Microsoft Yahei; }

  html {
    font-size: 26.67vw; }

  #m-containter {
    display: flex;
    flex-direction: column;
    height: 100%; }

  header {
    height: .44rem; }
  header ul {
    display: flex;
    justify-content: space-around;
    line-height: .44rem; }
  header ul li {
    font-size: .16rem;
    display: flex; }
  header ul li span {
    font-size: .16rem; }
  header ul li .iconfont {
    color: #e6b500;
    font-size: .2rem; }

  .line_shu {
    display: block;
    height: .18rem;
    width: .01rem;
    border-left: .01rem solid #ccc;
    transform: scaleX(0.5);
    margin-top: .13rem;
    margin-left: .05rem;
    margin-right: .07rem; }

</style>
