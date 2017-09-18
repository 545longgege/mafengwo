<template>
  <div class="strategy-header">
    <ul>
      <li @click = "retuAddress"><i>&lt;</i></li>
      <li><span>找攻略</span></li>
      <li><i></i></li>
    </ul>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    methods :{
      retuAddress : function(){
          location.href = "#/Destination_z"
      }
    }
  }
</script>

<style scoped>
  .strategy-header {
    width: 100%;
    height: .44rem;
    background:#fff;
  }
  .strategy-header ul {
    height: .44rem;
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .strategy-header ul li i {
    font-size: .26rem;
    line-height: .44rem;
    color: orange;
  }
  .strategy-header ul li span {
    font-size: .2rem;
    line-height: .44rem;
  }
</style>
