<template>
  <div class="box1">
      <nav>
        <div class="swiper-container" id="swiper-container1">
          <div class="swiper-wrapper" >
            <div class="swiper-slide">全部</div>
            <div class="swiper-slide">故宫·长城</div>
            <div class="swiper-slide">景点门票</div>
            <div class="swiper-slide">人气一日游</div>
            <div class="swiper-slide">北京周边推荐</div>
            <div class="swiper-slide">故宫·长城</div>
            <div class="swiper-slide">景点门票</div>
            <div class="swiper-slide">北京周边推荐</div>
            <div class="swiper-slide">故宫·长城</div>
            <div class="swiper-slide">景点门票</div>
            <div class="swiper-slide">丽江古城</div>
            <div class="swiper-slide">香格里拉</div>
          </div>
        </div>
      </nav>

      <section>
        <div class="swiper-container" id="swiper-container2">
          <div class="swiper-wrapper">
            <div class="swiper-slide swiper-no-swiping">
              <ul>

                <topspeed-res-photo :textP="n.text" :isrc="n.src" :price="n.price" :num="n.num" v-for="n in lists"></topspeed-res-photo>
.

              </ul>
            </div>
            <div class="swiper-slide swiper-no-swiping">
              <ul>
                <topspeed-res-photo :textP="n.text" :isrc="n.src" :price="n.price" :num="n.num" v-for="n in lists1"></topspeed-res-photo>
              </ul>
            </div>
            <div class="swiper-slide swiper-no-swiping">
              <ul>
                <topspeed-res-photo :textP="n.text" :isrc="n.src" :price="n.price" :num="n.num" v-for="n in lists2"></topspeed-res-photo>

              </ul>
            </div>
            <div class="swiper-slide swiper-no-swiping">
              <ul>
                <topspeed-res-photo :textP="n.text" :isrc="n.src" :price="n.price" :num="n.num" v-for="n in lists3"></topspeed-res-photo>

              </ul>
            </div>

            <div class="swiper-slide swiper-no-swiping">
              <ul>
                <topspeed-res-photo :textP="n.text" :isrc="n.src" :price="n.price" :num="n.num" v-for="n in lists2"></topspeed-res-photo>

              </ul>
            </div>
            <div class="swiper-slide swiper-no-swiping">
              <ul>
                <topspeed-res-photo :textP="n.text" :isrc="n.src" :price="n.price" :num="n.num" v-for="n in lists1"></topspeed-res-photo>

              </ul>
            </div>
            <div class="swiper-slide swiper-no-swiping">
              <ul>
                <topspeed-res-photo :textP="n.text" :isrc="n.src" :price="n.price" :num="n.num" v-for="n in lists"></topspeed-res-photo>

              </ul>
            </div>
            <div class="swiper-slide swiper-no-swiping">
              <ul>
                <topspeed-res-photo :textP="n.text" :isrc="n.src" :price="n.price" :num="n.num" v-for="n in lists2"></topspeed-res-photo>

              </ul>
            </div>
            <div class="swiper-slide swiper-no-swiping">
              <ul>
                <topspeed-res-photo :textP="n.text" :isrc="n.src" :price="n.price" :num="n.num" v-for="n in lists1"></topspeed-res-photo>

              </ul>
            </div>
            <div class="swiper-slide swiper-no-swiping">
              <ul>
                <topspeed-res-photo :textP="n.text" :isrc="n.src" :price="n.price" :num="n.num" v-for="n in lists3"></topspeed-res-photo>

              </ul>
            </div>
            <div class="swiper-slide swiper-no-swiping">
              <ul>
                <topspeed-res-photo :textP="n.text" :isrc="n.src" :price="n.price" :num="n.num" v-for="n in lists2"></topspeed-res-photo>

              </ul>
            </div>
            <div class="swiper-slide swiper-no-swiping">
              <ul>
                <topspeed-res-photo :textP="n.text" :isrc="n.src" :price="n.price" :num="n.num" v-for="n in lists1"></topspeed-res-photo>

              </ul>
            </div>


          </div>
        </div>

      </section>
  </div>

