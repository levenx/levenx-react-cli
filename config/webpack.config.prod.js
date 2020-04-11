const commonConfig = require('./config/webpack.config.common');
const merge = require('webpack-merge');

const prodConfig = {
    mode: 'production',
}

module.exports = merge(commonConfig, prodConfig);