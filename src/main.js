import Vue from "vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import App from "./App.vue";
import Routes from "./routes";
import axios from "axios";

// define axios globally
Vue.prototype.$axios = axios;
// not $http global property becoz i alos use VueResource

// Use packages
Vue.use(VueResource);
Vue.use(VueRouter);

// Register routes
const router = new VueRouter({
  routes: Routes,
  mode: "history"
});

new Vue({
  el: "#app",
  render: h => h(App),
  router: router
});
