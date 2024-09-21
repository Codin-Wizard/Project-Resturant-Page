// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      { //https://webpack.js.org/loaders/css-loader/
        test: /\.css$/, 
        use: ["style-loader"]
    },

    { //https://webpack.js.org/loaders/css-loader/
        test: /\.css$/, 
        loader: "css-loader",
        options: {
            url: true,
            esModule: false
        }
    },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    alias: {
        Images: path.resolve(__dirname, 'src/Images/'), // Optional alias for cleaner imports
    },
},

};
