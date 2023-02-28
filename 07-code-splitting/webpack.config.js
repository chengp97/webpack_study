const path = require('path')
const HtmlWepackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: "[name].bundle.js",
        //path.resolve(__dirname,"xxx")__dirname当前文件路径
        path: path.resolve(__dirname, "dist"),
        // 清除之前的打包内容
        clean: true,
        // 配置打包输出文件名 contenthash哈希，ext文件名后缀
        assetModuleFilename: 'images/[contenthash][ext]'
    },
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
}