const webpack = require('webpack');
const path = require("path");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const dotenv = require('dotenv');
const dotenvDev = dotenv.config({ path: path.join(__dirname, '..', '.env') });

module.exports = {
    mode: "development",
    devServer: {
        hot: true,
        historyApiFallback: true,
    },
    devtool: "eval-cheap-module-source-map",
    plugins: [
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(dotenvDev.parsed)
        }),
        new ReactRefreshWebpackPlugin()
    ]

}