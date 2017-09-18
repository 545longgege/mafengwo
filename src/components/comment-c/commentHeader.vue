<template>
  <div class="comment-header">
    <ul>
      <li @click="hotelC"><i>&lt;</i></li>
      <li><span>蜂蜂攻略</span></li>
      <li><i></i></li>
    </ul>
    <!--简要-->
    <div class="brief">
      <div cl="0"><p>就在春熙路</p><span>402提到</span></div>
      <div cl="0"><p>服务很热情</p><span>174提到</span></div>
      <div cl="0"><p>性价比很高</p><span>402提到</span></div>
      <div cl="0"><p>在市中心</p><span>174提到</span></div>
      <div cl="0"><p>巷子里</p><span>402提到</span></div>
      <div cl="0"><p>适合家庭</p><span>174提到</span></div>
    </div>
  </div>
</template>


<script type='text/ecmascript-6'>

  import $ from "../../../static/libs/jquery-3.2.1.min"

  export default {
    mounted : function(){
        $(".brief div").on("click", function(){
          if($(this).attr("cl")==0){
          //console.log($(this).attr("cl"))
          $(this).css({"transform":"scale(1.2)","z-index":"999"}).siblings().css({"transform":"scale(1)","z-index":"9"})
          $(this).attr("cl","1").siblings().attr("cl","0")
          }else{
            $(this).css({"transform":"scale(1)"})
            $(this).attr("cl","0")
          }
        })
    },
    methods :{
      hotelC : function(){
          location.href = "#/Hotel_c"
      }
    }

  }
</script>

<style scoped>
  .comment-header {
    width: 100%;
    font-size: 0.14rem; }
  .comment-header ul {
    height: .44rem;
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between; }
  .comment-header ul li i {
    font-size: .26rem;
    line-height: .44rem;
    color: orange; }
  .comment-header ul li span {
    font-size: .2rem;
    line-height: .44rem; }
  .comment-header .brief {
    width: 90%;
    height: 1.3rem;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap; }
  .comment-header .brief div {
    width: 32%;
    text-align: center;
    margin: 0.01rem 0.01rem;
    border-radius: 0.1rem;
    border: 0.001rem solid floralwhite; }
  .comment-header .brief div span {
    font-size: 0.12rem; }
  .comment-header .brief div:nth-of-type(1) {
    height: 0.65rem;
    background: orangered;
    color: white;
    font-size: 0.22rem; }
  .comment-header .brief div:nth-of-type(1) > p {
    padding-top: 0.1rem; }
  .comment-header .brief div:nth-of-type(2) {
    height: 0.58rem;
    background: coral;
    color: white;
    font-size: 0.20rem; }
  .comment-header .brief div:nth-of-type(2) > p {
    padding-top: 0.08rem; }
  .comment-header .brief div:nth-of-type(3) {
    height: 0.50rem;
    background: orange;
    color: white;
    font-size: 0.18rem; }
  .comment-header .brief div:nth-of-type(3) > p {
    padding-top: 0.06rem; }
  .comment-header .brief div:nth-of-type(4) {
    height: 0.50rem;
    background: navajowhite;
    color: black;
    font-size: 0.16rem; }
  .comment-header .brief div:nth-of-type(4) > p {
    padding-top: 0.05rem; }
  .comment-header .brief div:nth-of-type(5) {
    height: 0.43rem;
    background: navajowhite;
    color: black;
    font-size: 0.14rem; }
  .comment-header .brief div:nth-of-type(5) > p {
    padding-top: 0.03rem; }
  .comment-header .brief div:nth-of-type(6) {
    height: 0.40rem;
    background: navajowhite;
    color: black;
    font-size: 0.12rem; }
  .comment-header .brief div:nth-of-type(6) > p {
    padding-top: 0.01rem; }
</style>