</template>


<script type='text/ecmascript-6'>
  import "../../../node_modules/swiper/dist/css/swiper.css";
  import  "../../../node_modules/swiper/dist/js/swiper.js";
  import $ from "../../../static/libs/jquery-1.11.1.js";
  import  Swiper from "swiper";
  import "../../../node_modules/vue/dist/vue.js";
  import TopspeedResPhoto from"./topspeedRes_bodyphoto.vue";

    export default {
        data:function(){
            return{
              lists:[

              ],
              list1:[

              ],
              list2:[

              ],
            }
        },
      methods:{
            initYudData:function() {
//              fetch("../../../static/libs/data/yuding.json") .then((resp)=>{
//                  resp.json().then((data)=>{
//                  this.lists=data;
//                })
//              })
//            }
              fetch("../../../static/libs/data/yuding.json").then((resp) => {
                resp.json().then((data) => {
//                  data.length=6;
                  this.lists = data.slice(0,8);
                  this.lists1 = data.slice(2,10);
                  this.lists2 = data.slice(4,11);
                  this.lists3 = data.slice(5,12);


                })
              })
            }
      },
        components:{
          TopspeedResPhoto
        },
      created:function(){
            this.initYudData();

      },
        mounted:function (){
          var Swiper1 = new Swiper('#swiper-container1', {
            slidesPerView : 4,
            initialSlide :3,
            centeredSlides : true,
            slideToClickedSlide:true,
            resistance : false,
            watchSlidesProgress : true,
            watchSlidesVisibility : true,
            resistanceRatio : 0
          });

          var Swiper2 = new Swiper('#swiper-container2',{
            noSwiping : true,
//            initialSlide :,
          });
//          Swiper1.params.control = Swiper2;

          $("#swiper-container1 .swiper-slide").on("click",function(){
            $("#swiper-container1 .swiper-slide").eq(Swiper1.clickedIndex).css("background","red").siblings().css("background","#1a1a1a");
            $("#swiper-container2 .swiper-slide ").eq(Swiper1.clickedIndex).fadeIn(150).siblings().hide();


            console.log(Swiper1.params.slidesOffsetBefore);
            console.log(Swiper1.params.initialSlide);
            if(Swiper1.realIndex==0){
//            Swiper1.params.initialSlide=1;
//            wiper1.params.slidesOffsetBefore=-200;
//            centeredSlides : false;
//            console.log(Swiper1.clickedIndex.style.left);
              console.log(Swiper1.translate);
              Swiper1.setWrapperTranslate(0);
            }
            if(Swiper1.realIndex==1){
//            Swiper1.params.initialSlide=1;
//            wiper1.params.slidesOffsetBefore=-200;
//            centeredSlides : false;
//            console.log(Swiper1.clickedIndex.style.left);
              Swiper1.setWrapperTranslate(0);
            }
//        if(Swiper1.realIndex==9){
////            Swiper1.params.initialSlide=1;
////            wiper1.params.slidesOffsetBefore=-200;
////            centeredSlides : false;
////            console.log(Swiper1.clickedIndex.style.left);
//            Swiper1.setWrapperTranslate(0);
//        }
            if(Swiper1.clickedIndex==10||Swiper1.clickedIndex==11){
//            Swiper1.params.initialSlide=1;
//            wiper1.params.slidesOffsetBefore=-200;
//            centeredSlides : false;
//            console.log(Swiper1.clickedIndex.style.left);
              console.log(Swiper1.translate);
              Swiper1.setWrapperTranslate(-750);
            }


          })
        }
  }





</script>

<style >
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
    font-size: .14rem; }
  #app{
    height:100%;
  }
.box1{
  display:flex;
  height:100%;
  flex:1;

  flex-direction: column;

}
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

  section{
    /*height:100%;*/
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
