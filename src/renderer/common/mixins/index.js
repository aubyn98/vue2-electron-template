const mixins = require.context('./', true, /.js$/)
module.exports = mixins.keys().reduce((t, path) => {
  const name = path.match(/.*\/(.*)\.js$/)[1]
  if (path !== './index.js') {
    t[name] = mixins(path).default
  }
  return t
}, {})
