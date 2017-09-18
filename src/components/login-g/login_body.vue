<template>
  <div>
    <div class="list">

      <a id="dj" class="item item-icon-left item-avatar m-b10" href="#">
        <img src="http://www.runoob.com/try/demo_source/nin_logo.jpeg">
        点击登录

      </a>

      <a class="item item-icon-left item-icon-right bd-b" href="#">
        <i class="icon ion-arrow-down-a"></i>
        我的下载
        <i class="icon  ion-ios-arrow-right"></i>
      </a>

      <a class="item item-icon-left item-icon-right m-b10" href="#">
        <i class="icon ion-star"></i>
        我的收藏
        <i class="icon  ion-ios-arrow-right"></i>
      </a>
      <login-body-input3  v-for="n in inputList" :title1="n.title1" :title2="n.title2" :title3="n.title3" :title4="n.title4" :title5="n.title5">

      </login-body-input3>

      <!--<a class="item item-icon-left item-icon-right bd-b" href="#">-->
        <!--<i class="icon ion-mic-a"></i>-->
        <!--我的订单-->
        <!--<i class="icon  ion-ios-arrow-right"></i>-->
      <!--</a>-->

      <!--<a class="item item-icon-left item-icon-right bd-b" href="#">-->
        <!--<i class="icon ion-person-stalker"></i>-->
        <!--我的优惠券-->
        <!--<i class="icon  ion-ios-arrow-right"></i>-->
      <!--</a>-->
      <!--<a class="item item-icon-left item-icon-right m-b10" href="#">-->
        <!--<i class="icon ion-star"></i>-->
        <!--我的钱包-->
        <!--<i class="icon  ion-ios-arrow-right"></i>-->
      <!--</a>-->
      <!--<a class="item item-icon-left item-icon-right bd-b" href="#">-->
        <!--<i class="icon ion-star"></i>-->
        <!--我的游记-->
        <!--<span class="item-note">-->
             <!--手机上可以写游记啦-->
            <!--</span>-->
        <!--<i class="icon  ion-ios-arrow-right"></i>-->
      <!--</a>-->
      <!--<a class="item item-icon-left item-icon-right bd-b" href="#">-->
        <!--<i class="icon ion-help-circled"></i>-->
        <!--我的问答-->
        <!--<span class="item-note">-->
             <!--可以申请指路人啦-->
            <!--</span>-->
        <!--<i class="icon  ion-ios-arrow-right"></i>-->
      <!--</a>-->
      <!--<a class="item item-icon-left m-b10" href="#">-->
        <!--<i class="icon  ion-compose"></i>-->
        <!--我的点评-->
        <!--<span class="badge badge-assertive">0</span>-->
      <!--</a>-->
      <a class="item item-icon-left item-icon-right bd-b" href="#">
        <i class="icon ion-star"></i>
        我的活动
        <i class="icon  ion-ios-arrow-right"></i>
      </a>



    </div>
  </div>

</template>


<script type='text/ecmascript-6'>
  import "../../../node_modules/vue/dist/vue.js";
  import"../../../static/libs/ionicons-2.0.1/css/ionicons.css";
  import "../../../static/libs/ionic/css/ionic.css";
  import LoginBodyInput3 from"./login_bodyInput3.vue";
    export default {
      components:{
        LoginBodyInput3
      },
      data:function(){
          return{
              inputList:[{
                  "title1":"我的订单",
                  "title2":"我的优惠券",
                  "title3":"我的钱包"
              },{
                "title1":"我的游记",
                "title2":"我的问答",
                "title3":"我的点评",
                "title4":"手机上可以写游记啦",
                "title5":"可以申请指路人了",

              }

              ],
          }


      }


    }
</script>

<style scoped>
  .item{
    border:none;
  }
  .ion-ios-arrow-right{
    color:#aaa;
  }
  .item-icon-left .icon{
    font-size:24px;
  }
  .item-icon-right .icon{
    font-size:24px;
  }
  .list{
    margin-top:44px;
    background-color:#cccccc;
  }
  #dj{
    height:80px;
    line-height:46px;
  }
  .list{
    overflow-y:auto;
    overflow-x:hidden;
    height:579px;
  }
  .m-b10{
    margin-bottom:10px;
  }
  .bd-b{
    border-bottom: 2px solid #ddd;
  }

</style>
