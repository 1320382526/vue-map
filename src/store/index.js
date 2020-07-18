import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    zoom: 11, //地图缩放级别
    markers: [] //所有的点位信息
  },
  mutations: {
    setZoom(state, num) {
      state.zoom = num
    },
    setMarkers(state, lists) {
      state.markers = lists
    }
  },
  actions: {
    setZoom({ commit }, num) {
      commit('setZoom', num)
    },
    setMarkers({ commit }, lists) {

      commit('setMarkers', lists)
    }
  }
})
