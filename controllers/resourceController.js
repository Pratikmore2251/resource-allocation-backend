const { Resource } = require("../models");

exports.getResources = async (req, res) => {
  const resources = await Resource.findAll();
  res.json(resources);
};

exports.addResource = async (req, res) => {
  const { name, type } = req.body;
  const resource = await Resource.create({ name, type });
  res.json(resource);
};
