import VueRouter from "vue-router";
import PageProduits from "./../components/PageProduits.vue" // permet de tracer le chemin vers la vue de example cmponent
import PageAdmin from "./../components/PageAdmin"
import PagePanier from "./../components/panier/PagePanier.vue";
import PageLogin from "./../views/PageLogin.vue"
//declaration des routes
const routes = [{
        path: "/produits", // produits
        component: PageProduits,
        name: 'produits'
            //router qui va gerer tout ça
    },
    {
        path: "/panier",
        component: PagePanier,
        name: 'panier'
    },
    {
        path: "/PageAdmin",
        component: PageAdmin,
        name: 'admin'

    },
    {
        path: "/login",
        component: PageLogin
    }
]
const router = new VueRouter({
    routes,
});

export default router;