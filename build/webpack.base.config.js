// 引入插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const path = require('path')
module.exports = {
  entry: './src/index.ts', // 入口文件
  output: {
    filename: 'app.js', // 打包文件名，默认在 `dist` 目录下
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        // options: {
        //   transpileOnly: true
        // } 
      }
    ]  
  },
  plugins: [
    new HtmlWebpackPlugin({
      // favicon: '../public/favicon.ico',
      inject: 'body', //js插入的位置，true/'head'/'body'/false
      minify: { //压缩HTML文件
          removeComments: true, //移除HTML中的注释
          collapseWhitespace: false //删除空白符与换行符
      },
      template: './public/index.html' // 模板 html
    }),
    // new ForkTsCheckerWebpackPlugin()
  ]
}