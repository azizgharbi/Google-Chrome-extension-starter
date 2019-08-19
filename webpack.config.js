var path = require("path");

module.exports = {
  entry: {
    app: "./Components/index.js",
    background: "./core/background.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "core/public/js/dist")
  },
  resolve: {
    extensions: [".jsx", ".scss", ".json", ".css", ".js"]
  },
  module: {
    rules: [
      { test: /\.css$/, use: [{ loader: "style-loader" }, { loader: "css-loader" }] },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },

      {
        test: /\.jsx$/,
        loader: "babel-loader"
      }
    ]
  }
};
