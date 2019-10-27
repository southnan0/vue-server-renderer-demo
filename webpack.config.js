const path = require('path')
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry:'./index.js',
    target: 'node',
    devtool:'cheap-eval-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.js'
      },
      module: {
        rules: [
          { test: /\.vue$/, use: 'vue-loader' }
        ]
      },
      plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin()
      ]
}