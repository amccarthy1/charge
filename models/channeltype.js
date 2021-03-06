'use strict';

module.exports = function(sequelize, DataTypes) {
  var ChannelType = sequelize.define('ChannelType', {
    service: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        ChannelType.hasMany(models.Channel);
      }
    }
  });
  return ChannelType;
};
