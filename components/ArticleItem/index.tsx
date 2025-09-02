import styles from './styles.module.scss';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Article } from '../../types/article';
import brFlag from './br-flag@2x.png';
import enFlag from './en-flag@2x.png';

interface Props {
  article: Article;
}

const ArticleItem = ({ article }: Props) => {
  const langFlag = article.language === 'en' ? enFlag : brFlag;
  return (
    <div className={styles.articleItem}>
      <Link href={`/blog/${article.slug}/`} passHref={true}>
        <div className={styles.date}>{article.date}</div>
        <div className={styles.title}>
          <Image
            src={langFlag}
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
