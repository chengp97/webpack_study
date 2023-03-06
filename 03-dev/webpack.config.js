const path = require('path')
const HtmlWepackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        //path.resolve(__dirname,"xxx")__dirname当前文件路径
        path: path.resolve(__dirname, "./dist"),
        // 清除之前的打包内容
        clean: true
    },
    // 通过source-map可以追踪错误源码的出处
    devtool: "inline-source-map",
    plugins: [
        new HtmlWepackPlugin({
            // 以现有的html模版页面打包
            template: "./index.html",
            // 打包后的html
            filename: 'app.html',
            // 在body中生成script标签
            inject: 'body'
        })
    ],
    devServer: {
        static: './dist'
    },
    mode: "development",
}