<template>
  <div id="air-ticket-container">
    <div class="air-ticket-header-x">
      <span class="iconfont icon-fanhui"></span>
      <span>火车票</span>
      <span></span>
    </div>
    <div class="air-ticket-body-x">
      <div class="air-ticket-body-wraper">
        <img src="../../../static/img/airticket.jpeg" class="air-img">
        <div class="dancheng-wangfan" @click="goback">
          <span class="active-x">单程</span>
          <div class="center-line"></div>
          <span>往返</span>
          <p class="underline"></p>
        </div>

        <div class="start-end-city">
          <div class="start-city">
            <div class="city">
              <i>出发城市</i>
              <input type="text" value="西安" class="fromcity" readonly/>
            </div>
          </div>
          <span class="iconfont icon-wangfan" @click="icongoback"></span>
          <div class="end-city">
            <div class="city">
              <i>到达城市</i>
              <input type="text" value="郑州" class="tocity" readonly/>
            </div>
          </div>
        </div>
        <div class="start-end-date">
          <div class="start-date">
            <div class="date">
              <span>去程日期</span>
              <input type="date" class="startTime">
            </div>
          </div>
          <div class="end-date">
            <div class="date">
              <span>返程日期</span>
              <input type="date" class="endTime">
            </div>
          </div>
        </div>
        <div class="air-thinline"></div>
        <div class="search-click-x" @click="search">
          <!--<router-link to="/searchticket">-->
            <!---->
          <!--</router-link>-->
          <span>搜索</span>

        </div>
      </div>
      <div class="eeeline"></div>
      <div class="sale-ticket-x">
        <div class="sale-left-x">
          <span class="iconfont icon-tejiaremaidianji"></span>
          <span>特价火车票</span>
          <span class="money-x">￥268起</span>
        </div>
        <div class="sale-right-x">
          <span>发现更多低价</span>
          <span class="iconfont icon-yousanjiao-copy-copy-copy"></span>
        </div>
      </div>
      <div class="logo-img-x">
        <img src="../../../static/img/fengxingwuyou.png" class="air-logo">
        <span>风行天下 行者无忧</span>
      </div>
    </div>
    <div class="air-ticket-footer-x">
      <div class="mycoupon-x">
        <span class="iconfont icon-wode-wodeyouhuiquan"></span>
        <span>我的优惠券</span>
      </div>
      <div class="footer-line-x"></div>
      <div class="myindent-x">
        <span class="iconfont icon-wodedingdan"></span>
        <span>我的订单</span>
      </div>
    </div>
  </div>
</template>


<script type='text/ecmascript-6'>
  import "../../../static/css/chooseplace.css"
  //import "../../../static/libs/jquery"
  //import $ from "../../../static/libs/jquery"
  import "../../../static/font-x/iconfont.css"
