const merge = require('webpack-merge');
const webpack = require('webpack');

//模拟数据
const express = require('express')
const app = express()
var appData = require('./incomes')
var income = appData

var apiRoutes = express.Router();
app.use('/api',apiRoutes)

module.exports = {
  // 项目部署的基础路径
  // 我们默认假设你的应用将会部署在域名的根部，
  // 比如 https://www.my-app.com/
  // 如果你的应用时部署在一个子路径下，那么你需要在这里
  // 指定子路径。比如，如果你的应用部署在
  // https://www.foobar.com/my-app/
  // 那么将这个值改为 `/my-app/`
  baseUrl: './',

  // 将构建好的文件输出到哪里
  outputDir: 'dist',

  // 放置静态资源的地方 (js/css/img/font/...)
  assetsDir: './',
  productionSourceMap: false,

  // 配置 webpack-dev-server 行为。
  devServer: {
    open: process.platform === 'darwin',
    // open: true,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理
    proxy: 'http://localhost:3000/', // string | Object
    before: app => {
        app.get('/api/income', (req, res) => {
            res.json({
                // 这里是你的json内容
                errno: 0,
                data: income
            })
        })
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
      })
    ]
  },

  // chainWebpack: config => {
  //   config.module
  //     .rule('css')
  //       .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
  //       .use('url-loader')
  //         .loader('url-loader')
  //         .options({
  //            limit: 10000
  //         })

  // }
  


    chainWebpack: config => {
      config.module
        .rule('images')
        // .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
        .test(/\.(png|jpe?g|gif)(\?.*)?$/)
        .use('url-loader')
        .tap(options => {
          return merge(options, {
            limit: 10000
          })
        })
    }

  
}