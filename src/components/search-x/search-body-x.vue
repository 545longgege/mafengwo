<template>
  <div class="search-body-x">
    <div class="history">
      <div class="history-head-wraper">
        <div class="history-head">
          <span class="iconfont icon-lishijilu-copy"><i>历史记录</i></span>
          <span>清除历史</span>
        </div>
      </div>
      <div class="history-body">
        <div class="list-wrap">
          <div class="history-body-list">
            <span>越南</span>
            <div class="long-string"></div>
            <span>厦门</span>
            <div class="long-string"></div>
            <span>新加坡</span>
            <div class="long-string"></div>
            <span></span>
          </div>
        </div>

      </div>
    </div>
    <div class="hot-inland">
      <div class="history-head-wraper">
        <div class="history-head">
          <span class="iconfont icon-fenleichangxianyou"><i>国内热门</i></span>
        </div>
      </div>
      <div class="history-body">
        <div class="list-wrap">
          <div class="history-body-list">
            <span>成都</span>
            <div class="long-string"></div>
            <span>上海</span>
            <div class="long-string"></div>
            <span>三亚</span>
            <div class="long-string"></div>
            <span>香港</span>
          </div>
          <div class="thin-line"></div>
        </div>
        <div class="list-wrap">
          <div class="history-body-list">
            <span>青岛</span>
            <div class="long-string"></div>
            <span>台湾</span>
            <div class="long-string"></div>
            <span>厦门</span>
            <div class="long-string"></div>
            <span>西安</span>
          </div>
          <div class="thin-line"></div>
        </div>
        <div class="list-wrap">
          <div class="history-body-list">
            <span>北京</span>
            <div class="long-string"></div>
            <span>青海</span>
            <div class="long-string"></div>
            <span></span>
            <div class="long-string"></div>
            <span></span>
          </div>
        </div>

      </div>
    </div>
    <div class="hot-outland">
      <div class="history-head-wraper">
        <div class="history-head">
          <span class="iconfont icon-guojimanyou"><i>国际热门</i></span>
        </div>
      </div>
      <div class="history-body">
        <div class="list-wrap">
          <div class="history-body-list">
            <span>日本</span>
            <div class="long-string"></div>
            <span>巴厘岛</span>
            <div class="long-string"></div>
            <span>新加坡</span>
            <div class="long-string"></div>
            <span>普吉岛</span>
          </div>
          <div class="thin-line"></div>
        </div>

        <div class="list-wrap">
          <div class="history-body-list">
            <span>曼谷</span>
            <div class="long-string"></div>
            <span>清迈</span>
            <div class="long-string"></div>
            <span>大阪</span>
            <div class="long-string"></div>
            <span>越南</span>
          </div>
          <div class="thin-line"></div>
        </div>
        <div class="list-wrap">
          <div class="history-body-list">
            <span>芽庄</span>
            <div class="long-string"></div>
            <span>东京</span>
            <div class="long-string"></div>
            <span></span>
            <div class="long-string"></div>
            <span></span>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>


<script type='text/ecmascript-6'>
    import "../../../static/libs/vue"
    import "../../../static/font-x/iconfont.css"
    export default {}
</script>

<style scoped>
  .search-body-x {
    flex: 1;
    overflow: auto;
    width: 100%; }

  .history-head-wraper {
    height: .3rem;
    background: #eee; }
  .history-head-wraper .history-head {
    margin: 0 auto;
    width: 92%;
    display: flex;
    justify-content: space-between; }
  .history-head-wraper .history-head span {
    line-height: .3rem; }
  .history-head-wraper .history-head span:nth-of-type(2) {
    font-size: .1rem;
    color: #ffa800; }
  .history-head-wraper .iconfont {
    font-size: .12rem;
    color: #ccc; }
  .history-head-wraper .iconfont i {
    color: #000;
    padding-left: .1rem; }

  .list-wrap {
    width: 92%;
    margin: 0 auto; }

  .history-body-list {
    height: .5rem;
    display: flex;
    justify-content: space-around; }
  .history-body-list span {
    width: 20%;
    line-height: .5rem;
    text-align: center; }
  .history-body-list .long-string {
    transform: translateY(0.1rem); }


</style>
