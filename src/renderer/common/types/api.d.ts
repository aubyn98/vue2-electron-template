import Vue from 'vue'
import { Storage } from '../utils/storage'
import addEventListener from '../utils/addEventListener'
import compose from '../utils/compose'
import log from '../utils/compose'
import debounce from '../utils/debounce'
import throttle from '../utils/throttle'
import copy from '../utils/copy'
import getFile from '../utils/getFile'
import Str from '../utils/str'
import { request } from '../utils/http'
interface Api {
  [index: string]: (params: any) => Promise<{
    data: any
    message: string
    responseCode: string
    status: boolean
  }>
}

interface Utils {
  str:Str
  getFile: typeof getFile
  copy: typeof copy
  compose: typeof compose
  log: typeof log
  debounce: typeof debounce
  throttle: typeof throttle
  addEventListener: typeof addEventListener
  storage: Storage
  http: typeof request
}

interface Info {
  (parmas: { duration?: number; type: 'success' | 'error'; message: string; closed(): void }): Promise<any>
  success(params: string | { duration?: number; message: string; closed(): void }): Promise<any>
  error(params: string | { duration?: number; message: string; closed(): void }): Promise<any>
}

declare module 'vue/types/vue' {
  interface Vue {
    $api: Api
    $utils: Utils
    $info: Info
  }
}
