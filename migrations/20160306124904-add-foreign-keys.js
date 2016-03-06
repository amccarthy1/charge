'use strict';
/*
 * For some reason, creating a new model with a foreign key creates the column
 * in the database, but does not add the column to the migration. This migration
 * fixes that issue and allows the database to be completely set up by running
 * the sequelize migrate command. From now on, all migrations will be manually
 * edited to ensure they update the database fully.
 */
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Channels',
      'ChannelTypeId',
      {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: 'ChannelType',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'restrict'
      }
    ).then(function() {
      return queryInterface.addColumn(
        'Events',
        'ChannelId',
        {
          type: Sequelize.INTEGER.UNSIGNED,
          references: {
            model: 'Channel',
            key: 'id'
          },
          referenceKey: 'id',
          onUpdate: 'cascade',
          onDelete: 'restrict'
        }
      );
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Events', 'ChannelId'
    ).then(function() {return queryInterface.removeColumn(
      'Channels',
      'ChannelTypeId'
    )});
  }
};
