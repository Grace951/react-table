const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const projectRoot = process.cwd();
const PnpWebpackPlugin = require("pnp-webpack-plugin");
const assetsPath = path.join(projectRoot, "preview", "public");
const publicPath = "/";
const host = "0.0.0.0";

const config = {
	cache: false,
	devtool: "eval",
	mode: "development",
	entry: {
		bundle: [path.resolve(projectRoot, "preview", "preview.js")],
	},
	output: {
		path: assetsPath,
		publicPath: publicPath,
		pathinfo: false,
		filename: "bundle/[name].js",
		chunkFilename: "bundle/chunk-[name].js",
		hotUpdateChunkFilename: "[hash].hot-update.js",
	},
	devServer: {
		port: 3100,
		static: {
			directory: assetsPath,
		},
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
	plugins: [
		new HtmlWebpackPlugin({
			title: "ChingChingTest",
			template: path.resolve(projectRoot, "./preview/index.html"),
			filename: "index.html",
			inject: "body",
		}),
	],
};

module.exports = config;
