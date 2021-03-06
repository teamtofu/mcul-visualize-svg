/* global __dirname */
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './../src/index.js'),

  output: {
    path: path.resolve(__dirname, './../dist'), 
    filename: 'mculVisualizeSVG.node.js',
    libraryTarget: 'commonjs2'
  },

  devtool: 'cheap-source-map',

  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: require('./babel.config')(true)
            }
        }
    ]
  },

  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src')
    ],
    extensions: ['.js', '.json']
  },

  externals: function(context, request, callback) {
    if (/^(rd-parse)/.test(request)){
      return callback(null, 'commonjs ' + request);
    }
    callback();
  },

  context: __dirname,
  
  target: 'node',
  mode: 'production',

  optimization: {
    minimize: false
  },

  plugins: []
};