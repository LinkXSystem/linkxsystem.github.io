import compiler from '../compiler.js';

test("Markdown Loader's Function Test", async () => {
  const stats = await compiler('example.txt');
  const output = stats.toJson().modules[0].source;

  expect(output).toBe("export default ''");
});
