const eventQueries = require('../schema/event/eventQueries');
const roomQueries = require('../schema/room/roomQueries');
const userQueries = require('../schema/user/userQueries');

module.exports = {
  ...eventQueries,
  ...roomQueries,
  ...userQueries
};
