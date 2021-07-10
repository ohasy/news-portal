const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin")


module.exports = {
    entry: path.resolve(__dirname, "..", "./src/index.tsx"),
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
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
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg)$/i,
                type: 'asset/inline'
            }
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
                { from: 'src/images', to: './images' }
            ]
        })
        //,
        // new ExtractTextPlugin({
        //     filename: "static/css/[name]-[contenthash].css",
        //     allChunks: true,
        // })
    ]
}