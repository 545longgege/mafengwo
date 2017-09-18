<template>
      <!--//主题-->
      <div class="theme">
        <div class="theme-content" v-for="(n,index) in themeContent">
          <h2>{{n.title}}</h2>
          <div class="swiper-container swiper-theme">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="m in themeContent[index].content">
                <img :src="m.picture"/>
                <p>{{m.description}}</p>
                <p><span>{{m.country}}</span>&nbsp;&nbsp;&nbsp;&nbsp;<i>{{m.time}}次浏览</i></p>
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
      data : function(){
          return{
            themeContent : [
              {
                  title : "美食",
                  content : [
                    {
                      picture : "../../../static/img/imgC/1.jpg",
                      description : "全球最美游戏《纪念碑谷》，原来现实中真啦啦啦啦啦",
                      country : "西班牙",
                      time : "66140"
                    },
                    {
                      picture : "../../../static/img/imgC/2.jpg",
                      description : "今夏8家香港人气创意甜品店大推荐",
                      country : "香港",
                      time : "35654"
                    },
                    {
                      picture : "../../../static/img/imgC/3.jpg",
                      description : "韩国冰淇淋大推荐",
                      country : "韩国",
                      time : "7856"
                    },
                    {
                      picture : "../../../static/img/imgC/4.jpg",
                      description : "全球电影大推荐",
                      country : "全球",
                      time : "15456"
                    },
                    {
                      picture : "../../../static/img/imgC/5.jpg",
                      description : "哪些电影中提到的美食值得一试",
                      country : "中国",
                      time : "25555"
                    },
                    {
                      picture : "../../../static/img/imgC/6.jpg",
                      description : "18道泰国特色美食推荐",
                      country : "泰国",
                      time : "15456"
                    },
                    {
                      picture : "../../../static/img/imgC/7.jpg",
                      description : "瞅瞅这些餐厅，为了吃也要去日本",
                      country : "巴黎",
                      time : "62254"
                    }
                  ]
                },
              {
                title : "购物",
                content : [
                  {
                    picture : "../../../static/img/imgC/3.jpg",
                    description : "史上最全机场免费店指南（上）！好好把握旅途最后一站>>",
                    country : "西班牙",
                    time : "66140"
                  },
                  {
                    picture : "../../../static/img/imgC/4.jpg",
                    description : "哪些地方可以买到最具有民族风的东西？",
                    country : "香港",
                    time : "15456"
                  },
                  {
                    picture : "../../../static/img/imgC/5.jpg",
                    description : "如何优雅的拒绝代购？",
                    country : "亚洲",
                    time : "56568"
                  },
                  {
                    picture : "../../../static/img/imgC/6.jpg",
                    description : "普吉岛一站式购物，去这准没错！",
                    country : "亚洲",
                    time : "9889"
                  },
                  {
                    picture : "../../../static/img/imgC/7.jpg",
                    description : "哪些地方可以买到最具有民族风的东西？",
                    country : "亚洲",
                    time : "14852"
                  },
                  {
                    picture : "../../../static/img/imgC/8.jpg",
                    description : "史上最全机场免费店指南（上）！好好把握旅途最后一站>>",
                    country : "亚洲",
                    time : "23565"
                  },
                  {
                    picture : "../../../static/img/imgC/9.jpg",
                    description : "普吉岛一站式购物，去这准没错！",
                    country : "亚洲",
                    time : "46558"
                  }
                ]
              },
              {
                title : "摄影",
                content : [
                  {
                    picture : "../../../static/img/imgC/9.jpg",
                    description : "今夏8家香港人气创意甜品店大推荐全球最美游戏《纪念碑谷》，原来现实中真啦啦啦啦啦",
                    country : "西班牙",
                    time : "66140"
                  },
                  {
                    picture : "../../../static/img/imgC/10.jpg",
                    description : "今夏8家香港人气创意甜品店大推荐，全球最美游戏《纪念碑谷》",
                    country : "香港",
                    time : "15456"
                  },
                  {
                    picture : "../../../static/img/imgC/7.jpg",
                    description : "普吉岛一站式购物，去这准没错！",
                    country : "亚洲",
                    time : "15456"
                  },
                  {
                    picture : "../../../static/img/imgC/8.jpg",
                    description : "普吉岛一站式购物，去这准没错！",
                    country : "亚洲",
                    time : "15456"
                  },
                  {
                    picture : "../../../static/img/imgC/9.jpg",
                    description : "史上最全机场免费店指南（上）！好好把握旅途最后一站>>",
                    country : "亚洲",
                    time : "15456"
                  },
                  {
                    picture : "../../../static/img/imgC/10.jpg",
                    description : "普吉岛一站式购物，去这准没错！",
                    country : "亚洲",
                    time : "15456"
                  },
                  {
                    picture : "../../../static/img/imgC/1.jpg",
                    description : "史上最全机场免费店指南（上）！好好把握旅途最后一站>>",
                    country : "亚洲",
                    time : "15456"
                  }
                ]
              },
              {
                title : "乐园",
                content : [
                  {
                    picture : "../../../static/img/imgC/8.jpg",
                    description : "全球最美游戏《纪念碑谷》，原来现实中真啦啦啦啦啦",
                    country : "西班牙",
                    time : "66140"
                  },
                  {
                    picture : "../../../static/img/imgC/7.jpg",
                    description : "今夏8家香港人气创意甜品店大推荐",
                    country : "香港",
                    time : "15456"
                  },
                  {
                    picture : "../../../static/img/imgC/3.jpg",
                    description : "dsjkfadsfjksdhf",
                    country : "亚洲",
                    time : "15456"
                  },
                  {
                    picture : "../../../static/img/imgC/3.jpg",
                    description : "dsjkfadsfjksdhf",
                    country : "亚洲",
                    time : "15456"
                  },
                  {
                    picture : "../../../static/img/imgC/3.jpg",
                    description : "dsjkfadsfjksdhf",
                    country : "亚洲",
                    time : "15456"
                  },
                  {
                    picture : "../../../static/img/imgC/3.jpg",
                    description : "dsjkfadsfjksdhf",
                    country : "亚洲",
                    time : "15456"
                  },
                  {
                    picture : "../../../static/img/imgC/3.jpg",
                    description : "dsjkfadsfjksdhf",
                    country : "亚洲",
                    time : "15456"
                  }
                ]
              },
              {
                title : "毕业季",
                content : [
                  {
                    picture : "../../../static/img/imgC/7.jpg",
                    description : "全球最美游戏《纪念碑谷》，原来现实中真啦啦啦啦啦",
                    country : "西班牙",
                    time : "66140"
                  },
                  {
                    picture : "../../../static/img/imgC/8.jpg",
                    description : "今夏8家香港人气创意甜品店大推荐",
                    country : "香港",
                    time : "15456"
                  },
                  {
                    picture : "../../../static/img/imgC/9.jpg",
                    description : "dsjkfadsfjksdhf",
                    country : "亚洲",
                    time : "15456"
                  },
                  {
                    picture : "../../../static/img/imgC/10.jpg",
                    description : "dsjkfadsfjksdhf",
                    country : "亚洲",
                    time : "15456"
                  },
                  {
                    picture : "../../../static/img/imgC/1.jpg",
                    description : "dsjkfadsfjksdhf",
                    country : "亚洲",
                    time : "15456"
                  },
                  {
                    picture : "../../../static/img/imgC/2.jpg",
                    description : "dsjkfadsfjksdhf",
                    country : "亚洲",
                    time : "15456"
                  },
                  {
                    picture : "../../../static/img/imgC/3.jpg",
                    description : "dsjkfadsfjksdhf",
                    country : "亚洲",
                    time : "15456"
                  }
                ]
              }
             ]
          }
      },
    mounted:function(){
//主题页面
      var swiperTheme = new Swiper ('.swiper-theme', {
        slidesPerView: 1.98,
        paginationClickable: true,
        spaceBetween: 25
      })
    }
  }

</script>

<style scoped>

  .theme .theme-content {
    width: 96%;
    margin-left: auto;
    padding-bottom: 0.1rem; }
  h2 {
    font-size: 0.2rem;
    line-height: 0.5rem; }
  .swiper-theme {
    width: 100%; }
  .swiper-theme .swiper-wrapper{
    width: 100%; }
  .swiper-theme .swiper-wrapper .swiper-slide img{
    height: 1.1rem; }
  .swiper-theme .swiper-wrapper .swiper-slide p:nth-of-type(1){
    font-size: 0.14rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 0.3rem; }
 .swiper-theme .swiper-wrapper .swiper-slide p:nth-of-type(2) span{
    font-size: 0.12rem;
    line-height: 0.2rem; }
  .swiper-theme .swiper-wrapper .swiper-slide p:nth-of-type(2) i {
    font-size: 0.12rem; }

</style>
