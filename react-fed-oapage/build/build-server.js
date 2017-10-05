const webpack = require('webpack');
const chalk = require('chalk');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.dev');

const compiler = webpack(webpackConfig);

const server = new WebpackDevServer(compiler, {
	stats: {
		colors: true
	},
	hot: true
});

server.listen(8080, "127.0.0.1", function() {
	console.log("Starting server on http://127.0.0.1:8080");
});