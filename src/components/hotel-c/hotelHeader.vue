<template>
  <div class="hotel-header">
    <div class="header-content">
      <i class="iconfont icon-zuoyoujiantou" @click="RetuAddress"></i>
      <p>
        <i class="iconfont icon-icon"></i>
        <i class="iconfont icon-xiazai"></i>
        <i>|</i>
        <i>···</i>
      </p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  import "../../../static/font-c/iconfont.css";

  export default {
    methods : {
      RetuAddress :function () {
        location.href = "#/Destination_z"
      }
    }
  }
</script>

<style>
  .hotel-header {
    width: 100%;
    height: 0.44rem;
    border-bottom: 0.005rem solid #cccccc; }
  .hotel-header .header-content {
    width: 90%;
    height: 0.44rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between; }
  .hotel-header .header-content > i {
    color: orange;
    font-size: 0.26rem;
    line-height: 0.44rem; }
  .hotel-header .header-content > p i {
    color: orange;
    font-size: 0.26rem;
    line-height: 0.44rem;
    padding: 0 0.05rem; }
  .hotel-header .header-content > p i:nth-of-type(3) {
    font-size: 0.2rem;
    color: #cccccc; }
</style>
