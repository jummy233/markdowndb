import {MarkdownRuntimeDatabase, MarkdownStaticDatabase} from '../dist/markdown-map';
import markdowndb from '../dist/macro';
import 'regenerator-runtime';

it("Basic runtime promise test", async () => {
  const md: MarkdownRuntimeDatabase = markdowndb('markdown');

  const list = await Promise.all(
    Array.from(md.values("default"))
      .map(m => m.content)
  );
  expect(list.filter(e => e.length <= 20).length).toBe(1);
});

it("Basic static promise test", async () => {
  const md: MarkdownStaticDatabase = markdowndb('markdown', 'static');

  // fake fetch behavior
  const list = await Promise.all(
    Array.from(md.values("default"))
      .map(m => m.content)
  );
  expect(list.filter(e => e.length <= 20).length).toBe(1);
});

