import http from '../helpers/HttpHelper'

export default {
  namespaced: true,
  state: {
    tasks: [],
    error: null,
    loading: false
  },
  mutations: {
    setTasks(state, payload) {
      state.tasks = payload
      state.error = null
    },
    setError(state, payload) {
      state.error = payload
    },
    setLoading(state, payload) {
      state.loading = payload
    }
  },
  actions: {
    async list(context) {
      context.commit('setLoading', true)
      try {
        const response = await http(context).get('/task')
        context.commit('setTasks', response.data)
      } catch (err) {
        console.log(err)
        context.commit('setError', err.response?.data?.error || 'Server Error')
      }
      context.commit('setLoading', false)
    },
    async create(context, task) {
      context.commit('setLoading', true)
      try {
        await http(context).post('/task', task)
        await context.dispatch('list')
      } catch (err) {
        console.log(err)
        context.commit('setError', err.response?.data?.error || 'Server Error')
      }
      context.commit('setLoading', false)
    }
  }
}
