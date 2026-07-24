import { parse } from "date-fns";
import RSS from "rss";
import { getAllArticles } from "../../lib/article";
import { siteMetadata } from "../../lib/site-metadata";

export function GET() {
  const articles = getAllArticles([
    "date",
    "draft",
    "slug",
    "title",
    "image",
    "content",
    "language",
    "description",
  ]).filter((article) => !article.draft);

  const feed = new RSS({
    title: "Ivan Santos — Platform & AI Engineering",
    description:
      "Practical writing on platform engineering, production AI systems, Kubernetes, observability, Go, and engineering judgment.",
    generator: "RSS for Node and Next.js",
    feed_url: `${siteMetadata.siteUrl}/feed.xml`,
    site_url: `${siteMetadata.siteUrl}/`,
    copyright: `Copyright ${new Date().getFullYear().toString()}, Ivan Santos`,
    language: "en-US",
    pubDate: new Date().toUTCString(),
    ttl: 60,
  });

  if (articles) {
    for (const article of articles) {
      feed.item({
        title: article.title ?? "",
        description: article.description ?? "",
        url: `${siteMetadata.siteUrl}/blog/${article.slug}`,
        author: "Ivan Santos",
        date: parse(
          article.date ?? new Date().toDateString(),
          "yyyy-MM-dd",
          new Date()
        ),
      });
    }
  }

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
