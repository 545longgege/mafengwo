<template>
  <div class="hotel-container">
      <hotel-header></hotel-header>
      <hotel-body></hotel-body>
      <hotel-footer></hotel-footer>
  </div>
</template>

<script type="text/ecmascript-6">

  import HotelHeader from "./hotelHeader.vue"
  import HotelBody from "./hotelBody.vue"
  import HotelFooter from "./hotelFooter.vue"

  export default {
    components : {
      HotelHeader,
      HotelBody,
      HotelFooter
    }
  }
</script>

<style>
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
    height: 100%; }

  h2 {
    font-size: 0.2rem;
    line-height: 0.5rem; }

  html, body {
    height: 100%;
    width: 100%;
    font-size: 26.667vw; }

  .line {
    width: 100%;
    height: 0.01rem;
    border-bottom: 0.01rem solid #cccccc;
    transform: scaleY(0.5); }

  .strongLine {
    width: 100%;
    height: 0.1rem;
    border-bottom: 0.1rem solid #cccccc; }

  .thinLine {
    width: 100%;
    height: 0.05rem;
    margin: 0.05rem 0;
    border-bottom: 0.05rem solid #cccccc; }



  .hotel-container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column; }
</style>
