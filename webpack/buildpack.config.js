/*
    This webpack config will build out a 
    component library into one static bundle file, 
    this doesn't render anything to the browser (by default). 
    To render your components to the browser, use servepack.config.js
*/

const path = require('path');

module.exports = {
    entry: __dirname + '/source/index.js',
    output: {
        path: path.join(__dirname,'/compiled'),
        filename: 'bundle.build.js'
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
    }
}