import axios from 'axios';
import { useToast } from 'vue-toastification'

const state = {
    toast: useToast(),
    token: localStorage.getItem('token') || '',
    status: '',
};


const mutations = {
    TOAST_SUCCESS: (state, message) => {
        state.toast.success(message, { timeout: 3000 });
    },
    TOAST_ERROR: (state, message) => {
        state.toast.error(message, { timeout: 3000 });
    },
    AUTH_SUCCESS: (state, token) => {
        state.token = token;
        state.status = 'success';
    },
    AUTH_ERROR: state => {
        state.status = 'error';
    },
    LOGOUT: state => {
        state.token = '';
        state.status = '';
    },
};

const actions = {
    async login({ commit }, credentials) {
        try {
            const response = await axios.post('http://localhost:5000/v1/auth', credentials);
            const { token } = response.data;
            localStorage.setItem('token', token);
            commit('TOAST_SUCCESS', "Login realizado com sucesso.");
            commit('AUTH_SUCCESS', token);


        } catch (error) {
            commit('AUTH_ERROR');
            commit('TOAST_ERROR', error.response.data.error);
            localStorage.removeItem('token');
            throw error;
        }
    },
    async logout({ commit }) {
        localStorage.removeItem('token');
        commit('TOAST_SUCCESS', "Logout efetuado com sucesso.");
        commit('LOGOUT');
    },
};

const getters = {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status,
    authToken: state => state.token

};

export default {
    state,
    getters,
    actions,
    mutations,
};