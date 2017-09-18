<template>
  <div class="swiper-container swiper-one">
    <div class="swiper-wrapper">
      <img class="swiper-slide" src="../../../static/img/1-x.jpeg"/>
      <img class="swiper-slide" src="../../../static/img/1-x.png"/>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>


<script type='text/ecmascript-6'>

  import "../../../static/libs/swiper.min.css"

  import "../../../static/libs/swiper.min"

  import Swiper from "swiper"

  import $ from "../../../static/libs/jquery-3.2.1.min"
  import "../../../static/font-x/iconfont.css"
  export default {
      mounted : function(){
        var swiperOne = new Swiper(".swiper-one",{
          autoplay:3000,
          speed:300,
          loop:true,
          pagination:".swiper-pagination"
        })
      }
  }
</script>

<style scoped>
  .swiper-one {
    width: 100%;
    height: 1rem; }
  .swiper-one img {
    width: 100%;
    height: 1rem;
    display: block; }
  .swiper-one .swiper-pagination-bullet-active {
    background: #ffa800; }

</style>
