<template>
  <div class="style4">
     <div>
       <div class="title">
         {{topicItem.title}}
       </div>
     </div>
    <div ref="mySwiper" class="swiper-container mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(Item,index) in topicItem.lookList" :key="index">
           <div class="u-pic">
             <img v-lazy="Item.picUrl" alt="">
           </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from "swiper"
  export default {
    props:{
      topicItem:Object
    },
    mounted () {
      new Swiper(this.$refs.mySwiper,{
        loop:true,
        autoplay:{
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        effect : 'coverflow',
        slidesPerView: 3,
        centeredSlides: true,
        coverflowEffect: {
          rotate: 20,
          stretch: 0,
          depth: 60,
          modifier: 2,
          slideShadows : true
        },
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .style4
    width: 100%;
    background: #fff;
    margin: 20px 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 36px 30px;
    .title
      font-size: 36px
      color: #333;
      line-height: 52px
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      padding-bottom: 34px
      font-family: PingFangSC-Regular;
      margin-top: -8px
    .mySwiper
      position: relative
      width: 750px
      height: 272px
      margin-left: -30px
      .u-pic
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        img
          width 100%
          height 100%
</style>
