import { createStore } from 'vuex';
import auth from './auth/index';
import students from './students/index';

export default createStore({
  state: {},
  mutations: {},
  getters: {},
  actions: {},

  modules: {
    auth,
    students
  },
});