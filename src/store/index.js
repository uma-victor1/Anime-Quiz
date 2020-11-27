import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'Uma Victor',
    sizeOfFont: 10,
    Likes: [
      { id: 1, Anime: 'Demon Slayer', watched: true },
      { id: 2, Anime: 'Death Note', watched: false },
      { id: 3, Anime: 'My Hero Academia', watched: false }
    ]
  },
  getters: {
    unwatchedAnime: (state) => {
      return state.Likes.filter(anime => !anime.watched)
    },
    doneAnime: (state, getters) => {
      return getters.unwatchedAnime.length
    }
  },
  mutations: {
    INCREASE_COUNT: state => {
      state.sizeOfFont += 3
    },
    DECREASE_COUNT: state => {
      state.sizeOfFont -= 3
    }
  },
  actions: {
  },
  modules: {
  }
})
