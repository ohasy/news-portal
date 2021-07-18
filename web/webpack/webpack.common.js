const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin")
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const WebpackPwaManifest = require('webpack-pwa-manifest');
const getRelativePath = (relPath) => path.resolve(__dirname, '..', relPath);
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
        filename: 'js/build.[contenthash].js', //main js file
        path: getRelativePath('dist'),
        chunkFilename: 'js/[name].[contenthash].js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: getRelativePath('src/index.html'),
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/assets', to: './' }
            ]
        }),
        new WebpackPwaManifest({
            name: 'Nezie news App',
            short_name: 'Newzie',
            description: 'Newz one click away',
            background_color: '#ffffff',
            crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
            icons: [
                {
                    src: getRelativePath('src/assets/images/dogo.png'),
                    destination: "images",
                    sizes: [96, 128, 192, 256, 384, 512, 1024] // multiple sizes
                },
                // {
                //     src: getRelativePath('src/assets/images/dogo.png'),
                //     destination: "images",
                //     size: '1024x1024' // you can also use the specifications pattern
                // },
                {
                    src: getRelativePath('src/assets/images/dogo.png'),
                    destination: "images",
                    size: '1024x1024',
                    purpose: 'maskable'
                }
            ],
            filename: "manifest.json",
            // default properties
            orientation: "portrait",
            display: "standalone",
            start_url: ".",
            crossorigin: null,
            inject: true,
            fingerprints: true,
            ios: false,
            publicPath: null,
            includeDirectory: true
        })
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