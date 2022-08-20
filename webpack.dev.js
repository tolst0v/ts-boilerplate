const { merge } = require('webpack-merge')

const common = require('./webpack.common')
const path = require('path')

module.exports = merge(common, {
    mode: 'development',

    devtool: 'inline-source-map',

    output: {
        path: path.join(__dirname, 'dist_dev'),
        filename: '[name].bundle.js',
    },

    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        port: 3000,
    },

    module: {
        rules: [
            {
                test: /\.(sass|scss|css)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 1,
                            modules: false,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true },
                    },
                ],
            },
        ],
    },
})
