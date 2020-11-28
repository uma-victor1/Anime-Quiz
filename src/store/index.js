import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Loading: false,
    posts: []
  },
  mutations: {
    LOAD_POST: (state, data) => {
      state.posts = data
    },
    START_LOADING (state) {
      state.Loading = true
    },
    STOP_LOADING (state) {
      state.Loading = false
    }
  },
  actions: {
    SET_STATUS: ({ commit }) => {
      commit('START_LOADING')
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
          commit('LOAD_POST', data)
          commit('STOP_LOADING')
        })
    }
  },
  modules: {
  }
})
