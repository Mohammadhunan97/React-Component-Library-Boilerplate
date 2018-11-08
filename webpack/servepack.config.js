/*
    This webpack config will serve your 
    app on a local server or build it out 
    as a static html website. Components from here 
    cannot be interchanged via different projects by 
    importing the bundle file. To create a component 
    library, use buildpack.config.js
*/

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // creates index.html file for us in the compiled folder, this will be created when we create the compiled folder after running webpack
const projectConfig = require('../project.config');

module.exports = {
    entry:  projectConfig.rootDir + '/source/App.js',
    output: {
        path: projectConfig.rootDir + '/compiled',
        filename: 'bundle.serve.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './source/index.html'
        })
    ]
}