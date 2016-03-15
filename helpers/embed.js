var services = {
  "twitch.tv": "twitch.tv",
  "hitbox.tv": "hitbox.tv",
  "youtube": "youtube"
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

function embedStream(hbs, channel) {
  var service = channel.ChannelType.dataValues.service;
  // TODO handle nonexistent service
  return hbs.partials[getStreamTemplate(service)]({
    channel: channel
  });
}

function embedChat(hbs, channel) {
  var service = channel.ChannelType.dataValues.service;
  // TODO handle nonexistent service
  return hbs.partials[getChatTemplate(service)]({
    channel: channel
  });
}

module.exports.embedStream = embedStream;
module.exports.embedChat = embedChat;
