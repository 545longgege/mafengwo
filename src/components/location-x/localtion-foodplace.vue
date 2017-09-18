<template>
  <div class="food-place">
    <ul>
      <li>
        <span>行程规划</span>
        <span>已售13250</span>
      </li>
      <li style="position: relative">
        <span>兵马俑</span>
        <span>已售26801</span>
        <span class="iconfont icon-remen"></span>
      </li>
      <li>
        <span>华山</span>
        <span>已售8003</span>
      </li>
      <li>
        <span>市内景点</span>
        <span>已售4903</span>
      </li>
      <li>
        <span>博物馆大集合</span>
        <span>已售14553</span>
      </li>
      <li>
        <span>美食/夜生活</span>
        <span>已售17</span>
      </li>
    </ul>
  </div>
</template>


<script type='text/ecmascript-6'>
  import "../../../static/font-x/iconfont.css"
    export default {}
</script>

<style scoped>
  .food-place {
    height: 1.6rem;
    padding: .1rem 0;
    background: #eee; }
  .food-place ul {
    display: flex;
    justify-content: space-between;
    background: #fff;
    flex-wrap: wrap; }
  .food-place ul li {
    width: 33.33%;
    height: .7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; }
  .food-place ul li span:nth-of-type(2) {
    color: #ccc;
    font-size: .1rem; }
  .food-place ul li:nth-of-type(1) {
    border-right: 0.005rem solid #eee;
    border-bottom: 0.005rem solid #eee; }
  .food-place ul li:nth-of-type(2) {
    border-right: 0.005rem solid #eee;
    border-bottom: 0.005rem solid #eee; }
  .food-place ul li:nth-of-type(2) .iconfont {
    position: absolute;
    right: 0;
    top: 0;
    color: red; }
  .food-place ul li:nth-of-type(3) {
    border-bottom: 0.005rem solid #eee; }
  .food-place ul li:nth-of-type(4) {
    border-right: 0.005rem solid #eee; }
  .food-place ul li:nth-of-type(5) {
    border-right: 0.005rem solid #eee; }
</style>
