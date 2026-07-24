import type { Metadata } from "next";
import { ArticleJsonLd } from "next-seo";
import BlogAvatar from "../../../components/BlogAvatar";
import {
  convertMarkdownToHtml,
  getAllArticles,
  getArticleBySlug,
} from "../../../lib/article";
import { siteMetadata } from "../../../lib/site-metadata";
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
  const article = getArticleBySlug(slug, ["title", "description", "image"]);

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: article.image ? [article.image] : undefined,
      type: "article",
    },
    twitter: {
      title: article.title,
      description: article.description,
      images: article.image ? [article.image] : undefined,
      card: "summary_large_image",
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
  ]);

  const content = await convertMarkdownToHtml(article.content ?? "");
  const url = `${siteMetadata.siteUrl}/blog/${article.slug}`;

  return (
    <>
      <ArticleJsonLd
        author={{
          "@type": "Person",
          name: siteMetadata.author,
          url: siteMetadata.siteUrl,
        }}
        datePublished={article.date ?? ""}
        description={article.description ?? ""}
        headline={article.title ?? ""}
        image={article.image}
        url={url}
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
        <div className="blog-post">
          <p className={styles.date}> {article.date} </p>
          <h1 className={styles.title}> {article.title} </h1>
          <div
            className={styles.content}
            // biome-ignore lint/security/noDangerouslySetInnerHtml:  This is necessary to render HTML content
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
        </div>
      </div>
    </>
  );
}
