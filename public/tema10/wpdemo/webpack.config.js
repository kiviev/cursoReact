const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const PATHS = {
	app: path.join(__dirname , 'app'),
	build : path.join(__dirname , 'build')
}

module.exports = {
	entry : {
		app : PATHS.app
	},
	output : {
		path : PATHS.build,
		filename : '[name].js'
	},
	plugins : [
		new HtmlWebPackPlugin({
			title: 'WebPack Demo',
		})
	]
}
