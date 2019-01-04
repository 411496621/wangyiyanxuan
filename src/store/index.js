import Vue from "vue"
import Vuex from "vuex"
import cateList from "./modules/catelist"
import categorylist from "./modules/categorylist"
import searchList from "./modules/SearchList"
import actions from "./actions"
import getters from "./getters"
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    cateList,
    categorylist,
    searchList
  },
  actions,
  getters
})
