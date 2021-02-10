const state = {
  urlApi: 'http://localhost:95'
};

// const actions = { }

// const mutations = { }

const getters = {
  urlApi: state => state.urlApi
}

export const global = {
  namespaced: true,
  state,
  // actions,
  // mutations,
  getters,
};
