const programmes = require("../data/programmes");

exports.getProgrammes = (req, res) => {
  res.json(programmes);
};