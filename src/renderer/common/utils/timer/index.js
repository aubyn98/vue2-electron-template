const dict = {
  interval: {
    set: setInterval,
    clear: clearInterval,
  },
  timeout: {
    set: setTimeout,
    clear: clearTimeout,
  },
}

function factory(key) {
  return function (...arvgs) {
    const timer = dict[key].set.call(window || global, ...arvgs)
    function remove() {
      dict[key].clear.call(window || global, timer)
    }
    if (this && this.$once) this.$once('hook:beforeDestroy', remove)
    return remove
  }.softBind(null)
}

export const _setInterval = factory('interval')

export const _setTimeout = factory('timeout')

export default {
  _setInterval,
  _setTimeout,
}
