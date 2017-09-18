<template>
  <div id="location-fine-x">
    <localtion-header></localtion-header>
    <localtion-body></localtion-body>
  </div>

</template>


<script type='text/ecmascript-6'>
    import LocaltionHeader from "./localtion-header.vue"
    import LocaltionBody from "./localtion-body.vue"
    export default {
        components:{
          LocaltionHeader,
          LocaltionBody
        }
    }
</script>

<style>
  html {
    font-size: 26.67vw; }

  i, b, strong, e {
    font-style: normal;
    font-weight: normal; }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: .14rem; }

  ul, li, dl, dd, dt {
    list-style: none; }

  a {
    color: #000;
    text-decoration: none; }

  html, body {
    height: 100%;
    width: 100%; }
  h3 {
    line-height: .4rem;
    font-size: .16rem;
    font-weight: normal; }

  #app{
    width:100%;
    height:100%;
  }
  #location-fine-x {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    justify-content: space-between; }


  .hot-play-method, .on-sale-x {
    display: flex;
    justify-content: center;
    width: 100%; }

</style>
