import Vue from 'vue'
import MessageInfo from './index.vue'
const MessageConstructor = Vue.extend(MessageInfo)
export function Info(opts) {
  opts.duration = opts.duration || 1500
  let instance = new MessageConstructor({
    data: opts,
    methods: {
      close: () => {
        instance.visible = false
      },
      destroy: () => {
        instance = null
      },
    },
  })
  instance.$mount()
  document.body.appendChild(instance.$el)
  instance.visible = true
}
;['success', 'error'].forEach(type => {
  Info[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options,
        type,
      }
    } else {
      options.type = type
    }
    return Info(options)
  }
})
export default function (app) {
  app.component('messageInfo', MessageInfo)
  app.prototype.$info = Info
}
