import {RECEIVE_CATEGORYLIST} from "../mutation-types"
import {reqCategorylist} from '../../api'
const state = {
  categorylist:[]
}

const actions = {
  async getCategorylist({commit},cb){
    const result = await reqCategorylist()
    if(result.code===0){
      const categorylist = result.data
      commit(RECEIVE_CATEGORYLIST,{categorylist})
      typeof cb==='function'&&cb()
    }
  }
}
const getters = {

}
const mutations = {
  [RECEIVE_CATEGORYLIST](state,{categorylist}){
    state.categorylist = categorylist
  }
}
export default {
   state,
   actions,
   getters,
   mutations
}
