const { models } = require('../../models');

const isInstanceExist = (instance, { modelName, id }) => {
  if (!instance) {
    throw new Error(`Not instance of type ${modelName} with id ${id}`);
  }

  return true;
};

const getInstanceById = async (modelName, id) => {
  const instance = await models[modelName].findById(id);

  if (isInstanceExist(instance, { modelName, id })) {
    return instance;
  }
};

module.exports = { getInstanceById };
