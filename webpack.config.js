var webpack = require('webpack');

module.exports = {
    entry: './app.js',
    output: {
        path: __dirname + './docs',
        publicPath: 'docs',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: [['es2015', { loose: true, modules: false }]],
                plugins: [['inferno', {imports: true}]]
            }
        }]
    },
    plugins: [
        new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
        new webpack.optimize.UglifyJsPlugin()
    ],
    devServer: {
        port: process.env.PORT || 8000
    }
};
