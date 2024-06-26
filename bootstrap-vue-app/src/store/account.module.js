import { userService } from '../services';
import { router } from '../router';

// const user = JSON.parse(localStorage.getItem('user'));
const user = {};
const token = localStorage.getItem('@rf/token');

const state = token
  ? { status: { loggedIn: true }, user }
  : { status: {}, user: null };

const actions = {
  login({ dispatch, commit }, { username, password }) {
    commit('loginRequest', { username });

    userService.login(username, password)
      .then(
        user => {
          commit('loginSuccess', user);

          console.log('user', user);

          router.push('/');
        },
        error => {
          commit('loginFailure', error);
          dispatch('alert/error', error, { root: true });
        }
      );
  },

  logout({ commit }) {
    userService.logout();
    commit('logout');
  },
  
  register({ dispatch, commit }, user) {
    commit('registerRequest', user);

    userService.register(user)
      .then(
        user => {
          commit('registerSuccess', user);
          router.push('/login');
          setTimeout(() => {
            // exibir mensagem de sucesso após a conclusão da mudança de rota
            dispatch('alert/success', 'Registro bem sucedido', { root: true });
          })
        },
        error => {
          commit('registerFailure', error);
          dispatch('alert/error', error, { root: true });
        }
      );
  }
};

const mutations = {
  loginRequest(state, user) {
    state.status = { loggingIn: true };
    state.user = user;
  },
  loginSuccess(state, user) {
    state.status = { loggedIn: true };
    state.user = user;
  },
  loginFailure(state) {
    state.status = {};
    state.user = null;
  },
  logout(state) {
    state.status = {};
    state.user = null;
  },
  // registerRequest(state, user) {
  registerRequest(state) {
    state.status = { registering: true };
  },
  // registerSuccess(state, user) {
  registerSuccess(state) {
    state.status = {};
  },
  // registerFailure(state, error) {
  registerFailure(state) {
    state.status = {};
  }
};

export const account = {
  namespaced: true,
  state,
  actions,
  mutations
};