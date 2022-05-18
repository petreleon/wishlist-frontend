import axios from 'axios';
import config from '../config';
export default {
    namespaced: true,
    state: {
        user: {
            token: null,
        }
    },
    getters: {
        user: state => state.user,
        isLoggedIn: state => state.user.token !== null,
    },
    mutations: {
        setToken(state, token) {
            state.user = {token};
        },
        clearToken(state) {
            state.user = {token: null};
        },
    },
    actions: {
        login({commit}, {email, password}) {
            axios.post(config.links.login, {email, password})
                .then(res => {
                    commit('setToken', res.data.token);
                });
        },
        logout({commit}) {
            commit('clearToken');
        },
        refreshToken({commit}) {
            axios.get(config.links.refresh, {
                headers: {
                    'Authorization': this.state.user.token
                }
            })
            .then(res => {
                commit('setToken', res.data.token);
            });
        },
        register({commit}, {email, password, username, firstName, lastName}) {
            axios.post(config.links.register, {email, password, username, firstName, lastName})
            .then(() => {
                axios.post(config.links.login, {email, password}).then(res => {
                    commit('setToken', res.data.token);
                });
            });
        }
    },
};
