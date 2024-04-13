import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
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
  return (
    getArticleFiles()
      .map((slug) => getArticleBySlug(slug, fields))
      // @ts-ignore
      .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))
  );
}

export async function convertMarkdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(markdown);
  return result.toString();
}
