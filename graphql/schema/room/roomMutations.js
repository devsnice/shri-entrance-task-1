const { models } = require('../../../models');
const { getInstanceById } = require('../../utils/schemaUtils');

module.exports = {
  createRoom: async (root, { input }) => {
    const room = models.Room.create(input);

    return room;
  },

  updateRoom: async (root, { id, input }) => {
    const room = await getInstanceById('Room', id);

    await room.update(input);

    return room;
  },

  removeRoom: async (root, { id }) => {
    const room = await getInstanceById('Room', id);

    await room.destroy();

    return room;
  }
};
