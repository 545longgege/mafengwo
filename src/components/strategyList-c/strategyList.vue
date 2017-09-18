<template>
  <div class="list-container">
    <strategy-list-header></strategy-list-header>
    <strategy-list-body></strategy-list-body>
  </div>
</template>

<script type='text/ecmascript-6'>
  import StrategyListHeader from "./strategyListHeader.vue";
  import StrategyListBody from "./strategyListBody.vue";

  export default {
    components:{
      StrategyListHeader,
      StrategyListBody
    }
  }
</script>

<style>
  /*公共样式*/
  #app{
  height:100%
  }
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
    font-weight: 100;
    font-style: normal;
    font-size: .14rem;
    font-family: "微软雅黑"; }
  img {
    width: 100%;
    height: 100%;
  }
  h2{
    font-size: 0.2rem;
    line-height: 0.5rem;
  }

  html, body {
    height: 100%;
    width: 100%;
    font-size: 26.667vw;
  }

  .line{
    width: 100%;
    height: 0.01rem;
    border-bottom: 0.01rem solid #cccccc;
    transform:scaleY(0.3);
  }
  .list-container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column; }
</style>
