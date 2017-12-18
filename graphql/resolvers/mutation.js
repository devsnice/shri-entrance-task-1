const eventMutations = require('../schema/event/eventMutations');
const roomMutations = require('../schema/room/roomMutations');
const userMutations = require('../schema/user/userMutations');

module.exports = {
  ...eventMutations,
  ...roomMutations,
  ...userMutations
};
