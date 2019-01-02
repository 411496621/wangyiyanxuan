import {RECEIVE_CATELIST} from "../mutation-types"
import {reqCateList} from "../../api"
const state = {
  cateList:[]
}

const actions = {
  async getCateList({commit}){
     const result = await reqCateList()
     if(result.code===0){
       const cateList = result.data
       commit(RECEIVE_CATELIST,{cateList})
     }
  }
}
const getters= {

}
const mutations = {
  [RECEIVE_CATELIST](state,{cateList}){
    state.cateList = cateList
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
