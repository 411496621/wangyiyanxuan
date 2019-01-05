<template>
  <div>
    <div class="header">
      <div class="header-top">
        <div class="left">网易严选</div>
        <div class="input-text" @click="$router.push('/search')">
          <span class="placeholder">搜索商品,共19959款好物</span>
        </div>
        <div class="right" @click="$router.push('/profile')">登录</div>
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
      <div class="swiper-container mySwiper">
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
              <img v-lazy="Item.subCateList[0].wapBannerUrl" alt="">
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
           <div class="left">
             <div class="text">新人专享礼包</div>
             <img src="//yanxuan.nosdn.127.net/a020bed0783956f650abc016e386bead.png" alt="">
           </div>
           <div class="right">
             <div class="right-top">
               <div class="title">福利社</div>
               <div class="text">今日特价</div>
               <img src="http://yanxuan.nosdn.127.net/e231234a324d07b620af7ffd3734642b.png?imageView&thumbnail=200x200&quality=75" alt="">
             </div>
             <div class="right-bottom">
               <div class="title">新人拼团</div>
               <div class="text">1元起包邮</div>
               <img src="http://yanxuan.nosdn.127.net/db52ac0a791cecb9129a4a34fc864f48.png?imageView&thumbnail=200x200&quality=75" alt="">
             </div>
           </div>
         </div>
      </div>
      <Split />
      <div class="pinpai-wrapper">
        <div class="pinpai-header">品牌制造商直供</div>
        <div class="content">
           <ul class="list">
             <li>
                <h4 class="title">海外制造商</h4>
                <div>
                  <span class="price">9.9元起</span>
                  <span class="description">上新</span>
                </div>
             </li>
             <li>
                <h4 class="title">CK制造商</h4>
                <div>
                  <span class="price">25元起</span>
                </div>
             </li>
             <li>
                <h4 class="title">新秀丽制造商</h4>
                <div>
                  <span class="price">34.9元起</span>
                </div>
             </li>
             <li>
                <h4 class="title">MUJI制造商</h4>
                <div>
                  <span class="price">35元起</span>
                </div>
             </li>
           </ul>
        </div>
      </div>
      <Split />
      <div class="hot-sale">
        <h4 class="hot-sale-header">类目热销榜</h4>
        <div class="content">
           <div class="content-top">
             <div class="left">
               <span class="text">服装榜</span>
               <img src="http://yanxuan.nosdn.127.net/de34d4d8407709f2edd88597d66fcfcb.png?imageView&quality=65&thumbnail=200x200" alt="">
             </div>
             <div class="right">
               <span class="text">鞋包配饰榜</span>
               <img src="http://yanxuan.nosdn.127.net/246e27aba6243b29f61bbdee9651b393.png?imageView&quality=65&thumbnail=200x200" alt="">
             </div>
           </div>
           <ul class="list">
             <li>
               <div class="name">居家榜</div>
               <img src="http://yanxuan.nosdn.127.net/5b0aed79b7c9a0555b930ece1cf6c6e4.png?imageView&quality=65&thumbnail=200x200" alt="">
             </li>
             <li>
               <div class="name">饮食榜</div>
               <img src="http://yanxuan.nosdn.127.net/1979054e3a1c8409f10191242165e674.png?imageView&quality=65&thumbnail=200x200" alt="">
             </li>
             <li>
               <div class="name">电器榜</div>
               <img src="http://yanxuan.nosdn.127.net/73a065d6fc8c32197b54421808c54788.png?imageView&quality=65&thumbnail=200x200" alt="">
             </li>
             <li>
               <div class="name">洗护榜</div>
               <img src="http://yanxuan.nosdn.127.net/2d43d642d928240ef2013e8da1c133b2.png?imageView&quality=65&thumbnail=200x200" alt="">
             </li>
             <li>
               <div class="name">餐厨榜</div>
               <img src="http://yanxuan.nosdn.127.net/02da8bce2fa3a182d398f6a09e8ac2f5.png?imageView&quality=65&thumbnail=200x200" alt="">
             </li>
             <li>
               <div class="name">婴童榜</div>
               <img src='http://yanxuan.nosdn.127.net/ebffc08b434eaab87392fc401c58fcc5.png?imageView&quality=65&thumbnail=200x200' alt="">
             </li>
             <li>
               <div class="name">文体榜</div>
               <img src="http://yanxuan.nosdn.127.net/55425f24345d01992d61a1646325ac94.png?imageView&quality=65&thumbnail=200x200" alt="">
             </li>
             <li>
               <div class="name">特色区榜</div>
               <img src="http://yanxuan.nosdn.127.net/924feec4a04a8d8570b28f7b6978d9a5.png?imageView&quality=65&thumbnail=200x200" alt="">
             </li>


           </ul>
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
    z-index 5
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
    padding-bottom 85px

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
      padding  0 30px 35px
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



      .rookie-content
         color #333
         font-size 32px
         font-family PingFangSC-Medium
         clearFix()
         .left
           float left
           width: 343px
           height: 434px
           background: #F9E9CF
           margin-right 4px
           .text
              padding 30px 0 0 30px
           img
             margin 35px 0 0 45px
         .right
           width: 343px
           height: 434px
           float right
           .right-top
              width 313px
              height: 195px
              padding 20px 0 0 30px
              background #FBE2D3
              position relative
              margin-bottom 4px
              .text
                color #7F7F7F
                font-size 24.0128px
                margin-top 10px
              img
                position absolute
                right 0
                bottom: 0
           .right-bottom
             width: 313px
             height: 195px
             padding 20px 0 0 30px
             background: #FFECC2
             position relative
             .text
                margin-top 7px
                padding 0 10px
                width: 100px
                height: 32px
                background: #CBB693
                color #fff
                text-align center
                font-size 21px
                line-height 32px
                border-radius 4px

             img
               position absolute
               right: 0
               bottom: 0
    .pinpai-wrapper
      padding  0 30px 35px
      .pinpai-header
        height: 100px
        font-size 32px
        line-height 100px
        color #333
      .content
        .list
           clearFix()
           li
             float left
             width:338px
             height: 237px
             margin 0 4px 4px 0
             padding-top 23px
             .title
               text-align center
               font-size 28px
               color #333
               margin-bottom 10px
             div
               text-align center
               font-size 24px
               .price
                  color #7F7F7F
               .description
                 color #fff
                 background: rgb(203, 182, 147)
                 padding 0 5px


             &:nth-child(1)
               background url(./images/1.jpg) no-repeat
               background-size 100%
             &:nth-child(2)
               background url(./images/2.png) no-repeat
               background-size 100%
             &:nth-child(3)
               background url(./images/3.png) no-repeat
               background-size 100%
             &:nth-child(4)
               background url(./images/4.jpg) no-repeat
               background-size 100%
    .hot-sale
      padding  0 30px 35px
      .hot-sale-header
        height: 100px
        font-size 32px
        line-height 100px
        color #333
      .content
        .content-top
          margin-bottom 10px
          clearFix()
          .left
             width: 49.5%
             float left
             background: #F9F3E4
             vertical-align middle
             position relative
          .right
             width: 49.5%
             float right
             background: #EBEFF6
             position relative
          .text
             position absolute
             top 50%
             transform translateY(-50%)
             left 30px
             font-size 28px
             color #333
          img
             float right


        .list
           clearFix()
           li
             float left
             width: 165px
             height: 180px
             margin 0 10px 10px 0
             background: #F5F5F5
             text-align center
             &:nth-child(4n)
               margin-right 0
             img
               width: 120px
               height: 120px
             .name
               margin-top 10px
               font-size 24px
               color #333
               margin-bottom 10px
</style>

<style lang="stylus" rel="stylesheet/stylus">
 #pages
   bottom 20px
  .swiper-pagination-bullet
     display inline-block
     width: 50px
     height: 5px
     border-radius 0
     background: rgba(255,255,255,1)

</style>
