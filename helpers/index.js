var embedHelpers = require('./embed');

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
}

function getHelpers(handlebars) {
  var helpers = {};
  registerHelpers(handlebars, helpers)
  return helpers;
}

module.exports.getHelpers = getHelpers;
