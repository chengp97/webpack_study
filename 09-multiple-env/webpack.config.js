const path = require('path')
const HtmlWepackPlugin = require("html-webpack-plugin")
module.exports = (env) => {
    console.log(env.goal)
    return {
        mode: env.production ? "production" : "development",
        entry: {
            index: './src/index.js',
            another: "./src/another-module.js"
        },
        output: {
            filename: 'scripts/[name].[contenthash].js',
            path: path.resolve(__dirname, 'dist'),
            clean: true,
            publicPath: "http://localhost:8080/"
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
}
