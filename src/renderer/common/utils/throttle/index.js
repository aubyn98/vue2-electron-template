export function throttle(func, wait = 500, immediate = true) {
  let flag
  return immediate
    ? function (...argvs) {
        if (flag) return
        flag = true
        typeof func === 'function' && func.apply(this, argvs)
        setTimeout(() => {
          flag = false
        }, wait)
      }
    : function (...argvs) {
        if (flag) return
        flag = true
        setTimeout(() => {
          flag = false
          typeof func === 'function' && func.apply(this, argvs)
        }, wait)
      }
}
export default throttle
