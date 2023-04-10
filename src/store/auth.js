import Cookies from 'js-cookie'
import axios from "axios";

const state = {
    token: Cookies.get('AUTH_TOKEN'),
};

const actions = {
    async setToken({ commit }, payload) {
        const params = {
            'grant_type': 'authorization_code',
            'client_id': 1,
            'client_secret': 'BMZyZ7Qdr3sitfECy2a2uvM2iWK4phbL0yHXrga3',
            'redirect_uri': 'http://localhost:5175/callback',
            'code': payload
        }
        const result = await axios.post('http://localhost/oauth/token', params)
        commit('SET_TOKEN', result.data.access_token);
    },
    removeToken({commit}) {
        commit('REMOVE_TOKEN')
    }
};

const mutations = {
    SET_TOKEN(state, payload) {
        Cookies.set('AUTH_TOKEN', payload)
        state.token = payload;
    },
    REMOVE_TOKEN (state) {
        Cookies.remove('AUTH_TOKEN')
        state.token = null;
    }
};

const getters = {
    token: state => state.token,
};

export default {
    state,
    getters,
    actions,
    mutations,
};
