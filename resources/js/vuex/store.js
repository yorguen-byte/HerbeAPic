export default {
    state: {
        count: 0,
        isLoggedIn: false,
        user: {},
        panier: {
            articles: []
        }
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
        }

    },
    actions: {

    },
    getters: {
        articles: state => state.panier.articles.length, // => retourner 3 si y a 3 artciles dans le panier

    }
}