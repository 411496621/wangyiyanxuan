<template>
  <div>
    <router-view />
    <Footer v-show="$route.meta.isShowFooter" />
  </div>
</template>

<script>
  import Footer from './componnts/Footer/Footer'
  export default {
    components:{
      Footer
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  body
   font-size 24px
</style>
