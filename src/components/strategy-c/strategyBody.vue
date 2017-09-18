<template>
  <div class="strategy-body">
    <div class="strategy-nav">
      <div class="swiper-container swiper-container1">
        <div class="swiper-wrapper">
          <div class="swiper-slide">推荐</div>
          <div class="swiper-slide">主题</div>
          <div class="swiper-slide">中国</div>
          <div class="swiper-slide">亚洲</div>
          <div class="swiper-slide">欧洲</div>
          <div class="swiper-slide">北美洲</div>
          <div class="swiper-slide">大洋洲</div>
          <div class="swiper-slide">非洲</div>
          <div class="swiper-slide">南美洲</div>
          <p></p>
        </div>
      </div>
    </div>
    <div class="strategy-content">
      <!--推荐-->
      <command></command>
      <!--//主题-->
      <theme></theme>
      <!--中国-->
      <china></china>
      <!--亚洲-->
      <asian></asian>
      <!--欧洲-->
      <europe></europe>
      <!--北美洲-->
      <north></north>
      <!--大洋洲-->
      <oceanica></oceanica>
      <!--非洲-->
      <africa></africa>
      <!--南美-->
      <south></south>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>

  import Command from "./command.vue";
  import Theme from "./theme.vue";
  import China from "./china.vue";
  import Asian from "./asian.vue";
  import Europe from "./europe.vue";
  import North from "./north.vue";
  import Oceanica from "./oceanica.vue";
  import Africa from "./africa.vue";
  import South from "./south.vue";

  import "../../../node_modules/swiper/dist/css/swiper.min.css";
  import Swiper from "swiper";
  import $ from "../../../static/libs/jquery-3.2.1.min"

  export default {
    components:{
      Command,
      Theme,
      China,
      Asian,
      Europe,
      North,
      Oceanica,
      Africa,
      South
    },
    mounted:function(){
//      导航
      var strategySwiper = new Swiper ('.swiper-container1', {
        slidesPerView: 6.5,
        paginationClickable: true,
        slideToClickedSlide:true,
        spaceBetween: 0
      })

      $('.swiper-container1').find('.swiper-slide').eq(0).addClass('active');
      $(".strategy-content .command").show()
      $(".strategy-content .command").siblings().hide()

      $(".swiper-container1").find(".swiper-slide").on("click" , function(){
        var activeIndex = $(this).index();
        var navWidth=$('.strategy-nav .swiper-slide').width();
        $('.swiper-wrapper p').stop(false,true).animate({'left':activeIndex*
        navWidth+'px'},300);

        switch(activeIndex){
          case 0:
            $(".strategy-content .command").fadeIn(300).show()
            $(".strategy-content .command").siblings().fadeOut(300).hide()
            break;
          case 1:
            $(".strategy-content .theme").fadeIn(300).show()
            $(".strategy-content .theme").siblings().fadeOut(300).hide()
            break;
          case 2:
            $(".strategy-content .china").fadeIn(300).show()
            $(".strategy-content .china").siblings().fadeOut(300).hide()
            break;
          case 3:
            $(".strategy-content .asian").fadeIn(300).show()
            $(".strategy-content .asian").siblings().fadeOut(300).hide()
            break;
          case 4:
            $(".strategy-content .europe").fadeIn(300).show()
            $(".strategy-content .europe").siblings().fadeOut(300).hide()
            break;
          case 5:
            $(".strategy-content .north").fadeIn(300).show()
            $(".strategy-content .north").siblings().fadeOut(300).hide()
            break;
          case 6:
            $(".strategy-content .oceanica").fadeIn(300).show()
            $(".strategy-content .oceanica").siblings().fadeOut(300).hide()
            break;
          case 7:
            $(".strategy-content .africa").fadeIn(300).show()
            $(".strategy-content .africa").siblings().fadeOut(300).hide()
            break;
          case 8:
            $(".strategy-content .south").fadeIn(300).show()
            $(".strategy-content .south").siblings().fadeOut(300).hide()
            break;
        }
        $(this).addClass('active').siblings().removeClass('active')
      })
    }
  }

</script>

