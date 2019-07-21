const LoaderUtils = require('loader-utils');
const ValidateOptions = require('schema-utils');

const marked = require('marked');

const schema = {
  type: 'object',
  properties: {},
};

module.exports = function(source) {
  const options = LoaderUtils.getOptions(this) || {};

  // 用于校验配置
  // ValidateOptions(schema, options, 'Markdown Loader');

  // 清理缓存
  this.cacheable();

  marked.setOptions(options);

  return marked(source);
};
