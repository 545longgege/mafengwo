<template>
  <div class="list-header">
    <ul>
      <li @click="jiantou"><i>&lt;</i></li>
      <li><span>攻略列表</span></li>
      <li><i class="iconfont icon-sousuo_sousuo"></i></li>
    </ul>
  </div>
</template>


<script type='text/ecmascript-6'>
  export default {
      methods : {
        jiantou : function(){
          location.href = "#/Strategy_c"
        }
      }
  }
</script>

<style scoped>
  .list-header {
    width: 100%;
    height: .44rem;
    border-bottom: 0.005rem solid #cccccc; }
  .list-header ul {
    height: .44rem;
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between; }
  .list-header ul li i {
    font-size: .26rem;
    line-height: .44rem;
    color: orange; }
  .list-header ul li span {
    font-size: .2rem;
    line-height: .44rem; }
</style>
