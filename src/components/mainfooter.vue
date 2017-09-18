<template>
  <div class="home-footer">
    <ul class="home-footer-wraper">
      <li class="home-x active-x">
        <span class="iconfont icon-xianxingdiqiu"></span>
        <span>首页</span>
      </li>
      <li class="destination-x" @click = "tiaodd">
        <span class="iconfont icon-mudedi"></span>
        <span>目的地</span>
      </li>
      <li class="travel-mall-x" @click = "tiaodd2">
        <span class="iconfont icon-shouye"></span>
        <span>旅行商城</span>
      </li>
      <li class="mine-x" @click = "tiaodd3">
        <span class="iconfont icon-my"></span>
        <span>我的</span>
      </li>
    </ul>
  </div>
</template>


<script type='text/ecmascript-6'>
  import "../../static/libs/jquery"
  import $ from "../../static/libs/jquery"
  import "../../static/font-mainfooter/iconfont.css"
    export default {
        mounted : function(){
          $(".home-footer-wraper").on("click","li",function(){
            $(this).addClass('active-x').siblings().removeClass('active-x')
          })
        },
		methods : {
			tiaodd : function(){
				location.href = "#/Destination_z"
			},
			tiaodd2 : function(){
				location.href = "#/Tripshop_t"
			},
			tiaodd3 : function(){
				location.href = "#/Loginz_g"
			}
		}
    }
</script>

<style scoped>
  .home-footer {
    position: fixed;
    bottom: 0;
    height: .44rem;
    background: white;
    width: 100%; }
  .home-footer .home-footer-wraper {
    height: 100%;
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between; }
  .home-footer .home-footer-wraper li.active-x span {
    color: #ffa800; }
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
