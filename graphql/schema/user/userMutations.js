const { models } = require('../../../models');
const { getInstanceById } = require('../../utils/schemaUtils');

module.exports = {
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
  }
};
