const path          = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
	cache     : false,
	entry     : {
		main   : './src/index.ts',
	},
	devtool   : 'inline-source-map',
	target    : 'node',
	module    : {
		rules : [
			{
				test : /\.tsx?$/,
				use  : [
					{loader : 'babel-loader', options : {babelrc : true}},
					{loader : 'ts-loader'},
				],
//				loader  : 'babel-loader',
				exclude : /node_modules/,
			},
		],
	},
	mode      : 'development',
	resolve   : {
		modules    : [
			path.resolve(__dirname, 'src', 'App', 'Http', 'Controllers'),
			path.resolve(__dirname, 'src', 'App', 'Models'),
//			path.resolve('node_modules', '@envuso', 'core', 'src', 'index.ts')
		],
		alias      : {
			'@App'            : path.resolve(__dirname, 'src', 'App'),
			'@AppControllers' : path.resolve(__dirname, 'src', 'App', 'Http', 'Controllers'),
			'@AppMiddlewares' : path.resolve(__dirname, 'src', 'App', 'Http', 'Middleware'),
		},
		extensions : ['.tsx', '.ts', '.js'],
	},
	externals : [nodeExternals()],
	output    : {
		//filename : 'main.js',
//		main   : 'main.js',
//		config : 'Config/index.js',
		path   : path.resolve(__dirname, 'dist'),
	},
	plugins   : [
//		new NodeHotLoaderWebpackPlugin({
//			force       : false, // boolean. true - always launch entries, false (by default) - launch entries only in watch mode.
//			fork        : false, // boolean | string[]. For example ['--key', 'key value'].
//			args        : [], // string[]. For example ['--arg1', 'arg2'].
//			autoRestart : false, // boolean
//			logLevel    : 'info', // string
//		}),
	],
};
