import ArticleItem from "../../components/ArticleItem";
import { getAllArticles } from "../../lib/article";
import styles from "../../styles/blog.module.scss";
import type { Article } from "../../types/article";
import { genPageMetadata } from "../seo";

export const metadata = genPageMetadata({
  title: "Blog ✍️",
  description: `I share anything that may help others, technologies I'm using and cool things I've made`,
});

const BlogPage = async () => {
  const articles = getAllArticles([
    "date",
    "draft",
    "slug",
    "title",
    "image",
    "content",
    "language",
    "description",
  ]);
  const renderAll = () => {
    return articles
      .map((post, index) => {
        if (!post.draft && post.slug && post.title) {
          return <ArticleItem article={post as Article} key={index} />;
        }
        return null;
      })
      .filter((item) => item !== null);
  };

  return (
    <main className={styles.blogPage}>
      <div className={styles.blogIntro}>
        <h1>Writing</h1>
        <p>
          Practical notes on platform and AI engineering, infrastructure, and
          the lessons that survive contact with production.
        </p>
      </div>
      <div className={styles.articleList}>{renderAll()}</div>
    </main>
  );
};

export default BlogPage;
