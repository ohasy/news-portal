const path = require("path");
const webpack = require('webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const dotenv = require('dotenv');

const dotenvProd = dotenv.config({ path: path.join(__dirname, '..', '.env.prod') });

const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = {
    mode: "production",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },

            // {
            //     test: /\.scss$/,
            //     use: [
            //         // "style-loader",
            //         // "css-loader",
            //         MiniCssExtractPlugin.loader,
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 importLoaders: 1,
            //                 modules: {
            //                     localIdentName: "[name]__[local]___[hash:base64:5]"
            //                 }
            //             },
            //         },
            //         "sass-loader"
            //     ]
            // }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(dotenvProd.parsed)
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
            chunkFilename: 'css/[id].[contenthash].css',
            experimentalUseImportModule: true
        }),
        // new BundleAnalyzerPlugin(),
        new InjectManifest({
            swSrc: path.join(__dirname, '..', 'src/service-worker.js'),
            swDest: 'service-worker.js',
        })
    ],
    optimization: {
        // splitChunks: {
        //     chunks: 'all',
        //     cacheGroups: {
        //         styles: {
        //             name: 'styles',
        //             test: /\.s?css$/,
        //             chunks: 'all',
        //             minChunks: 1,
        //             reuseExistingChunk: true,
        //             enforce: true,
        //         },
        //     }
        // },
        minimizer: [
            new TerserJSPlugin({}),
            new OptimizeCssAssetsPlugin({})
        ]
    },

}