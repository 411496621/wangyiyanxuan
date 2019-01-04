<template>
  <div>
    <div class="header">
       <div class="header-content" @click="$router.push('/search')">
         搜索商品,共19487款好物
       </div>
    </div>
    <div class="main">
      <div class="list-menu">
        <div class="menu-wrapper">
           <ul class="list">
              <li :class="{active:index===menuIndex}" v-for="(Item,index) in categorylist" :key="index" @click="menuIndex=index">
                <span>{{Item.name}}</span>
              </li>
           </ul>
        </div>
      </div>

        <div class="list-detail" ref="detailNode" :class="{anim:isAnim}">
          <div class="detail-wrapper" v-if="selectedCategory">
            <div class="banner">
              <img  :src="selectedCategory.bannerUrl" alt="">
            </div>
            <div class="text">{{selectedCategory.name}}分类</div>
            <ul  >
              <li  v-for="(Item,index) in selectedCategory.subCateList" :key="index">
                <div>
                  <img :src=Item.wapBannerUrl alt="">
                  <span>{{Item.name}}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex"
  import BScroll from "better-scroll"
  export default {
    data(){
      return{
        menuIndex:0,
        isAnim:false
      }
    },
    mounted(){
      this.$store.dispatch('getCategorylist',this.initBScroll)
    },
    methods:{
      initBScroll(){
        this.$nextTick(()=>{
           this.bs1 = new BScroll('.menu-wrapper',{
             click:true
           })
           this.bs2 = new BScroll('.list-detail',{
             click:true,
           })
        })
      }
    },
    computed:{
      ...mapState({
        categorylist: state=>state.categorylist.categorylist
      }),
      selectedCategory(){
          const {menuIndex} = this
          return this.categorylist.find((item,index)=>index===menuIndex)
      }
    },
    watch:{
      selectedCategory(){
        clearTimeout(this.timeoutId)
        this.isAnim = true
        this.timeoutId = setTimeout(()=>{
          this.isAnim = false
          this.bs2.refresh()
        },800)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
   .header
      padding 0 30px
      height 88px
      position fixed
      left: 0
      right: 0
      z-index 5
      background: #fff
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
      overflow hidden
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
         padding-left  162px
         height 1104px
         overflow hidden
         font-size 24px
         color #333
         &.anim
           animation  move  .8s
      @keyframes move
         30%
           transform  translate3d(0, -100px, 0)
         60%
           transform translate3d(0, 100px, 0)
         80%
           transform  translate3d(0,-20px, 0)
         100%
           transform translate3d()

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
