<template>

    <header>
      <span><</span>
      <h2>手机快速注册</h2>

    </header>


</template>


<script type='text/ecmascript-6'>
  import "../../../node_modules/vue/dist/vue.js";
  import"../../../static/libs/font_g/iconfont.css";
  import"../../../static/libs/font_g/iconfont.js";
  export default {}
</script>

<style scoped>

  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-size: .14rem; }
  * a {
    color: black;
    text-decoration: none; }

  input {
    outline: none; }

  html {
    font-size: 26.67vw; }

  html, body {
    width: 100%;
    height: 100%;
    font-family: Microsoft Yahei;
    color: #434343; }


  #app{
    height:100%;
  }
  #m-containter{
    display:flex;
    flex-direction: column;
    height:100%;
    width:100%;
  }
  header {
    height: .44rem;
    display: flex;
    padding-right: 1rem;
    justify-content: space-around; }
  header h2 {
    font-size: .16rem;
    text-align: center;
    line-height: .44rem;
    font-style: normal; }
  header span {
    display: block;
    color: #a47e3c;
    line-height: .44rem; }

  .wrapper {
    width: 3.45rem;
    margin: 0 auto; }

  .tb_line {
    line-height: 0;
    background-color: #ccc;
    width: 100%;
    height: 1px;
    margin-bottom: .08rem;
    transform: scaleY(0.5); }

  .mb0 {
    margin-bottom: 0; }
  section{
    width:100%;
    flex:1;
    overflow:auto;
    height:100%;
  }

  /*section ul {*/
    /*display: flex;*/
    /*height: .44rem;*/
    /*justify-content: space-between;*/
    /*padding: 0 .4rem;*/
    /*padding-top: .12rem;*/
    /*position: relative; }*/
  /*section ul li {*/
    /*width: 1rem;*/
    /*text-align: center; }*/
  /*section ul div {*/
    /*flex: 1; }*/
  /*section ul .p1 {*/
    /*width: 1rem;*/
    /*height: .01rem;*/
    /*position: absolute;*/
    /*bottom: .02rem;*/
    /*border: .01rem solid #ad6704;*/
    /*left: .39rem; }*/
  /*section ul .touch {*/
    /*color: #a47e3c;*/
    /*font-weight: bold; }*/
  section .wrapper p {
    height: .44rem;
    padding-top: .12rem; }
  section .wrapper p input {
    border: none;
    margin-left: 0.1rem;
    width: 2.6rem; }
  section .wrapper p .icon-shiliangzhinengduixiang1 {
    font-size: .18rem; }
  section .wrapper p .touch {
    color: #a47e3c;
    font-weight: bold; }

  section .wrapper button {
    width: 100%;
    height: .44rem;
    color: #a47e3c;
    text-align: center;
    margin-bottom: .2rem;
    border: solid 1px #a47e3c; }

  .wrapper .yanzheng {
    display: flex;
    padding-top: .05rem; }
  .wrapper .yanzheng input {
    width: 1.50rem;
    transform: translateY(-0.05rem); }
  .wrapper .yanzheng span {
    display: block;
    width: .8rem;
    text-align: center;
    height: .32rem;
    line-height: .32rem; }




</style>
