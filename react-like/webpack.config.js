var webpack = require('webpack');

module.exports = {
    entry: './app.js',
    output: {
        path: './docs',
        publicPath: 'docs',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015-loose', 'stage-0'],
                plugins: ['syntax-jsx', 'inferno']
            }
        }]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ],
    devServer: {
        port: process.env.PORT || 8000
    }
};
