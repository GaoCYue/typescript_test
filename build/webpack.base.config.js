// 引入插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
module.exports = {
  entry: './src/index.ts', // 入口文件
  output: {
    filename: 'app.js' // 打包文件名，默认在 `dist` 目录下
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
      template: './public/index.html' // 模板 html
    }),
    // new ForkTsCheckerWebpackPlugin()
  ]
}