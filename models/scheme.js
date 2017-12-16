const Sequelize = require('sequelize');

const initEventScheme = require('./schemes/eventScheme');
const initRoomScheme = require('./schemes/roomScheme');
const initUserScheme = require('./schemes/userScheme');

module.exports = function(sequelize) {
  const Room = initRoomScheme(sequelize);
  const Event = initEventScheme(sequelize, { Room });
  const User = initUserScheme(sequelize);

  Event.belongsToMany(User, { through: 'Events_Users' });
  User.belongsToMany(Event, { through: 'Events_Users' });
  Event.belongsTo(Room);

  return {
    Room,
    Event,
    User
  };
};
