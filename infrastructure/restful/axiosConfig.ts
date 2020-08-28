import axiosBase, { AxiosInstance } from 'axios'

const axios: AxiosInstance = axiosBase.create({
  baseURL: 'https://swapi.dev/api/',
  headers: {
    'Content-Type': 'application/json',
  },
  responseType: 'json',
})

export default axios
