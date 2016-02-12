var path = require('path');
var webpack = require('webpack');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('widgets-core.js');

module.exports = {
	context: path.resolve('js'),
	entry: {
		'grocery-list-widget': './grocery-list-app',
		'activities-widget': './activities-app'
	},
	output: {
		path: path.resolve('public/'),
		filename: '[name].js'
	},

	plugins: [commonsPlugin],

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
			}
		]
	},

	resolve: {
		extensions: ['', '.js', '.es6']
	}
}