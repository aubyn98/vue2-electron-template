declare namespace date {
  /**
   * 获取日期
   * @param { number } time 当前时间戳  可选，默认 Date.now()
   * @param { string } fmt  日期格式    可选，默认 yyyy-MM-dd
   */
  function getDate(time?: number, fmt?: 'yyyy-MM-dd' | 'yyyy-MM-dd hh:mm' | 'yyyy-MM-dd hh:mm:ss'): string
}
declare module 'utils/date' {
  export = date
}
