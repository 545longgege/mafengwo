<template>
  <div id="m-containter">
    <hotel-header>

    </hotel-header>
    <hotel-body>

    </hotel-body>
  </div>



</template>


<script type='text/ecmascript-6'>
  import HotelHeader from "./hotel_header.vue";
  import HotelBody from "./hotel_body.vue";
  export default {
    components:{
      HotelHeader,
      HotelBody

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

  html, body {
    width: 100%;
    height: 100%;
    font-family: Microsoft Yahei; }

  html {
    font-size: 26.67vw; }
  #app{
    height:100%;
  }

  #m-containter {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%; }

  header {
    height: .44rem; }

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
    color: blue;
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

  .tb_line {
    line-height: 0;
    background-color: #ccc;
    width: 100%;
    height: 1px;
    margin-bottom: .08rem;
    transform: scaleY(0.5); }

  section {
    width: 100%;
    height: 100%;
    flex: 1;
    overflow: auto; }

  section .wrapper {
    width: 100%;
    height: 100%;
    padding-left: .2rem;
    padding-right: .2rem; }
  section .wrapper .topic h1 {
    color: #474747;
    font-size: .3rem; }
  section .wrapper .topic .logo {
    padding-top: .2rem;
    padding-bottom: .2rem;
    display: flex; }
  section .wrapper .topic .logo img {
    width: .45rem;
    height: .45rem;
    border-radius: 50%;
    display: block; }
  section .wrapper .topic .logo p {
    margin-left: .37rem; }
  section .wrapper .topic .logo .shijian {
    display: flex;
    justify-content: space-between; }
  section .wrapper .topic .logo .shijian span {
    display: inline-block;
    width: 1.5rem;
    text-align: center; }
  section .wrapper .text-cont p {
    font-size: .18rem;
    color: #474747;
    word-break: break-all;
    margin-bottom: .2rem;
  line-height:.18rem}
  section .wrapper .text-cont h3 {
    margin: .5rem 0 .3rem -.2rem;
    font-size: .22rem;
    color: #474747;
    font-weight: bold;
    padding-left: .2rem; }
  section .wrapper .text-cont h4 {
    color: #474747;
    font-size: .2rem;
    margin: .35rem 0 .15rem; }
  section .wrapper .photo-cont p {
    font-size: .18rem;
    color: #474747;
    word-break: break-all;
    margin-bottom: .2rem;
    line-height: .18rem; }
  section .wrapper .photo-cont h3 {
    margin: .5rem 0 .3rem -.2rem;
    font-size: .22rem;
    color: #474747;
    font-weight: bold;
    padding-left: .2rem; }
  section .wrapper .photo-cont h4 {
    color: #474747;
    font-size: .2rem;
    margin: .35rem 0 .15rem; }
  section .wrapper .photo-cont img {
    width: 100%;
    vertical-align: middle;
    margin: .1rem 0 .2rem; }
  section .wrapper .goyuding a {
    color: #666;
    display: block;
    margin-right: -20px; }
  section .wrapper .goyuding a .fengping {
    display: flex; }
  section .wrapper .goyuding a .fengping img {
    width: .75rem;
    height: .75rem; }
  section .wrapper .goyuding a .fengping div {
    flex: 1; }
  section .wrapper .goyuding a .fengping div p {
    margin-left: .20rem; }
  section .wrapper .goyuding a .fengping div span {
    margin-left: .20rem;
    color: #ad6704; }
  section .wrapper .goyuding a .desc {
    padding: 0 .2rem .2rem 0;
    font-size: .15rem;
    line-height: .14rem;
    color: #111;
    margin-top: .3rem; }
  section .wrapper .goyuding a .desc strong {
    color: #ff9d00;
    font-weight: normal;
    margin-right: 10px; }
  section .wrapper .goyuding p {
    font-size: .18rem;
    color: #474747;
    word-break: break-all;
    margin-bottom: .2rem; }

  /*# sourceMappingURL=hotelStrategy.css.map */



</style>