//  import fn from "../../../static/libs/jquery-3.2.1.min"
  import City from "../../../static/js/city"
    export default {
      mounted : function(){
        $(".fromcity").CityPicker();
        $(".tocity").CityPicker();

      },
        methods : {
            icongoback : function(){
              var startCity = $(".start-city").find("input").val()
              var endCity = $(".end-city").find("input").val()
              $(".end-city").find("input").val(startCity)
              $(".start-city").find("input").val(endCity)
            },
          goback : function(){
            var underlineLeft =$(".underline").css("left");
            $(this).addClass('active-x').siblings().removeClass('active-x')
            var idx = $(this).index()
            var spanLength = $(this).width()
            var lineLength = $(".center-line").width()
            //console.log(lineLength)
            //console.log(spanLength)
            // console.log(idx)
            if(idx==0){
              $(".underline").stop(false).animate({left:parseInt(underlineLeft)},"1000")
            }else if(idx==2){
              $(".underline").stop(false).animate({left:spanLength+parseInt(underlineLeft)},"1000")
            }
          },
          search : function(){
            var startTime = $(".startTime").val()
            //alert(startTime)

            //console.log(1)]
            if(startTime == ""){
              alert("请选择出发日期")
            }else{
              var startPlaceAll = $(".fromcity").val()
			  var endPlaceAll = $(".tocity").val()
			  if(startPlaceAll.charAt(startPlaceAll.length-1)=="市"){
				var startPlace = startPlaceAll.substring(0,startPlaceAll.length-1)
			  }else{
				var startPlace = startPlaceAll
			  }
			  if(endPlaceAll.charAt(endPlaceAll.length-1)=="市"){
				var endPlace = endPlaceAll.substring(0,endPlaceAll.length-1)
			  }else{
				var endPlace = endPlaceAll
			  }
              console.log(startPlace)
              //var endPlaceAll = $(".tocity").val()
			  //var endPlace = endPlaceAll.substring(0,endPlaceAll.length-1)
              console.log(endPlace)
              localStorage.setItem("startTime",startTime)
              localStorage.setItem("startPlace",startPlace)
              localStorage.setItem("endPlace",endPlace)



              location.href = "#/Searchticket_x"
            }

          }
        }



//        function(){
//          $(".fromcity").CityPicker();
//          $(".tocity").CityPicker();
//
//
//          var underlineLeft =$(".underline").css("left")
//
//
//          $(".dancheng-wangfan").on("click","span",function(){
//            $(this).addClass('active-x').siblings().removeClass('active-x')
//            var idx = $(this).index()
//            var spanLength = $(this).width()
//            var lineLength = $(".center-line").width()
//            //console.log(lineLength)
//            //console.log(spanLength)
//            // console.log(idx)
//            if(idx==0){
//              $(".underline").stop(false).animate({left:parseInt(underlineLeft)},"1000")
//            }else if(idx==2){
//              $(".underline").stop(false).animate({left:spanLength+parseInt(underlineLeft)},"1000")
//            }
//          })
//
//          $(".icon-wangfan").on("click",function(){
//            var startCity = $(".start-city").find("input").val()
//            var endCity = $(".end-city").find("input").val()
//            $(".end-city").find("input").val(startCity)
//            $(".start-city").find("input").val(endCity)
//          })
//          $(".search-click-x").on("click",function(){
//            var startTime = $(".startTime").val()
//            //alert(startTime)
//
//            //console.log(1)]
//            if(startTime == ""){
//              alert("请选择出发日期")
//            }else{
//              var startPlace = $(".fromcity").val()
//              //console.log(startPlace)
//              var endPlace = $(".tocity").val()
//              //console.log(endPlace)
//              sessionStorage.setItem("startTime",startTime)
//              sessionStorage.setItem("startPlace",startPlace)
//              sessionStorage.setItem("endPlace",endPlace)
//
//
//
//              location.href = "trainticket-x.html"
//            }
//
//          })
//        }
    }
</script>

