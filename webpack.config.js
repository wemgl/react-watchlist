const path = require("path")

const config = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist/assets"),
        filename: "bundle.js",
        publicPath: "/assets/"
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                query: {
                    presets: ["env", "react"]
                }
            },
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!autoprefixer-loader!sass-loader"
            }
        ]
    }
}

module.exports = config
