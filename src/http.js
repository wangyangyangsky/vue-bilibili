import axios from 'axios'
import router from './router'
// import Vue from 'vue'
// import { config } from 'vue/types/umd'

const http = axios.create({
  baseURL: 'http://112.74.99.5:3000/web/api'
})

// Add a request interceptor 请求拦截
http.interceptors.request.use(function (config) {
  if (localStorage.getItem('id') || localStorage.getItem('token')) {
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('token')
  }
  console.log(config)
  // Do something before request is sent
  return config
}, function (error) {
  // Do something with request error
  // console.log(error)
  return Promise.reject(error)
})

// Add a response interceptor
http.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  if (error.response.status === 401 || error.response.status === 402) {
    router.push('/login')
  }
  return Promise.reject(error)
})

export default http
