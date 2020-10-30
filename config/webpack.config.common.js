const path = require('path');
const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const common = {
    entry: [
        './src/index.js' //入口文件
    ],
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: '[name]-[hash].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_moudles/,
                use: [
                    { loader: 'babel-loader' }
                ]
            },
            {
                test: /\.(le|c)ss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' }
                ]
            }
        ]
    },
    resolve: {
        // 设置别名
        alias: {
            '@': path.resolve(__dirname, 'src')// 这样配置后 @ 可以指向 src 目录
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new HtmlwebpackPlugin({
            title: '乐闻世界',
            template: './public/index.html'
        })
    ]
}

module.exports = common;