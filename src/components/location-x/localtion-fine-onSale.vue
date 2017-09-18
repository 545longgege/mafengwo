<template>
  <div class="on-sale-x">
    <div class="on-sale-wraper">
      <!--此处可以不用传值-->
      <h3>{{title}}</h3>
      <!--正式的组件从这里开始-->
      <div v-for="n in longgege">
        <div class="on-sale-list">
          <div class="on-sale-pic">
            <!--左边图片-->
            <img :src="n.picture">
            <!--从哪出发-->
            <div>{{n.whereStart}}</div>
            <!--几日游-->
            <div>{{n.oneOrMore}}</div>
          </div>
          <div class="on-sale-title">
            <div class="on-sale-dis">
              <p>{{n.description}}</p>
              <div>
                <!--优惠活动-->
                <span v-bgcolor="n.backgroundColorOne" v-fcolor="n.fontColorOne" v-bcolor="n.borderColorOne">{{n.discountOne}}</span>
                <span v-bgcolor="n.backgroundColorTwo" v-fcolor="n.fontColorTwo" v-bcolor="n.borderColorTwo">{{n.discountTwo}}</span>
                <span v-bgcolor="n.backgroundColorThree" v-fcolor="n.fontColorThree" v-bcolor="n.borderColorThree">{{n.discountThree}}</span>
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
      <div class="look-for-more">
        <span>查看更多产品</span>
      </div>
    </div>
  </div>
</template>


<script type='text/ecmascript-6'>
  import "../../../static/font-x/iconfont.css"
    export default {
      directives:{
        bgcolor : function(el,binding){
          el.style.background = binding.value;
        },
        fcolor : function(el,binding){
            el.style.color = binding.value
        },
        bcolor : function(el,binding){
          el.style.borderColor = binding.value;
        }
      },
        data:function (){
            return {
              title : "正在热卖",
              longgege : [
                {
                  whereStart : "西安出发",
                  oneOrMore : "一日游",
                  picture : "../../../static/img/2-x.jpeg",
                  description : "可订长恨歌 兵马俑+秦岭+华清宫+兵谏亭纯玩一日游(特惠活动 降价不降品质 赠自助午餐+双耳麦+接机)",
                  discountOne :"第二人减十元",
                  discountTwo : "可订明日",
                  discountThree : "金牌导游服务",
                  saleNumber : "7398",
                  evaluate : "9.8",
                  price : "258",
                  backgroundColorOne : "purple",
                  fontColorOne : "#fff",
                  borderColorOne : "purple",
                  fontColorTwo : "#f0ad4e",
                  borderColorTwo : "#f0ad4e",
                  fontColorThree : "#ccc",
                  borderColorThree : "#ccc"
                },
                {
                  whereStart : "西安出发",
                  oneOrMore : "一日游",
                  picture : "../../../static/img/2-x.png",
                  description : "兵马俑+华清宫+骊山兵谏亭高品纯玩一日游(精品小团，专车专导，不换乘，赠耳麦，特色手工皮影)",
                  discountOne :"可订今日",
                  discountTwo : "赠特色手工皮影",
                  discountThree : "赠双景区耳麦使用",
                  saleNumber : "1351",
                  evaluate : "9.9",
                  price : "248",
                  fontColorOne : "green",
                  borderColorOne : "green",
                  fontColorTwo : "#ccc",
                  borderColorTwo : "#ccc",
                  fontColorThree : "#ccc",
                  borderColorThree : "#ccc"
                },
                {
                  whereStart : "西安出发",
                  oneOrMore : "一日游",
                  picture : "../../../static/img/8-x.jpeg",
                  description : "毕业学子兵马俑+华清宫纯玩一日游(升级长恨歌/赠接机/自助餐/双耳麦/赠送夏日清凉特饮)",
                  discountOne :"第三人减十元",
                  discountTwo : "可订明日",
                  discountThree : "高品质精致团",
                  saleNumber : "9347",
                  evaluate : "9.8",
                  price : "226",
                  backgroundColorOne : "purple",
                  fontColorOne : "#fff",
                  borderColorOne : "purple",
                  fontColorTwo : "#f0ad4e",
                  borderColorTwo : "#f0ad4e",
                  fontColorThree : "#ccc",
                  borderColorThree : "#ccc"
                },
                {
                  whereStart : "西安",
                  oneOrMore : "景点门票",
                  picture : "../../../static/img/11-x.jpeg",
                  description : "西安秦始皇陵兵马俑/秦陵地宫电子票(立减3元 急速入园)",
                  discountOne :"限时立减3",
                  discountTwo : "可订今日",
                  discountThree : "八大奇迹之一",
                  saleNumber : "462",
                  evaluate : "10.0",
                  price : "150",
                  backgroundColorOne : "#4a86e8",
                  fontColorOne : "#fff",
                  borderColorOne : "#4a86e8",
                  fontColorTwo : "#00ff00",
                  borderColorTwo : "#00ff00",
                  fontColorThree : "#ccc",
                  borderColorThree : "#ccc"
                },
                {
                  whereStart : "西安出发",
                  oneOrMore : "一日游",
                  picture : "../../../static/img/4-x.jpeg",
                  description : "独创华山一日纯玩深度游(不等待直接上山+导游陪同上山拍醉美照+特色凉皮+清凉饮品)",
                  discountOne :"可订明日",
                  discountTwo : "三环内酒店免费接",
                  discountThree : "不拼车返程",
                  saleNumber : "4028",
                  evaluate : "9.7",
                  price : "416",
                  fontColorOne : "#f0ad4e",
                  borderColorOne : "#f0ad4e",
                  fontColorTwo : "#ccc",
                  borderColorTwo : "#ccc",
                  fontColorThree : "#ccc",
                  borderColorThree : "#ccc"
                }
              ]
            }
        }
    }
</script>

<style scoped>

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
