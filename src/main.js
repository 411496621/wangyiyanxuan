import Vue from "vue"
import App from "./App"
import router from "./router"
import "./mock"
import store from './store'
import Split from  "./componnts/Split/Split"
Vue.component('Split',Split)

new Vue({
  el:"#app",
  components:{
   App
  },
  template:'<App/>',
  router,
  store
})



