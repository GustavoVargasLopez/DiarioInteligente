import vuetify from "./plugins/vuetify"; 
import eventBus from "./eventBus";
import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuelidate from "vuelidate";


Vue.config.productionTip = false;
Vue.prototype.$bus = eventBus;
Vue.use(Vuelidate);
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
