function safeDefault(Handlebars, value, defaultValue) {
  if (value) {
    return value.toString();
  } else {
    return defaultValue.toString();
  }
}

module.exports.safeDefault = safeDefault;
