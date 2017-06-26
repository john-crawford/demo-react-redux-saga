var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: "./src/main.js",
  output: {
    path: __dirname+'/src/',
    filename: "build.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [ 'babel-loader' ]
      },
      {
        test: /\.css$/,
        use: [
        	"style-loader",
        	"css-loader"
        ]
      }
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer:{
    inline: true,
    hot: true,
    contentBase: path.join(__dirname, "src"),
    port: '8888'
  }
};