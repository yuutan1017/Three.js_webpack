const path = require("path");

module.exports = {
  mode: "development",
  entry: [path.resolve(__dirname, "./src/index.tsx")],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    publicPath: "/assets",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)/,
        exclude: /node.modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
      {
        //シェーダー
        test: /\.(glsl|.vert|.frag)$/,
        use: "raw-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
  devServer: {
    historyApiFallback: true,
  },
  devtool: "source-map",
};
