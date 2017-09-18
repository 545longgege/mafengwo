<template>
  <div id="train-ticket-x">
    <div class="train-ticket-wraper">
      <div class="ticket-head">
        <div class="head-top">
          <span class="iconfont icon-fanhui" style="font-size: .26rem;"></span>
          <div>
            <span>{{start}}</span>
            <span><></span>
            <span>{{gotodata}}</span>
          </div>
          <span>· · ·</span>
        </div>
        <div class="head-bot">
          <span>前一天</span>
          <span>{{starttime}}</span>
          <span>后一天</span>
        </div>
      </div>
	  <div id="choiceness-loading">
		<div class="content1">
		    <div class="circle1"></div>
		    <div class="circle2"></div>
		    <div class="circle3"></div>
		    <div class="circle4"></div>
		</div>
		<div class="content2">
		    <div class="circle1"></div>
		    <div class="circle2"></div>
		    <div class="circle3"></div>
		    <div class="circle4"></div>
		</div>
	</div>
      <div class="ticket-body">
        <div class="ticket-info-wrap" v-for="n in trainDataList" >
          <div class="ticket-info">
            <div class="ticket-info-top">
              <span>{{n.num}}</span>
              <div>
                <span>{{n.fromCity}}</span>

                <span>{{n.fromTime}}</span>
              </div>
              <span>{{parseInt(n.usedTime/60)}}时{{n.usedTime%60}}分</span>
              <div>
                <span>{{n.toCity}}</span>
                <span>{{n.toTime}}</span>
              </div>

            </div>
            <div class="ticket-info-bot" v-if="n.num.indexOf('G')>=0">
              <div v-if="n.ticketInfo.businessseat !== undefined">
                <span>{{n.ticketInfo.businessseat.ticketName.substring(0,2)}}:</span>

                <span v-show="isShow==true">￥{{n.ticketInfo.businessseat.price}}</span>
                <span v-show="isShow==false">{{n.ticketInfo.businessseat.ticketNum}}张</span>
              </div>
              <div v-if="n.ticketInfo.firstseat !== undefined">
                <span>{{n.ticketInfo.firstseat.ticketName.substring(0,2)}}:</span>
                <span v-show="isShow==true">￥{{n.ticketInfo.firstseat.price}}</span>
                <span v-show="isShow==false">{{n.ticketInfo.firstseat.ticketNum}}张</span>
              </div>
              <div v-if="n.ticketInfo.secondseat !== undefined">
                <span>{{n.ticketInfo.secondseat.ticketName.substring(0,2)}}:</span>
                <span v-show="isShow==true">￥{{n.ticketInfo.secondseat.price}}</span>
                <span v-show="isShow==false">{{n.ticketInfo.secondseat.ticketNum}}张</span>
              </div>
            </div>
            <div class="ticket-info-bot" v-if="n.num.indexOf('D')>=0">
              <div v-if="n.ticketInfo.secondseat !== undefined">
                <span>{{n.ticketInfo.secondseat.ticketName.substring(0,2)}}:</span>

                <span v-show="isShow==true">￥{{n.ticketInfo.secondseat.price}}</span>
                <span v-show="isShow==false">{{n.ticketInfo.secondseat.ticketNum}}张</span>
              </div>
              <div v-if="n.ticketInfo.softsleeperdown !== undefined">
                <span>{{n.ticketInfo.softsleeperdown.ticketName.substring(0,2)}}:</span>
                <span v-show="isShow==true">￥{{n.ticketInfo.softsleeperdown.price}}</span>
                <span v-show="isShow==false">{{n.ticketInfo.softsleeperdown.ticketNum}}张</span>
              </div>
              <div v-if="n.ticketInfo.noseat !== undefined">
                <span>{{n.ticketInfo.noseat.ticketName.substring(0,2)}}:</span>
                <span v-show="isShow==true">￥{{n.ticketInfo.noseat.price}}</span>
                <span v-show="isShow==false">{{n.ticketInfo.noseat.ticketNum}}张</span>
              </div>
            </div>
            <div class="ticket-info-bot" v-if="n.num.indexOf('D')<0&n.num.indexOf('G')<0">
              <div v-if="n.ticketInfo.softsleeperdown !== undefined">
                <span>{{n.ticketInfo.softsleeperdown.ticketName.substring(0,2)}}:</span>

                <span v-show="isShow==true">￥{{n.ticketInfo.softsleeperdown.price}}</span>
                <span v-show="isShow==false">{{n.ticketInfo.softsleeperdown.ticketNum}}张</span>
              </div>
              <div v-if="n.ticketInfo.hardsleepermid !== undefined">
                <span>{{n.ticketInfo.hardsleepermid.ticketName.substring(0,2)}}:</span>
                <span v-show="isShow==true">￥{{n.ticketInfo.hardsleepermid.price}}</span>
                <span v-show="isShow==false">{{n.ticketInfo.hardsleepermid.ticketNum}}张</span>
              </div>
              <div v-if="n.ticketInfo.hardseat !== undefined">
                <span>{{n.ticketInfo.hardseat.ticketName.substring(0,2)}}:</span>
                <span v-show="isShow==true">￥{{n.ticketInfo.hardseat.price}}</span>
                <span v-show="isShow==false">{{n.ticketInfo.hardseat.ticketNum}}张</span>
              </div>
              <div v-if="n.ticketInfo.noseat !== undefined">
                <span>{{n.ticketInfo.noseat.ticketName.substring(0,2)}}:</span>
                <span v-show="isShow==true">￥{{n.ticketInfo.noseat.price}}</span>
                <span v-show="isShow==false">{{n.ticketInfo.noseat.ticketNum}}张</span>
              </div>
            </div>
          </div>
          <div class="thin-line-ticket"></div>
        </div>
      </div>
      <div class="ticket-foot">
        <span class="surplusticket" @click ="surplustickets">票价</span>
        <span class="ticketprice" @click ="surplusticket">余票</span>
      </div>
    </div>
	
  </div>
  
