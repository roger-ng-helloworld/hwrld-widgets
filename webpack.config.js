var path = require('path');
var webpack = require('webpack');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('hwrld-core-widget.js');
var dedupePlugin = new webpack.optimize.DedupePlugin();
var providePlugin = new webpack.ProvidePlugin({
	'Promise': 'es6-promise',
    'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
  });

module.exports = {
	context: path.resolve('js'),
	entry: {
		'hwrld-activities-widget': './hwrld-activities-widget',
		'hwrld-chart-widget': './hwrld-chart-widget'
	},
	output: {
		path: path.resolve('public/'),
		filename: '[name].js'
	},

	plugins: [dedupePlugin, commonsPlugin],

	devServer: {
		contentBase: 'public'
	},
	
	module: {
		// preLoaders: [
		// 	{
		// 		test: /\.js$/,
		// 		exclude: /node_modules/,
		// 		loader: 'jshint-loader'
		// 	}
		// ],
		loaders: [
			{
				test: /\.(es6|js)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.scss/,
				exclude: /node_modules/,
				loaders: ['style', 'css?modules&localIdentName=[local]---[hash:base64:5]', 'cssnext', 'sass']
			}
		]
	},

	resolve: {
		extensions: ['', '.js', '.es6']
	}
}