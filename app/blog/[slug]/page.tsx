import BlogAvatar from "../../../components/BlogAvatar";
import Comments from "../../../components/Comments";
import NavigationBar from "../../../components/NavigationBar";
import {
  convertMarkdownToHtml,
  getAllArticles,
  getArticleBySlug,
} from "../../../lib/article";
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

  return (
    <>
      <header
        className={styles.articleHeader}
        style={{
          backgroundImage: `url(${article.image})`,
        }}
      >
        <NavigationBar dark={true} /> <BlogAvatar />
      </header>
      <div className={styles.container}>
        <div className="blog-post">
          <h2 className={styles.date}> {article.date} </h2>
          <h1 className={styles.title}> {article.title} </h1>
          <div
            className={styles.content}
            // biome-ignore lint/security/noDangerouslySetInnerHtml:  This is necessary to render HTML content
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
          <Comments />
        </div>
      </div>
    </>
  );
}
