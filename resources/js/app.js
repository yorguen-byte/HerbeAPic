/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import Vue from "vue"
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import "bootstrap/dist/css/bootstrap.css" //importation de css depuis nodemodule
import "bootstrap-vue/dist/bootstrap-vue.css"
import VueRouter from "vue-router";
import Example from "./components/ExampleComponent.vue" // permet de tracer le chemin vers la vue de example cmponent

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
    //window.Vue = require('vue').default;

//declaration des routes
const routes = [{
    path: "/example",
    component: Example,
    name: 'example'
        //router qui va gerer tout ça
}]
const router = new VueRouter({
    routes,
})

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('navigation-component', require('./components/Navigation.vue').default);


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
//vue js associe les routes
const app = new Vue({
    el: '#app',
    router
});