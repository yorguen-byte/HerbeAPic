import VueRouter from "vue-router";
import PageProduits from "./../components/PageProduits.vue" // permet de tracer le chemin vers la vue de example cmponent
import PageAdmin from "./../components/PageAdmin"
import PagePanier from "./../components/panier/PagePanier.vue";
import PageLogin from "./../views/PageLogin.vue"
import PageRegister from "./../views/PageRegister.vue"
import PageAccueil from "./../components/PageAccueil"

//declaration des routes
const routes = [{
        path: "/produits/:id", // produits
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
        path: "/auth/login",
        component: PageLogin
    },
    {
        path: "/auth/register",
        component: PageRegister
    },
    {
        path: "/",
        component: PageAccueil
    }
]
const router = new VueRouter({
    routes,
    // permet denlever le hash tag
    mode: 'history'
});

export default router;