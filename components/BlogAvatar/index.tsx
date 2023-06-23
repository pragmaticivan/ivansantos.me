import React from 'react';
import styles from './styles.module.scss';
import dog1Image from './dog1.png';
import dog2Image from './dog2.png';

const avatars = [dog1Image.src, dog2Image.src];
const BlogAvatar = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${
          avatars[Math.floor(Math.random() * avatars.length)]
        })`,
      }}
      className={styles.avatar}
    />
  );
};

export default BlogAvatar;
