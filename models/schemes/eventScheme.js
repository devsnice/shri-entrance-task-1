const Sequelize = require('sequelize');

const initScheme = function(sequelize) {
  const Event = sequelize.define('Event', {
    title: Sequelize.STRING,
    dateStart: Sequelize.DATE,
    dateEnd: Sequelize.DATE
  });

  return Event;
};

module.exports = initScheme;
