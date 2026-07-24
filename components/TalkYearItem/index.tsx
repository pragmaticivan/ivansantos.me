import Link from "next/link";
import type { TalkYear } from "../../types/talk";
import styles from "./styles.module.scss";

// import Image from 'next/image';

interface Props {
  talkYear: TalkYear;
}
const TalkYearItem = ({ talkYear }: Props) => {
  return (
    <section className={styles.year}>
      <h2>{talkYear.year}</h2>
      <ul className={styles.list}>
        {talkYear.talks.map((talk, tIndex) => {
          return (
            <li key={`talk-${tIndex}`}>
              <p className={styles.date}>{talk.date}</p>
              <h3 className={styles.title}>
                {talk.title} - {talk.language}
              </h3>
              <p className={styles.description}>{talk.where}</p>
              <Link
                className={styles.link}
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
    </section>
  );
};

export default TalkYearItem;
