class MarkdownToHtmlPlugin {
  apply(compiler) {
    // emit 是异步 hook，使用 tapAsync 触及它，还可以使用 tapPromise/tap(同步)
    compiler.hooks.emit.tapAsync(
      'MarkdownToHtmlPlugin',
      (compilation, callback) => {
        console.log(compilation.assets);
        compilation.assets['info.md'] = {
          source: function() {
            return '';
          },
          size: function() {
            return 0;
          },
        };
        callback();
      },
    );
  }
}

module.exports = MarkdownToHtmlPlugin;
