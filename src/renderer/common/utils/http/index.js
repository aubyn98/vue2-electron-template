import axios from 'axios'
import qs from 'qs'
import { Dev, Pro } from 'config'

// 判断开发环境
const development = process.env.NODE_ENV === 'development'

// 创建实例
const http = axios.create({
  baseURL: development ? Dev.baseURL : Pro.baseURL, // 实例默认URL地址
  timeout: 2000000000, // 实例超时时间
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8', // 默认请求头
  },
})

// 实例请求拦截器
http.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 实例响应拦截器
http.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

function notBoolean(val) {
  return typeof val !== 'boolean'
}
const methods = ['get', 'post', 'head', 'put', 'options', 'delete']
export function request(url, method, params = {}, config = {}, options = { qs: true, form: false }) {
  if (!url) throw new Error('argument[0] missing')
  if (typeof url !== 'string') throw new TypeError('argument[0] must be a string')
  if (!method) throw new Error('argument[1] missing')
  if (typeof method !== 'string') throw new TypeError('argument[1] must be a string')
  if (methods.indexOf(method) === -1) throw new TypeError('argument[1], method must be ' + methods.join(' | '))

  // 是否序列化数据
  const isQS = options.qs ?? true
  if (notBoolean(isQS)) throw new TypeError('options.qs must be a [boolean or null or undefined]')

  // 判断是否处理为表单数据
  const isForm = options.form ?? false
  if (notBoolean(isForm)) throw new TypeError('options.form must be a [boolean or null or undefined]')

  // 判断是否为post请求
  const isPost = method.toLocaleLowerCase() === 'post'

  // 处理提交的数据
  const transformRequest = [
    function (data, headers) {
      // post 请求处理数据
      if (isPost) {
        // 处理表单数据
        if (isForm) {
          Object.assign(headers, { 'Content-Type': 'multipart/form-data' }) // 设置请求头
          return Object.keys(data).reduce((form, key) => {
            form.append(key, data[key])
            return form
          }, new FormData())
        }
        // 序列化参数
        if (isQS) return qs.stringify(data)
        Object.assign(headers, { 'Content-Type': 'application/json' })
        return JSON.stringify(data)
      }

      return data
    },
  ]

  // 返回请求结果
  return http({
    url,
    method,
    [isPost ? 'data' : 'params']: isPost ? params : new URLSearchParams(params),
    transformRequest,
    ...config,
  })
    .then(res => {
      return res.data
    })
    .catch(err => {
      return Promise.reject(err)
    })
}
function simplify(type) {
  return function (url, params, config, options) {
    return request(url, type, params, config, options)
  }
}
request.get = simplify('get')
request.post = simplify('post')
export default request
