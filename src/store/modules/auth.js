import axios from "axios";

export default {
    state: {
        isAuth: false
    },
    mutations: {
        autentification(state, payLoad) {
            if (payLoad === 200) {
                state.isAuth = true
            }
        },
        deleteAuth(state) {
            state.isAuth = false
        }
    },


    actions: {
        async isAuthRequest(context) {
            const res = axios.get('https://api.github.com/users');
            await res.then((el) => {
                const payLoad = el.status
                context.commit('autentification', payLoad)
            }).catch(() => {
                    alert('something wrong')
                }
            )
        }
    },


    getters: {
        isAuth(state) {
            return state.isAuth
        }
    }
}
