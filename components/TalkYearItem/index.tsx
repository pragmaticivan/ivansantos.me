import styles from './styles.module.scss';

import Link from 'next/link';
// import Image from 'next/image';

import React from 'react';
import { TalkYear } from '../../types/talk';

interface Props {
  talkYear: TalkYear;
}
const TalkYearItem = ({ talkYear }: Props) => {
  return (
    <>
      <div className={styles.item}>{talkYear.year}</div>
      <ul>
        {talkYear.talks.map((talk, tIndex) => {
          return (
            <li key={`talk-${tIndex}`}>
              <div className={styles.date}>{talk.date}</div>
              <div className={styles.title}>
                {talk.title} - {talk.language}
              </div>
              <div className={styles.description}>{talk.where}</div>
              <Link
                href={talk.presentation.url}
                passHref={true}
                target="_blank"
              >
                {talk.presentation.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TalkYearItem;
