const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import "~styles/variables.scss"
        `,
      },
      scss: {
        prependData: `
        @import "~styles/variables.scss";
        `,
      },
    },
  },
  configureWebpack: config => {
    config.entry = { app: ['./src/renderer/main.js'] }
  },
  chainWebpack: config => {
    config.module.rule('svg').exclude.add(resolve('./src/renderer/common/styles/svg'))
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('./src/renderer/common/styles/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icons-[name]',
      })
    config.resolve.alias
      .set('@', resolve('./src/renderer'))
      .set('assets', resolve('./src/renderer/assets'))
      .set('comp', resolve('./src/renderer/components'))
      .set('views', resolve('./src/renderer/views'))
      .set('router', resolve('./src/renderer/router'))
      .set('store', resolve('./src/renderer/store'))
      .set('styles', resolve('./src/renderer/common/styles'))
      .set('utils', resolve('./src/renderer/common/utils'))
      .set('apis', resolve('./src/renderer/common/apis'))
      .set('plugins', resolve('./src/renderer/common/plugins'))
      .set('mixins', resolve('./src/renderer/common/mixins'))
      .set('config', resolve('./src/renderer/common/config'))
  },
  pluginOptions: {
    electronBuilder: {
      mainProcessFile: 'src/main/index.js',
      rendererProcessFile: 'src/renderer/main.js',
      mainProcessWatch: ['src/main'],
      nodeIntegration: true,
      builderOptions: {
        productName: 'UMO优摩',
        appId: 'UMO-application',
        extends: null,
        publish: [
          {
            provider: 'generic',
            url: 'http://installer.dgsjyyy.com/',
          },
        ],
        nsis: {
          oneClick: false,
          allowElevation: true,
          allowToChangeInstallationDirectory: true,
          installerIcon: 'public/logo.ico',
          uninstallerIcon: 'public/logo.ico',
          installerHeaderIcon: 'public/logo.ico',
          createDesktopShortcut: true,
          createStartMenuShortcut: true,
        },
        dmg: {
          contents: [
            {
              x: 410,
              y: 150,
              type: 'link',
              path: '/Applications',
            },
            {
              x: 130,
              y: 150,
              type: 'file',
            },
          ],
        },
        mac: {
          icon: 'public/logo.ico',
        },
        win: {
          icon: 'public/logo.ico',
        },
        linux: {
          icon: 'public/logo.ico',
        },
      },
    },
  },
}
