import axios from 'axios'

let http

const createAxiosInstance = (context) => {
  const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API_ENDPOINT,
    timeout: process.env.VUE_APP_HTTP_TIMEOUT
  })

  axiosInstance.interceptors.response.use(
    response => response,
    err => {
      if (['token_invalid', 'token_expired'].includes(err.response?.data?.error)) {
        context.dispatch('auth/logout', null, { root: true })
      }
      throw err
    },
  )

  return axiosInstance
}

export default (context) => {
  if (!http) {
    http = createAxiosInstance(context)
  }

  // Token can change at any time, so we need to update it for every call!
  http.defaults.headers.common.Authorization = `Bearer ${context.rootState.auth.token}`

  return http
}
