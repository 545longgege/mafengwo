<template>
  <div>
    <section>
      <ul id="tab_login">
        <li class="touch">账号登录</li>
        <div></div>
        <li>手机验证码登录</li>
        <p class="p1"></p>

      </ul>
      <div class="wrapper all-hide">
        <!--//账号登录部分-->
        <div id="tab_zhanghao" class="all-hidden show">
          <div class="">
            <p class="zhanghao">账号<input type="text" placeholder="手机号/邮箱"></p>
            <div class="tb_line mb0"></div>
            <p class="mima">密码<input type="password"><span class="icon-shiliangzhinengduixiang1 iconfont "></span></p>
            <div class="tb_line"></div>
            <div class="jingwai"><span><i class="iconfont icon-iconset0142-copy"></i><span>境外手机</span></span><span>忘记密码</span></div>
            <button>登录</button>
            <div class="disanfang">
              <div class="tb_line"></div>
              <span>第三方账号登录</span>
              <div class="tb_line"></div>
            </div>
          </div>
          <ul id="thirdLogin">
            <li ><div><span class="icon-weixin iconfont"></span></div></li>
            <li ><div><span class="icon-xinlangweibo iconfont"></span></div></li>
            <li ><div><span class="icon-QQ iconfont"></span></div></li>
          </ul>
        </div>

        <!--手机验证码登录部分-->
        <div id="tab_shouji " class="all-hidden hide">
          <p class="zhanghao">中国<input type="text" placeholder="输入手机号"/></p>
          <div class="tb_line mb0"></div>
          <p class="yanzheng"><span>短信验证码</span><input type="text"/><span class="messageKu">获取验证码</span></p>
          <div class="tb_line"></div>
          <button>登录</button>

        </div>



        <button id="fastReg" @click="kszhuce">手机快速注册</button>
      </div>
    </section>
  </div>

</template>


<script type='text/ecmascript-6'>
  import $ from "../../../static/libs/jquery-1.11.1.js";
  import "../../../node_modules/vue/dist/vue.js";
  import"../../../static/libs/font_g/iconfont.css";
  import"../../../static/libs/font_g/iconfont.js";
    export default {
	mounted:function(){
		$(function()
  {
    var pLeft = $(".p1").css("left");
    $("#tab_login li").on("click", function () {
      var liIndex = $("#tab_login li").index(this);
      console.log(liIndex);

      $(this).addClass("touch").siblings().removeClass("touch");
      $(".all-hide .all-hidden").eq(liIndex).fadeIn(150).siblings(".all-hidden").hide();
      var liWidth=$('#tab_login li').width();
      var divWidth = $('#tab_login div').width();
      if(liIndex==0){
        divWidth=0;
      }else{
        divWidth= divWidth;
      }
      console.log(divWidth);

      $('#tab_login p').stop(false,true).animate({'left':divWidth+liIndex*liWidth+parseInt(pLeft)+'px'},300);
      // $("#tab_login p").toggle(
      //     function(){
      //
      //     }
      // )


    })

    var pass=true;
    $(".mima span").click(function() {
      var password = $(".mima input").val();
      console.log(password);
      if (pass==true) {
        $(".mima span").addClass("touch");

        $(".mima input").replaceWith("<input type='text' value='" + password + "'/>");
        pass=false;
      }else if(pass==false){
        $(".mima span").removeClass("touch");

        $(".mima input").replaceWith("<input type='password' value='" + password + "'/>");
        pass=true;


      }

    })
  })
	},
	methods : {
	kszhuce : function(){
	location.href="#/Register_g"
}
}
}
		
  
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

  .show {
    display: block; }

  .hide {
    display: none; }

  header {
    height: .44rem;
    display: flex;
    padding-left: 1rem;
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

  section ul {
    display: flex;
    height: .44rem;
    justify-content: space-between;
    padding: 0 .4rem;
    padding-top: .12rem;
    position: relative; }
  section ul li {
    width: 1rem;
    text-align: center; }
  section ul div {
    flex: 1; }
  section ul .p1 {
    width: 1rem;
    height: .01rem;
    position: absolute;
    bottom: .02rem;
    border: .01rem solid #ad6704;
    left: .39rem; }
  section ul .touch {
    color: #a47e3c;
    font-weight: bold; }
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
  section .wrapper .jingwai {
    display: flex;
    justify-content: space-between;
    margin-bottom: .2rem; }
  section .wrapper .jingwai span .icon-iconset0142-copy {
    font-size: .20rem;
    transform: translateY(0.03rem);
    display: inline-block; }
  section .wrapper button {
    width: 100%;
    height: .44rem;
    color: #a47e3c;
    text-align: center;
    margin-bottom: .2rem;
    border: solid 1px #a47e3c; }
  section .wrapper .disanfang {
    display: flex;
    justify-content: space-between;
    height: .30rem; }
  section .wrapper .disanfang span {
    display: block;
    font-size: .05rem;
    width: 30%;
    text-align: center; }
  section .wrapper .disanfang .tb_line {
    width: 35%;
    margin-top: .1rem; }

  #thirdLogin {
    display: flex;
    padding: 0;
    width: 2.3rem;
    margin: 0 auto;
    margin-bottom: 0.5rem; }
  #thirdLogin li {
    width: .50rem;
    height: .50rem; }
  #thirdLogin li div {
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
    border-radius: .50rem;
    line-height: .50rem; }
  #thirdLogin li div .iconfont {
    font-size: .22rem; }
  #thirdLogin li div .icon-weixin {
    color: #5eb95e; }
  #thirdLogin li div .icon-xinlangweibo {
    color: #bd362f; }
  #thirdLogin li div .icon-QQ {
    color: #0c63ee; }

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
  .wrapper .yanzheng .messageKu {
    background-color: #a47e3c;
    color: white; }

  #fastReg {
    position: absolute;
    bottom: 1.8rem;
    width: 3.45rem; }


</style>
