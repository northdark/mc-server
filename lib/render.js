
/**
 * Module dependencies.
 */

var views = require('co-views');
var env = process.env.NODE_ENV || 'development';

// setup views mapping .html
// to the swig template engine

module.exports = views(__dirname + '/../views', {
  map: { html: 'swig' },  cache : env != 'production' ? false : 'memory'
});