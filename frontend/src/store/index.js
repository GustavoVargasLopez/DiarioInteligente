import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
    doLogin(Email) {
     
      localStorage.setItem('Email', Email)
      localStorage.auth = true
    },
    doLogout() {
      localStorage.setItem('Email', null)
      localStorage.auth = false
    }
  },
  actions: {
    doLogin({ commit }, Email) {
      commit("doLogin", Email);
    },
    doLogout({ commit }) {
      commit("doLogout");
    }
  },
  modules: {}
});
