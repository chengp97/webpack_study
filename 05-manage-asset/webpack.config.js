const path = require('path')
const HtmlWepackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const MiniMiZerCssPlugin = require("css-minimizer-webpack-plugin")
const yaml = require("yaml")
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        //path.resolve(__dirname,"xxx")__dirname当前文件路径
        path: path.resolve(__dirname, "./dist"),
        // 清除之前的打包内容
        clean: true,
        // 配置打包输出文件名 contenthash哈希，ext文件名后缀
        assetModuleFilename: 'images/[contenthash][ext]'
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
        }),
        new MiniCssExtractPlugin({
            // 定义抽离后的css文件名
            filename: 'styles/[contenthash].css'
        })
    ],
    devServer: {
        static: './dist'
    },
    module: {
        rules: [
            {
                test: /\.png$/,
                // 文件路径
                type: "asset/resource",
                generator: {
                    filename: "images/[contenthash][ext]"
                }
            },
            {
                test: /\.svg$/,
                // 文件base64 data-url
                type: "asset/inline",
            },
            {
                test: /\.txt$/,
                type: "asset/source",
            },
            {
                test: /\.jpg$/,
                // 在 "asset/resource" 和  // 文件base64 data-url之间选择
                // 当大于8k会创建文件，可以调节临界值来作为是否要生成文件的依据
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 4 * 1024 * 1024
                    }
                }
            },
            {
                test: /\.(css|less)$/,
                // 先用less-loader解析less语法，然后用css-loader编译css文件，
                // 再用MiniCssExtractPlugin.loader
                // 将样式抽离到单独的文件中，生成.css文件将会在打包后的html新增link标签并且引入抽离的css文件
                use: [MiniCssExtractPlugin.loader, "css-loader", 'less-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: "asset/resource"
            },
            {
                test: /\.(csv|tsv)$/,
                use: "csv-loader"
            },
            {
                test: /\.xml$/,
                use: "xml-loader"
            },
            {
                test: /\.yaml$/,
                type: "json",
                parser: {
                    parse: yaml.parse
                }

            }

        ]
    },
    // 优化
    optimization: {
        minimizer: [
            new MiniMiZerCssPlugin()
        ]
    },
    mode: "development",
}