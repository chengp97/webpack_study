const path = require('path')
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        //path.resolve(__dirname,"xxx")__dirname当前文件路径
        path: path.resolve(__dirname, "./dist")
    },
    mode: "development"
}