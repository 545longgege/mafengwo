<template>
  <div class="command">
        <div class="season">
          <h2>当季推荐</h2>
          <div class="swiper-container swiper-command1">
            <div class="swiper-wrapper">
              <div class="swiper-slide" @click="list">
                <img src="../../../static/img/imgC/1.jpg"/>
                <span>青岛</span>
                <i>201万次浏览</i>
              </div>
              <div class="swiper-slide">
                <img src="../../../static/img/imgC/2.jpg"/>
                <span>重庆</span>
                <i>301万次浏览</i>
              </div>
              <div class="swiper-slide">
                <img src="../../../static/img/imgC/3.jpg"/>
                <span>凤凰</span>
                <i>88万次浏览</i>
              </div>
              <div class="swiper-slide">
                <img src="../../../static/img/imgC/4.jpg"/>
                <span>上海迪士尼</span>
                <i>84万次浏览</i>
              </div>
              <div class="swiper-slide">
                <img src="../../../static/img/imgC/5.jpg"/>
                <span>新加坡</span>
                <i>188万次浏览</i>
              </div>
              <div class="swiper-slide">
                <img src="../../../static/img/imgC/6.jpg"/>
                <span>巴黎</span>
                <i>201万次浏览</i>
              </div>
              <div class="swiper-slide">
                <img src="../../../static/img/imgC/7.jpg"/>
                <span>吉隆坡</span>
                <i>201万次浏览</i>
              </div>
              <div class="swiper-slide">
                <img src="../../../static/img/imgC/8.jpg"/>
                <span>意大利</span>
                <i>38万次浏览</i>
              </div>
            </div>
          </div>
          <div class="swiper-container swiper-command2">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="../../../static/img/imgC/3.jpg"/>
                <p>全球最美游戏《纪念碑谷》，原来现实中真啦啦啦啦啦</p>
                <p><span>西班牙</span>&nbsp;&nbsp;&nbsp;&nbsp;<i>66140次浏览</i></p>
              </div>
              <div class="swiper-slide">
                <img src="../../../static/img/imgC/4.jpg"/>
                <p>全球最美游戏《纪念碑谷》，原来现实中啦啦啦啦啦</p>
                <p><span>日本</span>&nbsp;&nbsp;&nbsp;&nbsp;<i>8014次浏览</i></p>
              </div>
              <div class="swiper-slide">
                <img src="../../../static/img/imgC/5.jpg"/>
                <p>全球最美游戏《纪念碑谷》，原来现实中啦啦啦啦啦</p>
                <p><span>重庆</span>&nbsp;&nbsp;&nbsp;&nbsp;<i>81956次浏览</i></p>
              </div>
              <div class="swiper-slide">
                <img src="../../../static/img/imgC/6.jpg"/>
                <p>全球最美游戏《纪念碑谷》，原来现实中啦啦啦啦啦</p>
                <p><span>泰国</span>&nbsp;&nbsp;&nbsp;&nbsp;<i>105270次浏览</i></p>
              </div>
              <div class="swiper-slide">
                <img src="../../../static/img/imgC/7.jpg"/>
                <p>全球最美游戏《纪念碑谷》，原来现实中啦啦啦啦啦</p>
                <p><span>香港</span>&nbsp;&nbsp;&nbsp;&nbsp;<i>225560次浏览</i></p>
              </div>
            </div>
          </div>
        </div>
        <div class="line"></div>
        <div class="travel">
          <h2>旅行家专栏</h2>
          <div class="swiper-container swiper-lv">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="../../../static/img/imgC/10.jpg"/>
                <p>全球最美游戏《纪念碑谷》,原来现实中啦啦啦啦啦</p>
                <p><span>青岛</span>&nbsp;&nbsp;&nbsp;&nbsp;<i>201万次浏览</i></p>
              </div>
              <div class="swiper-slide">
                <img src="../../../static/img/imgC/9.jpg"/>
                <p>全球最美游戏《纪念碑谷》，原来现实中啦啦啦啦啦</p>
                <p><span>青岛</span>&nbsp;&nbsp;&nbsp;&nbsp;<i>201万次浏览</i></p>
              </div>
              <div class="swiper-slide">
                <img src="../../../static/img/imgC/8.jpg"/>
                <p>全球最美游戏《纪念碑谷》，原来现实中啦啦啦啦啦</p>
                <p><span>青岛</span>&nbsp;&nbsp;&nbsp;&nbsp;<i>201万次浏览</i></p>
              </div>
              <div class="swiper-slide">
                <img src="../../../static/img/imgC/7.jpg"/>
                <p>全球最美游戏《纪念碑谷》，原来现实中啦啦啦啦啦</p>
                <p><span>青岛</span>&nbsp;&nbsp;&nbsp;&nbsp;<i>201万次浏览</i></p>
              </div>
              <div class="swiper-slide">
                <img src="../../../static/img/imgC/6.jpg"/>
                <p>全球最美游戏《纪念碑谷》，原来现实中啦啦啦啦啦</p>
                <p><span>青岛</span>&nbsp;&nbsp;&nbsp;&nbsp;<i>201万次浏览</i></p>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script type='text/ecmascript-6'>

  import "../../../node_modules/swiper/dist/css/swiper.min.css";
  import Swiper from "swiper";
  import $ from "../../../static/libs/jquery-3.2.1.min"

  export default {
    components:{

    },
    mounted:function(){
//推荐页面
      var swiperCommand1 = new Swiper ('.command .swiper-command1', {
        slidesPerView: 3.5,
        paginationClickable: true,
        spaceBetween: 20
      })

      var swiperCommand2 = new Swiper ('.command .swiper-command2', {
        slidesPerView: 1.98,
        paginationClickable: true,
        spaceBetween: 20
      })
      var swiperLv = new Swiper ('.travel .swiper-lv', {
        slidesPerView: 1.98,
        paginationClickable: true,
        spaceBetween: 20
      })
    },
    methods:{
      list:function(){
        location.href = '#/StrategyList_c'
      }
    }
  }

