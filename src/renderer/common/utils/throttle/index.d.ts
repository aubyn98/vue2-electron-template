/**
 * @param { function } func  要执行的函数
 * @param { number } wait  节流时间
 * @param { boolean } immediate  是否立即执行，默认true
 */
export function throttle(func: (...argvs: any[]) => any, wait?: number, immediate?: boolean = true): (...argvs: any[]) => void
export default throttle
