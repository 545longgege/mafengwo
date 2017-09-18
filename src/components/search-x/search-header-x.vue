<template>
  <div class="search-header-x">
    <div class="search-header-wraper">
      <input type="text" v-bind:placeholder="msg">
      <span>取消</span>
    </div>
  </div>
</template>


<script type='text/ecmascript-6'>
    import "../../../static/libs/vue"
    import "../../../static/libs/jquery-3.2.1.min"
    import "../../../static/font-x/iconfont.css"
    export default {
          props:{
              msg:{

              }


          }

    }
</script>

<style scoped>
  .search-header-x {
    width: 92%;
    height: .44rem;
    margin: 0 auto; }

  .search-header-wraper {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between; }
  .search-header-wraper input {
    flex: 1;
    height: 100%;
    line-height: .44rem;
    outline: none;
    border: none;
    color: #ffa800;
    text-shadow: 0px 0px 0px #eee;
    -webkit-text-fill-color: transparent;
    font-size: .16rem; }
  .search-header-wraper span {
    font-size: .16rem;
    line-height: .44rem; }
</style>
