import type { Metadata } from "next";
import Link from "next/link";
import BlogAvatar from "../../../components/BlogAvatar";
import StructuredData from "../../../components/StructuredData";
import {
  convertMarkdownToHtml,
  getAllArticles,
  getArticleBySlug,
} from "../../../lib/article";
import { siteMetadata } from "../../../lib/site-metadata";
import {
  absoluteUrl,
  articleBreadcrumbSchema,
  articleSchema,
} from "../../../lib/structured-data";
import styles from "../../../styles/article.module.scss";
import "../../../styles/highlightjs.css";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const articles = getAllArticles([
    "canonical_url",
    "content",
    "date",
    "description",
    "image",
    "language",
    "slug",
    "title",
  ]);
  const data = articles?.map((article) => {
    return { slug: article.slug };
  });

  return data;
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug, [
    "date",
    "description",
    "image",
    "language",
    "slug",
    "title",
    "updated",
  ]);
  const url = `${siteMetadata.siteUrl}/blog/${slug}`;
  const image = article.image ? absoluteUrl(article.image) : undefined;

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: url,
    },
    authors: [
      { name: siteMetadata.author, url: `${siteMetadata.siteUrl}/about` },
    ],
    openGraph: {
      title: article.title,
      description: article.description,
      url,
      siteName: siteMetadata.title,
      images: image ? [image] : undefined,
      type: "article",
      publishedTime: article.date,
      modifiedTime: article.updated ?? article.date,
      authors: [`${siteMetadata.siteUrl}/about`],
    },
    twitter: {
      title: article.title,
      description: article.description,
      images: image ? [image] : undefined,
      card: "summary_large_image",
      creator: "@pragmaticivan",
    },
  };
}

export default async function ArticleView({
  params,
}: Readonly<{ params: Params }>) {
  const { slug } = await params;
  const article = getArticleBySlug(slug, [
    "canonical_url",
    "content",
    "date",
    "description",
    "image",
    "language",
    "slug",
    "title",
    "updated",
  ]);

  const content = await convertMarkdownToHtml(article.content ?? "");
  const url = `${siteMetadata.siteUrl}/blog/${article.slug}`;
  const publishedDate = article.date
    ? new Intl.DateTimeFormat("en-US", {
        dateStyle: "long",
        timeZone: "UTC",
      }).format(new Date(`${article.date}T00:00:00Z`))
    : "";
  const updatedDate = article.updated
    ? new Intl.DateTimeFormat("en-US", {
        dateStyle: "long",
        timeZone: "UTC",
      }).format(new Date(`${article.updated}T00:00:00Z`))
    : undefined;

  return (
    <>
      <StructuredData
        schema={articleSchema({
          article,
          url,
        })}
      />
      <StructuredData
        schema={articleBreadcrumbSchema({
          title: article.title ?? "",
          url,
        })}
      />
      <header
        className={styles.articleHeader}
        style={{
          backgroundImage: `url(${article.image})`,
        }}
      >
        <BlogAvatar />
      </header>
      <div className={styles.container}>
        <article className="blog-post">
          <p className={styles.date}>
            <time dateTime={article.date}>{publishedDate}</time>
            {updatedDate ? (
              <>
                {" · Updated "}
                <time dateTime={article.updated}>{updatedDate}</time>
              </>
            ) : null}
          </p>
          <h1 className={styles.title}>{article.title}</h1>
          <p className={styles.dek}>{article.description}</p>
          <p className={styles.byline}>
            By <Link href="/about">Ivan Santos</Link>
          </p>
          <div
            className={styles.content}
            // biome-ignore lint/security/noDangerouslySetInnerHtml:  This is necessary to render HTML content
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
          <footer className={styles.articleFooter}>
            <p className={styles.authorLabel}>About the author</p>
            <h2>Ivan Santos</h2>
            <p>
              Ivan is a Staff Engineer and engineering consultant working across
              platform engineering, production AI systems, developer
              productivity, and observability.
            </p>
            <div className={styles.articleLinks}>
              <Link href="/consulting">Work with Ivan</Link>
              <Link href="/blog">More writing</Link>
            </div>
          </footer>
        </article>
      </div>
    </>
  );
}
