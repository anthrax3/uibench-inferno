const path = require('path');
const gulp = require('gulp');
const gutil = require('gulp-util');
const webpack = require('webpack');

// build directory: dist/${VERSION}
const VERSION = 'dev';

const WebpackConfig = {
  entry: ['./app.js'],
  output: {
    path: path.join(__dirname, 'dist', VERSION),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loaders: ['babel?{ "presets": ["es2015-loose", "stage-0"], "plugins": ["babel-plugin-syntax-jsx", "babel-plugin-inferno"] }']
    }]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
};

function html() {
  return gulp.src('index.html')
    .pipe(gulp.dest(path.join('dist', VERSION)));
}

function build(done) {
  webpack(WebpackConfig, function(err, stats) {
    if (err) {
      throw new gutil.PluginError('webpack', err);
    }
    gutil.log('[webpack]', stats.toString());
    done();
  });
}

function serve() {
  const server = require('webpack-dev-server');

  new server(webpack(WebpackConfig), {
    contentBase: path.join(__dirname, 'dist', VERSION),
    stats: {
      colors: true
    }
  }).listen(8080, '0.0.0.0', function(err) {
    if (err) {
      throw new gutil.PluginError('webpack-dev-server', err);
    }
    gutil.log('[serve]', 'http://localhost:8080/webpack-dev-server/index.html');
  });
}

function deploy() {
  const ghPages = require('gulp-gh-pages');
  return gulp.src('dist/**/*')
    .pipe(ghPages());
}

exports.build = gulp.parallel(build, html);
exports.serve = gulp.series(html, serve);
exports.deploy = gulp.series(gulp.parallel(build, html), deploy);
