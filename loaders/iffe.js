const LoaderUtils = require('loader-utils');

module.exports = function(source) {
  const options = LoaderUtils.getOptions(this) || {};

  console.log(source);

  return source;
};
