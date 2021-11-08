import Vue from 'vue'
import { Storage } from '../utils/storage'
import addEventListener from '../utils/addEventListener'
import compose from '../utils/compose'
import log from '../utils/compose'
import debounce from '../utils/debounce'
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
  compose: typeof compose
  log: typeof log
  debounce: typeof debounce
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
