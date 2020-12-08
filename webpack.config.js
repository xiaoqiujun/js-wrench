const path = require('path')
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
	mode: 'production', //production  development
	entry: ['./dist/modules/index.js'],
	output: {
		filename: 'js-wrench.min.js',
		libraryTarget: "umd",
		globalObject: "this",
		library:"jsWrench",
		path: path.resolve(__dirname, './')
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
	plugins: [
		new TerserPlugin()
	],
	devtool: 'source-map',
}
