<template>
  <div id="traval-note-x">
    <div class="note-head-x">
      <span class="iconfont icon-fanhui"></span>
      <span>西安游记</span>
      <span class="iconfont icon-sousuo_sousuo"></span>
    </div>
    <div class="note-body-x">
      <div class="note-body-wrap">
        <div class="note-body-t">
          <img src="../../../static/img/41-x.jpeg">
          <h2>·去西安，瞅瞅『饿』们穷游的吃货志。</h2>
          <span>好马维斯走天下</span>
          <span>什么是宝藏？</span>
        </div>

      </div>
      <div class="grey-line-note"></div>
      <div class="swiper-container swiper4-x">
        <div class="swiper-wrapper">
          <div class="swiper-slide">最新发表</div>
          <div class="swiper-slide">爬华山</div>
          <div class="swiper-slide">吃在西安</div>
          <div class="swiper-slide">自驾</div>
        </div>
      </div>
      <div class="note-body-b">
        <div class="note-b-info">
          <div class="note-dis">
            <h2>·西安 | 古都悠悠</h2>
            <span>
            <img src="../../../static/img/37-x.jpeg">
            <span>bogi 在</span>
            <span>西安</span>
          </span>
          </div>
          <div class="note-pic">
            <img src="../../../static/img/13-x.jpeg" alt="">
          </div>
        </div>
        <div class="thin-line-note"></div>
      </div>
      <div class="note-body-b">
        <div class="note-b-info">
          <div class="note-dis">
            <h2>西安小众的文艺怀旧景点</h2>
            <span>
            <img src="../../../static/img/39-x.jpeg">
            <span>白月 在</span>
            <span>西安</span>
          </span>
          </div>
          <div class="note-pic">
            <img src="../../../static/img/29-x.jpeg" alt="">
          </div>
        </div>
        <div class="thin-line-note"></div>
      </div>
      <div class="note-body-b">
        <div class="note-b-info">
          <div class="note-dis">
            <h2>·补上历史课，西安5天5晚半自助游</h2>
            <span>
            <img src="../../../static/img/38-x.jpeg">
            <span>小妮子 在</span>
            <span>西安</span>
          </span>
          </div>
          <div class="note-pic">
            <img src="../../../static/img/30-x.jpeg" alt="">
          </div>
        </div>
        <div class="thin-line-note"></div>
      </div>
      <div class="note-body-b">
        <div class="note-b-info">
          <div class="note-dis">
            <h2>·两个寿星 逛吃逛吃之旅---西安</h2>
            <span>
            <img src="../../../static/img/32-x.jpeg">
            <span>小梦梦 在</span>
            <span>西安</span>
          </span>
          </div>
          <div class="note-pic">
            <img src="../../../static/img/42-x.jpeg" alt="">
          </div>
        </div>
        <div class="thin-line-note"></div>
      </div>
      <div class="note-body-b">
        <div class="note-b-info">
          <div class="note-dis">
            <h2>你带着娃，我带着汉服，一路向西寻梦千年</h2>
            <span>
            <img src="../../../static/img/34-x.jpeg">
            <span>小猫娘 在</span>
            <span>西安</span>
          </span>
          </div>
          <div class="note-pic">
            <img src="../../../static/img/25-x.jpeg" alt="">
          </div>
        </div>
        <div class="thin-line-note"></div>
      </div>
    </div>
  </div>
</template>


<script type='text/ecmascript-6'>
  import "../../../static/font/iconfont.css"
  import "../../../static/libs/swiper.min.css"
  import "../../../static/libs/swiper.min"
  import Swiper from "swiper"
  import "../../../static/font/iconfont.css"
    export default {
      mounted : function(){
        var swiper = new Swiper('.swiper4-x', {
          slidesPerView: 2.1,
          paginationClickable: true,
          spaceBetween: 10,
          freeMode: true
        });
      }
    }
</script>

<style scoped>
  #traval-note-x {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
    width: 100%; }

  .note-head-x {
    display: flex;
    justify-content: space-between;
    width: 94%;
    margin: 0 auto;
    height: .44rem; }
  .note-head-x span {
    font-size: .16rem;
    line-height: .44rem; }
  .note-head-x .iconfont {
    font-size: .26rem;
    color: #f0ad4e; }

  .note-body-x {
    flex: 1;
    overflow: auto;
    height: 100%;
    width: 100%; }

  .note-body-wrap .note-body-t {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 94%;
    margin: 0 auto; }
  .note-body-wrap .note-body-t img {
    height: 1.3rem;
    width: 100%; }
  .note-body-wrap .note-body-t h2 {
    font-size: .18rem; }
  .note-body-wrap .note-body-t span:nth-of-type(1) {
    font-size: .12rem;
    color: #ccc; }
  .note-body-wrap .note-body-t span:nth-of-type(2) {
    font-size: .12rem;
    color: #ccc;
    text-align: right;
    line-height: .3rem; }

  .swiper4-x {
    padding: .2rem 0; }
  .swiper4-x .swiper-slide {
    height: 1rem;
    color: #FFF;
    line-height: 1rem;
    text-align: center;
    font-size: .18rem; }
  .swiper4-x .swiper-slide:nth-of-type(1) {
    background: #0086b3; }
  .swiper4-x .swiper-slide:nth-of-type(2) {
    background: darkolivegreen; }
  .swiper4-x .swiper-slide:nth-of-type(3) {
    background: crimson; }
  .swiper4-x .swiper-slide:nth-of-type(4) {
    background: blue; }

  /*游记内容*/
  .note-body-b {
    width: 94%;
    margin: 0 auto; }

  .note-b-info {
    padding: .1rem 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 1.2rem; }
  .note-b-info h2 {
    font-size: .16rem; }
  .note-b-info .note-dis {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%; }
  .note-b-info .note-dis img {
    height: .2rem;
    width: .2rem;
    border-radius: 50%; }
  .note-b-info .note-dis > span {
    display: flex;
    font-size: .12rem;
    color: #CCC; }
  .note-b-info .note-dis > span span {
    line-height: .2rem; }
  .note-b-info .note-dis > span span:nth-of-type(1) {
    margin-left: .05rem; }
  .note-b-info .note-dis > span span:nth-of-type(2) {
    color: #f0ad4e; }
  .note-b-info .note-pic {
    width: 50%;
    height: 100%; }
  .note-b-info .note-pic img {
    width: 100%;
    height: 100%; }

  .grey-line-note {
    height: .1rem;
    background: #ccc;
    width: 100%; }

  .thin-line-note {
    height: 0;
    width: 100%;
    border-bottom: 1px solid #eee;
    transform: scaleY(0.5); }
</style>
