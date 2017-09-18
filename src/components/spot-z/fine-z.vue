<template>
  <div class="on-sale-x">
    <div class="on-sale-wraper">
      <!--此处可以不用传值-->
      
      <!--正式的组件从这里开始-->
      <div v-for="n in longgege">
        <div class="on-sale-list">
          <div class="on-sale-pic">
            <!--左边图片-->
            <img :src="n.picture">
            <!--从哪出发-->
            <!--<div>{{n.whereStart}}</div>
            <!--几日游-->
            <!--<div>{{n.oneOrMore}}</div>-->
          </div>
          <div class="on-sale-title">
            <div class="on-sale-dis">
              <p>{{n.description}}</p>
              <div>
                <!--优惠活动-->
                <span>{{n.discountOne}}</span>
                <span>{{n.discountTwo}}</span>
               
              </div>
            </div>
            <div class="on-sale-money">
              <div>
                <!--销售数量以及评价-->
                <span>已售<i>{{n.saleNumber}}</i></span>
                <span>{{n.evaluate}}分</span>
              </div>
              <span>
              <!--价格-->
                  <i>￥{{n.price}}</i><b> 起/人</b>
              </span>
            </div>
          </div>
        </div>
        <!--此处添加的细线不需要可删除-->
        <div class="thin-line-slight"></div>
      </div>

    </div>
  </div>
</template>


<script type='text/ecmascript-6'>
    export default {
        data:function (){
            return {
              title : "正在热卖",
              longgege : [
                {
                  whereStart : "西安出发",
                  oneOrMore : "一日游",
                  picture : "../../../static/img/search1.jpeg",
                  description : "可订长恨歌 兵马俑+秦岭+华清宫+兵谏亭纯玩一日游(特惠活动 降价不降品质 赠自助午餐+双耳麦+接机)",
                  discountOne :"第二人减十元",
                  discountTwo : "可订明日",
                  discountThree : "金牌导游服务",
                  saleNumber : "7398",
                  evaluate : "9.8",
                  price : "28"
                },
                {
                  whereStart : "西安出发",
                  oneOrMore : "一日游",
                  picture : "../../../static/img/search2.jpeg",
                  description : "兵马俑+华清宫+骊山兵谏亭高品纯玩一日游(精品小团，专车专导，不换乘，赠耳麦，特色手工皮影)",
                  discountOne :"可订今日",
                  discountTwo : "赠特色手工皮影",
                  discountThree : "赠双景区耳麦使用",
                  saleNumber : "1351",
                  evaluate : "9.9",
                  price : "123"
                },
                {
                  whereStart : "西安出发",
                  oneOrMore : "一日游",
                  picture : "../../../static/img/search3.jpeg",
                  description : "兵马俑+华清宫+骊山兵谏亭高品纯玩一日游(精品小团，专车专导，不换乘，赠耳麦，特色手工皮影)",
                  discountOne :"可订今日",
                  discountTwo : "赠特色手工皮影",
                  discountThree : "赠双景区耳麦使用",
                  saleNumber : "1351",
                  evaluate : "9.9",
                  price : "123"
                },
                {
                  whereStart : "西安出发",
                  oneOrMore : "一日游",
                  picture : "../../../static/img/search4.jpeg",
                  description : "兵马俑+华清宫+骊山兵谏亭高品纯玩一日游(精品小团，专车专导，不换乘，赠耳麦，特色手工皮影)",
                  discountOne :"可订今日",
                  discountTwo : "赠特色手工皮影",
                  discountThree : "赠双景区耳麦使用",
                  saleNumber : "1351",
                  evaluate : "9.9",
                  price : "123"
                },
                {
                  whereStart : "西安出发",
                  oneOrMore : "一日游",
                  picture : "../../../static/img/search5.jpeg",
                  description : "兵马俑+华清宫+骊山兵谏亭高品纯玩一日游(精品小团，专车专导，不换乘，赠耳麦，特色手工皮影)",
                  discountOne :"可订今日",
                  discountTwo : "赠特色手工皮影",
                  discountThree : "赠双景区耳麦使用",
                  saleNumber : "1351",
                  evaluate : "9.9",
                  price : "123"
                },
                {
                  whereStart : "西安出发",
                  oneOrMore : "一日游",
                  picture : "../../../static/img/search6.jpeg",
                  description : "兵马俑+华清宫+骊山兵谏亭高品纯玩一日游(精品小团，专车专导，不换乘，赠耳麦，特色手工皮影)",
                  discountOne :"可订今日",
                  discountTwo : "赠特色手工皮影",
                  discountThree : "赠双景区耳麦使用",
                  saleNumber : "1351",
                  evaluate : "9.9",
                  price : "123"
                }
              ]
            }
        }
    }
