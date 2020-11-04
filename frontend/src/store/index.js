import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Email:null
  },
  mutations: {
    doLogin(state,Email) {
      state.Email = Email
      console.log(state.Email)
      //localStorage.setItem('Email', Email)
      localStorage.Email = Email
      localStorage.auth = true
    },
    doLogout() {
      localStorage.removeItem('Email')
      localStorage.removeItem('auth')
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
