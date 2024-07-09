import BlogAvatar from '../../../components/BlogAvatar';
import NavigationBar from '../../../components/NavigationBar';
import Comments from '../../../components/Comments';
import {
  convertMarkdownToHtml,
  getAllArticles,
  getArticleBySlug,
} from '../../../lib/article';
import styles from '../../../styles/article.module.scss';

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const articles = getAllArticles([
    'canonical_url',
    'content',
    'date',
    'description',
    'image',
    'language',
    'slug',
    'title',
  ]);
  const data =  articles?.map((article) => {
    return { slug: article.slug };
  });

  console.log('dataaaaa', data);
  return data;
}

export default async function ArticleView({ params }: Readonly<{ params: { slug: string } }>) {
  console.log('params', params);
  const article = getArticleBySlug(params.slug, [
    'canonical_url',
    'content',
    'date',
    'description',
    'image',
    'language',
    'slug',
    'title',
  ]);

  const content = await convertMarkdownToHtml(article.content ?? '');

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
              __html: content,
            }}
          />
          <Comments />
        </div>
      </div>
    </>
  );
}
