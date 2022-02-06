import React from 'react';
import ArticleItem from '../components/ArticleItem';
import NavigationBar from '../components/NavigationBar';
import { getAllArticles } from '../lib/article';
import styles from '../styles/blog.module.scss';
import { Article } from '../types/article';

export async function getStaticProps() {
  const articles = getAllArticles([
    'date',
    'draft',
    'slug',
    'title',
    'image',
    'content',
    'language',
    'description',
  ]);

  return {
    props: {
      title: 'Articles - Ivan Santos',
      articles,
    },
  };
}

interface Props {
  articles: Article[];
}

const IndexPage = ({ articles }: Props) => {
  const renderAll = () => {
    return articles.map((post, index) => {
      if (!post.draft) {
        return <ArticleItem key={index} article={post} />;
      }
    });
  };

  return (
    <div>
      <header className={styles.header}>
        <NavigationBar />
      </header>
      <div className={styles.articleList}>{renderAll()}</div>
    </div>
  );
};

export default IndexPage;
