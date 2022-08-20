const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, 'src', 'index.ts'),

    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            '@fonts': path.join(__dirname, 'public', 'fonts'),
            '@utils': path.join(__dirname, 'src', 'utils')
        }
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
        ],
    },

    plugins: [
        new ESLintPlugin({
            files: './src/**/*',
        }),
        new HtmlWebpackPlugin({
            title: 'ts-boilerplate',
            template: path.join(__dirname, 'public', 'temp.html'),
            filename: 'index.html',
        }),
    ],
}
