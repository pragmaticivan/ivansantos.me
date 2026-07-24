import TalkYearItem from "../../components/TalkYearItem";
import items from "../../content/talks";
import pageStyles from "../../styles/page.module.scss";
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
    <main className={pageStyles.page}>
      <header className={pageStyles.intro}>
        <h1 className={pageStyles.title}>Talks</h1>
        <p className={pageStyles.lead}>
          Presentations and workshops on platform engineering, AI, distributed
          systems, observability, and dependable software.
        </p>
      </header>
      <div className={pageStyles.ruleList}>{renderAll()}</div>
    </main>
  );
};

export default Talks;
