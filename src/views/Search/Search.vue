<template>
  <div>
    <div class="search-wrapper">
      <div class="search-main">
        <input v-model="searchName" type="text" placeholder="高級穿著 時尚大衣 六折起">
      </div>
      <span @click="$router.back();$store.dispatch('clearSearchList');searchName=''">取消</span>
    </div>
    <ul class="search-list">
      <li v-for="(Item,index) in searchList" :key="index">{{Item}}</li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from "vuex"
  export default {
    data(){
      return {
        searchName:''
      }
    },
    computed:{
      ...mapState({
        searchList:state=>state.searchList.searchList
      })
    },
    watch:{
      searchName(){
        const {searchName} = this
        if (searchName.trim()){
          if(this.time===undefined){
            this.time = 0
          }
          if(Date.now()-this.time>500){
            this.$store.dispatch("getSearchList",searchName)
            this.time = Date.now()
          }
        }else {
            this.$store.dispatch("clearSearchList")
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  .search-wrapper
     padding 0 30px
     height 88px
     .search-main
        float left
        height 56px
        margin-top 16px
        width: 560px
        font-size 24px
        background: #f4f4f4
        text-align center
        input
          width: 520px
          height 40px
          margin-top 8px
          background: #f4f4f4
          border none
     span
        float right
        height 40px
        margin-top 24px
        font-size 28px

  .search-list
    padding 0 30px
    li
     height 104px
     line-height 104px
     border-bottom 1px solid #666

</style>
