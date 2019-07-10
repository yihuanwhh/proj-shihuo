import Vue from 'vue'
import Vuex from 'vuex'
import http from '../utils/http'


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    city:'shangahi',
    data:{}
  },

  mutations: {
    setCity(state,city) {
      state.city = city
    },
    setSearch(state,result) {
      state.data = result
    }
  },

  actions: {
    async search({commit},data) {
      let result = await http.get(data)
      commit('setSearch',result)
    }
  }


})

export default store