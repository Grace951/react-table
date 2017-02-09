import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

let projectRoot = process.cwd();
let HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	title: 'ChingChingTest',
	template: __dirname + '/src/index.html',
	filename: 'index.html',
	inject: 'body'
});

export default {
	debug: true,
	devtool: 'inline-source-map',
	noInfo: false,
	entry: [
		'eventsource-polyfill', // necessary for hot reloading with IE
		'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
		path.resolve(__dirname, 'src/index.js')
	],
	target: 'web',
	output: {
		path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'src')
	},
	plugins: [
		HtmlWebpackPluginConfig,
		new webpack.HotModuleReplacementPlugin(),
	],
	module: {
		loaders: [
			{
				test: /(\.jsx?$|\.js$)/,
				include: path.join(__dirname, 'src'),
				exclude: /(node_modules)/,
				loaders: ['babel']
			},
			{
				test   : /\.css$/,
				loader: "style-loader!css-loader?sourceMap"
			},
			{
				test: /(\.sass$|\.scss$)/,
				loader: "style!css!sass"
			},
			{ 	test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
				loader: "url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]" ,
				include: [
                     path.resolve(projectRoot, './src/fonts/') ,
					path.resolve(projectRoot, './node_modules/react-sort-search-table/lib/fonts/') ,
                ],						
			},
			{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
				loader: "file-loader?name=fonts/[name].[ext]" ,
				include: [
                     path.resolve(projectRoot, './src/fonts/') ,
					path.resolve(projectRoot, './node_modules/react-sort-search-table/lib/fonts/') ,
                ],
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loaders: [
					'file-loader?name=./img/products/[name].[ext]&context='+path.join(__dirname, './src/img/products')
				]
			}
		]
	},
    resolveLoader: {
		modules: [
			"node_modules"
		],
    },
    resolve: {
		modules: [
			"node_modules"
		],
		alias: {
			reactSortSearchTblFonts: path.join(__dirname, '/node_modules/react-sort-search-table/lib/fonts'),
		}
    },	
};
