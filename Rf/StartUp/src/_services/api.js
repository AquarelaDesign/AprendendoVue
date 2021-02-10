import axios from 'axios'
import { getToken } from './auth'

export function api() {
  let prot = window.location.protocol

  if (window.location.hostname === 'localhost' && window.location.protocol === 'http:') {
    prot = 'https:'
  }

  const api = axios.create({
    baseURL: `${prot}//localhost:95`,
    timeout: 5000,
  })

  api.interceptors.request.use(async config => {
    // console.log('**** config', config)
    const token = getToken()

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // console.log('**** config', config)
    return config
  })

}
