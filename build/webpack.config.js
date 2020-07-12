const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const devConfig = require('./webpack.dev.config')
const proConfig = require('./webpack.pro.config')
// 根据不同的 ENV 执行不同的 config.js
module.exports = (env, args) => {
  const config = args.mode === 'development' ? devConfig : proConfig
  return merge(baseConfig, config)
}