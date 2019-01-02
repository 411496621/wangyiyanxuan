<template>
  <div id="footer">
    <div class="item " @click="$router.push('/home')" :class="{active:$route.path==='/home'}">
      <i class="iconfont icon-shouye"></i>
      <span>首页</span>
    </div>
    <div class="item" @click="$router.push('/category')" :class="{active:$route.path==='/category'}">
      <i class="iconfont icon-category"></i>
      <span>分类</span>
    </div>
    <div class="item" @click="$router.push('/findgoods')" :class="{active:$route.path==='/findgoods'}">
      <i class="iconfont icon-cubelifangti"></i>
      <span>识物</span>
    </div>
    <div class="item" @click="$router.push('/shopcart')" :class="{active:$route.path==='/shopcart'}">
      <i class="iconfont icon-gouwuche"></i>
      <span>购物车</span>
    </div>
    <div class="item" @click="$router.push('/profile')" :class="{active:$route.path==='/profile'}">
      <i class="iconfont icon-geren"></i>
      <span>个人</span>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  #footer
    width 100%
    bottom 0
    height 80px
    display flex
    background: #fff
    top-border-1px(#ccc)
    @extends .border-1px
    position fixed
    .item
      height 50px
      flex 1
      display flex
      flex-direction column
      align-items center
      &.active
        color #BF4248
        i
         font-weight bold
      span
        margin-top 5px
      i
        font-size 36px
        margin-top 10px
</style>
