declare namespace str {
  /**
   * 获取随机字符串
   * @param { string | number } random 随机数 可选参数
   * @param { string } sign 分隔符 可选参数
   */
  function getRandom(random?: string | number, sign?: string): string
  /**
   * 获取随机字符串
   * @param { number } len 字符串长度
   */
  function getRandomStr(len: number): string
}
declare module 'utils/str' {
  export = str
}
