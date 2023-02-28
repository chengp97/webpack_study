const path = require('path')
const HtmlWepackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
console.log("webpack.config.common.js", path.resolve(__dirname, "../dist"))
module.exports = {
    entry: {
        index: './src/index.js',
        another: "./src/another-module.js"
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
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
                //再用MiniCssExtractPlugin.loader								
                //将样式抽离到单独的文件中，生成.css文件会在打包后的html新增link标签并且引入抽离的css文件
                use: [MiniCssExtractPlugin.loader, "css-loader", 'less-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }

        ]
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
}

