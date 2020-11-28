import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Loading: null,
    posts: []
  },
  mutations: {
    LOAD_POST: (state, data) => {
      state.posts = data
      console.log('post recieved')
    },
    startLoading (state) {
      console.log('started loading')
      state.Loading = true
    },
    stopLoading (state) {
      console.log('stopped loading')
      state.Loading = false
    }
  },
  actions: {
    SET_STATUS: ({ commit }, state) => {
      commit('startLoading')
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
          console.log(data)
          commit('LOAD_POST', data)
          commit('stopLoading')
        })
    }
  },
  modules: {
  }
})