<style scoped>
  .strategy-body {
    flex: 1;
    overflow: auto;
    display: flex;
    flex-direction: column; }
  .strategy-body .strategy-nav {
    height: .4rem;
    background: lightgray; }
  .strategy-body .strategy-nav .swiper-container1 {
    height: .4rem; }
  .strategy-body .strategy-nav .swiper-container1 .swiper-wrapper {
    height: .4rem;
    position: relative; }
  .strategy-body .strategy-nav .swiper-container1 .swiper-wrapper p {
    width: 0.58rem;
    background: orange;
    position: absolute;
    bottom: 0;
    border: 0.005rem solid orange;
    left: 0; }
  .strategy-body .strategy-nav .swiper-container1 .swiper-wrapper .swiper-slide {
    line-height: .4rem;
    text-align: center; }
  .strategy-body .strategy-nav .swiper-container1 .swiper-wrapper .active {
    color: orange; }
  .strategy-body .strategy-content {
    flex: 1;
    overflow: auto; }
  .strategy-body .strategy-content .command .season {
    width: 96%;
    margin-left: auto;
    padding-bottom: 0.1rem; }
  .strategy-body .strategy-content .command .season h2 {
    font-size: 0.2rem;
    line-height: 0.5rem; }
 .strategy-body .strategy-content .command .season .swiper-command1 {
    padding-bottom: 0.1rem; }
 .strategy-body .strategy-content .command .season .swiper-command1 .swiper-slide {
    display: flex;
    flex-direction: column; }
 .strategy-body .strategy-content .command .season .swiper-command1 .swiper-slide img {
    height: 1.3rem; }
 .strategy-body .strategy-content .command .season .swiper-command1 .swiper-slide span {
    font-size: 0.14rem;
    line-height: 0.25rem; }
 .strategy-body .strategy-content .command .season .swiper-command1 .swiper-slide i {
    font-size: 0.12rem;
    line-height: 0.25rem; }
  .strategy-body .strategy-content .command .season .swiper-command2 {
    padding-bottom: 0.2rem; }
  .strategy-body .strategy-content .command .season .swiper-command2 .swiper-slide {
    width: 1rem;
    display: flex;
    flex-direction: column; }
  .strategy-body .strategy-content .command .season .swiper-command2 .swiper-slide img {
    height: 1.1rem; }
  .strategy-body .strategy-content .command .season .swiper-command2 .swiper-slide p:nth-of-type(1) {
    font-size: 0.14rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 0.23rem; }
  .strategy-body .strategy-content .command .season .swiper-command2 .swiper-slide p:nth-of-type(2) span {
    font-size: 0.12rem;
    line-height: 0.2rem; }
  .strategy-body .strategy-content .command .season .swiper-command2 .swiper-slide p:nth-of-type(2) i {
    font-size: 0.12rem;
    line-height: 0.2rem; }
  .strategy-body .strategy-content .command .line {
    width: 100%;
    height: 0.01rem;
    border-bottom: 0.01rem solid #cccccc;
    transform: scaleY(0.3); }
  .strategy-body .strategy-content .command .travel {
    width: 96%;
    margin-left: auto;
    padding-bottom: 0.1rem; }
  .strategy-body .strategy-content .command .travel h2 {
    font-size: 0.2rem;
    line-height: 0.5rem; }
  .strategy-body .strategy-content .command .travel .swiper-lv {
    padding-bottom: 0.1rem; }
  .strategy-body .strategy-content .command .travel .swiper-lv .swiper-slide img {
    height: 1.1rem; }
  .strategy-body .strategy-content .command .travel .swiper-lv .swiper-slide p:nth-of-type(1) {
    font-size: 0.14rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 0.23rem; }
  .strategy-body .strategy-content .command .travel .swiper-lv .swiper-slide p:nth-of-type(2) span {
    font-size: 0.12rem;
    line-height: 0.2rem; }
  .strategy-body .strategy-content .command .travel .swiper-lv .swiper-slide p:nth-of-type(2) i {
    font-size: 0.12rem; }
  .strategy-body .strategy-content .theme .foods,  .strategy-body .strategy-content .theme .shop,  .strategy-body .strategy-content .theme .camera,  .strategy-body .strategy-content .theme .enjoy,  .strategy-body .strategy-content .theme .graduate {
    width: 96%;
    margin-left: auto;
    padding-bottom: 0.1rem; }
  .strategy-body .strategy-content .theme .foods h2,  .strategy-body .strategy-content .theme .shop h2,  .strategy-body .strategy-content .theme .camera h2,  .strategy-body .strategy-content .theme .enjoy h2,  .strategy-body .strategy-content .theme .graduate h2 {
    font-size: 0.2rem;
    line-height: 0.5rem; }
  .strategy-body .strategy-content .theme .foods .swiper-theme,  .strategy-body .strategy-content .theme .shop .swiper-theme,  .strategy-body .strategy-content .theme .camera .swiper-theme,  .strategy-body .strategy-content .theme .enjoy .swiper-theme,  .strategy-body .strategy-content .theme .graduate .swiper-theme {
    width: 100%; }
  .strategy-body .strategy-content .theme .foods .swiper-theme .swiper-wrapper,  .strategy-body .strategy-content .theme .shop .swiper-theme .swiper-wrapper,  .strategy-body .strategy-content .theme .camera .swiper-theme .swiper-wrapper,  .strategy-body .strategy-content .theme .enjoy .swiper-theme .swiper-wrapper,  .strategy-body .strategy-content .theme .graduate .swiper-theme .swiper-wrapper {
    width: 100%; }
  .strategy-body .strategy-content .theme .foods .swiper-theme .swiper-wrapper .swiper-slide img,  .strategy-body .strategy-content .theme .shop .swiper-theme .swiper-wrapper .swiper-slide img,  .strategy-body .strategy-content .theme .camera .swiper-theme .swiper-wrapper .swiper-slide img,  .strategy-body .strategy-content .theme .enjoy .swiper-theme .swiper-wrapper .swiper-slide img,  .strategy-body .strategy-content .theme .graduate .swiper-theme .swiper-wrapper .swiper-slide img {
    height: 1.1rem; }
  .strategy-body .strategy-content .theme .foods .swiper-theme .swiper-wrapper .swiper-slide p:nth-of-type(1),  .strategy-body .strategy-content .theme .shop .swiper-theme .swiper-wrapper .swiper-slide p:nth-of-type(1),  .strategy-body .strategy-content .theme .camera .swiper-theme .swiper-wrapper .swiper-slide p:nth-of-type(1),  .strategy-body .strategy-content .theme .enjoy .swiper-theme .swiper-wrapper .swiper-slide p:nth-of-type(1),  .strategy-body .strategy-content .theme .graduate .swiper-theme .swiper-wrapper .swiper-slide p:nth-of-type(1) {
    font-size: 0.14rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 0.23rem; }
  .strategy-body .strategy-content .theme .foods .swiper-theme .swiper-wrapper .swiper-slide p:nth-of-type(2) span,  .strategy-body .strategy-content .theme .shop .swiper-theme .swiper-wrapper .swiper-slide p:nth-of-type(2) span,  .strategy-body .strategy-content .theme .camera .swiper-theme .swiper-wrapper .swiper-slide p:nth-of-type(2) span,  .strategy-body .strategy-content .theme .enjoy .swiper-theme .swiper-wrapper .swiper-slide p:nth-of-type(2) span,  .strategy-body .strategy-content .theme .graduate .swiper-theme .swiper-wrapper .swiper-slide p:nth-of-type(2) span {
    font-size: 0.12rem;
    line-height: 0.2rem; }
   .strategy-body .strategy-content .theme .foods .swiper-theme .swiper-wrapper .swiper-slide p:nth-of-type(2) i,  .strategy-body .strategy-content .theme .shop .swiper-theme .swiper-wrapper .swiper-slide p:nth-of-type(2) i,  .strategy-body .strategy-content .theme .camera .swiper-theme .swiper-wrapper .swiper-slide p:nth-of-type(2) i,  .strategy-body .strategy-content .theme .enjoy .swiper-theme .swiper-wrapper .swiper-slide p:nth-of-type(2) i,  .strategy-body .strategy-content .theme .graduate .swiper-theme .swiper-wrapper .swiper-slide p:nth-of-type(2) i {
    font-size: 0.12rem; }
   .strategy-body .strategy-content .china .hot {
    width: 96%;
    margin-left: auto;
    padding-bottom: 0.1rem; }
   .strategy-body .strategy-content .china .hot .swiper-hot1 {
    padding-bottom: 0.1rem; }
   .strategy-body .strategy-content .china .hot .swiper-hot1 .swiper-slide {
    display: flex;
    flex-direction: column; }
   .strategy-body .strategy-content .china .hot .swiper-hot1 .swiper-slide img {
    height: 1.3rem; }
   .strategy-body .strategy-content .china .hot .swiper-hot1 .swiper-slide span {
    font-size: 0.14rem;
    line-height: 0.25rem; }
   .strategy-body .strategy-content .china .hot .swiper-hot1 .swiper-slide i {
    font-size: 0.12rem;
    line-height: 0.25rem; }
   .strategy-body .strategy-content .china .hot .swiper-hot2 {
    padding-bottom: 0.2rem; }
   .strategy-body .strategy-content .china .hot .swiper-hot2 .swiper-slide {
    width: 1rem;
    display: flex;
    flex-direction: column; }
   .strategy-body .strategy-content .china .hot .swiper-hot2 .swiper-slide img {
    height: 1.1rem; }
   .strategy-body .strategy-content .china .hot .swiper-hot2 .swiper-slide p:nth-of-type(1) {
    font-size: 0.14rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 0.23rem; }
   .strategy-body .strategy-content .china .hot .swiper-hot2 .swiper-slide p:nth-of-type(2) span {
    font-size: 0.12rem;
    line-height: 0.2rem; }
   .strategy-body .strategy-content .china .hot .swiper-hot2 .swiper-slide p:nth-of-type(2) i {
    font-size: 0.12rem;
    line-height: 0.2rem;
    color: gray; }
   .strategy-body .strategy-content .china .allStrategy {
    width: 96%;
    margin-left: auto; }
   .strategy-body .strategy-content .china .allStrategy ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start; }
   .strategy-body .strategy-content .china .allStrategy ul li {
    width: 50%;
    display: flex;
    padding: 0.1rem 0; }
   .strategy-body .strategy-content .china .allStrategy ul li img {
    width: 0.5rem;
    height: 0.5rem;
    margin-right: 0.15rem; }
   .strategy-body .strategy-content .china .allStrategy ul li p {
    display: flex;
    flex-direction: column; }
   .strategy-body .strategy-content .china .allStrategy ul li p span {
    font-size: 0.14rem;
    line-height: 0.3rem; }
   .strategy-body .strategy-content .china .allStrategy ul li p i {
    font-size: 0.12rem;
    color: gray; }
</style>
