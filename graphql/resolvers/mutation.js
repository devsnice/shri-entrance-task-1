const { models } = require('../../models');

const isInstanceExist = instance => {
  if (!instance) {
    throw new Error('Not instance with such id');
  }

  return true;
};

const getInstanceById = async (modelName, id) => {
  const instance = await models[modelName].findById(id);

  if (isInstanceExist(instance)) {
    return instance;
  }
};

module.exports = {
  // User
  createUser: async (root, { input }) => {
    const user = models.User.create(input);

    return user;
  },

  updateUser: async (root, { id, input }) => {
    const user = await getInstanceById('User', id);

    await user.update(input);

    return user;
  },

  removeUser: async (root, { id }) => {
    const user = await getInstanceById('User', id);

    await user.destroy();

    return user;
  },

  // Room
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
  },

  // Event
  createEvent: async (root, { input, usersIds, roomId }) => {
    const event = await models.Event.create(input);

    await event.setRoom(roomId);
    await event.setUsers(usersIds);

    return event;
  },

  updateEvent: async (root, { id, input }) => {
    const event = await getInstanceById('Event', id);

    await event.update(input);

    return event;
  },

  removeUserFromEvent: async (root, { id, userId }) => {
    const event = await getInstanceById('Event', id);

    await event.removeUser(userId);

    return event;
  },

  changeEventRoom: async (root, { id, roomId }) => {
    const event = await getInstanceById('Event', id);

    await event.setRoom(roomId);

    return event;
  },

  removeEvent: async (root, { id }) => {
    const event = await getInstanceById('Event', id);

    await event.destroy();

    return event;
  }
};
