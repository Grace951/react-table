// webpack.config.js

let webpack = require("webpack");
const PnpWebpackPlugin = require("pnp-webpack-plugin");
let libraryName = "react-sort-search-table";
let outputFile = libraryName + ".js";

let config = {
	entry: __dirname + "/src/SortableTbl.js",
	devtool: "source-map",
	mode: "production",
	externals: {
		react: {
			commonjs: "react",
			commonjs2: "react",
			amd: "React",
			root: "React",
		},
		"react-dom": {
			commonjs: "react-dom",
			commonjs2: "react-dom",
			amd: "ReactDOM",
			root: "ReactDOM",
		},
	},
	output: {
		path: __dirname + "/lib",
		filename: outputFile,
		library: libraryName,
		libraryTarget: "umd",
		umdNamedDefine: true,
	},
	module: {
		rules: [
			{
				test: /\.js$|\.tsx?$/,
				type: "javascript/auto",
				loader: "babel-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.css$/i,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							modules: true,
						},
					},
				],
			},
			{
				test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|json|xml|ico|cur|ani)$/,
				use: ["file-loader?name=[path][name].[ext]"],
			},
		],
	},
	resolve: {
		plugins: [PnpWebpackPlugin],
	},
	resolveLoader: {
		plugins: [PnpWebpackPlugin.moduleLoader(module)],
	},
};

module.exports = config;
