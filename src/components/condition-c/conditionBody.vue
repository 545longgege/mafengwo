<template>
  <div class="condition-body">
    <div class="choosePersonCount">
      <h6>每间房住</h6>
      <ul>
        <li class="adult">
          <span class="person">成人</span>
          <div class="count">
            <input class="sub" type="button" value="-"/>
            <input type="text" id="figure" value="2"/>
            <input class="add" type="button" value="+"/>
          </div>
        </li>
        <div class="line"></div>
        <li class="child">
          <span class="person">儿童</span>
          <div class="count">
            <input class="sub" type="button" value="-" />
            <input type="text" id="figure" value="0"/>
            <input class="add" type="button" value="+"/>
          </div>
        </li>
        <div class="line"></div>
      </ul>
    </div>
    <!--添加儿童的数量时，显示-->
    <div class="childCount">
      <h6>为了匹配合适住宿，填写儿童年龄</h6>
      <ul>

      </ul>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
  import $ from "../../../static/libs/jquery-3.2.1.min"
  export default {
    data : function(){
        return{

        }
    },
    mounted : function(){
      //adult
      var adultValue = $(".adult #figure").val();
      $(".adult .add").on("click" , function(){
        $(".adult .sub").css({"color":"#000"});
        adultValue++;
        if(adultValue >= 7){
          $(".adult .add").css({"color":"#cccccc"});
          $(".adult .add").attr({"disabled":"disabled"})
          adultValue = 7
        }
        $(".adult #figure").val(adultValue)
      })
      $(".adult .sub").on("click" ,function(){
        $(".adult .add").css({"color":"#000"});
        $(".adult .add").removeAttr("disabled");
        adultValue--;
        if(adultValue <= 1){
          adultValue = 1;
          $(".adult .sub").css({"color":"#cccccc"});
        }
        $(".adult #figure").val(adultValue);
      })

      //child
      var childValue = $(".child #figure").val();
      $(".child .sub").css({"color":"#cccccc"});
      //当点击 + 时，如果大于4时
      $(".child .add").on("click" , function(){
        $(".child .add").removeAttr("disabled")
        $(".child .sub").css({"color":"#000"});
        childValue++;
        if(childValue >=4 ){
          $(".child .add").attr({"disabled":"disabled"})
          childValue = 4;
          $(".child .add").css({"color":"#cccccc"});
        }
        $(".child #figure").val(childValue)
        $(".childCount ul").append("<li><span>第"+childValue+"位儿童</span><p><span>12岁以下</span>&nbsp;&nbsp;&nbsp;<i>&gt;</i></p></li><div class='line'></div>")
      })
      $(".child .sub").on("click" , function(){
        $(".child .add").css({"color":"#000"});
        $(".child .add").removeAttr("disabled")
        childValue--;
        if(childValue <= 0){
            $(".child .sub").css({"color":"#cccccc"});
            childValue=0;
        }
        $(".child #figure").val(childValue);
        $(".childCount ul li").eq(childValue).remove();
        $(".childCount ul .line").eq(childValue).remove();
      })
    }
  }

</script>

<style>
  .condition-body {
    width: 100%; }
  .condition-body .choosePersonCount {
    width: 96%;
    margin: 0 auto; }
  .condition-body .choosePersonCount h6 {
    color: #999999; }
  .condition-body .choosePersonCount ul {
    width: 100%; }
  .condition-body .choosePersonCount ul li {
    display: flex;
    margin-bottom: 0.15rem;
  }
  .condition-body .choosePersonCount ul li .person {
    width: 1rem;
    display: inline-block;
    margin-right: 1rem;
    line-height: 0.5rem; }
  .condition-body .choosePersonCount ul li .count{
    width: 1.6rem;
  }
  .condition-body .choosePersonCount ul li .count .sub, .condition-body .choosePersonCount ul li .count .add {
    width: 0.5rem;
    height: 0.5rem;
    line-height: 0.5rem;
    display: inline-block;
    text-align: center;
    font-size: 0.3rem;
    outline: none;
    border: none;
    background: white}
  .condition-body .choosePersonCount ul li .count input:nth-of-type(2) {
    width: 0.5rem;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: center;
    color: orange;
    font-size: 0.2rem;
    border-top: none;
    border-bottom: none;
    outline: none;
    border-left: 0.005rem solid lightgray;
    border-right: 0.005rem solid lightgray; }
  .condition-body .childCount {
    width: 96%;
    margin: 0 auto; }
  .condition-body .childCount h6 {
    color: #999999; }
  .condition-body .childCount ul li {
    width: 96%;
    margin: 0.18rem auto;
    display: flex;
    justify-content: space-between; }
  .condition-body .childCount ul li > span {
    font-size: 0.14rem;
    line-height: 0.24rem; }
  .condition-body .childCount ul li > p {
    display: flex; }
  .condition-body .childCount ul li > p span {
    color: orange;
    line-height: 0.24rem; }
  .condition-body .childCount ul li > p i {
    font-weight: 900;
    font-size: 0.2rem;
    color: #cccccc;
    line-height: 0.24rem; }
</style>
