var models = require('../models');

var serviceToPartialMappings = {
  "twitch.tv": "twitch.tv",
  "youtube": "youtube"
}

function stream(service) {
  return serviceToPartialMappings[service] + '/stream';
}

function chat(service) {
  return serviceToPartialMappings[service] + '/chat';
}

function byNameService(req, res, next) {
  models.Channel.find({
    where: {username: req.params.username},
    include: [
      {
        model: models.ChannelType,
        where: {
          service: req.params.service
        }
      }
    ]
  }).then(function(channel) {
    var _username = channel.dataValues.username;
    var _service = channel.ChannelType.dataValues.service;
    res.render('channel', {
      username: _username,
      channel: _username,
      service: _service,
      stream: stream(_service),
      chat: chat(_service)
    });
  })
}

module.exports.byNameService = byNameService;
