const path = require('path');

module.exports = {
	target: "web",
	mode: 'production',
  entry: {
		_v_: './src/_V_.js',
		web_worker:'./src/web_worker.js',
	},
	output: {
		path: path.resolve(__dirname, "public/js"),
		filename: "[name].V.js",
		//clean: true,
	},
};