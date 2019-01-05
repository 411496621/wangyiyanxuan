<template>
  <div class="find-goods">
    <mt-header fixed title="网易严选">
      <router-link to="/" slot="left">
        <i class="iconfont icon-shouye"></i>
      </router-link>
      <router-link to="/shopcart" slot="right">
        <i class="iconfont icon-gouwuche"></i>
      </router-link>
    </mt-header>
    <nav class="nav-wrapper">
      <ul class="nav-list">
        <li :class="{active:$route.path==='/findgoods/tab0'}"><router-link to="/findgoods/tab0">推荐</router-link></li>
        <li :class="{active:$route.path==='/findgoods/tab1'}"><router-link to="/findgoods/tab1">达人</router-link></li>
        <li :class="{active:$route.path==='/findgoods/tab2'}"><router-link to="/findgoods/tab2">上新</router-link></li>
        <li :class="{active:$route.path==='/findgoods/tab3'}"><router-link to="/findgoods/tab3">晒单</router-link></li>
        <li :class="{active:$route.path==='/findgoods/tab4'}"><router-link to="/findgoods/tab4">HOME</router-link></li>
      </ul>
    </nav>
      <router-view />
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus"  scoped>
  .find-goods
    width: 100%
    height: 100%
  .mint-header
     z-index 5
     height 50*2px
     color #666
     font-size 20*2px
     background #FAFAFA
     border-bottom 2px solid #E2E2E2
     >div:first-child
       position relative
     i
      font-size 24*2px
  .nav-wrapper
     background: #FAFAFA
     height 36*2px
     position fixed
     width 100%
     left: 0
     top: 100px
     z-index 5
     .nav-list
        height 100%
        display flex
        justify-content space-around
        li
         box-sizing border-box
         height 36*2px
         line-height 36*2px
         text-align center
         font-size 14*2px
         margin 0 10*2px
         padding 0 4*2px
         color #7F7F7F
         &.active
          border-bottom 4px solid #B4282D
          a
            color  #B4282D

</style>
