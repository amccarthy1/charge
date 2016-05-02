var services = {
  "twitch.tv": "twitch.tv",
  "hitbox.tv": "hitbox.tv",
  "youtube": "youtube"
}

var channelDefaults = {
  "channelWidth": 1280,
  "channelHeight": 720,
  "chatHeight": 720,
  "chatWidth": 400
}

function populateDefaults(options, defaults) {
  if (options == null) {
    options = {};
  }
  for (var key in defaults) {
    if (!Object.prototype.hasOwnProperty.call(options, key)) {
      options[key] = defaults[key];
    }
  }
  console.log(options);
  return options;
}

function getStreamTemplate(service) {
  if (Object.prototype.hasOwnProperty.call(services, service)) {
    return services[service] + '/stream';
  }
  return null;
}

function getChatTemplate(service) {
  if (Object.prototype.hasOwnProperty.call(services, service)) {
    return services[service] + '/chat';
  }
  return null;
}

function embedStream(hbs, channel, options) {
  var service = channel.service;
  // TODO handle nonexistent service
  return hbs.partials[getStreamTemplate(service)]({
    channel: channel,
    options: populateDefaults(options.hash, channelDefaults)
  });
}

function embedChat(hbs, channel, options) {
  var service = channel.service;
  // TODO handle nonexistent service
  return hbs.partials[getChatTemplate(service)]({
    channel: channel,
    options: populateDefaults(options.hash, channelDefaults)
  });
}

module.exports.embedStream = embedStream;
module.exports.embedChat = embedChat;
