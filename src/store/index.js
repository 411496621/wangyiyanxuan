import Vue from "vue"
import Vuex from "vuex"
import cateList from "./modules/catelist"
import actions from "./actions"
import getters from "./getters"
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    cateList
  },
  actions,
  getters
})
