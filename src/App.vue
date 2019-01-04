<template>
  <div>
    <transition name="show">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
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
   .show-enter-active,.show-leave-active
      transition opacity .5s
   .show-enter,.show-leave-to
      opacity 0
</style>
