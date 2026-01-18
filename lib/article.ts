import fs from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";
import rehypeFormat from "rehype-format";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import type { Article } from "../types/article";

const articlesDirectory = join(process.cwd(), "content/articles");

export function getArticleFiles(): string[] {
  return fs
    .readdirSync(articlesDirectory)
    .filter((file) => file.endsWith(".md"));
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
      const date1 = post1.date ? new Date(post1.date).getTime() : 0;
      const date2 = post2.date ? new Date(post2.date).getTime() : 0;
      return date1 > date2 ? -1 : 1;
    });
  return data;
}

export async function convertMarkdownToHtml(markdown: string) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
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
