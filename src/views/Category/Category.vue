<template>
  <div>
    <div class="header">
       <div class="header-content">
         搜索商品,共19487款好物
       </div>
    </div>
    <div class="main">
      <div class="list-menu">
        <div class="menu-wrapper">
           <ul>
              <li>
                <span>推荐专区</span>
              </li>
           </ul>
        </div>
      </div>
      <div class="list-detail">
        <div class="detail-wrapper">
          <div class="banner">
            <img src="http://yanxuan.nosdn.127.net/135cfb8a563c983af4710a24f3b34f85.jpg" alt="">
          </div>
          <div class="text">推荐专区分类</div>
          <ul>
            <li>
              <div>
                <img src="http://yanxuan.nosdn.127.net/1fa42bd292337aaaf80612b6e208099b.png" alt="">
                <span>真丝满价折</span>
              </div>
            </li>


          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
   .header
      padding 0 30px
      height 88px
      position fixed
      left: 0
      right: 0
      .header-content
        width: 690px
        height: 56px
        background #ededed
        font-size 28px
        color #666
        text-align center
        line-height 56px
        border-radius 10px
        margin-top 16px

   .main
      padding-top 88px
      position relative
      &:before
        content ''
        display block
        height 1px
        width 100%
        background:rgba(0,0,0,0.15)
        position absolute
        top 88px
      &:after
        content ''
        display block
        height 1104px
        width 1px
        background:rgba(0,0,0,0.15)
        position absolute
        left 162px
        top 88px
      .list-menu
         position fixed
         top 88px
         left 0
         bottom 0
         width: 162px
         z-index 3
         font-size 28px
         color #333
         .menu-wrapper
            max-height 1104px
            padding-top 40px
            overflow hidden
            ul
              li
                width 100%
                height 76px
                line-height 76px
                text-align center
                margin-top 20px
                &.active
                  position relative
                  span
                    font-size 36px
                    line-height 76px
                    color #b4282d
                    font-weight bold
                  &:before
                    content  ''
                    position absolute
                    top 0
                    left 0
                    bottom  0
                    width 6px
                    background-color #b4282d
                span
                  display block
                  line-height 56px



      .list-detail
         margin-left 162px
         height 1104px
         overflow hidden
         font-size 24px
         color #333
         .detail-wrapper
            padding 30px 30px 20px 30px
            .banner
              height 192px
              img
                width: 100%
                height: 100%
            .text
              height 108px
              line-height 108px
              text-align center
            ul
              li
                display inline-block
                margin-right 28px
                font-size 0
                width: 144px
                vertical-align top
                img
                  width: 144px
                  height: 144px
                span
                  display block
                  height: 72px
                  line-height 34px
                  text-align center
                  font-size 24px
</style>
