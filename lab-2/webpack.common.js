const webpack = require('webpack')
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifityJSWebpackPlugin = require('uglifityjs-webpack-plugin')
const BundleAnalyzer= require('webpack-bundle-analyzer)

const config = {
    watch: true, 
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: ['/entry'],
    },
     output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[hash].js'
    },

    

    module: {

        rules: [
            {
                test: /\.js$/, // можно еще записать вот так test: (path)=>path.endswith('./js)
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'strage-2']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ],

    },

    plugins: [
        new CleanWebpackPlugin([
            'dist'
        ], {
            watch: true,
        }),

        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'./index.html')
        }),

        new webpack.optimize.CommosnChunkPlugin({
            name: 'vendor';
            minChunks:({resourse})=>{
                return /node_modules/gi.test(resourse)
            }
        }),
        new UglifityJSWebpackPlugin({


        } )
        devtool: 'eval';
    ],

    devServer: {
        port: 3000
    }
}

module.export = config;