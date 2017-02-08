// webpack.config.js

let webpack = require('webpack');
let path = require('path');
let libraryName = 'react-sort-search-table';
let outputFile = libraryName + '.js';
let projectRoot = process.cwd();

let config = {
	entry: __dirname + '/src/SortableTbl.js',
	devtool: 'source-map',
	output: {
		path: __dirname + '/lib',
		filename: outputFile,
		library: libraryName,
		libraryTarget: 'umd',
		umdNamedDefine: true
	},
	module: {
		rules: [
			{
				test: /(\.jsx|\.js)$/,
				loader: 'babel-loader',
				exclude: /(node_modules|bower_components)/,
				include: path.resolve('src')
			},
			{
				test: /\.scss$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				],
				include: path.resolve('src')
			},
			{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/i, 
				loader: "url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]" ,
				include: [
                    path.resolve(projectRoot, './src/fonts/') ,
					path.resolve(projectRoot, './node_modules/bootstrap-sass/assets/fonts/') ,
					path.resolve(projectRoot, './node_modules/font-awesome/fonts/') ,
                 ],				
			},
			{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/i, 
				loader: "file-loader?name=fonts/[name].[ext]" ,
				include: [
                    path.resolve(projectRoot, './src/fonts/') ,
					path.resolve(projectRoot, './node_modules/bootstrap-sass/assets/fonts/') ,
					path.resolve(projectRoot, './node_modules/font-awesome/fonts/') ,
                 ],
			},			
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
        unsafeCache : true
    }
};

module.exports = config;
