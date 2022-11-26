import styles from './styles.module.scss';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Article } from '../../types/article';

interface Props {
  article: Article;
}

const ArticleItem = ({ article }: Props) => {
  const langFlagLarger =
    article.language === 'en'
      ? require('./en-flag@2x.png')
      : require('./br-flag@2x.png');
  return (
    <div className={styles.articleItem}>
      <Link href={`/blog/${article.slug}/`} passHref={true}>
        <div className={styles.date}>{article.date}</div>
        <div className={styles.title}>
          <Image
            src={langFlagLarger}
            width={36}
            height={23}
            alt={article.language === 'en' ? 'American Flag' : 'Brazilian Flag'}
          />{' '}
          - {article.title}
        </div>
        <div className={styles.description}>{article.description}</div>
      </Link>
    </div>
  );
};

export default ArticleItem;
