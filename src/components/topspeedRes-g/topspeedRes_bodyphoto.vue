<template>
  <!--<li><img class="photo" src="../../../static/img/13.jpg">-->
    <!--<div id="photoText">-->
      <!--<p>北京故宫电子门票(VIP通道/持身份证直接进入园/方便快捷)</p>-->
      <!--<div class="price"><span>￥64 <i>可定明日</i></span><span>已售56981</span></div>-->
    <!--</div>-->
  <!--</li>-->
  <li><img class="photo" :src="isrc">
    <div id="photoText">
      <p>{{textP}}</p>
      <div class="price"><span>￥{{price}} <i>可定明日</i></span><span>已售{{num}}</span></div>
    </div>
  </li>

</template>


<script type='text/ecmascript-6'>
  import "../../../node_modules/vue/dist/vue.js";
    export default {
        props:{
          textP:{},
          isrc:{},
          price:{},
          num:{}

        },
    }
</script>

<style scoped>
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


  nav{
    height:.30rem;
  }

  #swiper-container1 .swiper-slide {
    text-align: center;
    background: #1a1a1a;
    color: white;
    line-height: .30rem; }

  #swiper-container2 {
    width: 100%;
    /*height: 3rem; }*/}
  #swiper-container2 .swiper-slide img {
    width: 100%;
    height: 100%; }

  section {
    flex: 1;
    overflow: auto; }
  section ul li {
    padding: .1rem;
    display: flex; }
  section #swiper-container2 ul li .photo{
    width:.88rem;
    height:.88rem;
  }
  section ul #photoText {
    padding-left: .1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between; }
  section ul #photoText .price {
    display: flex;
    justify-content: space-between; }
  section ul #photoText i {
    display: inline-block;
    width: .7rem;
    text-align: center;
    border: solid .01rem green;
    border-radius: .1rem; }

  /*# sourceMappingURL=fastyuding.css.map*/


</style>
