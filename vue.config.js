const path = require('path')
const resolve = dir => path.join(__dirname, dir)

//process.env.NODE_ENV ="mock"
const BASE_URL = process.env.NODE_ENV === 'production' ? '' : '/'

module.exports = {
  publicPath:'/',
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  css: {
    extract: false  // 是否使用css分离插件 ExtractTextPlugin
  },
  productionSourceMap: false,//打包时不生成.map文件
  devServer: {
    proxy: {
      '/api': {
        target: 'http://ncee.ahqnb.cn/',
        changeOrigin: true,
        // pathRewrite:{
        //   '/api':'/'
        // }
      }},
    before:require('./mock/main.js')
  }
}