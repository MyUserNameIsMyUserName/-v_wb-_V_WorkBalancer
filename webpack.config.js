const path = require('path');

module.exports = {
	target: "web",
	mode: 'production',
  entry: {
		root_app: './src/root_app.js',
	},
	output: {
		path: path.resolve(__dirname, "public/js"),
		filename: "[name].V.js",
		//clean: true,
	},
};
