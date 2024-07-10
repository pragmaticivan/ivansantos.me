import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';

import { remark } from 'remark';
import html from 'remark-html';
// import prism from 'remark-prism';
import { VFileCompatible } from 'vfile';
import { Article } from '../types/article';

const articlesDirectory = join(process.cwd(), 'content/articles');

export function getArticleFiles(): string[] {
  return fs.readdirSync(articlesDirectory);
}

export function getArticleBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(articlesDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items: Partial<Article> = {};

  for (const field of fields) {
    if (field === 'slug') {
      items[field] = realSlug;
    }

    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      // @ts-ignore
      items[field] = data[field];
    }
  }

  return items;
}

export function getAllArticles(fields: string[] = []): Partial<Article>[] {
  const data = getArticleFiles()
    .map((slug) => getArticleBySlug(slug, fields))
    // @ts-ignore
    .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'));
  return data;
}

export async function convertMarkdownToHtml(markdown: string) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument)
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypeHighlight)
    .process(markdown);

  // const result = await remark()
  //   .use(html, { sanitize: false })
  //   // .use(prism)
  //   .process(markdown);
  return String(file);
}