</script>

<style scoped>
  html {
    font-size: 26.67vw; }

  i, b, strong, e {
    font-style: normal;
    font-weight: normal; }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: .14rem; }

  ul, li, dl, dd, dt {
    list-style: none; }

  a {
    color: #000;
    text-decoration: none; }

  html, body {
    height: 100%;
    width: 100%; }
  h3 {
    line-height: .4rem;
    font-size: .16rem;
    font-weight: normal; }

  .hot-play-method, .on-sale-x {
    display: flex;
    justify-content: center;
    width: 100%; }

  .on-sale-wraper {
    width: 94%; height:1.75rem;}
  .on-sale-wraper img {
    width: 100%;
    height: 100%; }
  .on-sale-wraper .on-sale-list {
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: .1rem 0; }
  .on-sale-wraper .on-sale-list .on-sale-pic {
    width: .8rem;
    height: .8rem; }
  .on-sale-wraper .on-sale-list .on-sale-pic div:nth-of-type(1) {
    position: absolute;
    background: #000;
    top: .1rem;
    left: 0;
    opacity: .8;
    color: #fff;
    font-size: .1rem;
    padding: 0 .05rem; }
  .on-sale-wraper .on-sale-list .on-sale-pic div:nth-of-type(2) {
    position: absolute;
    background: #000;
    bottom: .2rem;
    left: 0;
    opacity: .8;
    color: #fff;
    font-size: .1rem;
    width: .8rem;
    text-align: center; }
  .on-sale-wraper .on-sale-list .on-sale-title {
    flex: 1;
    padding-left: .1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between; }
  .on-sale-wraper .on-sale-list .on-sale-title p {
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
  .on-sale-wraper .on-sale-list .on-sale-title .on-sale-dis {
    display: flex;
    flex-direction: column; }
  .on-sale-wraper .on-sale-list .on-sale-title .on-sale-dis div {
    display: flex;
    justify-content: flex-start; }
  .on-sale-wraper .on-sale-list .on-sale-title .on-sale-dis div span {
    font-size: .1rem;
    border: 1px solid;
    margin-right: .05rem; }
  .on-sale-wraper .on-sale-list .on-sale-title .on-sale-dis div span:nth-of-type(1) {
    background: purple;
    color: #fff;
    border-color: purple; 
    display:none;}
  .on-sale-wraper .on-sale-list .on-sale-title .on-sale-dis div span:nth-of-type(2) {
    color: aquamarine;
    border-color: aquamarine; }
  .on-sale-wraper .on-sale-list .on-sale-title .on-sale-dis div span:nth-of-type(3) {
    color: #ccc;
    border-color: #ccc; }
  .on-sale-wraper .on-sale-list .on-sale-title .on-sale-money {
    display: flex;
    justify-content: space-between; }
  .on-sale-wraper .on-sale-list .on-sale-title .on-sale-money div {
    display: flex;
    justify-content: space-between;
    align-items: center; }
  .on-sale-wraper .on-sale-list .on-sale-title .on-sale-money div span {
    font-size: .12rem;
    color: #ccc; }
  .on-sale-wraper .on-sale-list .on-sale-title .on-sale-money div span:nth-of-type(1) {
    padding-right: .05rem;
    border-right: 1px solid #eee; }
  .on-sale-wraper .on-sale-list .on-sale-title .on-sale-money div span:nth-of-type(1) i {
    font-size: .12rem; }
  .on-sale-wraper .on-sale-list .on-sale-title .on-sale-money div span:nth-of-type(2) {
    padding-left: .05rem; }
  .on-sale-wraper .on-sale-list .on-sale-title .on-sale-money > span i {
    color: #f0ad4e;
    font-size: .18rem; }
  .on-sale-wraper .on-sale-list .on-sale-title .on-sale-money > span b {
    font-size: .12rem;
    color: #ccc; }
  .on-sale-wraper .look-for-more {
    display: flex;
    justify-content: center;
    align-items: center;
    height: .32rem; }


  .thin-line-slight {
    height: 0;
    width: 100%;
    border-bottom: 1px solid #eee;
    transform: scaleY(0.5); }
</style>
