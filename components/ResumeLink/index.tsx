import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

const ResumeLink = () => (
  <div className={styles.wrapper}>
    <Link href={'/resume.pdf#non_html'}>GET MY RESUME</Link>
  </div>
);

export default ResumeLink;
