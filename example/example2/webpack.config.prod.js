const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const projectRoot = process.cwd();
const assetsPath = path.join(projectRoot, "public");
const publicPath = "/";
const host = "0.0.0.0";

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	title: "ChingChingTest",
	template: path.resolve(projectRoot, "./index.html"),
	filename: "index.html",
	inject: "body",
});

const config = {
	cache: false,
	devtool: "eval",
	mode: "production",
	context: projectRoot,
	entry: {
		bundle: [path.resolve(projectRoot, "index.js")],
	},
	target: "web",
	output: {
		path: __dirname + "/dist",
		publicPath: "",
		filename: "bundle.js",
	},
	plugins: [HtmlWebpackPluginConfig],
	module: {
		rules: [
			{
				test: /(\.jsx)|(\.js)$/i,
				exclude: [/node_modules/],
				include: [
					path.join(projectRoot, "preview"),
					path.join(projectRoot, "src"),
				],
				use: [
					{
						loader: "babel-loader",
					},
				],
			},
		],
	},
	resolveLoader: {
		modules: [path.join(projectRoot, "node_modules")],
	},
	resolve: {
		modules: [path.join(projectRoot, "node_modules")],
	},
	profile: true,
};

module.exports = config;
