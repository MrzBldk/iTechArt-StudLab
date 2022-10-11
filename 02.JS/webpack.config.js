const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ],
    devServer: {
        port: 3000,
        open: true
    },
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
}