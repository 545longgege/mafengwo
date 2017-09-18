<template>
  <div id="search-face-x">
    <search-header msg="领770元优惠券大礼包"></search-header>
    <search-body></search-body>
  </div>

</template>


<script type='text/ecmascript-6'>
    import SearchHeader from "./search-header-x.vue"
    import SearchBody from "./search-body-x.vue"
    import "../../../static/font-x/iconfont.css"
    export default {
        components:{
            SearchHeader,
            SearchBody
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


  #search-face-x {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between; }


  .long-string {
    height: .3rem;
    width: 1px;
    transform: scaleX(0.5);
    border-right: 1px solid #eee; }

  .thin-line {
    height: 1px;
    border-bottom: 1px solid #ccc;
    width: 100%;
    transform: scaleY(0.5); }
</style>
