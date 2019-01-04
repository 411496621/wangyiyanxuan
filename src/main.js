import Vue from "vue"
import App from "./App"
import router from "./router"
import "./mock"
import store from './store'
import Split from  "./componnts/Split/Split"
import VueLazyLoad from "vue-lazyload"
import loading from "./common/images/loading.gif"
import {Header} from "mint-ui"
Vue.use(VueLazyLoad, {
  loading
})
Vue.component('Split',Split)
Vue.component(Header.name,Header)

new Vue({
  el:"#app",
  components:{
   App
  },
  template:'<App/>',
  router,
  store
})



