import path from 'path';
import webpack from 'webpack';
import memoryfs from 'memory-fs';

const configs = require('../configs/webpack.dev.conf');

export default (fixture, options = {}) => {
  const compiler = webpack(configs);

  compiler.outputFileSystem = new memoryfs();

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err || stats.hasErrors()) reject(err);

      resolve(stats);
    });
  });
};
