import {reqSearchName} from "../../api"
import {RECEIVE_SEARCHLIST,CLEAR_SEARCHLIST} from "../mutation-types"

const state = {
  searchList:[]
}
const actions = {
  async getSearchList({commit},searchName){
    const result = await reqSearchName(searchName)
    if(result.code==='200'){
      const searchList = result.data
      commit(RECEIVE_SEARCHLIST,{searchList})
    }
  },
  clearSearchList({commit}){
    commit(CLEAR_SEARCHLIST)
  }
}
const getters = {

}
const mutations = {
  [RECEIVE_SEARCHLIST](state,{searchList}){
    state.searchList  = searchList
  },
  [CLEAR_SEARCHLIST](state){
    state.searchList = []
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
