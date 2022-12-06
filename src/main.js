import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

import * as Vue from 'vue' // in Vue 3
import axios from 'axios'
import VueAxios from 'vue-axios'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// const instance = axios.create({
//     baseURL: 'https://some-domain.com/api/',

//     headers: {'X-Custom-Header': 'foobar'}
//   });

axios.defaults.baseURL='https://backend.zahaaksa.com/api'
// axios.defaults.headers


import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

const app = createApp(App);

app.use(VueAxios, axios)

// Optionally install the BootstrapVue icon components plugin
app.use(IconsPlugin)
app.use(router);

app.mount("#app");
