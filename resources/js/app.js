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
import PageProduits from "./components/PageProduits.vue" // permet de tracer le chemin vers la vue de example cmponent
import PagePanier from "./components/panier/PagePanier.vue";
import Index from "./components/Index.vue"
import { template } from "lodash";
import PageAdmin from "./components/PageAdmin"
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
    //window.Vue = require('vue').default;

//declaration des routes
const routes = [{
        path: "/produits", // produits
        component: PageProduits,
        name: 'example'
            //router qui va gerer tout ça
    },
    {
        path: "/panier",
        component: PagePanier
    },
    {
        path: "/PageAdmin",
        component: PageAdmin

    }
]


const router = new VueRouter({
    routes,
})

Vue.component('navigation-component', require('./components/Navigation.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
//vue js associe les routes
const app = new Vue({
    el: '#app',
    router,
    components: {
        Index: Index
    }
});