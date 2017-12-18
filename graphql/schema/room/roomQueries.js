const { models } = require('../../../models');

module.exports = {
  room(root, { id }) {
    return models.Room.findById(id);
  },
  rooms() {
    return models.Room.findAll({});
  }
};