</template>


<script type='text/ecmascript-6'>
  import "../../../static/libs/jquery"
  import $ from "../../../static/libs/jquery"
  import "../../../static/font-x/iconfont.css"
    export default {
      data : function(){
        return{
          start:"",
          gotodata:"",
          starttime:'',
          trainDataList:[],
          isShow : true
        }
      },
        mounted : function(){
          var fromCity = localStorage.getItem("startPlace")
          var toCity = localStorage.getItem("endPlace")
          var searchTime = localStorage.getItem("startTime")
          this.start=fromCity
          this.gotodata=toCity
          this.starttime=searchTime
            $.ajax({
              type : "get",
              url : "http://route.showapi.com/909-1",
              //url : "../../../static/data/city1.json",
              data : {
                   showapi_appid : "39624",
                   showapi_sign : "7be0eb8a64594cc899e0cde72a1dfeff",
                   from : fromCity,
                   to : toCity,
                   trainDate : searchTime
              },
              beforeSend : function(){
              $('.ticket-body').hide()
              $('#choiceness-loading').show()
              },
                    error : function(XmlHttpRequest,textStatus,errorThrown){
                        //alert("操作失败！")
                      },
                    success : function(data){
                $('.ticket-body').show()
                $('#choiceness-loading').hide()
                 this.trainDataList= data.showapi_res_body.trains;
                 //console.log(this.trainDataList[0].ticketInfo.hardsleepermid.price)
//                 console.log(this.trainDataList.length)
                 console.log(this.trainDataList.usedTime)
               }.bind(this)
              })
          //this.datalist=data

        },
      computed : {
            useTime : function(){
                return (parseInt((this.trainDataList.usedTime)/60)+"时"+((this.trainDataList.usedTime)%60)+"分")
            }
      },
      methods : {
        surplusticket : function(){
            this.isShow = false
          $(".ticketprice").css("color","#337ab7")
          $(".surplusticket").css("color","#fff")
        },
        surplustickets : function(){
          this.isShow = true
          $(".ticketprice").css("color","#fff")
          $(".surplusticket").css("color","#337ab7")
        }
      }
    }
