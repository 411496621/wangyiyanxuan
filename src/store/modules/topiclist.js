import {reqDefaultList,reqNewList}  from "../../api"
import {RECEIVE_DEFAULT_TOPICLIST,RECEIVE_NEW_TOPICLIST} from "../mutation-types"
const state = {
  topiclist:[]
}
const actions = {
  async getDefaultList({commit}){
    const result = await reqDefaultList()
    if(result.code==='200'){
       let topiclist = []
       result.data.forEach((item,index)=>{
          item.topics.forEach((item,index)=>{
            topiclist.push(item)
          })
       })
       commit(RECEIVE_DEFAULT_TOPICLIST,{topiclist})
    }
  },
  async getNewList({commit},page){
     const result = await reqNewList(page)
     let newTopicList = []
     if(result.code==='200'){
       result.data.result.forEach((item,index)=>{
           newTopicList = newTopicList.concat(item.topics)
       })
       commit(RECEIVE_NEW_TOPICLIST,{newTopicList})
     }
  }
}
const getters = {

}
const mutations = {
  [RECEIVE_DEFAULT_TOPICLIST](state,{topiclist}){
     state.topiclist = topiclist
  },
  [RECEIVE_NEW_TOPICLIST](state,{newTopicList}){
     state.topiclist = state.topiclist.concat(newTopicList)
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
