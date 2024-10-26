// src/utils/http/index.ts
import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { Message } from '@arco-design/web-vue'

// Define the response structure
interface BaseResponse<T = never> {
  code: number
  data: T
  message: string
}

// Create an axios instance
const instance: AxiosInstance = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Request Interceptor
instance.interceptors.request.use(
  (config) => {
    console.log('Request:', config)
    return config
  },
  (error) => {
    console.error('Request error:', error)
    return Promise.reject(error)
  }
)

// Response Interceptor
instance.interceptors.response.use(
  (response) => {
    console.log('Response:', response)
    const res = response.data as BaseResponse

    if (res.code !== 0) {
      return Promise.reject(res.message)
    }
    Message.success(res.message)
    return res.data
  },
  (error) => {
    Message.error(error.message)
    return Promise.reject(error)
  }
)

export default instance
