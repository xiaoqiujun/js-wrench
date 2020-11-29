const path = require('path')
module.exports = {
	mode: 'development', //production  development
	entry: ['./dist/modules/index.js'],
	output: {
		filename: 'js-wrench.js',
		path: path.resolve(__dirname, './'),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
		],
	},
	resolve: {
		extensions: ['.js', '.ts'],
	},
	plugins: [],
	devtool: 'source-map',
}
