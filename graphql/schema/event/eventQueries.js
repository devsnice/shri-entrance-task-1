const { models } = require('../../../models');

module.exports = {
  event: function(root, { id }) {
    return models.Event.findById(id);
  },
  events: function() {
    return models.Event.findAll({});
  }
};
