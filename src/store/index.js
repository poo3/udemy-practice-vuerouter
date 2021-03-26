import Vue from "vue";
import Vuex from "vuex";
import count from "./modules/count";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: "双方向バインディング",
  },
  getters: {
    message: (state) => state.message,
  },
  mutations: {
    messageUpdate(state, value) {
      return (state.message = value);
    },
  },
  actions: {
    messageUpdate({ commit }, value) {
      commit("messageUpdate", value);
    },
  },
  modules: {
    count,
  },
});
