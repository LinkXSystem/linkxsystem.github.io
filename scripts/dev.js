const path = require('path');
const fs = require('fs');
const rimraf = require('rimraf');

const configs = require('../configs/webpack.dev.conf');

const getEntrys = target => {
  let instance = [];

  const readdir = source => {
    const files = fs.readdirSync(source);

    files.forEach(item => {
      const file = path.resolve(source, item);
      const stat = fs.statSync(file);
      const dir = file.replace(target, '');
      stat.isDirectory()
        ? readdir(file)
        : instance.push({
            name: item,
            dir,
            path: file,
          });
    });
  };

  readdir(target);

  return instance;
};

(function() {
  console.log('======================================');
  console.log('=================BLOG=================');
  console.log('======================================');

  const entry = path.resolve(__dirname, '..', 'src');
  const output = path.resolve(__dirname, '..', 'dist');

  rimraf.sync(output);

  const entrys = getEntrys(entry);

  console.log(entrys);
})();
