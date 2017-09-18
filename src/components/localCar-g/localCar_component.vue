<template>
  <div id="m-containter">
    <local-car-header></local-car-header>
    <local-car-body></local-car-body>
  </div>



</template>


<script type='text/ecmascript-6'>
  import LocalCarHeader from "./localCar_header.vue";
  import LocalCarBody from "./localCar_body.vue";
  export default {
    components:{
      LocalCarHeader,
      LocalCarBody

    }
  }
</script>

<style>
   * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
    font-size: .14rem; }
  #app{
    height:100%;
  }
  .box1{
    display:flex;
    height:100%;
    flex:1;

    flex-direction: column;

  }
  html, body {
    width: 100%;
    height: 100%;
    font-family: Microsoft Yahei; }

  html {
    font-size: 26.67vw; }

  #m-containter {
    display: flex;
    flex-direction: column;
    height: 100%; }

  header {
    height: .44rem; 
background:white;}
  header ul {
    display: flex;
    justify-content: space-around;
    line-height: .44rem; }
  header ul li {
    font-size: .16rem;
    display: flex; }
  header ul li span {
    font-size: .16rem; }
  header ul li .iconfont {
    color: #e6b500;
    font-size: .2rem; }

  .line_shu {
    display: block;
    height: .18rem;
    width: .01rem;
    border-left: .01rem solid #ccc;
    transform: scaleX(0.5);
    margin-top: .13rem;
    margin-left: .05rem;
    margin-right: .07rem; }


  nav{
    height:.30rem;
  }

  #swiper-container1 .swiper-slide {
    text-align: center;
    background: white;
    color: black;
    line-height: .30rem; }

  #swiper-container2 {
    width: 100%;
    /*height: 3rem; }*/}
 

  section{
    /*height:100%;*/
    flex: 1;
    overflow: auto; }
  section ul li {
    padding: .1rem;
    display: flex; }
  section #swiper-container2 .swiper-wrapper .swiper-slide ul li img{
    width:.88rem;
    height:.88rem;
  }
  section ul #photoText {
    padding-left: .1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between; }
  section ul #photoText .price {
    display: flex;
    justify-content: space-between; }
  section ul #photoText i {
    display: inline-block;
    width: .7rem;
    text-align: center;
    border: solid .01rem green;
    border-radius: .1rem; }

  /*# sourceMappingURL=fastyuding.css.map*/


</style>
