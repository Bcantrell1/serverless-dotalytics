import {
  createStore
} from "vuex";

export default createStore({
  state: {
    steamId: null,
    JWT: null,
    accountId: null
  },
  mutations: {
    SET_LOGGED_IN(state, userData) {
      state.steamId = userData.steamId;
      state.JWT = userData.JWT;
      state.accountId = (BigInt(userData.steamId) - 76561197960265728n).toString();
      localStorage.setItem('user', JSON.stringify(userData));
    },
    CLEAR_USER_DATA(state) {
      localStorage.removeItem('user');
      location.reload();
    }
  },
  actions: {
    login() {
      window.location.href = `http://localhost:8080/LoggedIn/?steamid=${state.steamId}`;
    },
    loggedIn({
      commit
    }, credentials) {
      commit('SET_LOGGED_IN', credentials);
    },
    logout({
      commit
    }) {
      commit('CLEAR_USER_DATA');
    }
  },
  getters: {
    isLoggedIn(state) {
      return !!state.steamId;
    }
  },
  modules: {}
});