// 注意和 html-webpack-plugin 的区别。
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  plugins: [
    new CleanWebpackPlugin()
  ]
}