const toString = Object.prototype.toString
export function getRawType(val) {
  return toString.call(val).slice(8, -1)
}
export default {
  getRawType,
}
