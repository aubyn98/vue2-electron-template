const { request } = require('../utils/http')
let apis = require.context('./', true, /\.js$/)
apis = apis.keys().reduce((total, apiPath) => {
  // const apiName = apiPath.match(/.*\/(.*)\.js$/)[1]
  if (apiPath !== './index.js') {
    return { ...total, ...apis(apiPath) }
  }
  return total
}, {})
module.exports = {
  install(app) {
    app.prototype.$api = apis
    app.prototype.$request = request
  },
  ...apis,
}
