const { models } = require('../../../models');

module.exports = {
  user(root, { id }) {
    return models.User.findById(id);
  },
  users() {
    return models.User.findAll({});
  }
};
