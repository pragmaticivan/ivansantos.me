import NavigationBar from "../components/NavigationBar";
import TalkYear from "../components/TalkYear";
import React from "react";
import items from '../content/talks';

export async function getStaticProps() {
  return {
    props: {
      title: 'Articles - Ivan Santos',
    },
  };
}


const Talks = () => {
  const renderAll = () => {
    return items.map((item, index) => {
      return <TalkYear talkYear={item} />;
    })
  }

  return (
    <div>
      <header className="header__blog">
        <NavigationBar />
      </header>
      <div className="blog-list"> {renderAll()} </div>
    </div>
  );
};

export default Talks;
