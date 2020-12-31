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
import VueSidebarMenu from 'vue-sidebar-menu';
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';


Vue.config.productionTip = false;
Vue.prototype.$bus = eventBus;
Vue.use(Vuelidate);
Vue.use(VueSidebarMenu);
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
