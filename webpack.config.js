/*
* @Author: wangyisen
* @Date:   2017-07-20 23:45:39
* @Last Modified by:   wangyisen
* @Last Modified time: 2017-07-24 22:56:53
*/
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
//获取html-webpack-plugin参数的方法
var getHtmlConfig = function(name) {
    return {
        template: './src/view/'+ name + '.html',
        filename: 'view/' + name + '.html',
        inject: true,
        hash: true,
        chunks: ['common', name]       
    }
}
var config = {
    entry: {
        'common': ["./src/page/common/index.js"],
        'index': ["./src/page/index/index.js"],
        'login': ["./src/page/login/index.js"],
    },
    output: {
        path: './dist',
        publicPath: '/dist',
        filename: 'js/[name].js'
    },
    devServer: {
        historyApiFallback:true,
        hot:true,
        inline:true,
        progress:true,//报错无法识别，删除后也能正常刷新
    },
    externals: {
        'jquery': 'window.jQuery'
    },
    module: {
        loaders: [
            {
                test: /\.css$/, //正则表达式，匹配.css文件
                loader: ExtractTextPlugin.extract("style-loader","css-loader")  //处理顺序 从右到左
            },
            {test: /\.(gif|png|jpg|woff|svg|ttf)\??.*$/, loader: 'url-loader?limit=100&name=resource/[name].[ext]'}

        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'js/base.js'
        }),
        new ExtractTextPlugin("css/[name].css"),
        new HtmlWebpackPlugin(getHtmlConfig('index')),
        new HtmlWebpackPlugin(getHtmlConfig('login'))
    ]

}
module.exports = config;