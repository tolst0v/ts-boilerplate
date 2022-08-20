const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const common = require('./webpack.common')
const path = require('path')

module.exports = merge(common, {
    mode: 'production',

    devtool: false,

    output: {
        path: path.join(__dirname, 'dist_prod'),
        filename: '[hash].bundle.js',
        clean: true,
    },

    module: {
        rules: [
            {
                test: /\.(sass|scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            sourceMap: false,
                            modules: false,
                        },
                    },
                    'sass-loader',
                ],
            },
        ],
    },

    optimization: {
        minimize: true,
        minimizer: [new CssMinimizerPlugin()],
    },

    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: '[hash].css',
        }),
    ],
})
