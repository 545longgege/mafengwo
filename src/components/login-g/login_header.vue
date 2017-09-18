<template>
    <div>
      <div class="bar bar-header">
        <a class=" item-icon-left " href="#">
          <i class="icon ion-gear-b"></i>

        </a>
        <div class="title">我的</div>
        <a class=" item-icon-right " href="#">
          <i class="icon  ion-chatbox-working"></i>

        </a>
      </div>
    </div>

</template>


<script type='text/ecmascript-6'>
  import "../../../node_modules/vue/dist/vue.js";
   import"../../../static/libs/ionicons-2.0.1/css/ionicons.css";
 import "../../../static/libs/ionic/css/ionic.css";
  export default {}
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
