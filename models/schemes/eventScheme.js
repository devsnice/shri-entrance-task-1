const Sequelize = require('sequelize');

const initScheme = function(sequelize, { Room }) {
  if (!Room)
    throw new Error("Needs dependency 'Room' for creating the model Event");

  const Event = sequelize.define('Event', {
    title: Sequelize.STRING,
    dateStart: Sequelize.DATE,
    dateEnd: Sequelize.DATE
  });

  Event.prototype.getRoom = function() {
    return Room.findById(this.RoomId);
  };

  return Event;
};

module.exports = initScheme;
