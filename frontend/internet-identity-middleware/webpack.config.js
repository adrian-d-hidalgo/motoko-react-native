const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './src/index.tsx',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'build'),
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.(ts|tsx)$/,
				loader: 'ts-loader',
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'public', 'index.html'),
		}),
		new Dotenv()
	],
	devServer: {
		static: {
			directory: path.join(__dirname, 'build'),
		},
		port: 3000,
	},
};
