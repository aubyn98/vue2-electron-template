import { Button } from 'element-ui'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
locale.use(lang)
export default function (app) {
  app.prototype.$ELEMENT = { size: 'small' }
  app.use(Button)
}
