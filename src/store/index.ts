import Vue from 'vue'
import Vuex from 'vuex'
import { Bracket } from '@/store/modules/bracket'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Bracket
  }
})
