export function getItem(target, name, defaultVal) {
  if (typeof defaultVal === 'object') defaultVal = defaultVal.toString()
  return JSON.parse(target.getItem(name) || defaultVal)
}
export function setItem(target, name, val) {
  return target.setItem(name, JSON.stringify(val))
}
export const local = {
  getItem(...argv) {
    return getItem(localStorage, ...argv)
  },
  setItem(...argv) {
    return setItem(localStorage, ...argv)
  },
}
export const session = {
  getItem(...argv) {
    return getItem(sessionStorage, ...argv)
  },
  setItem(...argv) {
    return setItem(sessionStorage, ...argv)
  },
}
export default {
  local,
  session,
}
