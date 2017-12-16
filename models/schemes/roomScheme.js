const Sequelize = require('sequelize');

const initScheme = function(sequelize) {
  const Room = sequelize.define('Room', {
    title: Sequelize.STRING,
    capacity: Sequelize.SMALLINT,
    floor: Sequelize.TINYINT
  });

  return Room;
};

module.exports = initScheme;
