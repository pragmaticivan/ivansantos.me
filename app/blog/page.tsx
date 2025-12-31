import ArticleItem from "../../components/ArticleItem";
import NavigationBar from "../../components/NavigationBar";
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
    <>
      <header className={styles.header}>
        <NavigationBar />
      </header>
      <div className={styles.articleList}>{renderAll()}</div>
    </>
  );
};

export default BlogPage;
