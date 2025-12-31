import NavigationBar from "../../components/NavigationBar";
import TalkYearItem from "../../components/TalkYearItem";
import items from "../../content/talks";
import styles from "../../styles/blog.module.scss";
import { genPageMetadata } from "../seo";

export const metadata = genPageMetadata({
  title: "Talks ✍️",
  description: `I share anything that may help others, technologies I'm using and cool things I've made`,
});

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
