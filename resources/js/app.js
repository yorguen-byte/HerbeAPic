/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import Vue from "vue"
import Vuex from 'vuex'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import "bootstrap/dist/css/bootstrap.css" //importation de css depuis nodemodule
import "bootstrap-vue/dist/bootstrap-vue.css"
import VueRouter from "vue-router";

import Index from "./components/Index.vue"
import { template } from "lodash";
import router from "./routes/router";
import storeDefiniton from './vuex/store';
import globalStyle from "./_shared/GlobalStyle.vue"
//const storeDefiniton = require("./vuex/store.js").default

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
const store = new Vuex.Store(storeDefiniton)

//window.Vue = require('vue').default;

Vue.component('navigation-component', require('./components/Navigation.vue').default);
Vue.component('global-style', globalStyle)

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
//vue js associe les routes, injection de javascript a partir de la balise avec un #id app
const app = new Vue({
    el: '#app',
    router: router,
    store: store,
    components: {
        Index: Index
    }
});