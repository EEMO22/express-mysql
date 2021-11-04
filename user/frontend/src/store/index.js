import { createStore } from 'vuex';
import { getUserFromCookie } from '../../util/cookies';

export default createStore({
  state: {
    user_name: getUserFromCookie || '',
    token: getUserFromCookie || '',
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
  },
  modules: {
  },
});
