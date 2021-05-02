import VueRouter from "vue-router";
import PageProduits from "./../components/PageProduits.vue" // permet de tracer le chemin vers la vue de example cmponent
import PageAdmin from "./../components/PageAdmin"
import PagePanier from "./../components/panier/PagePanier.vue";

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
});

export default router;