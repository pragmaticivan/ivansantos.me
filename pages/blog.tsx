import React from 'react';
import ArticleItem from '../components/ArticleItem';
import NavigationBar from '../components/NavigationBar';
import DefaultLayout from '../layouts/DefaultLayout';
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

const title = 'Blog ✍️';
const subtitle =
  "I share anything that may help others, technologies I'm using and cool things I've made.";

const BlogPage = ({ articles }: Props) => {
  const renderAll = () => {
    return articles.map((post, index) => {
      if (!post.draft) {
        return <ArticleItem key={index} article={post} />;
      }
    });
  };

  return (
    <DefaultLayout title={title} description={subtitle}>
      <header className={styles.header}>
        <NavigationBar />
      </header>
      <div className={styles.articleList}>{renderAll()}</div>
    </DefaultLayout>
  );
};

export default BlogPage;
