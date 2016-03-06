'use strict';
// Migration will create a new "startDate" and "endDate" column on Event.
// Events by default will start at t=0 (1/1/1970) and end at t=1 (1ms later)
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Events',
      'startDate',
      {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(0)
      }
    ).then(function() {
      return queryInterface.addColumn(
        'Events',
        'endDate',
        {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: new Date(1)
        }
      );
    });
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Events',
      'startDate'
    ).then(function() {
      return queryInterface.removeColumn(
        'Events',
        'endDate'
      );
    })
  }
};
