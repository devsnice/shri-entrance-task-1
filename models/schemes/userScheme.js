const Sequelize = require('sequelize');

const initScheme = function(sequelize) {
  const User = sequelize.define('User', {
    login: Sequelize.STRING,
    homeFloor: Sequelize.TINYINT,
    avatarUrl: Sequelize.STRING
  });

  return User;
};

module.exports = initScheme;
