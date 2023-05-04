const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: "none",

    entry: "./src/index.js",

    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.js$|\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                },
            },
        },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ]
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    }
};
