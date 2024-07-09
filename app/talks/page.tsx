import React from 'react';
import NavigationBar from '../../components/NavigationBar';
import TalkYearItem from '../../components/TalkYearItem';
import items from '../../content/talks';
import styles from '../../styles/blog.module.scss';

const title = 'Talks ✍️';
const subtitle =
  "I share anything that may help others, technologies I'm using and cool things I've made.";

const Talks = () => {
  const renderAll = () => {
    return items.map((item, index) => {
      return <TalkYearItem key={`talk-${index}`} talkYear={item} />;
    });
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

export default Talks;
