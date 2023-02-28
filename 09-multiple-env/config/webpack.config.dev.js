const path = require('path')
const HtmlWepackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
console.log("webpack.config.dev.js", path.resolve(__dirname, "../dist"))
module.exports = {

    output: {
        filename: 'scripts/[name].js',
    },
    mode: "development",
    devtool: "inline-source-map",

    devServer: {
        static: './dist'
    },
}

