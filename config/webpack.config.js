/* global __dirname */
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './../src/index.js'),
  
  output: {
    path: path.resolve(__dirname, './../dist'), 
    filename: 'mculVisualizeSVG.js',
    library: 'MoleculeVisualizeSVG',
    libraryTarget: 'window'
  },

  devtool: 'cheap-source-map',

  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: require('./babel.config')(false)
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

  context: __dirname,
  target: 'web',
  mode: 'production',

  plugins: []
};