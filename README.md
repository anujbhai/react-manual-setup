

# Custom react setup

## Initialize a new node/npm project

`$ npm init -y`

## Install react library and packages

`$ npm install react react-dom`

## Install babel packages

`$ npm install @babel/core @babel/preset-env @babel/preset-react babel-loader`

### Create .babelrc file with the following script:

	`
	{
	  "presets": ["@babel/preset-react", "@babel/preset-env"]
	}
	`

## Install webpack and packages

`$ npm install webpack webpack-cli webpack-dev-server html-webpack-plugin style-loader css-loader` (dependencies)
`$ npm install --save-dev file-loader` (dev dependencies)

Now we can connect webpack with babel and other packages for bundling...

### Create a webpack.config.js file with the following script

	`
	const HtmlWebpackPlugin = require("html-webpack-plugin");
	const path = require("path");

	module.exports = {
		entry: "./src/index.js",
		mode: "development",
		output: {
		  filename: "bundle.[hash].js",
		  path: path.resolve(__dirname, "dist"),
		},
		plugins: [
		  new HtmlWebpackPlugin({
		    template: "./src/index.html",
		  }),
		],
		resolve: {
		  modules: [__dirname, "src", "node_modules"],
		  extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
		},
		module: {
		  rules: [
		    {
		      test: /\.jsx?$/,
		      exclude: /node_modules/,
		      loader: require.resolve("babel-loader"),
		    },
		    {
		      test: /\.css$/,
		      use: ["style-loader", "css-loader"],
		    },
		    {
		      test: /\.(png|svg|jpe?g|gif)$/i,
		      use: ["file-loader"],
		    },
		  ],
		},
	};
	`
Then create the following files in a new folder './src'	along with the respective codes:

### 1. App.js

	`
	import React from "react";

	const App = () => {
		return (
		  <div>
		    <h1>Hello React!</h1>
		  </div>
		);
	};

	export default App;
	`

### 2. index.js

	`
	import React, { StrictMode } from "react";
	import ReactDOM from "react-dom/client";

	import App from "./App";

	const root = ReactDOM.createRoot(document.querySelector("#root"));
	root.render(
		<StrictMode>
		  <App />
		</StrictMode>
	);
	`

### 3. index.html

	`
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>React Setup Template</title>
	</head>
	<body>
		<div id="root"></div>

	</body>
	</html>
	`
	
## Set up Webpack via package.json scripts:

...

	`
	"scripts": {
		"start": "webpack-dev-server --hot --open",
		"build": "webpack --config webpack.config.js --mode production"
	}
	`
...

run `$ npm start` to run the dev server and open application in browser



































