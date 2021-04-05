// webpack.config.js

let webpack = require("webpack");
let path = require("path");
let libraryName = "react-sort-search-table";
let outputFile = libraryName + ".js";
let projectRoot = process.cwd();

let config = {
	entry: __dirname + "/src/SortableTbl.js",
	devtool: "source-map",
	mode: "production",
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
				test: /(\.jsx|\.js)$/,
				loader: "babel-loader",
				exclude: /(node_modules|bower_components)/,
				include: path.resolve("src"),
			},
		],
	},
	resolveLoader: {
		modules: ["node_modules"],
	},
	resolve: {
		modules: ["node_modules"],
		extensions: [".js", ".jsx"],
	},
};

module.exports = config;
