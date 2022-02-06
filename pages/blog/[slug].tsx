import { GetStaticPaths, GetStaticProps } from 'next';
import BlogAvatar from '../../components/BlogAvatar';
import NavigationBar from '../../components/NavigationBar';
import { Article } from '../../types/article';
import { ParsedUrlQuery } from 'querystring';
import {
  convertMarkdownToHtml,
  getAllArticles,
  getArticleBySlug,
} from '../../lib/article';
import styles from '../../styles/article.module.scss';

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const { slug } = context.params as Params;
    const article = getArticleBySlug(slug, [
      'canonical_url',
      'content',
      'date',
      'description',
      'image',
      'language',
      'slug',
      'title',
    ]);

    const content = await convertMarkdownToHtml(article.content || '');

    return {
      props: {
        ...article,
        content,
      },
      revalidate: 60,
    };
  } catch (e) {
    return { props: { errorCode: 404 } };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = getAllArticles(['slug']);

  return {
    paths: articles.map((article) => {
      return {
        params: {
          slug: article.slug,
        },
      };
    }),
    fallback: 'blocking',
  };
};

export default function ArticleView(article: Article) {
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
            dangerouslySetInnerHTML={{
              __html: article.content,
            }}
          />
        </div>
      </div>
    </>
  );
}
