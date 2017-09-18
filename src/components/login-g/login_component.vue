<template>
  <div>
    <login-header></login-header>
    <login-body></login-body>
  </div>


</template>


<script type='text/ecmascript-6'>
  import LoginHeader from "./login_header.vue";
  import LoginBody from "./login_body.vue";

  export default {
    components:{
      LoginHeader,
      LoginBody
    }
  }

</script>

<style scoped>

</style>
