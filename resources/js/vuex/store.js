export default {
    state: {
        count: 0,
        isloggedin: false,
        user: null
    },
    mutations: {
        increment(state) {
            console.warn(state)
            state.count++
        },
        setUser(state, payload) {
            console.info(payload)
            state.user = payload
            state.isloggedin = true
        }
    }
}