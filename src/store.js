import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 2,
    message: "双方向バインディング",
  },
  getters: {
    doubleCount: (state) => state.count * 2,
    tripleCount: (state) => state.count * 3,
    message: (state) => state.message,
  },
  mutations: {
    increment(state, number) {
      return (state.count += number);
    },
    decrement(state, number) {
      return (state.count -= number);
    },
    messageUpdate(state, value) {
      return (state.message = value);
    },
  },
  actions: {
    increment({ commit }, number) {
      commit("increment", number);
    },
    decrement(context, number) {
      context.commit("decrement", number);
    },
    messageUpdate({ commit }, value) {
      commit("messageUpdate", value);
    },
  },
});
