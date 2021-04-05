const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const projectRoot = process.cwd();
const assetsPath = path.join(projectRoot, "preview", "public");
const publicPath = "/";
const host = "0.0.0.0";

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	title: "ChingChingTest",
	template: path.resolve(projectRoot, "./preview/index.html"),
	filename: "index.html",
	inject: "body",
});

const config = {
	devServer: {
		inline: true,
		host,
		port: 3100,
		hot: true,
		contentBase: assetsPath,
		watchOptions: {
			poll: true,
		},
	},
	cache: false,
	devtool: "eval",
	mode: "development",
	context: projectRoot,
	entry: {
		bundle: [path.resolve(projectRoot, "preview", "preview.js")],
	},
	target: "web",
	output: {
		path: assetsPath,
		publicPath: publicPath,
		pathinfo: false,
		filename: "bundle/[name].js",
		chunkFilename: "bundle/chunk-[name].js",
		hotUpdateChunkFilename: "[hash].hot-update.js",
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
