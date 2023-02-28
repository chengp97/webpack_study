const path = require('path')
const HtmlWepackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const MiniMiZerCssPlugin = require("css-minimizer-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")
module.exports = {
    output: {
        filename: 'scripts/[name].[contenthash].js',
        // 配置打包输出文件名 contenthash哈希，ext文件名后缀
        publicPath: "http://localhost:8080/"
    },
    mode: "production",


    optimization: {
        minimizer: [
            new TerserPlugin(),
            new MiniMiZerCssPlugin()
        ],
        runtimeChunk: 'single',
    },
    performance: {
        hints: false
    }
}

