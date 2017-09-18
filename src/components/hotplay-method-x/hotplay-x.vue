<template>
  <div id="hot-play-method">
    <div class="hot-head">
      <div class="hot-head-wraper">
        <span class="iconfont icon-fanhui" style="font-size: .28rem;"></span>
        <div>
          <img src="../../../static/img/remenwanfa.png">
          <span>西安</span>
        </div>
        <span class="iconfont icon-fanhui" style="font-size: .28rem;display: none"></span>
      </div>
      <div class="thin-line-hot"></div>
    </div>
    <div class="hot-content">
      <div class="hot-content-wraper" v-for="(n,index) in lists">
        <div class="hot-place-title">
          <span>{{n.headline}}</span>
          <span>{{n.peoplenumber}}人体验过</span>
        </div>
        <div class="hot-play-buying-wraper">
          <div class="hot-play-buying" v-for="m in lists[index].content">
            <div class="on-sale-list">
              <div class="on-sale-pic">
                <img :src="m.picture">
                <div>{{m.whereStart}}</div>
                <div>{{m.oneOrMore}}</div>
              </div>
              <div class="on-sale-title">
                <div class="on-sale-dis">
                  <p>{{m.description}}</p>
                  <div>
                    <span>{{m.discountOne}}</span>
                    <span>{{m.discountTwo}}</span>
                    <span>{{m.discountThree}}</span>
                  </div>
                </div>
                <div class="on-sale-money">
                  <div>
                    <span>已售<i>{{m.saleNumber}}</i></span>
                    <span>{{m.evaluate}}分</span>
                  </div>
                  <span>
                  <i>￥{{m.price}}</i><b> 起/人</b>
              </span>
                </div>
              </div>
            </div>
            <div class="thin-line-hot"></div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>


<script type='text/ecmascript-6'>
  import "../../../static/libs/jquery"
  import $ from "../../../static/libs/jquery"
  import "../../../static/font-x/iconfont.css"
    export default {
      data : function(){
          return{
              lists : [],
              littleLists : []
        }
      },
      methods:{
        onScroll(){
          let scrolled = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
          console.log(scrolled);
        }
      },
      mounted : function(){
        $(window).scroll(function(){
//          $(".hot-place-title:eq(0)").addClass("headlineTop")
//          $(".hot-play-buying-wraper:eq(0)").addClass("contentTop")
          console.log($(".hot-place-title:eq(1)").position().top)
        })
        //window.addEventListener('scroll', this.onScroll);


        fetch("../../static/data/scenerySpot.json").then((resp)=>{
          resp.json().then((data)=>{
              console.log(data[0])
            this.lists = data;
            this.littleLists = data[0].content
            console.log(this.lists)
            console.log(data[0].content)
          })
        })



      }
    }
</script>

<style scoped>
  #hot-play-method {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    position: relative;
  }

  .headlineTop{
    position: fixed;
    top:.44rem;
    background: #fff;
    z-index: 111;
    width:100%;
  }
  .contentTop{
    position: absolute;
  }
  .hot-head {
    background: #fff;
    width: 100%;
    height: .44rem;
    position: fixed;
    z-index: 165456;
    top:0;
  }

  .hot-head-wraper {
    width: 96%;
    margin: 0 auto;
    height: 100%;
    display: flex;
    justify-content: space-between; }
  .hot-head-wraper div {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center; }
  .hot-head-wraper div span {
    position: absolute;
    left: 50%;
    transform: translateX(0.2rem);
    top: .12rem;
    color: #f0ad4e; }
  .hot-head-wraper img {
    height: 60%;
    width: 40%; }

  .hot-head-wraper > span {
    line-height: .44rem; }

  .hot-content{
    flex:1;
    top:.44rem;
    position: absolute;
    height:100%;
    width:100%;
  }
  .hot-content-wraper {
    width: 94%;
    margin: 0 auto; }

  .hot-place-title {
    height:.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between; }
  .hot-place-title span:nth-of-type(1) {
    line-height: .3rem;
    font-size: .18rem;
    font-weight: 900; }
  .hot-place-title span:nth-of-type(2) {
    line-height: .2rem;
    font-size: .12rem;
    color: #ccc; }

  .hot-play-buying {
    width: 94%; }
  .hot-play-buying img {
    width: 100%;
    height: 100%; }
  .hot-play-buying .on-sale-list {
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: .1rem 0; }
  .hot-play-buying .on-sale-list .on-sale-pic {
    width: 0.8rem;
    height: 0.8rem; }
  .hot-play-buying .on-sale-list .on-sale-pic div:nth-of-type(1) {
    position: absolute;
    background: #000;
    top: .1rem;
    left: 0;
    opacity: .8;
    color: #fff;
    font-size: .1rem;
    padding: 0 .05rem; }
  .hot-play-buying .on-sale-list .on-sale-pic div:nth-of-type(2) {
    position: absolute;
    background: #000;
    bottom: .2rem;
    left: 0;
    opacity: .8;
    color: #fff;
    font-size: .1rem;
    width: 0.8rem;
    text-align: center; }
  .hot-play-buying .on-sale-list .on-sale-title {
    flex: 1;
    padding-left: .1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between; }
  .hot-play-buying .on-sale-list .on-sale-title p {
    margin-bottom: .05rem;
    font-size: .13rem;
    width: 100%;
    height: .44rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: .22rem; }
  .hot-play-buying .on-sale-list .on-sale-title .on-sale-dis {
    display: flex;
    flex-direction: column; }
  .hot-play-buying .on-sale-list .on-sale-title .on-sale-dis div {
    display: flex;
    justify-content: flex-start; }
  .hot-play-buying .on-sale-list .on-sale-title .on-sale-dis div span {
    font-size: .1rem;
    border: 1px solid;
    margin-right: .05rem; }
  .hot-play-buying .on-sale-list .on-sale-title .on-sale-dis div span:nth-of-type(1) {
    background: purple;
    color: #fff;
    border-color: purple; }
  .hot-play-buying .on-sale-list .on-sale-title .on-sale-dis div span:nth-of-type(2) {
    color: #f0ad4e;
    border-color: #f0ad4e; }
  .hot-play-buying .on-sale-list .on-sale-title .on-sale-dis div span:nth-of-type(3) {
    color: #ccc;
    border-color: #ccc; }
  .hot-play-buying .on-sale-list .on-sale-title .on-sale-money {
    display: flex;
    justify-content: space-between; }
  .hot-play-buying .on-sale-list .on-sale-title .on-sale-money div {
    display: flex;
    justify-content: space-between;
    align-items: center; }
  .hot-play-buying .on-sale-list .on-sale-title .on-sale-money div span {
    font-size: .12rem;
    color: #ccc; }
  .hot-play-buying .on-sale-list .on-sale-title .on-sale-money div span:nth-of-type(1) {
    padding-right: .05rem;
    border-right: 1px solid #eee; }
  .hot-play-buying .on-sale-list .on-sale-title .on-sale-money div span:nth-of-type(1) i {
    font-size: .12rem; }
  .hot-play-buying .on-sale-list .on-sale-title .on-sale-money div span:nth-of-type(2) {
    padding-left: .05rem; }
  .hot-play-buying .on-sale-list .on-sale-title .on-sale-money > span i {
    color: #f0ad4e;
    font-size: .18rem; }
  .hot-play-buying .on-sale-list .on-sale-title .on-sale-money > span b {
    font-size: .12rem;
    color: #ccc; }

  .thin-line-hot {
    height: 0px;
    border-bottom: 1px solid #ccc;
    transform: scaleY(0.5);
    width: 100%; }

</style>
