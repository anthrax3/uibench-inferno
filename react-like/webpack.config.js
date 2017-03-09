var webpack = require('webpack');

module.exports = {
    entry: './app.js',
    output: {
        path: './docs/1.3',
        publicPath: 'docs',
        filename: 'bundle.js'
    },
    module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: [ [ 'es2015', {loose: true} ] ],
					plugins: [
						'transform-class-properties',
						'transform-object-rest-spread',
						'babel-plugin-syntax-jsx',
						[ 'babel-plugin-inferno', {imports: true} ]
					]
				}
			}
		]
    },
    plugins: [
        new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
        new webpack.optimize.UglifyJsPlugin()
    ],
    devServer: {
        port: process.env.PORT || 8000
    }
};
