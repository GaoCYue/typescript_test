var path = require('path');

module.exports = {
    // 忽略列信息-定位源码-dataurl打包到文件中重编译快
    devtool: 'cheap-module-eval-source-map',
    // 原始源代码（仅限行）。
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
      }
  }