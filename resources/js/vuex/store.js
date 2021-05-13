import { template } from "lodash";
import { v4 as uuid } from "uuid";

export default {
    state: {
        count: 0,
        isLoggedIn: false,
        user: {},
        panier: {
            articles: []
        },
        notifications: []
    },
    mutations: {
        increment(state) {
            console.warn(state)
            state.count++
        },
        setUser(state, payload) {
            console.info(payload)
            state.user = payload
        },
        setLoggedIn(state, payload) {

            state.isLoggedIn = true
        },

        ajoutAuPanier(state, payload) {
            state.panier.articles.push(payload) // => quand le composant fait this.store.commit('ajoutPanier', unProduit)

        },
        supprimerDuPanier(state, payload) { //filter va trier les ids   (il garde les elements de array qui respectent la condition)
            state.panier.articles = state.panier.articles.filter(article => article.id !== payload)
        },
        ajoutNotification(state, payload) { //  obj= { a: 1, b:2, c:3}  => { ...obj , c:7}
            state.notifications.push({
                ...payload,
                id: uuidv4()
            });
        }

    },
    actions: {
        ajoutNotification(context, payload) {
            context.commit('ajoutnotification', payload)
        },
        addProductToCart(context, payload) {
            context.commit('ajoutAuPanier', payload);

            //context.dispatch('ajoutNotification', { title: "success"});

            Vue.toasted.show('<div><i class="check"></i>mon ajout est ok </div>');
            //Vue.bvToast.show("success-ajout");

        }
    },
    getters: {
        articles: state => state.panier.articles.length, // => retourner 3 si y a 3 artciles dans le panier

    }
}