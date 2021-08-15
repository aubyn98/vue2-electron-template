import apis from 'apis'
import utils from 'utils'
import comp from 'comp'
export default {
  install(app) {
    const plugins = require.context('./', true, /\.js$/)
    plugins.keys().forEach(pluginPath => {
      // const pluginName = pluginPath.match(/.*\/(.*)\.js$/)[1]
      if (pluginPath !== './index.js') {
        plugins(pluginPath).default(app)
      }
    })
    app.use(apis).use(utils).use(comp)
  },
}
