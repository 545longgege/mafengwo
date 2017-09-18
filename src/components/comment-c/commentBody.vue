<template>
  <div class="comment-body">
    <div class="hotel-comment">
      <!--评论-->
      <div class="comment">
        <!--第一条-->
        <div class="commentMessage">
          <div class="photoName">
            <div>
              <img src="../../../static/img/imgC/1.jpg"/>
              <span>孤岛上的蓝鲸鱼</span>
              <i>Lv4</i>
            </div>
            <span>2017-05-05</span>
          </div>
          <div id="information">
            <p>至锦里古街和武侯祠约15分钟车程。-- 酒店靠近春熙路，在成都太古里旁边。</p>
            <div class="swiper-container swiper-photo">
              <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="../../../static/img/imgC/food1.jpg"/></div>
                <div class="swiper-slide"><img src="../../../static/img/imgC/food2.jpg"/></div>
                <div class="swiper-slide"><img src="../../../static/img/imgC/food3.jpg"/></div>
                <div class="swiper-slide"><img src="../../../static/img/imgC/food4.jpg"/></div>
                <div class="swiper-slide"><img src="../../../static/img/imgC/food5.jpg"/></div>
                <div class="swiper-slide"><img src="../../../static/img/imgC/001.jpg"/></div>
                <div class="swiper-slide"><img src="../../../static/img/imgC/002.jpg"/></div>
                <div class="swiper-slide"><img src="../../../static/img/imgC/003.jpg"/></div>
              </div>
            </div>
          </div>
          <div class="line"></div>
        </div>
        <div class="commentMessage" v-for="n in commentContent">
          <div class="photoName">
            <div>
              <img src="../../../static/img/imgC/2.jpg"/>
              <span>孤岛上的蓝鲸鱼</span>
              <i>Lv14</i>
            </div>
            <span>2017-05-05</span>
          </div>
          <div class="information">
            <p>酒店靠近春熙路，在成都太古里旁边。-- 酒店靠近春熙路，在成都太古里旁边。酒店靠近春熙路，在成都太古里旁边。-- 酒店靠近春熙路，在成都太古里旁边。</p>
          </div>
          <div class="line"></div>
        </div>
        <div class="commentMessage">
          <div class="photoName">
            <div>
              <img src="../../../static/img/imgC/3.jpg"/>
              <span>孤岛上的蓝鲸鱼</span>
              <i>Lv5</i>
            </div>
            <span>2017-05-05</span>
          </div>
          <div class="information">
            <p>--酒店至宽窄巷子约10分钟，至锦里古街和武侯祠约15分钟车程。</p>
            <div class="swiper-container swiper-photo">
              <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="../../../static/img/imgC/003.jpg"/></div>
              </div>
            </div>
          </div>
          <div class="line"></div>
        </div>
        <div class="commentMessage">
          <div class="photoName">
            <div>
              <img src="../../../static/img/imgC/4.jpg"/>
              <span>孤岛上的蓝鲸鱼</span>
              <i>Lv12</i>
            </div>
            <span>2017-04-05</span>
          </div>
          <div class="information">
            <p>很不错的一家性价比价高的酒店，适合一家人居住~~~</p>
            <div class="swiper-container swiper-photo">
              <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="../../../static/img/imgC/001.jpg"/></div>
                <div class="swiper-slide"><img src="../../../static/img/imgC/002.jpg"/></div>
                <div class="swiper-slide"><img src="../../../static/img/imgC/003.jpg"/></div>
              </div>
            </div>
          </div>
          <div class="line"></div>
        </div>
        <div class="commentMessage">
          <div class="photoName">
            <div>
              <img src="../../../static/img/imgC/1.jpg"/>
              <span>孤岛上的蓝鲸鱼</span>
              <i>Lv4</i>
            </div>
            <span>2017-05-05</span>
          </div>
          <div class="information">
            <p>服务热情，已经第二次订这家酒店了。。。</p>
            <div class="swiper-container swiper-photo">
              <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="../../../static/img/imgC/food4.jpg"/></div>
                <div class="swiper-slide"><img src="../../../static/img/imgC/food5.jpg"/></div>
                <div class="swiper-slide"><img src="../../../static/img/imgC/001.jpg"/></div>
                <div class="swiper-slide"><img src="../../../static/img/imgC/003.jpg"/></div>
              </div>
            </div>
          </div>
          <div class="line"></div>
        </div>
        <div class="commentMessage">
          <div class="photoName">
            <div>
              <img src="../../../static/img/imgC/1.jpg"/>
              <span>孤岛上的蓝鲸鱼</span>
              <i>Lv4</i>
            </div>
            <span>2017-05-05</span>
          </div>
          <div class="information">
            <p>适合商务出差，家庭旅行。。。</p>
            <div class="swiper-container swiper-photo">
              <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="../../../static/img/imgC/food1.jpg"/></div>
                <div class="swiper-slide"><img src="../../../static/img/imgC/food2.jpg"/></div>
              </div>
            </div>
          </div>
          <div class="line"></div>
        </div>
      </div>
    </div>
  </div>
