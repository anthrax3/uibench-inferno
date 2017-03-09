const path = require('path');
const gulp = require('gulp');
const gutil = require('gulp-util');
const webpack = require('webpack');

// build directory: docs/${VERSION}
const VERSION = '1.3';

const WebpackConfig = {
	entry: [ './app.js' ],
	output: {
		path: path.join(__dirname, 'docs', VERSION),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: [ '.js', '.jsx' ]
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
		new webpack.DefinePlugin
		({'process.env': {NODE_ENV: JSON.stringify('production')}}),
		new webpack.optimize.UglifyJsPlugin()
	],
};

function html() {
	return gulp.src('index.html')
		.pipe(gulp.dest(path.join('docs', VERSION)));
}

function build(done) {
	webpack(WebpackConfig, function (err, stats) {
		if (err) {
			console.log(err);
			throw new gutil.PluginError('webpack', err);
		}
		gutil.log('[webpack]', stats.toString());
		done();
	});
}

function serve() {
	const server = require('webpack-dev-server');

	new server(webpack(WebpackConfig), {
		contentBase: path.join(__dirname, 'docs', VERSION),
		stats: {
			colors: true
		}
	}).listen(8080, '0.0.0.0', function (err) {
		if (err) {
			throw new gutil.PluginError('webpack-dev-server', err);
		}
		gutil.log('[serve]', 'http://localhost:8080/webpack-dev-server/index.html');
	});
}

exports.build = gulp.parallel(build, html);
exports.serve = gulp.series(html, serve);
