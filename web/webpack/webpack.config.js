const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const styleLoaders = (env) => {
    if (env === "prod") {
        return [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "style-loader", 'css-loader'],
            }, {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: "[name]__[local]___[hash:base64:5]"
                            }
                        },
                    },
                    "sass-loader"
                ]
            }]
    } else {
        return [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }]
    }
};
module.exports = (envVars) => {
    const { env } = envVars;
    const envConfig = require(`./webpack.${env}.js`)
    commonConfig.module.rules.push(...styleLoaders(env));
    const config = merge(commonConfig, envConfig)
    return config
}