<template>

    <section>

      <div class="wrapper all-hide">


        <!--手机验证码登录部分-->
        <div id="tab_shouji " class="">
          <p class="zhanghao"><span>中国</span><input type="text" placeholder="输入手机号"/></p>
          <div class="tb_line mb0"></div>
          <p class="yanzheng"><span>短信验证码</span><input type="text"/><span class="messageKu">获取验证码</span></p>
          <div class="tb_line"></div>
          <p class="yanzheng"><span>昵称</span><input type="text" placeholder="15个字符以内"/></p>
          <div class="tb_line"></div>
          <p class="yanzheng"><span>密码</span><input type="text" placeholder="6-20位数字或字母"/></p>
          <div class="tb_line"></div>
          <button>完成注册，进入蚂蜂窝</button>

        </div>




      </div>
    </section>


</template>


<script type='text/ecmascript-6'>
  import $ from "../../../static/libs/jquery-1.11.1.js";
  import "../../../node_modules/vue/dist/vue.js";
  import"../../../static/libs/font_g/iconfont.css";
  import"../../../static/libs/font_g/iconfont.js";
  export default {

  };

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
    margin: 0 auto;
  height:100%}

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

  .wrapper .zhanghao {
    display: flex;
     }
  .wrapper .zhanghao span{
    transform: translateY(.07rem);
    display:inline-block;
    width: .8rem;
    text-align: center;
    height: .32rem;
  }
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
