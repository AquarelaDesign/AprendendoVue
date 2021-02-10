import { createStore } from 'vuex'

const state = {
  stages: ['To-Do', 'Doing', 'Done'],
  activities: [
    {
      id: 0,
      title: 'Atividade 1',
      due_date: new Date('2020-01-01').toISOString('pt-BR'),
      stage: 'To-Do'
    }
  ]
}

const mutations = {
  addActivity (state, payload) {
    state.activities.push(payload)
  },
  removeActivity (state, _id) {
    state.activities = state.activities.filter(({ id }) => id !== _id)
  },
  setActivities (state, payload) {
    state.activities = payload
  }
}

const actions = {
  getActivities: async ({ commit }) => {
    const Service = new ActivityService()
    const activities = await Service.getActivities()
    commit('setActivities', activities)
  },
  addActivity: async ({ commit }, payload) => {
    // const Service = new ActivityService()
    // await Service.updateActivity({payload: payload})
    commit('addActivity', payload)
  },
  updateActivity: async ({ commit }, {activity, destiny}) => {
    // const Service = new ActivityService()
    // await Service.updateActivity({payload: payload})
    commit('updateActivity', payload)
  }
}

const getters = {
  activities: state => state.activities,
  delayed: state =>
    state.activities.filter(({ due_date }) => Date.now() > due_date)
}

export default createStore({
  state,
  getters,
  actions,
  mutations
})
