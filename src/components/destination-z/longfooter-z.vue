<template>
  <div class="home-footer">
    <ul class="home-footer-wraper">
      <li class="home-x" @click="tiaosy">
        <span class="iconfont icon-xianxingdiqiu"></span>
        <span>首页</span>
      </li>
      <li class="destination-x" id="lll">
        <span class="iconfont icon-mudedi"></span>
        <span>目的地</span>
      </li>
      <li class="travel-mall-x" @click="tiaozt">
        <span class="iconfont icon-shouye"></span>
        <span>旅行商城</span>
      </li>
      <li class="mine-x">
        <span class="iconfont icon-my" @click="tiaoxf"></span>
        <span>我的</span>
      </li>
    </ul>
  </div>
</template>


<script type='text/ecmascript-6'>
  import "../../../static/js/jquery-3.2.1.min.js"
  import $ from "../../../static/js/jquery-3.2.1.min.js"
  import "../../../static/font-x/iconfont.css"
    export default {
        methods: {
			tiaozt : function(){
				location.href = "#/Tripshop_t"
			},
			tiaoxf : function(){
				location.href = "#/Loginz_g"
			},
			tiaosy : function(){
				location.href = ""
			}
		}
    }
</script>

<style scoped>
  .home-footer {
    position: fixed;
    bottom: 0;
    z-index: 15;
    height: .44rem;
    width: 100%;
    background: #fff; }
  .home-footer .home-footer-wraper {
    height: 100%;
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between; }

    #lll{
    	color: #ffa800;
    }
  .home-footer .home-footer-wraper li {
    display: flex;
    flex-direction: column;
    justify-content: space-around; }
  .home-footer .home-footer-wraper li span {
    color: #666;
    text-align: center; }
  .home-footer .home-footer-wraper li span:nth-of-type(1) {
    font-size: .2rem; }
  .home-footer .home-footer-wraper li span:nth-of-type(2) {
    font-size: .12rem; }

</style>
