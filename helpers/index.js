var embedHelpers = require('./embed');
var utilHelpers = require('./util');

function wrap(func, hbs) {
  return function() {
    var args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));
    args.splice(0, 0, hbs);
    return func.apply(null, args);
  }
}

function register(hbs, helperFile, helpers) {;
  for (var helper in helperFile) {
    helpers[helper] = wrap(helperFile[helper], hbs);
  }
}

function registerHelpers(hbs, helpers) {
  register(hbs, embedHelpers, helpers);
  register(hbs, utilHelpers, helpers);
}

function getHelpers(handlebars) {
  var helpers = {};
  registerHelpers(handlebars, helpers)
  return helpers;
}

module.exports.getHelpers = getHelpers;
