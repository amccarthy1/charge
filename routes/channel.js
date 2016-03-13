var models = require('../models');

var serviceToPartialMappings = {
  "twitch.tv": "twitch.tv",
  "youtube": "youtube",
  "hitbox.tv": "hitbox.tv"
}

function stream(service) {
  return serviceToPartialMappings[service] + '/stream';
}

function chat(service) {
  return serviceToPartialMappings[service] + '/chat';
}

function renderChannel(res, channel) {
  var _username = channel.dataValues.username;
  var _service = channel.ChannelType.dataValues.service;
  res.render('channel', {
    username: _username,
    channel: _username,
    service: _service,
    stream: stream(_service),
    chat: chat(_service)
  });
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
    if (channel !== null) {
      renderChannel(res, channel);
    } else {
      next();
    }
  });
}

function byId(req, res, next) {
  models.Channel.find({
    where: {id: req.params.id},
    include: [
      {
        model: models.ChannelType,
        attributes: ['service']
      }
    ],
    attributes: ['username']
  }).then(function(channel) {
    if (channel !== null) {
      renderChannel(res, channel);
    } else {
      next();
    }
  });
}

function notFound(req, res, next) {
  res.status(404).send('No such channel exists');
}

module.exports.byNameService = byNameService;
module.exports.byId = byId;
module.exports.notFound = notFound;
