const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackLoader = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    watch: true,
    entry: {
        app: 'index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    autoprefixer({
                                        browsers:['ie >= 11']
                                    })
                                ]
                            }
                        },
                        'sass-loader',
                    ]
                })
            },
            {
                test: /\.ttf$/,
                loader: "url-loader"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new HTMLWebpackLoader({
            template: './src/index.html'
        })
    ],
    devServer: {
        port: 3000,

    }
};