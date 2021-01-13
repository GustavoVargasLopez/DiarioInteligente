import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Auth/Login.vue";
import Register from "../views/Auth/Register.vue";
import Dashboard from "../views/Dashboard.vue";
import VistaDiario from "../views/Diario/VistaDiario.vue";
import Inicio from "../views/Inicio/CargarInicio.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      requireAuth: true
    }
  },
  {
    path: "/inicio",
    name: "inicio",
    component: Inicio,
    meta: {
      requireAuth: true
    }
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: {
      requireAuth: true
    }
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/vistadiario",
    name: "vistadiario",
    component: VistaDiario
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.auth) {
      next();
    } else {
      next({ name: "login" });
    }
  } else {
    next();
  }
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (localStorage.auth) {
      next({ name: "dashboard" });
    } else {
      next();
    }
  } else {
    next();
  }
});


export default router;
