const merge = require('webpack-merge')
const commonConfig=require('./webpack.common')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifityJSWebpackPlugin = require('uglifityjs-webpack-plugin')
const BundleAnalyzer= require('webpack-bundle-analyzer)
const config{ 

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


}

module.exports=config;