<style scoped>
  #air-ticket-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%; }

  .air-ticket-header-x {
    display: flex;
    width: 90%;
    height: .44rem;
    margin: 0 auto; }
  .air-ticket-header-x span {
    line-height: .44rem; }
  .air-ticket-header-x span:nth-of-type(1) {
    width: .2rem;
    font-size: .2rem;
    color: #ffa800; }
  .air-ticket-header-x span:nth-of-type(2) {
    flex: 1;
    text-align: center;
    font-size: .16rem; }
  .air-ticket-header-x span:nth-of-type(3) {
    width: .2rem; }

  .air-ticket-body-x {
    width: 100%;
    flex: 1;
    overflow: auto; }

  .air-img {
    height: 1.5rem;
    width: 100%;
    display: block; }

  .dancheng-wangfan {
    height: .4rem;
    display: flex;
    justify-content: space-around;
    width: 100%;
    background: #eee;
    position: relative; }
  .dancheng-wangfan span {
    width: 50%;
    line-height: .4rem;
    text-align: center; }
  .dancheng-wangfan span.active-x {
    color: #ffa800; }

  .start-end-city {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
    height: .7rem; }
  .start-end-city .end-city {
    width: 48%;
    display: flex;
    justify-content: flex-end;
    border-bottom: 1px solid #eee; }
  .start-end-city .end-city i {
    text-align: right; }
  .start-end-city .end-city input {
    text-align: right; }
  .start-end-city .start-city {
    width: 48%;
    display: flex;
    justify-content: flex-start;
    border-bottom: 1px solid #eee; }
  .start-end-city .city {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column; }
  .start-end-city span {
    line-height: .7rem;
    font-size: .2rem;
    color: #ffa800; }
  .start-end-city i {
    font-size: .12rem;
    color: #666;
    line-height: .2rem; }
  .start-end-city input {
    font-size: .18rem;
    line-height: .3rem;
    border: none;
    outline: none; }

  .start-end-date {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
    height: .7rem; }
  .start-end-date .end-date {
    width: 48%;
    display: flex;
    justify-content: flex-end; }
  .start-end-date .end-date span {
    text-align: right; }
  .start-end-date .end-date input {
    text-align: right; }
  .start-end-date .start-date {
    width: 48%;
    display: flex;
    justify-content: flex-start; }
  .start-end-date .date {
    display: flex;
    justify-content: center;
    flex-direction: column; }
  .start-end-date span {
    font-size: .12rem;
    color: #666;
    line-height: .2rem; }
  .start-end-date input {
    border: none;
    outline: none;
    width: 100%;
    font-size: .18rem;
    line-height: .3rem; }

  .search-click-x {
    width: 90%;
    display: flex;
    height: .5rem;
    margin: 0 auto;
    padding: .1rem 0; }
  .search-click-x span {
    line-height: .3rem;
    background: #ffa800;
    width: 100%;
    color: #fff;
    text-align: center; }

  .sale-ticket-x {
    display: flex;
    width: 90%;
    margin: 0 auto;
    justify-content: space-between;
    height: .34rem; }
  .sale-ticket-x span {
    line-height: .34rem; }
  .sale-ticket-x .sale-left-x {
    width: 50%;
    display: flex;
    justify-content: space-around; }
  .sale-ticket-x .sale-left-x span:nth-of-type(3) {
    font-size: .12rem; }
  .sale-ticket-x .sale-right-x span {
    font-size: .12rem;
    color: #666; }

  .logo-img-x {
    height: 1.5rem;
    background: #eee;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center; }
  .logo-img-x img {
    width: 100%;
    transform: translateX(40%); }
  .logo-img-x span {
    font-size: .12rem;
    color: #ccc;
    text-align: center; }

  .air-ticket-footer-x {
    height: .6rem;
    display: flex;
    justify-content: space-around; }
  .air-ticket-footer-x span {
    text-align: center; }
  .air-ticket-footer-x .iconfont {
    color: #ffa800;
    font-size: .2rem; }

  .mycoupon-x {
    display: flex;
    justify-content: center;
    flex-direction: column; }

  .myindent-x {
    display: flex;
    justify-content: center;
    flex-direction: column; }

  .center-line {
    width: 1px;
    transform: scaleX(0.5) translateY(0.1rem);
    border-left: 1px solid #ccc;
    height: .2rem; }

  .underline {
    position: absolute;
    background: #ffa800;
    height: 2px;
    width: .7rem;
    bottom: 0;
    left: .58rem; }

  .air-thinline {
    height: 1px;
    border-bottom: 1px solid #eee;
    transform: scaleY(0.5);
    width: 90%;
    margin: 0 auto; }

  .eeeline {
    height: .15rem;
    background: #eee; }

  .footer-line-x {
    height: .3rem;
    width: 1px;
    border-left: 1px solid #eee;
    transform: translateY(0.1rem); }

</style>
