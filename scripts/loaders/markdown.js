const marked = require('marked');

class Markdown {
  constructor(options) {
    this.options = options;
  }

  run(source) {
    const { options } = this;
    marked.setOptions(options);
    return marked(source);
  }
}
