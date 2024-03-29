const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin')

const VENDOR_LIBS = [
    "react",
    "react-dom",
    "react-redux",
    "react-router",
    "react-sparklines",
    "redux",
    "redux-form",
    "redux-promise",
    "axios",

];

module.exports = {
    entry: {
        bundle: "./src/app/index.js",
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.join(__dirname, 'public/build'),
        filename: '[name][chunkhash].js',
        publicPath: "/build/"
    },
    module: {
        rules: [
            {
                use: "babel-loader",
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['public/build']),
        new webpack.optimize.CommonsChunkPlugin({
            name: ["vendor", "manifest"]
        }),
        new htmlWebpackPlugin({
            template: "./src/server/views/index.hbs",
            filename: "index.hbs",

        }),
        /*
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            mangle: true,
            sourcemap: true,
            beautify: false,
            dead_code: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        */
    ]
};
