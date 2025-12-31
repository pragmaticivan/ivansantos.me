import type { MetadataRoute } from "next";
import { getAllArticles } from "../lib/article";
import { siteMetadata } from "../lib/site-metadata";

export default function sitemap(): MetadataRoute.Sitemap {
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

  const blogRoutes = articles
    .filter((post) => !post.draft)
    .map((post) => ({
      url: `${siteMetadata.siteUrl}/blog/${post.slug}`,
      lastModified: post.date,
    }));

  const routes = ["", "about", "open-source", "talks", "uses", "blog"].map(
    (route) => ({
      url: `${siteMetadata.siteUrl}/${route}`,
      lastModified: new Date().toISOString().split("T")[0],
    })
  );

  return [...routes, ...blogRoutes];
}
