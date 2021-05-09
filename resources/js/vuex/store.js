export default {
    state: {
        count: 0,
        isLoggedIn: false,
        user: {}
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
        }

    },
    actions: {

    }
}