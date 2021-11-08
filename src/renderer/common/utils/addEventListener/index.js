export function addEventListener(target, event, fn, options) {
  target.addEventListener(event, fn, options)
  return () => target.removeEventListener(event, fn)
}
export default addEventListener
