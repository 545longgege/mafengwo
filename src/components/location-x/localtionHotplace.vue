<template>
  <div class="hot-play-method">
    <div class="hot-play-wraper">
      <!--此处的值可以不用传-->
      <h3>{{title}}</h3>
      <div class="sight-spot" v-for = "n in longgege">
        <div class="sight-photo">
          <img :src="n.picture">
          <div class="shadow"></div>
          <p class="photo-dis">
            <span>{{n.headline}}</span>
            <span>{{n.peoplenumber}}人体验过</span>
          </p>
        </div>
        <div v-for = "m in longdidi" @click="reneb">
          <div class="sight-spot-title">
            <div class="sight-spot-dis">
              <p>{{m.description}}</p>
              <div>
                <span v-bgcolor="m.backgroundColorOne" v-fcolor="m.fontColorOne" v-bcolor="m.borderColorOne">{{m.discountOne}}</span>
                <span v-bgcolor="m.backgroundColorTwo" v-fcolor="m.fontColorTwo" v-bcolor="m.borderColorTwo">{{m.discountTwo}}</span>
                <span v-bgcolor="m.backgroundColorThree" v-fcolor="m.fontColorThree" v-bcolor="m.borderColorThree">{{m.discountThree}}</span>
              </div>
            </div>
            <div class="sight-spot-money">
              <div>
                <span>
                  <i>￥{{m.price}}</i><b> 起/人</b>
                </span>
                <span>已售<i>{{m.saleNumber}}</i></span>
              </div>
              <span class="iconfont icon-yousanjiao-copy-copy-copy"></span>
            </div>
          </div>
          <div class="thin-line-slight"></div>
        </div>
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
      data : function(){
        return {
            title : "热门玩法",
            longgege : [
              {
                picture : "../../../static/img/2-x.jpeg",
                headline : "世界第八大奇迹·看兵马俑风气云涌",
                peoplenumber : "29599"
              },
              {
                picture : "../../../static/img/2-x.jpeg",
                headline : "世界第八大奇迹·看兵马俑风气云涌",
                peoplenumber : "29599"
              },
              {
                picture : "../../../static/img/2-x.jpeg",
                headline : "世界第八大奇迹·看兵马俑风气云涌",
                peoplenumber : "29599"
              }
            ],
          longdidi : [
            {
              description : "可订长恨歌 兵马俑+秦岭+华清宫+兵谏亭纯玩一日游(特惠活动 降价不降品质 赠自助午餐+双耳麦+接机)",
              discountOne :"第二人减十元",
              discountTwo : "可订明日",
              discountThree : "金牌导游服务",
              saleNumber : "7398",
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
              description : "可订长恨歌 兵马俑+秦岭+华清宫+兵谏亭纯玩一日游(特惠活动 降价不降品质 赠自助午餐+双耳麦+接机)",
              discountOne :"第二人减十元",
              discountTwo : "可订明日",
              discountThree : "金牌导游服务",
              saleNumber : "7398",
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
              description : "可订长恨歌 兵马俑+秦岭+华清宫+兵谏亭纯玩一日游(特惠活动 降价不降品质 赠自助午餐+双耳麦+接机)",
              discountOne :"第二人减十元",
              discountTwo : "可订明日",
              discountThree : "金牌导游服务",
              saleNumber : "7398",
              price : "258",
              backgroundColorOne : "purple",
              fontColorOne : "#fff",
              borderColorOne : "purple",
              fontColorTwo : "#f0ad4e",
              borderColorTwo : "#f0ad4e",
              fontColorThree : "#ccc",
              borderColorThree : "#ccc"
            }
          ]
        }
      },
      methods : {
          initData : function(){
              fetch("../../../static/data/scenerySpot.json").then((resp) => {
                  resp.json().then((data)=>{
                      console.log(data[0].content[0].description)
                  })
              })
          },
			reneb : function(){
				location.href="#/Hotplaymethod_x"
			}
      },
      created :function(){
          this.initData();
      }
    }
</script>

<style scoped>
  .hot-play-wraper {
    width: 94%; }
  .hot-play-wraper .sight-spot {
    padding: .1rem 0; }
  .hot-play-wraper img {
    height: 1rem;
    width: 100%;
    display: block; }
  .hot-play-wraper .sight-photo {
    position: relative; }
  .hot-play-wraper .sight-photo .photo-dis {
    position: absolute;
    left: 50%;
    z-index: 4651213;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-around; }
  .hot-play-wraper .sight-photo .photo-dis span {
    line-height: .3rem;
    text-align: center;
    color: #fff; }
  .hot-play-wraper .sight-photo .photo-dis span:nth-of-type(2) {
    font-size: .12rem; }
  .hot-play-wraper .sight-photo .shadow {
    position: absolute;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 15;
    top: 0;
    left: 0; }
  .hot-play-wraper .sight-spot-title {
    display: flex;
    justify-content: space-between;
    padding: .1rem 0; }
  .hot-play-wraper .sight-spot-title .sight-spot-dis {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 70%; }
  .hot-play-wraper .sight-spot-title .sight-spot-dis p {
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
  .hot-play-wraper .sight-spot-title .sight-spot-dis div {
    display: flex;
    width: 100%;
    justify-content: space-between; }
  .hot-play-wraper .sight-spot-title .sight-spot-dis div span {
    font-size: .1rem;
    color: #666;
    border: 1px solid #666; }
  .hot-play-wraper .sight-spot-title .sight-spot-dis div span:nth-of-type(1) {
    color: #ffa800;
    border-color: #ffa800; }
  .hot-play-wraper .sight-spot-title .sight-spot-money {
    width: 28%;
    display: flex;
    justify-content: space-between; }
  .hot-play-wraper .sight-spot-title .sight-spot-money div {
    display: flex;
    flex-direction: column;
    justify-content: space-between; }
  .hot-play-wraper .sight-spot-title .sight-spot-money div span:nth-of-type(1) i {
    color: #ffa800;
    font-size: .16rem; }
  .hot-play-wraper .sight-spot-title .sight-spot-money div span:nth-of-type(1) b {
    font-size: .1rem;
    color: #ccc; }
  .hot-play-wraper .sight-spot-title .sight-spot-money div span:nth-of-type(2) {
    display: flex;
    justify-content: flex-end;
    color: #666;
    font-size: .1rem; }
  .hot-play-wraper .sight-spot-title .sight-spot-money div span:nth-of-type(2) i {
    font-size: .1rem; }
  .hot-play-wraper .sight-spot-title .sight-spot-money .iconfont {
    display: flex;
    flex-direction: column;
    justify-content: center; }
</style>
