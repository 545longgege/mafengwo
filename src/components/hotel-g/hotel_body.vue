<template>
  <section>
    <div class="wrapper">
      <div class="topic">
        <h1>有私人沙滩的超性价比普吉五星酒店！</h1>
        <div class="logo">
          <img src="../../../static/img/hotellogo.png"/>

          <div>
            <p>酒店专家助理</p>
            <div class="shijian">
              <span>2017-05-19</span>
              <span>阅读 174797</span>
            </div>
          </div>
        </div>
      </div>
      <div class="tb_line"></div>
      <div class="text-cont">
        <p>
          比基尼、天体海滩、我要去晒太阳！<br/>
          普吉岛的艳阳下，海上总是煮著白的黄的黑的各色饺子...不，是来自世界的各国度假旅客们，回头一望，沙滩上则是烤著各色鲜肉、腊肉，密密麻麻，到底何处才有个僻静之地？
        </p>
        <p>
          你的困扰我听到了！文章就是奔著让你享受私密的度假时光而去的，为你看过了千百个普吉酒店，精挑细选了10家拥有私人海滩的五星酒店，且淡季价格还不到800元，你说是不是对你特别好！<(￣︶￣)>
        </p>
        <h3>✔这些酒店真的棒棒哒</h3>
        <p>亲子五星酒店</p>
        <h4>普吉岛圣塔拉海滩度假酒店(卡伦海滩)</h4>
        <h4>乐古浪悦椿度假酒店(邦涛海滩)</h4>
        <h4>蜜月五星酒店</h4>
        <h4>都喜天阙拉古那酒店(邦涛海滩)</h4>
        <h4>奥特瑞格拉古娜海滩度假酒店(邦涛海滩)</h4>
        <h4>铂尔曼普吉岛阿卡狄亚酒店(奈通海滩)</h4>
      </div>
      <div class="photo-cont">
        <h3>卡伦海滩</h3>
        <h4>普吉岛圣塔拉海滩度假酒店</h4>
        <p>♥适合人群：亲子</p>
        <div>
          <img src="../../../static/img/hotel1.jpeg">
          <p>
            这间酒店是著名的亲子酒店，有好几个泳池，大人小孩的都有，还有两条滑水道和漂流，带著小盆友来的家庭在酒店就可以玩好久。
          </p>
          <img src="../../../static/img/hotel2.jpeg">
          <p>
            酒店的晚餐每天都有不同主题，还有沙滩自助，还是满有气氛的，带著女票来这儿求婚，带老婆来过周年什么的都特别适合。
          </p>
          <img src="../../../static/img/hotel3.jpeg">
          <p>
            由于是私人沙滩，人潮不是那么多。扫个全景给你看看，是不是人很少？
          </p>
          <img src="../../../static/img/hotel4.jpeg">
          <p>
            面海的房型，超大浴缸设在阳台上，外面是海滩，你可以一边听海声，两个人一起洗...你懂的☺☺☺
          </p>
          <div class="../../../static/goyuding">
            <p>▼前往预定：</p>
            <a href="">
              <div class="fengping">
                <img src="../../../static/img/hoteljz1.png">
                <div>
                  <p>普吉盛泰澜卡伦海滩度假村</p>
                  <span>蜂评/29</span>
                  <span>游记提及</span>
                </div>

              </div>
              <div class="desc">
                <strong>酒店介绍</strong>
                真正有了度假的感觉，享受着阳光、沙滩、海浪。酒店的泳池，沙滩、大海、酒店真是零距离，让我们随意穿梭。
              </div>
            </a>
          </div>
        </div>

      </div>
    </div>


  </section>

</template>


<script type='text/ecmascript-6'>

  import $ from "../../../static/libs/jquery-1.11.1.js";

  import "../../../node_modules/vue/dist/vue.js";


  export default {
    data:function(){
      return{

      }
    },



  }





</script>

<style >
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
    margin-bottom: .2rem; }
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
