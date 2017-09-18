<template>
  <div class="location-fine-body">
    <localtion-swiperone></localtion-swiperone>
    <localtion-swiperTwo></localtion-swiperTwo>
    <localtion-foodplace></localtion-foodplace>
    <localtion-hotplace></localtion-hotplace>
    <localtion-onsale></localtion-onsale>
  </div>
</template>


<script type='text/ecmascript-6'>
    import LocaltionSwiperone from "./localtionswiperOne.vue"
    import LocaltionSwiperTwo from "./localtionswiperTwo.vue"
    import LocaltionFoodplace from "./localtion-foodplace.vue"
    import LocaltionHotplace from "./localtionHotplace.vue"
    import LocaltionOnsale from "./localtion-fine-onSale.vue"
    export default {
        components : {
          LocaltionSwiperone,
          LocaltionSwiperTwo,
          LocaltionFoodplace,
          LocaltionHotplace,
          LocaltionOnsale
        }
    }
</script>

<style>
  .location-fine-body {
    flex: 1;
    overflow: auto; }
  .thin-line-slight {
    height: 0;
    width: 100%;
    border-bottom: 1px solid #eee;
    transform: scaleY(0.5); }
</style>
