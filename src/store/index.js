import Vue from 'vue'
import Vuex from 'vuex'
import Auth from "/src/store/modules/auth.js"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Auth
  }
})