</script>

<style scoped>

  .command .season {
    width: 96%;
    margin-left: auto;
    padding-bottom: 0.1rem; }
  .command .season h2 {
    font-size: 0.2rem;
    line-height: 0.5rem; }
  .command .season .swiper-command1 {
    padding-bottom: 0.1rem; }
  .command .season .swiper-command1 .swiper-slide {
    display: flex;
    flex-direction: column; }
  .command .season .swiper-command1 .swiper-slide img {
    height: 1.3rem; }
  .command .season .swiper-command1 .swiper-slide span {
    font-size: 0.14rem;
    line-height: 0.25rem; }
  .command .season .swiper-command1 .swiper-slide i {
    font-size: 0.12rem;
    line-height: 0.25rem; }
  .command .season .swiper-command2 {
    padding-bottom: 0.2rem; }
  .command .season .swiper-command2 .swiper-slide {
    width: 1rem;
    display: flex;
    flex-direction: column; }
  .command .season .swiper-command2 .swiper-slide img {
    height: 1.1rem; }
  .command .season .swiper-command2 .swiper-slide p:nth-of-type(1) {
    font-size: 0.14rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 0.23rem; }
  .command .season .swiper-command2 .swiper-slide p:nth-of-type(2) span {
    font-size: 0.12rem;
    line-height: 0.2rem; }
  .command .season .swiper-command2 .swiper-slide p:nth-of-type(2) i {
    font-size: 0.12rem;
    line-height: 0.2rem; }
  .command .line {
    width: 100%;
    height: 0.01rem;
    border-bottom: 0.01rem solid #cccccc;
    transform: scaleY(0.3); }
  .command .travel {
    width: 96%;
    margin-left: auto;
    padding-bottom: 0.1rem; }
  .command .travel h2 {
    font-size: 0.2rem;
    line-height: 0.5rem; }
  .command .travel .swiper-lv {
    padding-bottom: 0.1rem; }
  .command .travel .swiper-lv .swiper-slide img {
    height: 1.1rem; }
  .command .travel .swiper-lv .swiper-slide p:nth-of-type(1) {
    font-size: 0.14rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 0.23rem; }
  .command .travel .swiper-lv .swiper-slide p:nth-of-type(2) span {
    font-size: 0.12rem;
    line-height: 0.2rem; }
  .command .travel .swiper-lv .swiper-slide p:nth-of-type(2) i {
    font-size: 0.12rem; }

</style>
