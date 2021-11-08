import { Button } from 'element-ui'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
locale.use(lang)
export default function (app) {
  app.prototype.$ELEMENT = { size: 'small' }
  app.use(Button)
  app.prototype.$validateFields = function (form, props) {
    return new Promise((resolve, reject) => {
      let isFail = false
      form.validateField(props, res => {
        if (res) isFail = true
      })
      if (isFail) return reject(false)
      resolve(true)
    })
  }
}
