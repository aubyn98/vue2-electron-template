/**
 * 获取随机字符串
 * @param { string | number } random 随机数 可选参数
 * @param { string } sign 分隔符 可选参数
 */
interface Str {
  getRandom(random?: string | number, sign?: string): string
}
export type getRandom = Str['getRandom']
export default Str
