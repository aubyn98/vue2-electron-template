declare module 'utils/debounce' {
  /**
   * @param { function } fn  要执行的函数
   * @param { number } delay  防抖延迟时间
   */
  export function debounce(fn: (...argvs: any[]) => any, delay?: number): (...argvs: any[]) => void
  export default debounce
}
