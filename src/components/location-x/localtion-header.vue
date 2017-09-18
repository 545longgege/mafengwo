<template>
  <div class="location-fine-head">
    <div class="head-top">
      <span class="iconfont icon-fanhui" style="font-size: .3rem;"></span>
      <div>
        <span>西安</span>
        <span></span>
      </div>
      <span>· · ·</span>
    </div>
    <div class="head-bot">
      <div class="inputbox">
        <span class="iconfont icon-sousuo_sousuo"></span>
        <span>产品名称</span>
      </div>
    </div>
  </div>
</template>


<script type='text/ecmascript-6'>
  import "../../../static/font-x/iconfont.css"
    export default {}
</script>

<style scoped>
  .location-fine-head .head-top {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
    height: .44rem; }
  .location-fine-head .head-top div {
    line-height: .44rem;
    display: flex;
    justify-content: center;
    align-items: center; }
  .location-fine-head .head-top div span:nth-of-type(1) {
    font-size: .16rem;
    padding-right: .05rem; }
  .location-fine-head .head-top div span:nth-of-type(2) {
    width: 0;
    height: 0;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-top: 4px solid #666; }
  .location-fine-head .head-top > span {
    line-height: .44rem;
    color: #ffa800;
    font-size: .2rem; }
  .location-fine-head .head-bot {
    height: .44rem;
    background: #eee;
    display: flex;
    align-items: center;
    justify-content: center; }
  .location-fine-head .head-bot .inputbox {
    height: .3rem;
    background: #fff;
    width: 96%;
    display: flex;
    justify-content: center; }
  .location-fine-head .head-bot .inputbox span {
    line-height: .3rem;
    color: #ccc;
    font-size: .15rem;
    padding: 0 .01rem; }
</style>
