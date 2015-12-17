'use strict';
module.exports = function(sequelize, DataTypes) {
  var Channel = sequelize.define('Channel', {
    username: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Channel.belongsTo(models.ChannelType);
      }
    }
  });
  return Channel;
};
