const path = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');

const devConfig = {
    mode: 'development',
    devtool: "cheap-module-eval-source-map",
    entry: [
        'webpack/hot/dev-server'
    ],
    devServer: {
        port: 3000,
        host: '0.0.0.0',
        contentBase: path.join(__dirname, 'build'),
        clientLogLevel: 'silent',
        historyApiFallback: true
    }
}

module.exports = merge(commonConfig, devConfig);