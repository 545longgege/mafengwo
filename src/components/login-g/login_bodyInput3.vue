<template>
  <div>
  <a class="item item-icon-left item-icon-right bd-b" href="#">
    <i class="icon ion-mic-a"></i>
    {{title1}}
    <span class="item-note">
             {{title4}}
            </span>
    <i class="icon  ion-ios-arrow-right"></i>
  </a>

  <a class="item item-icon-left item-icon-right bd-b" href="#">
    <i class="icon ion-person-stalker"></i>
    {{title2}}
    <span class="item-note">
             {{title5}}
            </span>
    <i class="icon  ion-ios-arrow-right"></i>
  </a>
  <a class="item item-icon-left item-icon-right m-b10" href="#">
    <i class="icon ion-star"></i>
    {{title3}}

    <i class="icon  ion-ios-arrow-right"></i>
  </a>
  </div>

</template>


<script type='text/ecmascript-6'>
  import "../../../node_modules/vue/dist/vue.js";
  import"../../../static/libs/ionicons-2.0.1/css/ionicons.css";
  import "../../../static/libs/ionic/css/ionic.css";
    export default {
        props:{
            title1: {},
          title2: {},
          title3: {},
          title4: {},
          title5: {},



        },
        data:function(){
            return{

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
