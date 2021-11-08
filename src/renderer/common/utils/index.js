let utils = require.context('./', true, /\.js$/)
utils = utils.keys().reduce((total, utilPath) => {
  const pathArr = utilPath.slice(0, -3).split('/')
  let utilName
  while ((utilName = pathArr.pop()) === 'index') {
    // utilName
  }
  if (utilPath !== './index.js') {
    return { ...total, [utilName]: utils(utilPath).default }
  }
  return total
}, {})
module.exports = {
  install(app) {
    app.prototype.$utils = utils
  },
  ...utils,
}
