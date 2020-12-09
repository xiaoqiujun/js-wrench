const path = require('path')
const TerserPlugin = require("terser-webpack-plugin")
const env = process.env.NODE_ENV ? process.env.NODE_ENV.trim() : "development"
const plugins = [];
if(env === "production") plugins.push(new TerserPlugin());
module.exports = {
	mode: env, //production  development
	entry: ['@babel/polyfill', './dist/modules/index.js'],
	output: {
		filename: env === 'development' ? 'js-wrench.js':'js-wrench.min.js',
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
		extensions: ['.js', '.ts']
	},
	plugins: [...plugins],
	devtool: 'source-map',
}
