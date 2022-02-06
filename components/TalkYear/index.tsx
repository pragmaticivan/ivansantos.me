import styles from "./styles.module.scss";

import Link from 'next/link';
import Image from 'next/image';

import React from "react";
import { Talk } from "../../types/talk";


interface Props {
  talk: Talk
}
const TalkYear = ({ talk }: Props) => {
  // const langFlagLarger =
  //   talk.language === "en"
  //     ? require("./en-flag@2x.png")
  //     : require("./br-flag@2x.png");
  return (
    <div className={styles.item}>
      {/* <Link
        href={talk.path}
        passHref={true}
      >
        <a target={"_blank"}>
          <div className={styles.date}>{talk.date}</div>
          <div className={styles.title}>
            <Image src={langFlagLarger} alt={talk.language === "en" ? "American Flag" : "Brazilian Flag"} /> -{" "}
            {talk.title}
          </div>
          <div className={styles.description}>
            {talk.description}
          </div>
        </a>
      </Link> */}
    </div>
  );
};

export default TalkYear;
