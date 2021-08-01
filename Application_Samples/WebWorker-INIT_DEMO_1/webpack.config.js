const path = require('path');

module.exports = {
  entry: {
		_v_: './src/js/_V_.js',
		web_worker:'./src/js/web_worker.js',
	},
	output: {
		path: path.resolve(__dirname, "public/js"),
		filename: "[name].V.js",
		clean: true,
	},
};