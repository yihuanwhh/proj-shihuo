import Vue from 'vue'
import Vuex from 'vuex'
import http from '../utils/http'


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    city:'shangahi',
    data:{},
    result:{},
    user:['nihao','dajiahao'],
    pass:['ui','op'],
    userdata:[]
  },

  mutations: {
    setCity(state,city) {
      state.city = city
    },
    setSearch(state,result) {
      state.data = result
    },
    setResult(state,result) {
      state.result = result
    },
    setUser(state,user) {
      state.user.push(user)
    },
    setPass(state,pass) {
      state.pass.push(pass)
    },
    setUserData(state,userdata) {
      state.userdata.push(userdata)
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