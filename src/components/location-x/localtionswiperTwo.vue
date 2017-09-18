<template>
  <div class="swiper-container swiper-two">
    <ul class="swiper-wrapper">
      <li class="swiper-slide">
        <span class="iconfont icon-yiriyou1"></span>
        <span>一日游</span>
      </li>
      <li class="swiper-slide">
        <span class="iconfont icon-duoriyou"></span>
        <span>多日游</span>
      </li>
      <li class="swiper-slide">
        <span class="iconfont icon-shenduyou"></span>
        <span>当地定制</span>
        <span class="iconfont icon-xin"></span>
      </li>
      <li class="swiper-slide">
        <span class="iconfont icon-jingdianmenpiao"></span>
        <span>景点门票</span>
      </li>
      <li class="swiper-slide">
        <span class="iconfont icon-jingjiutaocan"></span>
        <span>酒店套餐</span>
      </li>
      <li class="swiper-slide">
        <span class="iconfont icon-yanchuzhanlan"></span>
        <span>演出展览</span>
      </li>
      <li class="swiper-slide">
        <span class="iconfont icon-huangguan"></span>
        <span>体验</span>
      </li>
      <li class="swiper-slide" @click="tiaoxfpc">
        <span class="iconfont icon-pinche"></span>
        <span>包拼车</span>
      </li>
      <li class="swiper-slide">
        <span class="iconfont icon-jiejifuwu"></span>
        <span>接送机</span>
      </li>
    </ul>
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
          var swiperTwo = new Swiper(".swiper-two",{
            slidesPerView: 4.5,
            spaceBetween: 20,
            freeMode: true
          })
        },
		methods : {
			tiaoxfpc : function(){
				location.href = '#/LocalCar_g'
			}
		}
    }
</script>

<style scoped>
  .swiper-two {
    height: 1rem;
    padding: .15rem; }
  .swiper-two li {
    width: 24%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; }
  .swiper-two li span:nth-of-type(1) {
    height: .4rem;
    width: .4rem;
    border-radius: 50%;
    text-align: center;
    line-height: .4rem;
    font-size: .2rem; }
  .swiper-two li span:nth-of-type(2) {
    line-height: .26rem; }
  .swiper-two li:nth-of-type(1) span:nth-of-type(1) {
    border: 1px solid green;
    color: green; }
  .swiper-two li:nth-of-type(2) span:nth-of-type(1) {
    border: 1px solid blue;
    color: blue; }
  .swiper-two li:nth-of-type(3) span:nth-of-type(1) {
    border: 1px solid green;
    color: green; }
  .swiper-two li:nth-of-type(3) .icon-xin {
    position: absolute;
    top: 0;
    right: .1rem;
    color: red; }
  .swiper-two li:nth-of-type(4) span:nth-of-type(1) {
    border: 1px solid coral;
    color: coral; }
  .swiper-two li:nth-of-type(5) span:nth-of-type(1) {
    border: 1px solid blue;
    color: blue; }
  .swiper-two li:nth-of-type(6) span:nth-of-type(1) {
    border: 1px solid darkmagenta;
    color: darkmagenta; }
  .swiper-two li:nth-of-type(7) span:nth-of-type(1) {
    border: 1px solid #ffa800;
    color: #ffa800; }
  .swiper-two li:nth-of-type(8) span:nth-of-type(1) {
    border: 1px solid green;
    color: green; }
  .swiper-two li:nth-of-type(9) span:nth-of-type(1) {
    border: 1px solid rebeccapurple;
    color: rebeccapurple; }
</style>
