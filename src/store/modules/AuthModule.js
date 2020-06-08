import axios from 'axios'

export default {
  namespaced: true,
  state: {
    user: null,
    token: null,
    error: null,
    loading: false
  },
  mutations: {
    setSessionData(state, payload) {
      state.user = payload.user
      state.token = payload.token
      state.error = null
    },
    unsetSessionData(state) {
      state.user = null
      state.token = null
    },
    setError(state, payload) {
      state.error = payload
    },
    setLoading(state, payload) {
      state.loading = payload
    }
  },
  actions: {
    async login(context, user) {
      context.commit('setLoading', true)
      try {
        const response = await axios.post(`${process.env.VUE_APP_API_ENDPOINT}/auth`, user)
        context.commit('setSessionData', response.data)
      } catch (err) {
        context.commit('setError', err.response?.data?.error || 'Server Error')
      }
      context.commit('setLoading', false)
    },
    logout(context) {
      context.commit('unsetSessionData')
    },
  }
}