</template>


<script type='text/ecmascript-6'>
  import "../../../node_modules/swiper/dist/css/swiper.min.css";
  import Swiper from "swiper";
  import $ from "../../../static/libs/jquery-3.2.1.min"
  export default{

    data : function(){
      return {
        commentContent: [
          {
            pic : "../../../static/img/imgC/1.jpg",
            name :"孤岛上的蓝鲸鱼",
            grade :"4",
            date : "2017-05-26",
            description : "酒店至宽窄巷子约10分钟，至锦里古街和武侯祠约15分钟车程。",
            content : [
              {
                photo :"../../../static/img/imgC/food1.jpg"
              },
              {
                photo :"../../../static/img/imgC/food2.jpg"
              },
              {
                photo :"../../../static/img/imgC/food3.jpg"
              },
              {
                photo :"../../../static/img/imgC/food4.jpg"
              },
              {
                photo :"../../../static/img/imgC/food5.jpg"
              }
            ]

          },
          {
            pic : "../../../static/img/imgC/2.jpg",
            name :"lalala",
            grade :"3",
            date : "2017-05-22",
            description : "位置很好在IFS前面。至锦里古街和武侯祠约15分钟车程。",
            content : [
              {
                photo :"../../../static/img/imgC/food3.jpg"
              },
              {
                photo :"../../../static/img/imgC/food4.jpg"
              },
              {
                photo :"../../../static/img/imgC/food5.jpg"
              },
              {
                photo :"../../../static/img/imgC/001.jpg"
              },
              {
                photo :"../../../static/img/imgC/002.jpg"
              }
            ]

          },
          {
            pic : "../../../static/img/imgC/3.jpg",
            name :"王丹",
            grade :"5",
            date : "2017-05-18",
            description : "住的环境不错，在成都太古里旁边。至锦里古街和武侯祠约15分钟车程。",
            content : [
              {
                photo :"../../../static/img/imgC/001.jpg"
              },
              {
                photo :"../../../static/img/imgC/002.jpg"
              },
              {
                photo :"../../../static/img/imgC/003.jpg"
              },
              {
                photo :"../../../static/img/imgC/004.jpg"
              },
              {
                photo :"../../../static/img/imgC/005.jpg"
              }
            ]

          }

        ]
      }
    },
      mounted : function(){
        var commentSwiper = new Swiper(".swiper-photo" , {
          slidesPerView: 3.5,
          paginationClickable: true,
          spaceBetween: 10
        })
      }
  }

</script>

<style scoped>
  img{
    width: 100%;
    height: 100%;
  }
  .comment-body {
    flex: 1;
    overflow: auto;
    font-size: 0.14rem; }
  .comment-body .hotel-comment {
    width: 94%;
    margin: 0rem auto;
    font-size: 0.14rem; }
  .comment-body .hotel-comment .comment {
    width: 100%; }
  .comment-body .hotel-comment .comment .commentMessage {
    width: 100%; }
  .comment-body .hotel-comment .comment .commentMessage .photoName {
    font-size: 0.14rem;
    display: flex;
    justify-content: space-between;
    padding: 0.15rem 0; }
  .comment-body .hotel-comment .comment .commentMessage .photoName > div {
    display: flex;
    font-size: 0.14rem; }
  .comment-body .hotel-comment .comment .commentMessage .photoName > div img {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%; }
  .comment-body .hotel-comment .comment .commentMessage .photoName > div span {
    font-size: 0.14rem;
    line-height: 0.5rem; }
  .comment-body .hotel-comment .comment .commentMessage .photoName > div i {
    display: block;
    color: orange;
    border: 0.001rem solid orange;
    width: 0.5rem;
    height: 0.26rem;
    text-align: center;
    margin: 0.12rem 0 0 0.1rem;
    font-size: 0.14rem;
    line-height: 0.26rem; }
  .comment-body .hotel-comment .comment .commentMessage .photoName > span {
    line-height: 0.5rem;
    width: 1.2rem;
    text-align: right;
    font-size: 0.14rem; }
  .comment-body .hotel-comment .comment .commentMessage #information > p {
    font-size: 0.14rem;
    line-height: 0.24rem;
    padding-bottom: 0.1rem; }
</style>
