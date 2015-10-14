var assign = require('object-assign');
var baseConfig = require('./webpack.config');

module.exports = assign(baseConfig, {
  // fixes sourcemaps in karma
  devtool: 'inline-source-map'
});