</script>

<style scoped>
#choiceness-loading{
	height: .4rem;
	width: .4rem;
	margin: 2rem auto;
	position: relative;
}
.content1,.content2{width:100%;height:100%;position:absolute;left:0;top:0;}
.content1 div,.content2 div{width:.1rem;height:.1rem;background:#000; border-radius:50%;position:absolute;animation:move 2s infinite linear}
.content2{transform:rotate(45deg)}
.circle1{left:0;top:0;}
.circle2{right:0;top:0}
.circle3{right:0;bottom:0}
.circle4{left:0;bottom:0}

.content1 .circle1{animation-delay:-0.1s}
.content2 .circle1{animation-delay:-0.3s}
.content1 .circle2{animation-delay:-0.5s}
.content2 .circle2{animation-delay:-0.7s}
.content1 .circle3{animation-delay:-0.9s}
.content2 .circle3{animation-delay:-1.1s}
.content1 .circle4{animation-delay:-1.3s}
.content2 .circle4{animation-delay:-1.5s}
@keyframes move{
	0%{transform:scale(1)}
	50%{transform:scale(0)}
	100%{transform:scale(1)}
	}


  #train-ticket-x {
    width: 100%;
    height: 100%; }

  .train-ticket-wraper {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    justify-content: space-between; }

  .train-ticket-wraper {
    width: 100%; }

  .ticket-head {
    width: 100%; }
  .ticket-head span {
    color: #fff; }
  .ticket-head .head-top {
    height: .44rem;
    width: 100%;
    padding: 0 .1rem;
    background: #337ab7;
    display: flex;
    justify-content: space-between;
    align-items: center; }
  .ticket-head .head-top div span {
    font-size: .16rem; }
  .ticket-head .head-bot {
    height: .36rem;
    background: #0086b3;
    display: flex;
    justify-content: space-between; }
  .ticket-head .head-bot span {
    text-align: center;
    line-height: .36rem; }
  .ticket-head .head-bot span:nth-of-type(1) {
    width: .8rem;
    background: #31b0d5; }
  .ticket-head .head-bot span:nth-of-type(2) {
    flex: 1; }
  .ticket-head .head-bot span:nth-of-type(3) {
    width: .8rem;
    background: #31b0d5; }

  .ticket-body {
    flex: 1;
    overflow: auto; }

  .ticket-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: .6rem;
    width: 96%;
    margin: 0 auto;
    padding: .05rem 0; }
  .ticket-info .ticket-info-top {
    display: flex;
    justify-content: space-between;
    align-items: center; }
  .ticket-info .ticket-info-top div {
    width: 25%;
    display: flex;
    justify-content: space-around;
    flex-direction: column; }
  .ticket-info .ticket-info-top div span:nth-of-type(2) {
    font-size: .12rem;
    color: #337ab7; }
  .ticket-info .ticket-info-top > span {
    width: 25%; }
  .ticket-info .ticket-info-top > span:nth-of-type(2) {
    font-size: .12rem;
    color: #ccc; }
  .ticket-info .ticket-info-bot {
    display: flex;
    justify-content: flex-start; }
  .ticket-info .ticket-info-bot div {
    width: 25%; }
  .ticket-info .ticket-info-bot div span {
    font-size: .12rem; }

  .ticket-foot {
    display: flex;
    justify-content: space-around;
    height: .44rem;
    background: #3c3c3c; }
  .ticket-foot span {
    width: 50%;
    text-align: center;
    line-height: .44rem; }
  .ticket-foot span:nth-of-type(1) {
    color: #337ab7;
    border-right: 0.005rem solid black; }
  .ticket-foot span:nth-of-type(2) {
    color: #fff; }

  .thin-line-ticket {
    height: 0;
    width: 100%;
    color: #ccc;
    border-bottom: 1px solid #ccc;
    transform: scaleY(0.5); }


</style>
