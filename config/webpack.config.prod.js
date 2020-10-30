const commonConfig = require('./webpack.config.common');
const merge = require('webpack-merge');

const prodConfig = {
    mode: 'production',
    output:{
        publicPath: 'http://custom.static.levenx.com'
    }
}

module.exports = merge(commonConfig, prodConfig);