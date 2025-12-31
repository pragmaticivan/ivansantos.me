import fs from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import type { Article } from "../types/article";

const articlesDirectory = join(process.cwd(), "content/articles");

export function getArticleFiles(): string[] {
  return fs.readdirSync(articlesDirectory);
}

export function getArticleBySlug(slug: string, fields: string[] = []) {
  // biome-ignore lint/performance/useTopLevelRegex: Regular expression is necessary here
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(articlesDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: Partial<Article> = {};

  for (const field of fields) {
    if (field === "slug") {
      items[field] = realSlug;
    }

    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field as keyof Article] = data[field];
    }
  }

  return items;
}

export function getAllArticles(fields: string[] = []): Partial<Article>[] {
  const data = getArticleFiles()
    .map((slug) => getArticleBySlug(slug, fields))
    .sort((post1, post2) => {
      if (post1.date && post2.date) {
        return new Date(post1.date) > new Date(post2.date) ? -1 : 1;
      }
      return 0;
    });
  return data;
}

export async function convertMarkdownToHtml(markdown: string) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeDocument)
    .use(rehypeFormat)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .use(rehypeHighlight)
    .process(markdown);

  // const result = await remark()
  //   .use(html, { sanitize: false })
  //   // .use(prism)
  //   .process(markdown);
  return String(file);
}
