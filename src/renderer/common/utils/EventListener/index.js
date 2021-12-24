export function addEventListener(target, event, fn, options) {
  target.addEventListener(event, fn, options)
  return () => target.removeEventListener(event, fn)
}
export function removeEventListener(target, event, fn) {
  target.removeEventListener(event, fn)
}
export default {
  addEventListener,
  removeEventListener,
}
