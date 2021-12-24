declare module 'utils/log' {
  /**
   * @param { string } msg  log message
   * @param { Object | Array } style  log style
   */
  export function log(msg: string, style?: Object | Array<Object>): void
  export namespace log {
    export function success(msg: string): void
    export function error(msg: string): void
  }
  export default log
}
