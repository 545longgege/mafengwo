<template>
  <div class="condition-header">
    <ul>
      <li @click="sure"><i>&lt;</i></li>
      <li><span>入住条件</span></li>
      <li @click="sure"><span>确定</span></li>
    </ul>
  </div>
</template>


<script type='text/ecmascript-6'>

  import $ from "../../../static/libs/jquery-3.2.1.min"

  export default {
    methods:{
      sure:function(){
        location.href = '#/Hotel_c'
      }
    },
    mounted : function(){
      $(".condition-header ul li:nth-of-type(3)").on("click" , function(){
        var countObj = {
          adultCount: $(".adult #figure").val(),
          childCount: $(".child #figure").val()
        }
        var str = JSON.stringify(countObj);
        localStorage.setItem("adultCount" , str)
      })
    }
  }

</script>

<style scoped>
  .condition-header {
    width: 100%;
    height: .44rem;
    border-bottom: 0.005rem solid lightgray; }
  .condition-header ul {
    height: .44rem;
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between; }
  .condition-header ul li i {
    font-size: .26rem;
    line-height: .44rem;
    color: orange; }
  .condition-header ul li span {
    font-size: .2rem;
    line-height: .44rem; }
  .condition-header ul li:nth-of-type(3) span {
    color: orange; }
</style>
