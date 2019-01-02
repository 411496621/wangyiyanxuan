<template>
  <div>
    <div class="header">
      <div class="header-top">
        <div class="left">网易严选</div>
        <div class="input-text">
          <span class="placeholder">搜索商品,共19959款好物</span>
        </div>
        <div class="right">登录</div>
      </div>
      <div class="nav-wrapper">
        <div class="tabs">
          <div class="wrapper">
            <ul class="content">
              <li :class="{active:index===activeIndex}"
                  @click="activeIndex=index"   v-for="(Item,index) in navArr" :key="index">{{Item}}</li>
            </ul>
          </div>
        </div>
        <div class="arrow">
          <span>&#8595;</span>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/089fdc9bfdc75ccfbe9c349d0096804b.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/45e2a2c3cf3e6881fbbcdf0b4f1a54e8.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/22c9df75da89c6a8ea7aa99287fb5d67.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/0dde49bdc6a317125c1a051a81cce8d4.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/96cf611743d7b382c11031f29152fa04.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/5c34dc433aabb6f237dc726ae6087c5f.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/df6d04118fb06870b7d01b868dac7829.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
          </div>
        </div>
        <div id="pages" class="swiper-pagination"></div>
      </div>
      <div class="service-wrapper">
         <ul class="service-list">
           <li>网易自营品牌</li>
           <li>30天无忧退货</li>
           <li>48小时快速退款</li>
         </ul>
      </div>
      <div class="catelist-wrapper">
          <div class="cateList">
            <a href="javascript:;" v-for="(Item,index) in cateList" :key="index">
              <img :src="Item.subCateList[0].wapBannerUrl" alt="">
              <span>{{Item.name}}</span>
            </a>
          </div>
      </div>
      <Split />
      <div class="rookie-wrapper">
         <div class="rookie-header">
            <span>新人专享礼</span>
         </div>
         <div class="rookie-content">
           <div class="left"></div>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import "swiper/dist/css/swiper.min.css"
  import Swiper from "swiper"
  import {mapState} from "vuex"
  export default {
    data(){
      return {
        activeIndex:0,
        navArr:['居家','鞋包配饰','服装','电器','洗护','饮食','餐厨','婴童','文体','特色区']
      }
    },
    mounted () {
      new BScroll('.wrapper',{
        scrollX:true
      })
      new Swiper('.swiper-container', {
        //autoplay: true,//可选选项，自动滑动
        loop:true,
        pagination: {
          el: '.swiper-pagination',
        }
      })
      this.$store.dispatch('getCateList')
      console.log(this)
    },
    computed:{
      ...mapState({
        cateList:state=> state.cateList.cateList
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
   @import "../../common/stylus/mixins.styl"
  .header
    position fixed
    width 100%
    left 0
    top 0
    background: #fff
    .header-top
      padding 12px 30px
      clearFix()
      >div
       float left
       &.left
        font-size 36px
        font-weight bold
        margin-right 15px
        margin-top 2px
        line-height 58px
       &.input-text
        padding 14px 50px
        background: #EDEDED
        font-size 27px
        border-radius 5px
        color #666
        margin-top 7px
       &.right
        border 1px solid #BF4248
        color #BF4248
        padding 7px 10px
        border-radius 6px
        margin-left 18px
        margin-top 13px



    .nav-wrapper
       height 60px
       position relative
       .tabs
          width 100%
          box-sizing border-box
          padding-right 100px
          padding-left 30px
          .wrapper
             width 100%
             position relative
             height 63px
             overflow hidden
             .content
               position absolute
               left 0
               top 0
               white-space nowrap
               li
                display inline-block
                height 60px
                padding 0 20px
                line-height 60px
                font-size 27px
                &.active
                  color #BF4248
                  border-bottom 3px solid #BF4248

       .arrow
          position absolute
          right 0
          top 0
          width 100px
          height 100%
          text-align center
          line-height 60px

  .main
    padding-top 152px
    .service-wrapper
       .service-list
          width 100%
          box-sizing border-box
          padding 0 15px
          display flex
          height 70px
          justify-content space-around
          align-items center
          li
            color #BF4248

    .catelist-wrapper
       background: #fff
       margin-bottom 35px
      .cateList
        clearFix()
        a
         float left
         margin 10px 20px
         display flex
         flex-direction column
         align-items center
         color #333
         img
          width 110px
          height 110px
          margin-bottom 20px
           li



    .rookie-wrapper
      padding  0 25px
      .rookie-header
         height 90px
         line-height 90px
         text-align center
         font-size 32px
         span
            position relative
            &:before
                content ''
                position absolute
                width 24px
                height 3px
                background: #000
                left -40px
                top 50%
                transform translateY(-50%)
            &:after
                right -40px
                content ''
                position absolute
                width 24px
                height 3px
                background: #000
                top 50%
                transform translateY(-50%)





</style>
