import axios from 'axios'

import baseURL from './baseUrl'

const api = axios.create({
  baseURL
})

export default api
