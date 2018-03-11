const path = require('path');

module.exports = {
	mode: 'development',
	entry: './example/index.js',
	devtool: 'inline-source-map',
	watch: true,
  output: {
    path: path.resolve(__dirname, 'dist'),
		filename: 'fox.js'
	},
  module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				use: 'babel-loader'
      },
    ]
  }
};