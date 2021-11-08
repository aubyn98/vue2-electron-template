export function debounce(fn, delay) {
  let timer = null
  return function (...argvs) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, argvs)
    }, delay)
  }
}
export default debounce
