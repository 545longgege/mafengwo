<template>
  <div class="comment-container">
    <comment-header></comment-header>
    <comment-body></comment-body>
    <comment-footer></comment-footer>
  </div>
</template>


<script type='text/ecmascript-6'>

  import CommentHeader from "./commentHeader.vue"
  import CommentBody from "./commentBody.vue"
  import CommentFooter from "./commentFooter.vue"
  export default {
      components :{
        CommentHeader,
        CommentBody,
        CommentFooter
      }
  }

</script>

<style>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
    font-weight: 100;
    font-style: normal;
    font-size: .14rem; }

  h2 {
    font-size: 0.2rem;
    line-height: 0.5rem; }

  html, body {
    height: 100%;
    width: 100%;
    font-size: 26.667vw; }

  .line {
    width: 100%;
    height: 0.01rem;
    border-bottom: 0.01rem solid #cccccc;
    padding: 0.15rem 0;
    transform: scaleY(0.5); }

  .strongLine {
    width: 100%;
    height: 0.1rem;
    border-bottom: 0.1rem solid #cccccc; }

  .thinLine {
    width: 100%;
    height: 0.05rem;
    margin: 0.05rem 0;
    border-bottom: 0.05rem solid #cccccc; }

  #app{
    width: 100%;
    height: 100%;
  }

  .comment-container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: 0.14rem; }
</style>
