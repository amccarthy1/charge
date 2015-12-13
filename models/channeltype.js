'use strict';
module.exports = function(sequelize, DataTypes) {
  var ChannelType = sequelize.define('ChannelType', {
    service: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ChannelType;
};