const { models } = require('../../../models');
const { getInstanceById } = require('../../utils/schemaUtils');

module.exports = {
  // TODO::how to check data before saving (usersIds, roomId) validation?!
  createEvent: async (root, { input, usersIds, roomId }) => {
    const event = await models.Event.create(input);

    await event.setRoom(roomId);
    await event.setUsers(usersIds);

    return event;
  },

  addUserToEvent: async (root, { id, userId }) => {
    const event = await getInstanceById('Event', id);
    const user = await getInstanceById('User', userId);

    const eventHasThisUser = await event.hasUser(userId);

    if (!eventHasThisUser && user) {
      const eventUsers = await event.getUsers();
      const eventUsersIds = eventUsers.map(eventUser =>
        eventUser.id.toString()
      );

      await event.setUsers([...eventUsersIds, userId.toString()]);
    }

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
