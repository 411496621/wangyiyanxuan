<template>
  <div class="main">
    <div class="content">
      <div v-for="(topicItem,index) in topiclist" :key="index">
          <Style1 :topicItem="topicItem" v-if="topicItem.style===1"></Style1>
          <Style2 :topicItem="topicItem" v-if="topicItem.style===2"></Style2>
          <Style4 :topicItem="topicItem" v-if="topicItem.style===4"></Style4>
      </div>
    </div>
  </div>
</template>

<script>
  import Style1 from "../../../componnts/Style1/Style1"
  import Style2 from "../../../componnts/Style2/Style2"
  import Style4 from "../../../componnts/Style4/Style4"
  import BScroll from "better-scroll"
  import {mapState} from 'vuex'

  export default {
    data(){
      return{
        page:0,
        time:0
      }
    },
    mounted(){
      this.$store.dispatch("getDefaultList")
    },
    components:{
      Style1,
      Style2,
      Style4
    },
    computed:{
      ...mapState({
        topiclist:state=>state.topiclist.topiclist
      })
    },
    watch:{
      topiclist(){
         if(!this.bs){
           this.bs = new BScroll('.main',{
             click:true,
             pullUpLoad: {
               threshold: 0
             }
           })
           this.bs.on('pullingUp',()=>{
             if(Date.now()-this.time>1000){ // 函数节流
               this.time = Date.now()
               this.page++
               this.$store.dispatch("getNewList",this.page) //上拉加载 请求数据
             }
             this.bs.finishPullUp()
           })
         }else{
            this.bs.refresh()
         }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .main
       width 100%
       height 100%
       overflow hidden
       background: #F4F4F4
       .content
         padding-top 172px


</style>
