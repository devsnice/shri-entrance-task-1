const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const { models } = require('../../../models');

module.exports = {
  event: function(root, { id }) {
    return models.Event.findById(id);
  },
  events: function(root, { dateStart, dateEnd }) {
    return models.Event.findAll({
      where: {
        dateStart: {
          [Op.gte]: new Date(dateStart),
          [Op.lte]: new Date(dateEnd)
        }
      }
    });
  }
};
