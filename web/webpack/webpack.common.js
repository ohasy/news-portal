const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin")
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');


module.exports = {
    entry: path.resolve(__dirname, "..", "./src/index.tsx"),
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        plugins: [new TsconfigPathsPlugin()],
        // alias: {
        //     '@components': path.resolve(__dirname, "..", './src/components/'),
        // },
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'babel-loader' }
                ]
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg)$/i,
                type: 'asset/inline'
            },
            // {
            //     test: /\.scss$/,
            //     use: [
            //         "style-loader",
            //         "css-loader",
            //         // MiniCssExtractPlugin.loader,
            //         // {
            //         //     loader: 'css-loader',
            //         //     options: {
            //         //         importLoaders: 1,
            //         //         modules: {
            //         //             localIdentName: "[name]__[local]___[hash:base64:5]"
            //         //         }
            //         //     },
            //         // },
            //         "sass-loader"
            //     ]
            // }
        ]
    },
    output: {
        filename: 'js/build.[contenthash].js',
        path: path.join(__dirname, '..', './dist'),
        chunkFilename: 'js/[name].[contenthash].js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', './src/index.html')
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/assets', to: './' }
            ]
        }),
        // new MiniCssExtractPlugin({
        //     filename: '[name].css',
        //     chunkFilename: '[id].css',
        // })
        //,
        // new ExtractTextPlugin({
        //     filename: "static/css/[name]-[contenthash].css",
        //     allChunks: true,
        // })
    ]
}