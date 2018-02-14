const { INVALID_PARAMETERS } = require('../constants/errors');
const { createError } = require('./createError');

function parameterInvalid(res) {
  res.json(createError(INVALID_PARAMETERS));
}

function unknowError(err, res) {
  console.log(err);
  res.json(createError('SYSTEM_ERROR'));
}

module.exports = { parameterInvalid, unknowError };
