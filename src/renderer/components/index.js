const compReq = require.context('./', true, /.vue$/)
const c = compReq.keys().reduce((t, c) => {
  const name = c.match(/.*\/(.*)\.vue$/)[1]
  t[name] = compReq(c).default
  return t
}, {})
export default {
  install(app) {
    Object.keys(c).forEach(key => {
      app.component(key, c[key])
    })
  },
}
